"use client";
import { getChatBot } from "../../app/[locale]/actions";
import { BsRobot } from "react-icons/bs";
import { useState, ChangeEvent } from "react";

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(response, "res");
  console.log(prompt, "promt");

  const popularQuestions = [
    "What is the best workout routine for weight loss?",
    "How can I build muscle quickly?",
    "What diet should I follow for better fitness?",
    "How often should I exercise?",
    "What are the best exercises for abs?",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Submitting prompt:", prompt);
      const response = await getChatBot({ prompt });
      console.log("Response received:", response);
      setResponse(response);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setResponse("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleQuestionClick = (question: string) => {
    setPrompt(question);
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">Ask OpenAI</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <textarea
          value={prompt}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setPrompt(e.target.value)
          }
          className="w-full h-32 p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Popular Questions:</h2>
        <ul className="mt-2">
          {popularQuestions.map((question, index) => (
            <li
              key={index}
              onClick={() => handleQuestionClick(question)}
              className="p-2 bg-blue-100 text-black rounded-md mb-2 cursor-pointer hover:bg-blue-200"
            >
              {question}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Response:</h2>
        <div className="flex items-start mt-2 p-4 bg-gray-100 rounded-md border border-gray-200">
          {loading ? (
            <div className="flex items-center justify-center w-full h-32">
              <svg
                className="animate-spin h-8 w-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            <>
              <BsRobot className="mr-4" />
              <p className="flex-1">{response}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
