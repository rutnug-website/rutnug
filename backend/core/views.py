from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product, Category, Banner, Announcement

from .serializers import (
    ProductSerializer,
    CategorySerializer,
    BannerSerializer,
    AnnouncementSerializer
)


# =====================================
# ANNOUNCEMENTS
# =====================================
@api_view(["GET"])
def announcement_list(request):

    announcements = Announcement.objects.filter(
        is_active=True
    )

    serializer = AnnouncementSerializer(
        announcements,
        many=True
    )

    return Response(serializer.data)



# =====================================
# BANNERS
# =====================================
@api_view(["GET"])
def banner_list(request):

    banners = Banner.objects.filter(
        is_active=True
    ).order_by("order")

    serializer = BannerSerializer(
        banners,
        many=True,
        context={"request": request}
    )

    return Response(serializer.data)



# =====================================
# CATEGORIES
# =====================================
@api_view(["GET"])
def category_list(request):

    categories = Category.objects.all()

    serializer = CategorySerializer(
        categories,
        many=True
    )

    return Response(serializer.data)


@api_view(["GET"])
def product_list(request):

    category = request.GET.get("category")

    if category == "new":
        products = Product.objects.filter(
            is_new_arrival=True
        )

    elif category == "best":
        products = Product.objects.filter(
            is_best_seller=True
        )

    elif category == "out":
        products = Product.objects.filter(
            is_out_of_stock=True
        )

    elif category and category != "all":
        products = Product.objects.filter(
            category__slug=category
        )

    else:
        # ✅ VERY IMPORTANT
        # Return ALL products including out of stock
        products = Product.objects.all()

    serializer = ProductSerializer(
        products,
        many=True,
        context={"request": request}
    )

    return Response(serializer.data)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


@api_view(["GET"])
def products(request):

    product_type = request.GET.get("type")

    # ✅ Show ONLY checked New Arrivals
    if product_type == "new":

        queryset = Product.objects.filter(
            is_new_arrival=True,
            is_out_of_stock=False
        ).order_by("-created_at")

    # ✅ Show ONLY checked Best Sellers
    elif product_type == "best":

        queryset = Product.objects.filter(
            is_best_seller=True,
            is_out_of_stock=False
        ).order_by("-created_at")

    # ✅ Show ALL products
    else:

        queryset = Product.objects.filter(
            is_out_of_stock=False
        ).order_by("-created_at")


    serializer = ProductSerializer(
        queryset,
        many=True,
        context={"request": request}
    )

    return Response(serializer.data)


# =====================================
# NEW ARRIVALS API
# =====================================
@api_view(["GET"])
def new_arrivals(request):

    products = Product.objects.filter(
        is_new_arrival=True,
        is_out_of_stock=False
    )

    serializer = ProductSerializer(
        products,
        many=True,
        context={"request": request}
    )

    return Response(serializer.data)



# =====================================
# BEST SELLERS API
# =====================================
@api_view(["GET"])
def best_sellers(request):

    products = Product.objects.filter(
        is_best_seller=True,
        is_out_of_stock=False
    )

    serializer = ProductSerializer(
        products,
        many=True,
        context={"request": request}
    )

    return Response(serializer.data)


@api_view(["GET"])
def product_list(request):

    product_type = request.GET.get("type")

    if product_type == "new":
        products = Product.objects.filter(
            is_new_arrival=True,
            is_out_of_stock=False
        )

    elif product_type == "best":
        products = Product.objects.filter(
            is_best_seller=True,
            is_out_of_stock=False
        )

    else:
        products = Product.objects.filter(
            is_out_of_stock=False
        )

    serializer = ProductSerializer(
        products,
        many=True,
        context={"request": request}
    )

    return Response(serializer.data)


from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Product
from .serializers import ProductSerializer


# ====================================
# PRODUCT DETAIL VIEW (FIX)
# ====================================

@api_view(["GET"])
def product_detail(request, pk):

    product = get_object_or_404(Product, pk=pk)

    serializer = ProductSerializer(
        product,
        context={"request": request}
    )

    return Response(serializer.data)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from decimal import Decimal
