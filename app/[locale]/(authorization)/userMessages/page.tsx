import { getMessages } from "@/apiUsers";
import Messages from "@/components/adminPage/Messages";

export default async function UserMessages() {
  const messages = await getMessages();

  return (
    <div className="w-full dark:bg-[#e5e5e5] bg-white">
      <Messages messages={messages} />
    </div>
  );
}
