"use client";

import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { handleClearCart } from "@/app/[locale]/actions";
import Link from "next/link";

const SuccsessStripe = () => {
  const { user } = useUser();
  const [isPaymentSuccessful, setIsPaymentSuccessful] =
    useState<boolean>(false);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const fromStripe = query.get("from") === "stripe";

    if (fromStripe && typeof user?.sub === "string") {
      const emptyCartWhenSuccess = async () => {
        await handleClearCart();
        setIsPaymentSuccessful(true);
      };
      emptyCartWhenSuccess();
    }
  }, [user]);

  return (
    <>
      {" "}
      {isPaymentSuccessful && (
        <p className="text-[34px] uppercase font-bold text-center  text-white fade-in-out tracking-widest  shadow-lg text-shadow">
          Congrats! Your payment was successful.
        </p>
      )}
      <Link
        href="/"
        className="text-white text-center text-[18px] uppercase cursor-pointer"
      >
        Go Back To Main Page
      </Link>
    </>
  );
};

export default SuccsessStripe;
