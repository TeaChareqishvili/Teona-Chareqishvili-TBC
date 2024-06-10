import Link from "next/link";

export default function BmiCalculator() {
  return (
    <div className="w-full  h-[600px] bmi flex items-center justify-center">
      <Link
        href="/bmiCalculate"
        className="border border-white px-[10px] py-[7px] text-white cursor-pointer tracking-widest h-[40px]"
      >
        BMI Calculator
      </Link>
    </div>
  );
}
