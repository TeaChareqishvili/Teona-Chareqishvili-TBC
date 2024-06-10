"use client";

import { useState } from "react";

export default function BmiInput() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBmi = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert height to meters

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0) {
      setBmi(null);
      setBmiCategory("Invalid input");
      return;
    }

    const bmiValue = weightNum / (heightNum * heightNum);
    setBmi(bmiValue.toFixed(2));

    let category = "";
    if (bmiValue < 18.5) {
      category = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      category = "Overweight";
    } else if (bmiValue >= 30) {
      category = "Obesity";
    }

    setBmiCategory(category);
  };

  return (
    <div className="mt-[130px] bg-[black] h-[500px] flex items-center flex-col justify-center">
      <input
        className="border border-white text-[black] h-[40px]"
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        className="border border-white text-[black] h-[40px] mt-4"
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button
        className="mt-4 p-2 bg-blue-500 text-white"
        onClick={calculateBmi}
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="mt-4 text-white">
          <p>BMI: {bmi}</p>
          <p>Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
}
