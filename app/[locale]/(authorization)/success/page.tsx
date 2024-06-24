import SuccsessStripe from "@/components/SuccessStripe";

export default function Success() {
  return (
    <div className="text-red">
      <SuccsessStripe />
      <h2 className="h-[400px] bg-[#fffff]">goo</h2>
    </div>
  );
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
