import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

export default async function BmiCalculator() {
  const t = await getScopedI18n("index");
  return (
    <div className="w-full  h-[600px] bmi flex items-center justify-center">
      <Link
        href="/bmiCalculate"
        className="bmi-btn border-2 border-white text-white  text-[18px] py-[20px] px-[30px] relative tracking-widest font-bold"
      >
        {t("bmi")}
      </Link>
    </div>
  );
}
