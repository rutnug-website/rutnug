import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const API = "https://api.rutnug.com/api/auth";

declare global {
  interface Window {
    Razorpay: any;
  }
}

/* ================================
   Razorpay Script Loader
================================ */

const loadRazorpayScript = () => {
  return new Promise<boolean>((resolve) => {

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);

    script.onerror = () => resolve(false);

    document.body.appendChild(script);

  });
};

const Checkout = () => {

  const navigate = useNavigate();

  const { items, totalPrice, clearCart } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(totalPrice);
  const [promoMessage, setPromoMessage] = useState("");
  const [loadingPromo, setLoadingPromo] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (!promoApplied) {
      setFinalTotal(totalPrice);
    }
  }, [totalPrice]);

  /* ================================
     APPLY PROMO
  ================================ */

  const applyPromoCode = async () => {

    const trimmedCode = promoCode.trim();

    if (!trimmedCode) {
      setPromoMessage("Enter promo code");
      return;
    }

    setLoadingPromo(true);

    try {

      const res = await fetch(`${API}/validate-promocode/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: trimmedCode,
          cart_total: totalPrice
        })
      });

      const data = await res.json();

      if (data.valid) {

        setPromoApplied(true);
        setDiscountAmount(data.discount_amount);
        setFinalTotal(data.final_total);
        setPromoMessage(data.message);

      } else {

        setPromoApplied(false);
        setDiscountAmount(0);
        setFinalTotal(totalPrice);
        setPromoMessage(data.message);

      }

    } catch {

      setPromoMessage("Error applying promo");

    }

    setLoadingPromo(false);
  };

  const removePromoCode = () => {

    setPromoApplied(false);
    setPromoCode("");
    setDiscountAmount(0);
    setFinalTotal(totalPrice);
    setPromoMessage("Promo removed");

  };

  /* ================================
     CONFIRM ORDER
  ================================ */

  const confirmOrder = async () => {

    if (!name || !phone || !address || !city || !stateValue || !pincode) {

      alert("Please fill all shipping details");
      return;

    }

    const loaded = await loadRazorpayScript();

    if (!loaded) {

      alert("Failed to load Razorpay");
      return;

    }

    try {

      const res = await fetch(`${API}/create-order/`, {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

          name,
          phone,
          email,
          address,
          city,
          state: stateValue,
          pincode,

          promo_code: promoCode,

          subtotal: totalPrice,
          discount: discountAmount,

          items: items.map(item => ({
            name: item.name,
            size: item.size,
            quantity: item.quantity,
            price: item.price
          }))

        })

      });

      const order = await res.json();

      if (!order.order_id) {

        alert("Order creation failed");
        return;

      }

      const options = {

        key: order.key,
        amount: order.amount,
        currency: order.currency,
        order_id: order.order_id,

        name: "RUT Store",
        description: "Order Payment",

        handler: async function (response: any) {

          const verifyRes = await fetch(`${API}/verify-payment/`, {

            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify(response)

          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {

            clearCart();

            navigate("/payment-success", {

              state: {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                amount: finalTotal
              }

            });

          } else {

            alert("Payment verification failed");

          }

        },

        prefill: {
          name,
          email,
          contact: phone
        },

        theme: { color: "#000000" }

      };

      const rzp = new window.Razorpay(options);

      rzp.open();

    } catch {

      alert("Payment failed");

    }

  };

  /* ================================
     UI
  ================================ */

  return (

    <main className="pt-28 pb-28 min-h-screen">

      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-3xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            {/* SHIPPING */}

            <div className="space-y-4">

              <Input placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
              <Input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
              <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <Input placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
              <Input placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} />
              <Input placeholder="State" value={stateValue} onChange={(e)=>setStateValue(e.target.value)} />
              <Input placeholder="Pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} />

            </div>

            {/* PROMO CODE */}

            <div>

              <h2 className="font-semibold mb-3">
                Promo Code
              </h2>

              <div className="flex gap-3">

                <Input
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e)=>setPromoCode(e.target.value)}
                  disabled={promoApplied}
                />

                {!promoApplied ? (

                  <Button onClick={applyPromoCode} disabled={loadingPromo}>
                    Apply
                  </Button>

                ) : (

                  <Button variant="destructive" onClick={removePromoCode}>
                    Remove
                  </Button>

                )}

              </div>

              {promoMessage && (

                <p className={`mt-2 text-sm ${
                  promoApplied ? "text-green-600" : "text-red-500"
                }`}>
                  {promoMessage}
                </p>

              )}

            </div>

          </div>

          {/* ORDER SUMMARY */}

          <div className="border p-6 space-y-6">

            {items.map(item => (

              <div key={item.productId} className="flex justify-between">

                <span>
                  {item.name} ({item.size}) × {item.quantity}
                </span>

                <span>
                  ₹{item.price * item.quantity}
                </span>

              </div>

            ))}

            <hr />

            <div className="flex justify-between font-bold text-lg">

              <span>Total</span>
              <span>₹{finalTotal}</span>

            </div>

            <Button className="w-full" onClick={confirmOrder}>
              Confirm Order
            </Button>

          </div>

        </div>

      </div>

    </main>

  );

};

export default Checkout;
