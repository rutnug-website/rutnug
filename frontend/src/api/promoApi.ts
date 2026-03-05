const API = "http://127.0.0.1:8000/api/auth";


export const validatePromoCode =
async (code: string) => {

  const res = await fetch(
    `${API}/validate-promocode/`,
    {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ code }),

    }
  );

  if (!res.ok)
    throw new Error("Promo validation failed");

  return res.json();

};
