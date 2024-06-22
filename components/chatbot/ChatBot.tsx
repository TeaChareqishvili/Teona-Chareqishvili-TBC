"use client";
import { getChatBot } from "../../app/[locale]/actions";

import { useState, ChangeEvent } from "react";

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  console.log(response, "res");
  console.log(prompt, "promt");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Submitting prompt:", prompt);
      const response = await getChatBot({ prompt });
      console.log("Response received:", response);
      setResponse(response);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setResponse("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Ask OpenAI</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setPrompt(e.target.value)
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}
