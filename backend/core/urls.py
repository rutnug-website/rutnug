from django.urls import path
from .views import (
    announcement_list,
    banner_list,
    category_list,
    product_list,
    product_detail,
    new_arrivals,
    best_sellers,
    validate_promocode,
    create_order,
    verify_payment,
    all_orders,
    order_details,
)

urlpatterns = [

    # ============================
    # ANNOUNCEMENTS
    # ============================

    path(
        "announcements/",
        announcement_list,
        name="announcements"
    ),


    # ============================
    # BANNERS
    # ============================

    path(
        "banners/",
        banner_list,
        name="banners"
    ),


    # ============================
    # CATEGORIES
    # ============================

    path(
        "categories/",
        category_list,
        name="categories"
    ),


    # ============================
    # PRODUCTS
    # ============================

    # All products
    path(
        "products/",
        product_list,
        name="products"
    ),

    # Single product detail
    path(
        "products/<int:pk>/",
        product_detail,
        name="product_detail"
    ),

    # New arrivals
    path(
        "products/new-arrivals/",
        new_arrivals,
        name="new_arrivals"
    ),

    # Best sellers
    path(
        "products/best-sellers/",
        best_sellers,
        name="best_sellers"
    ),


    # ============================
    # PROMO CODE
    # ============================

    path(
        "validate-promocode/",
        validate_promocode,
        name="validate_promocode"
    ),


    # ============================
    # ORDERS
    # ============================

    path(
        "create-order/",
        create_order,
        name="create_order"
    ),

    path(
        "verify-payment/",
        verify_payment,
        name="verify_payment"
    ),

    path(
        "orders/",
        all_orders,
        name="all_orders"
    ),

    path(
        "orders/<str:order_id>/",
        order_details,
        name="order_details"
    ),

]