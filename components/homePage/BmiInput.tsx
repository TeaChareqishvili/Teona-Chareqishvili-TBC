"use client";

import { useState } from "react";

export default function BmiInput() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");
  const [suggestion, setSuggestion] = useState("");

  const calculateBmi = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0) {
      setBmi(null);
      setBmiCategory("Invalid input");
      return;
    }

    const bmiValue = weightNum / (heightNum * heightNum);
    const bmiValueFixed = parseFloat(bmiValue.toFixed(2));
    setBmi(bmiValueFixed);

    let category = "";
    let suggestion = "";
    if (bmiValueFixed < 18.5) {
      category = "Underweight";
      suggestion =
        "Consider increasing your calorie intake with nutrient-dense foods and consult a healthcare provider for personalized advice.";
    } else if (bmiValueFixed >= 18.5 && bmiValueFixed <= 24.9) {
      category = "Normal weight";
      suggestion =
        "Maintain your healthy lifestyle with a balanced diet and regular physical activity.";
    } else if (bmiValueFixed >= 25 && bmiValueFixed <= 29.9) {
      category = "Overweight";
      suggestion =
        "Incorporate regular exercise and monitor your diet to achieve a healthier weight. Consulting a nutritionist may help.";
    } else if (bmiValueFixed >= 30) {
      category = "Obesity";
      suggestion =
        "It's advisable to seek guidance from healthcare professionals to create a weight loss plan that includes a balanced diet and regular physical activity.";
    }

    setBmiCategory(category);
    setSuggestion(suggestion);
  };

  return (
    <div className="mt-[70px] min-h-screen px-[30px] w-full flex items-center flex-col justify-center ">
      <div className="flex flex-col items-center justify-around w-full">
        <input
          className=" h-[60px] mt-4 w-full md:w-[500px] lg:w-[500px] px-3 py-2 bg-[transparent] text-white border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className=" h-[60px] mt-4 w-full md:w-[500px]  lg:w-[500px] px-3 py-2 bg-[transparent] text-white border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button
        className=" bmi-btn border-2 border-white color-white text-[18px] py-[20px] px-[30px] relative tracking-widest font-bold mt-[30px]"
        onClick={calculateBmi}
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="mt-[20px] py-[20px] px-[30px] border-2 border-white bg-[rgba(255,255,255,0.5)] flex flex-col items-center justify-between  ">
          <p className="text-[#264653]  text-[18px]">
            <strong className="tracking-wide">BMI:</strong> {bmi}
          </p>
          <p className="text-[#264653] text-[18px]">
            <strong className="tracking-wide">Category: </strong>
            {bmiCategory}
          </p>
          <p className="text-[#264653]  text-[18px]">
            <strong className="tracking-wide">Suggestion:</strong> {suggestion}
          </p>
        </div>
      )}
    </div>
  );
}
