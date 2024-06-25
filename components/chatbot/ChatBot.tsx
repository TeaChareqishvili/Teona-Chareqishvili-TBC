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
    <div className="flex flex-col px-[30px] py-[40px]">
      <div className="banner"></div>
      <div className="flex flex-col w-full items-center justify-center lg:flex-row lg:justify-around m-auto">
        <div className=" md:w-[600px]">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-[#124E66] dark:text-white">
              Ask chatBot
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex lg:w-full flex-col items-center"
          >
            <textarea
              value={prompt}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setPrompt(e.target.value)
              }
              className=" bg-[#2E3944] text-white dark:text-white dark:bg-[#212A31] w-[300px] md:w-full h-[300px] p-2 mb-4 border border-gray-300 rounded-md outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 w-2/4 dark:bg-[#124E66] dark:text-white  bg-[#2E3944] text-[white] hover:bg-[#748D92] tracking-widest rounded-md transition-all duration-200 dark:hover:bg-[#212A31]"
            >
              Send
            </button>
          </form>
        </div>
        <div className="mt-6 ml-[15px]">
          <h2 className="text-xl font-semibold text-[#124E66] dark:text-white">
            Suggested Questions:
          </h2>
          <ul className="mt-2">
            {popularQuestions.map((question, index) => (
              <li
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="p-2 dark:bg-[#124E66] bg-[#748D92] text-white hover:bg-[#2E3944] dark:text-white uppercase text-[15px] italic dark:hover:bg-[#212A31] transition-all duration-200 rounded-md mb-2 cursor-pointer"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 w-[88%] m-auto ">
        <h2 className="text-xl dark:text-white font-semibold">Response:</h2>
        <div className="flex items-start mt-2 p-4 bg-gray-100 rounded-md border min-h-[200px] border-gray-200">
          {loading ? (
            <div className="flex items-center justify-center w-full h-32">
              <svg
                className="animate-spin h-8 w-8 text-[#124E66]"
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
              <BsRobot className="mr-4 text-[#124E66] w-[40px] h-[40px]" />
              <p className="flex-1 dark:text-[#124E66] italic text-[18px]">
                {response}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
