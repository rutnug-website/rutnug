from django.db import models
from django.utils.text import slugify
from django.utils import timezone
from decimal import Decimal


# ======================================
# Announcement Model
# ======================================

class Announcement(models.Model):

    title = models.CharField(max_length=200)
    message = models.TextField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


# ======================================
# Banner Model
# ======================================

class Banner(models.Model):

    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300)
    image = models.ImageField(upload_to="banners/")
    link = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title


# ======================================
# Category Model
# ======================================

class Category(models.Model):

    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["name"]

    def save(self, *args, **kwargs):

        self.name = self.name.strip()

        if not self.slug:
            self.slug = slugify(self.name)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Product(models.Model):

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="products"
    )

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()

    price = models.DecimalField(max_digits=10, decimal_places=2)

    discount_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True
    )

    image = models.ImageField(upload_to="products/")
    image2 = models.ImageField(upload_to="products/", null=True, blank=True)
    image3 = models.ImageField(upload_to="products/", null=True, blank=True)

    sizes = models.CharField(max_length=100, default="S,M,L,XL")

    is_new_arrival = models.BooleanField(default=False)
    is_best_seller = models.BooleanField(default=False)

    # ✅ ONLY THIS (manual checkbox)
    is_out_of_stock = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        self.name = self.name.strip()

        if not self.slug:
            self.slug = slugify(self.name)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

# ======================================
# Promo Code Model
# ======================================

class PromoCode(models.Model):

    DISCOUNT_TYPE_CHOICES = (
        ("percentage", "Percentage"),
        ("fixed", "Fixed Amount"),
    )

    code = models.CharField(max_length=50, unique=True)

    discount_type = models.CharField(
        max_length=20,
        choices=DISCOUNT_TYPE_CHOICES,
        default="percentage"
    )

    discount_value = models.DecimalField(max_digits=10, decimal_places=2)

    minimum_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    valid_from = models.DateTimeField()
    valid_until = models.DateTimeField()

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    # ✅ Check if promo valid
    def is_valid(self, cart_total):

        now = timezone.now()
        cart_total = Decimal(cart_total)

        if not self.is_active:
            return False, "Promo code inactive"

        if now < self.valid_from:
            return False, "Promo not started yet"

        if now > self.valid_until:
            return False, "Promo expired"

        if cart_total < self.minimum_amount:
            return False, f"Minimum order amount ₹{self.minimum_amount}"

        return True, "Promo valid"

    # ✅ Calculate Discount
    def calculate_discount(self, cart_total):

        cart_total = Decimal(cart_total)
        discount_value = Decimal(self.discount_value)

        if self.discount_type == "percentage":
            discount = (cart_total * discount_value) / Decimal("100")
        else:
            discount = discount_value

        if discount > cart_total:
            discount = cart_total

        return discount

    def __str__(self):
        return self.code

from django.db import models


class Order(models.Model):

    STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("CONFIRMED", "Confirmed"),
        ("SHIPPED", "Shipped"),
        ("DELIVERED", "Delivered"),
        ("CANCELLED", "Cancelled"),
    ]

    PAYMENT_STATUS_CHOICES = [
        ("CREATED", "Created"),
        ("PAID", "Paid"),
        ("FAILED", "Failed"),
    ]

    order_id = models.CharField(max_length=200, unique=True)

    payment_id = models.CharField(max_length=200, blank=True, null=True)

    # ✅ ADD THESE
    email = models.EmailField(blank=True, null=True)

    promo_code = models.CharField(max_length=50, blank=True, null=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="PENDING"
    )

    payment_status = models.CharField(
        max_length=20,
        choices=PAYMENT_STATUS_CHOICES,
        default="CREATED"
    )

    name = models.CharField(max_length=200)

    phone = models.CharField(max_length=15)

    address = models.TextField()

    city = models.CharField(max_length=100)

    state = models.CharField(max_length=100)

    pincode = models.CharField(max_length=10)

    # ✅ financial fields
    subtotal = models.IntegerField()

    discount = models.IntegerField(default=0)

    total_amount = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.order_id

# ======================================
# Order Item Model
# ======================================

class OrderItem(models.Model):

    order = models.ForeignKey(
        Order,
        related_name="items",
        on_delete=models.CASCADE
    )

    product_name = models.CharField(max_length=200)

    quantity = models.IntegerField()

    price = models.IntegerField()

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return f"{self.product_name} - {self.order.order_id}"