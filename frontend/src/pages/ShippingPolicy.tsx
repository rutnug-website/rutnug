import { Link } from "react-router-dom";

export default function ShippingPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-gray-800 dark:text-gray-200">
      
      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Delivery & Shipping Policy</h1>

      <p className="mb-4">
        At <strong>Rutnug</strong>, we are committed to delivering your orders 
        safely and on time. Please review our shipping policy below.
      </p>

      {/* Order Processing */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Order Processing
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Orders are processed within 1–2 business days after payment confirmation.</li>
        <li>Orders placed on Sundays or public holidays will be processed on the next working day.</li>
      </ul>

      {/* Delivery Timeline */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Delivery Timeline
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Estimated delivery time is 5–7 business days across India.</li>
        <li>Delivery timelines may vary depending on location and courier availability.</li>
        <li>Remote locations may require additional delivery time.</li>
      </ul>

      {/* Shipping Charges */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Shipping Charges
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Shipping charges (if applicable) are displayed at checkout.</li>
        <li>Free shipping may be offered on selected products or minimum order values.</li>
      </ul>

      {/* Tracking */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Order Tracking
      </h2>
      <p className="mb-4">
        Once your order is shipped, you will receive a tracking number via 
        email or SMS. You can track your shipment through the courier partner’s website.
      </p>

      {/* Delivery Responsibility */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Delivery Responsibility
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Please ensure the shipping address provided is accurate.</li>
        <li>Rutnug is not responsible for delays caused by courier partners.</li>
        <li>Shipping charges are non-refundable once the order is dispatched.</li>
      </ul>

      {/* Contact */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Contact Us
      </h2>

      <p className="mt-2">
        📧 Email:{" "}
        <a
          href="mailto:support@rutnug.com"
          className="text-primary underline"
        >
          Rutnug208@gmail.com
        </a>
      </p>

      <p className="mt-1">📞 Phone: +91- 9010444438</p>
      <p className="mt-1">
        📍 Address: Banjara Hills, Road No: 2,
Hyderabad – 500034
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Last updated: December 2026
      </p>

      <hr className="my-8 border-border" />

      <p className="text-center text-sm text-muted-foreground">
        © 2026 Rutnug. All rights reserved.
      </p>
    </div>
  );
}