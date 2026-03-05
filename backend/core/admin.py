from django.contrib import admin
from .models import (
    Announcement,
    Banner,
    Category,
    Product,
    PromoCode
)

# ======================================
# Announcement Admin
# ======================================
@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "is_active",
        "created_at"
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "title",
        "message",
    )


# ======================================
# Banner Admin
# ======================================
@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "subtitle",
        "order",
        "is_active"
    )

    list_editable = (
        "order",
        "is_active"
    )

    ordering = ("order",)


# ======================================
# Category Admin
# ======================================
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "slug",
        "created_at"
    )

    prepopulated_fields = {
        "slug": ("name",)
    }

    search_fields = ("name",)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "category",
        "price",
        "discount_price",
        "is_new_arrival",
        "is_best_seller",
        "is_out_of_stock",
        "created_at",
    )

    list_filter = (
        "category",
        "is_new_arrival",
        "is_best_seller",
        "is_out_of_stock",
    )

    list_editable = (
        "is_new_arrival",
        "is_best_seller",
        "is_out_of_stock",
    )

    search_fields = (
        "name",
        "description",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }


# ======================================
# Promo Code Admin
# ======================================
@admin.register(PromoCode)
class PromoCodeAdmin(admin.ModelAdmin):

    list_display = (
        "code",
        "discount_type",
        "discount_value",
        "minimum_amount",
        "valid_from",
        "valid_until",
        "is_active",
    )

    search_fields = ("code",)

    list_filter = (
        "discount_type",
        "is_active",
    )



from .models import Order, OrderItem


# ======================================
# OrderItem Inline (show items inside order)
# ======================================

class OrderItemInline(admin.TabularInline):

    model = OrderItem

    extra = 0

    readonly_fields = (
        "product_name",
        "quantity",
        "price"
    )


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):

    list_display = (

        "order_id",

        "name",

        "email",

        "phone",

        "promo_code",

        "subtotal",

        "discount",

        "total_amount",

        "payment_status",

        "status",

        "created_at",

    )

    readonly_fields = (

        "order_id",

        "payment_id",

        "email",

        "promo_code",

        "subtotal",

        "discount",

        "total_amount",

        "created_at",

    )