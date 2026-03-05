import { Link } from "react-router-dom";

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-gray-800 dark:text-gray-200">
      
      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">
        Refund & Cancellation Policy
      </h1>

      <p className="mb-4">
        At <strong>Rutnug</strong>, we aim to provide high-quality products and 
        excellent customer service. Please read our refund and cancellation 
        policy carefully before making a purchase.
      </p>

      {/* Order Cancellation */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Order Cancellation
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Orders can be cancelled before they are dispatched.</li>
        <li>Once the order has been shipped, cancellation is not possible.</li>
        <li>To cancel an order, please contact our support team immediately.</li>
      </ul>

      {/* Returns */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Returns & Replacements
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Returns are accepted only for damaged, defective, or incorrect items.
        </li>
        <li>
          Issues must be reported within <strong>48 hours</strong> of delivery.
        </li>
        <li>
          Customers may be required to provide images or videos as proof of damage.
        </li>
        <li>
          Products must be unused and returned in original packaging.
        </li>
      </ul>

      {/* Non-Returnable Items */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Non-Returnable Items
      </h2>
      <p className="mb-4">
        Customized, personalized, or discounted items may not be eligible for 
        return or refund unless received in a damaged condition.
      </p>

      {/* Refunds */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Refund Process
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Once the returned item is inspected and approved, the refund will be initiated.
        </li>
        <li>
          Refunds will be processed within <strong>5–7 business days</strong>.
        </li>
        <li>
          The amount will be credited to the original payment method.
        </li>
        <li>
          Shipping charges (if any) are non-refundable.
        </li>
      </ul>

      {/* Contact Section */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Contact for Refunds
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

      <p className="mt-1">📞 Phone: +91-9010444438</p>

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