from .models import PromoCode
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from decimal import Decimal
from .models import PromoCode


@api_view(["POST"])
@permission_classes([AllowAny])
def validate_promocode(request):

    code = request.data.get("code", "").strip()
    cart_total = request.data.get("cart_total", 0)

    if not code:
        return Response({
            "valid": False,
            "message": "Promo code required"
        })

    try:
        # STRICT CASE SENSITIVE MATCH
        promo = PromoCode.objects.get(code=code)

    except PromoCode.DoesNotExist:

        return Response({
            "valid": False,
            "message": "Invalid promo code"
        })

    # Validate promo
    valid, message = promo.is_valid(cart_total)

    if not valid:

        return Response({
            "valid": False,
            "message": message
        })

    discount = promo.calculate_discount(cart_total)

    final_total = Decimal(cart_total) - discount

    return Response({

        "valid": True,

        "message": message,

        "discount_amount": float(discount),

        "final_total": float(final_total)

    })

import razorpay
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Order, OrderItem
from .serializers import OrderSerializer

# Razorpay Client
client = razorpay.Client(
    auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
)

@api_view(["POST"])
@permission_classes([AllowAny])
def create_order(request):

    try:

        data = request.data

        subtotal = int(float(data.get("subtotal", 0)))

        discount = int(float(data.get("discount", 0)))

        total_amount = subtotal - discount

        promo_code = data.get("promo_code", "")

        email = data.get("email", "")

        razorpay_order = client.order.create({
            "amount": total_amount * 100,
            "currency": "INR",
            "payment_capture": 1,
        })

        # ✅ SAVE EVERYTHING
        order = Order.objects.create(

            order_id=razorpay_order["id"],

            payment_status="CREATED",

            status="PENDING",

            name=data.get("name"),

            phone=data.get("phone"),

            email=email,

            address=data.get("address"),

            city=data.get("city"),

            state=data.get("state"),

            pincode=data.get("pincode"),

            promo_code=promo_code,

            subtotal=subtotal,

            discount=discount,

            total_amount=total_amount,
        )

        # Save items
        items = data.get("items", [])

        for item in items:

            OrderItem.objects.create(

                order=order,

                product_name=item.get("name"),

                quantity=item.get("quantity"),

                price=item.get("price"),

            )

        return Response({

            "order_id": razorpay_order["id"],

            "amount": razorpay_order["amount"],

            "currency": "INR",

            "key": settings.RAZORPAY_KEY_ID

        })

    except Exception as e:

        return Response({"error": str(e)}, status=400)

# ---------------------------------
# VERIFY PAYMENT
# ---------------------------------
@api_view(["POST"])
@permission_classes([AllowAny])
def verify_payment(request):
    try:
        client.utility.verify_payment_signature({
            "razorpay_order_id": request.data["razorpay_order_id"],
            "razorpay_payment_id": request.data["razorpay_payment_id"],
            "razorpay_signature": request.data["razorpay_signature"],
        })

        order = Order.objects.get(order_id=request.data["razorpay_order_id"])
        order.payment_id = request.data["razorpay_payment_id"]
        order.payment_status = "PAID"
        order.status = "CONFIRMED"
        order.save()

        return Response({"success": True})

    except Exception as e:
        return Response(
            {"success": False, "error": str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )


# ---------------------------------
# GET ALL ORDERS
# ---------------------------------
@api_view(["GET"])
def all_orders(request):
    orders = Order.objects.all().order_by("-created_at")
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


# ---------------------------------
# GET SINGLE ORDER (ORDER DETAILS)
# ---------------------------------
@api_view(["GET"])
def order_details(request, order_id):
    try:
        order = Order.objects.get(order_id=order_id)
        serializer = OrderSerializer(order)
        return Response(serializer.data)

    except Order.DoesNotExist:
        return Response(
            {"error": "Order not found"},
            status=status.HTTP_404_NOT_FOUND
        )
    
    