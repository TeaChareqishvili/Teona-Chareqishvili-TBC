// import { useState } from "react";
// import { Host } from "../../../../apiUsers";

import ChatBot from "@/components/chatbot/ChatBot";

export default function OpenAi() {
  //   const [prompt, setPrompt] = useState("hi");
  //   const [response, setResponse] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setResponse("Loading...");
  //     console.log({ e, Host }, JSON.stringify({ prompt }));
  // const res = await fetch("http://localhost:3000/api/openAi", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ prompt }),
  // });
  // console.log({ res });

  // const data = await res.json();
  // setResponse(data.choices[0].text);

  return (
    <div className="mt-[120px]">
      <ChatBot />
    </div>
  );
}
