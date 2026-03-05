import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-gray-800 dark:text-gray-200">
      
      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        This document is an electronic record in accordance with the Information 
        Technology Act, 2000 and applicable rules. By accessing and using the 
        <strong> Rutnug </strong> website, you agree to comply with and be bound 
        by the following Terms & Conditions.
      </p>

      {/* Platform Usage */}
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Platform Usage</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>You must provide accurate and complete information during checkout or registration.</li>
        <li>You agree not to misuse the website or engage in fraudulent activities.</li>
        <li>You must comply with all applicable Indian laws and regulations.</li>
      </ul>

      {/* Account Responsibility */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Account Responsibility</h2>
      <p className="mb-4">
        If you create an account on Rutnug, you are responsible for maintaining 
        the confidentiality of your login credentials and for all activities 
        that occur under your account.
      </p>

      {/* Intellectual Property */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Intellectual Property
      </h2>
      <p className="mb-4">
        All content on this website, including logos, product images, designs, 
        text, graphics, and branding, is the exclusive property of Rutnug. 
        Unauthorized reproduction or distribution is strictly prohibited.
      </p>

      {/* Products & Pricing */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Products & Pricing
      </h2>
      <p className="mb-4">
        All prices are listed in Indian Rupees (INR). Prices and product 
        availability are subject to change without prior notice. We reserve 
        the right to discontinue or modify any product at any time.
      </p>

      {/* Orders */}
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Orders & Acceptance</h2>
      <p className="mb-4">
        Orders are confirmed only after successful payment. Rutnug reserves 
        the right to cancel or refuse any order due to stock issues, pricing 
        errors, or suspicious activity.
      </p>

      {/* Payments */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Payments & Transactions
      </h2>
      <p className="mb-4">
        All payments are processed through secure third-party payment gateways. 
        Rutnug does not store your debit/credit card details. By completing a 
        transaction, you agree to pay all applicable charges.
      </p>

      {/* Limitation of Liability */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Limitation of Liability
      </h2>
      <p className="mb-4">
        Rutnug shall not be liable for indirect, incidental, or consequential 
        damages arising from the use of our website or products. We are not 
        responsible for delays caused by courier services or unforeseen events.
      </p>

      {/* Indemnity */}
      <h2 className="text-xl font-semibold mt-6 mb-2">8. Indemnity</h2>
      <p className="mb-4">
        You agree to indemnify and hold Rutnug harmless from any claims, 
        damages, or expenses resulting from your breach of these Terms.
      </p>

      {/* Governing Law */}
      <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed by the laws of India. Any disputes shall 
        be subject to the jurisdiction of courts located in your business state.
      </p>

      {/* Contact */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>

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