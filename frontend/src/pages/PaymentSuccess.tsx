import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const orderId = location.state?.orderId || "N/A";

  const paymentId = location.state?.paymentId || "N/A";

  const amount = location.state?.amount || 0;

  const [countdown, setCountdown] = useState(5);


  /* =========================
     AUTO REDIRECT
  ========================= */

  useEffect(() => {

    if (countdown === 0) {

      navigate("/");

      return;

    }

    const timer = setTimeout(() => {

      setCountdown(countdown - 1);

    }, 1000);

    return () => clearTimeout(timer);

  }, [countdown, navigate]);


  /* =========================
     UI
  ========================= */

  return (

    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full text-center space-y-6">


        {/* ICON */}

        <CheckCircle className="mx-auto text-green-500" size={80} />


        {/* TITLE */}

        <h1 className="text-3xl font-bold text-green-600">

          Payment Successful

        </h1>


        <p className="text-gray-600">

          Thank you for your purchase!

        </p>


        {/* ORDER DETAILS */}

        <div className="border rounded-lg p-4 text-left space-y-2">

          <p>

            <span className="font-semibold">Order ID:</span>

            <br />

            {orderId}

          </p>

          <p>

            <span className="font-semibold">Payment ID:</span>

            <br />

            {paymentId}

          </p>

          <p>

            <span className="font-semibold">Amount Paid:</span>

            <br />

            ₹{amount}

          </p>

        </div>


        {/* REDIRECT MESSAGE */}

        <p className="text-sm text-gray-500">

          Redirecting to home page in

          <span className="font-bold text-black">

            {" "} {countdown} seconds

          </span>

        </p>


        {/* BUTTON */}

        <Button
          onClick={() => navigate("/")}
          className="w-full bg-black text-white hover:bg-gray-800"
        >

          Go to Home Now

        </Button>


      </div>

    </main>

  );

};

export default PaymentSuccess;