import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const orderId = location.state?.orderId ?? "Not Available";
  const paymentId = location.state?.paymentId ?? "Not Available";
  const amount = location.state?.amount ?? 0;

  return (

    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center space-y-6">

        {/* SUCCESS ICON */}
        <CheckCircle className="mx-auto text-green-500" size={80} />

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful
        </h1>

        <p className="text-gray-600">
          Thank you! Your order has been placed successfully.
        </p>

        {/* ORDER DETAILS */}
        <div className="bg-gray-100 rounded-lg p-5 text-left space-y-4">

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600 font-medium">
              Order ID
            </span>
            <span className="font-semibold text-black break-all">
              {orderId}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600 font-medium">
              Transaction ID
            </span>
            <span className="font-semibold text-black break-all">
              {paymentId}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">
              Amount Paid
            </span>
            <span className="font-bold text-black">
              ₹{amount}
            </span>
          </div>

        </div>

        {/* BUTTON */}
        <Button
          onClick={() => navigate("/")}
          className="w-full bg-black text-white hover:bg-gray-800"
        >
          Go to Home
        </Button>

      </div>

    </main>

  );

};

export default PaymentSuccess;
