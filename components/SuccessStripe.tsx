"use client";

import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { handleClearCart } from "@/app/[locale]/actions";

const SuccsessStripe = () => {
  const { user } = useUser();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const fromStripe = query.get("from") === "stripe";

    if (fromStripe && typeof user?.sub === "string") {
      const emptyCartWhenSuccess = async () => {
        await handleClearCart();
      };
      emptyCartWhenSuccess();
    }
  }, [user]);

  return <div></div>;
};

export default SuccsessStripe;
