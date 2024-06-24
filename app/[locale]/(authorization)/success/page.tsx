import SuccsessStripe from "@/components/SuccessStripe";

export default function Success() {
  return (
    <div className="cancel w-full min-h-screen flex items-center justify-center">
      <div className="mt-[90px] flex flex-col items-center justify-center h-full w-full">
        <SuccsessStripe />
      </div>
    </div>
  );
}
