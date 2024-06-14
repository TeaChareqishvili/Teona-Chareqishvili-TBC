import Link from "next/link";

export default function BmiCalculator() {
  return (
    <div className="w-full  h-[600px] bmi flex items-center justify-center">
      <Link
        href="/bmiCalculate"
        className="bmi-btn border-2 border-white color-white text-[18px] py-[20px] px-[30px] relative tracking-widest font-bold"
      >
        BMI Calculator
      </Link>
    </div>
  );
}
