"use client";
import { handleUpdateImg } from "../../app/[locale]/actions";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { useScopedI18n } from "@/locales/client";
import Image from "next/image";
import { MdPhotoCamera } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

export default function AvatarUpload({ userimg, data }: any) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const t = useScopedI18n("profile");

  return (
    <div className=" w-1/2 flex flex-col items-center justify-center">
      <div className="relative w-[350px] h-[350px] group">
        <Image
          src={data?.user.img}
          alt={userimg?.name}
          width={250}
          height={250}
          className="object-cover rounded-full w-full h-full"
        />
        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer">
          {t("chooseFile")}
          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </label>
        <div className="absolute bottom-8 right-12 bg-white p-1 rounded-full opacity-100 transition-opacity duration-300">
          <MdPhotoCamera className="text-black" />
        </div>
      </div>
      <div className=" min-h-[100px]  flex flex-col items-center">
        <h1 className="text-black text-xl font-semibold dark:text-white text-[12px] md:text-[18px] text-center">
          {t("picture")}
        </h1>

        <form
          className="flex flex-col items-center mt-4"
          onSubmit={async (event) => {
            event.preventDefault();

            if (!inputFileRef.current?.files) {
              throw new Error("No file selected");
            }

            setIsLoading(true);

            const file = inputFileRef.current.files[0];

            try {
              const response = await fetch(
                `/api/upload?filename=${file.name}`,
                {
                  method: "POST",
                  body: file,
                }
              );

              const newBlob = (await response.json()) as PutBlobResult;

              setBlob(newBlob);
              await handleUpdateImg(newBlob);
            } catch (error) {
              console.error("Error uploading file:", error);
            } finally {
              setIsLoading(false);
            }
          }}
        >
          <button
            type="submit"
            className="dark:bg-[#212A31] flex items-center h-[40px] justify-center bg-[#748D82] w-[150px] hover:bg-[#124E66] transition-all duration-200  text-white py-2 px-4 rounded"
          >
            {isLoading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              t("upload")
            )}
          </button>

          {blob && ""}
        </form>
      </div>
    </div>
  );
}
