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
