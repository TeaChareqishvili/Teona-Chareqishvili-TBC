"use client";

import { useState, FormEvent, ChangeEvent } from "react";

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  console.log(response, "res");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse("Loading...");

    const res = await fetch("http://localhost:3000/api/openAi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    console.log(data, "data");
    console.log({ res });
    setResponse(data?.choices[0].message.content);
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
