import { getMessages } from "@/apiUsers";
import Messages from "@/components/adminPage/Messages";

export default async function UserMessages() {
  const messages = await getMessages();

  return (
    <div className="w-full dark:bg-black bg-white">
      <Messages messages={messages} />
    </div>
  );
}
