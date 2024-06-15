import BmiInput from "../../../../components/homePage/BmiInput";

export default function BmiCalculate() {
  return (
    <div className="w-full min-h-screen  image-bmi relative ">
      <div className="contact-cover z-0"></div>
      <div className="z-10 relative">
        {" "}
        <BmiInput />
      </div>
    </div>
  );
}
