"use client";
import { handleClearCart } from "../../actions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    handleClearCart();
    router.refresh();
  }, []);

  return <div className="text-red">sncs</div>;
}
// "use client";

// import { useEffect } from "react";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { emptyUserCart } from "../../actions";

// const CancelHistory = () => {
//   const { user } = useUser();

//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search);
//     const fromStripe = query.get("from") === "stripe";

//     if (fromStripe && typeof user?.sub === "string") {
//       const emptyCartWhenSuccess = async () => {
//         await emptyUserCart(user.sub as string);
//       };
//       emptyCartWhenSuccess();
//     }
//   }, [user]);

//   return <div></div>;
// };

// export default CancelHistory;

// const session = await stripe.checkout.sessions.create({
//   line_items: stripeItems,
//   mode: "payment",
//   customer_email: email,
//   success_url: `${BASE_URL}/success?from=stripe`,
//   cancel_url: `${BASE_URL}/cancel`,
// });
