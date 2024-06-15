import { UserMessage } from "@/app/[locale]/interface";

export default function Messages({ messages }: { messages: UserMessage[] }) {
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="w-4/5 m-auto mt-[90px]">
      {messages.map((item, id) => (
        <div
          key={id}
          className="border-2 dark:border-white px-[10px] py-[7px] flex items-center justify-between"
        >
          <p className=" dark:text-white text-[16px]">{item.name}</p>
          <p className=" dark:text-white text-[16px]">{item.email}</p>
          <p className=" dark:text-white text-[16px]">{item.phone}</p>
          <p className=" dark:text-white text-[16px]">{item.message}</p>
          <p className=" dark:text-white text-[16px]">
            {" "}
            {formatDate(item.created_at)}
          </p>
        </div>
      ))}
    </div>
  );
}
