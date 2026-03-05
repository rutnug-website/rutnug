import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-10 text-gray-800 dark:text-gray-200">
      
      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Rutnug</strong>, we value your privacy and are committed to 
        protecting your personal information. This Privacy Policy explains how 
        we collect, use, and safeguard your data when you visit our website or 
        purchase our products.
      </p>

      {/* Information We Collect */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Full name, email address, phone number, and shipping address</li>
        <li>Order details, billing, and payment-related information</li>
        <li>Device and browser information</li>
        <li>Website usage data through cookies and analytics tools</li>
      </ul>

      {/* How We Use Information */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>To process and deliver your orders</li>
        <li>To manage payments securely</li>
        <li>To improve our website and customer experience</li>
        <li>To send order updates and promotional offers (you can opt-out anytime)</li>
      </ul>

      {/* Payments */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Secure Payments
      </h2>
      <p className="mb-4">
        Payments on Rutnug are processed securely through trusted third-party 
        payment gateways. We do not store your debit/credit card details on 
        our servers.
      </p>

      {/* Cookies */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Cookies & Tracking
      </h2>
      <p className="mb-4">
        We use cookies and analytics tools to enhance your browsing experience, 
        analyze traffic, and improve our services. You can disable cookies in 
        your browser settings.
      </p>

      {/* Data Security */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Data Security
      </h2>
      <p className="mb-4">
        We implement industry-standard security measures, including encryption 
        and secure servers, to protect your data. However, no method of 
        transmission over the internet is 100% secure.
      </p>

      {/* User Rights */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Your Rights
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Access, update, or delete your personal information</li>
        <li>Withdraw consent for marketing communications</li>
        <li>Request details about stored data</li>
      </ul>

      {/* Contact Section */}
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

      <p className="mt-1">📞 Phone: +91-9010444438</p>
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