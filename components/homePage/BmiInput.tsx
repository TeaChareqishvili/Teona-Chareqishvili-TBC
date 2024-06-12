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
          <p>Suggestion{suggestion}</p>
        </div>
      )}
    </div>
  );
}
