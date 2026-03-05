from rest_framework import serializers
from .models import Announcement, Banner, Category, Product


class AnnouncementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Announcement
        fields = "__all__"



class BannerSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    class Meta:
        model = Banner
        fields = "__all__"

    def get_image(self, obj):

        request = self.context.get("request")

        if obj.image:
            return request.build_absolute_uri(obj.image.url)

        return ""



class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):

    category = serializers.CharField(source="category.slug")

    images = serializers.SerializerMethodField()

    discount_percentage = serializers.SerializerMethodField()


    class Meta:

        model = Product

        fields = [
            "id",
            "name",
            "slug",
            "description",

            "price",
            "discount_price",

            "discount_percentage",

            "category",

            "images",

            "is_new_arrival",
            "is_best_seller",
            "is_out_of_stock",

            "created_at",
        ]


    def get_images(self, obj):

        request = self.context.get("request")

        images = []

        if obj.image:
            images.append(
                request.build_absolute_uri(obj.image.url)
            )

        if obj.image2:
            images.append(
                request.build_absolute_uri(obj.image2.url)
            )

        if obj.image3:
            images.append(
                request.build_absolute_uri(obj.image3.url)
            )

        return images


    def get_discount_percentage(self, obj):

        if obj.discount_price:

            return round(
                ((obj.price - obj.discount_price) / obj.price) * 100
            )

        return 0

from rest_framework import serializers
from .models import PromoCode


class PromoCodeSerializer(serializers.ModelSerializer):

    class Meta:

        model = PromoCode

        fields = "__all__"


from rest_framework import serializers
from .models import Order, OrderItem


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = "__all__"