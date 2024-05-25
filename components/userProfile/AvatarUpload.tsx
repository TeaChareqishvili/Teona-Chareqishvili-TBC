"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";

export default function AvatarUpload() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);
    return (
        <div className="w-full min-h-[100px] bg-[#cfe1d8] flex flex-col items-center mt-4 p-4 rounded-md dark:bg-[#527361]">
            <h1 className="text-black text-xl font-semibold dark:text-white">Change Profile Picture</h1>
            <form className="flex flex-col items-center mt-4"
                onSubmit={async (event) => {
                    event.preventDefault();

                    if (!inputFileRef.current?.files) {
                        throw new Error("No file selected");
                    }

                    const file = inputFileRef.current.files[0];

                    const response = await fetch(`/api/upload?filename=${file.name}`, {
                        method: "POST",
                        body: file,
                    });

                    const newBlob = (await response.json()) as PutBlobResult;

                    setBlob(newBlob);
                }}
            >
                <input name="file" ref={inputFileRef} type="file" required className="mb-4 p-2 border border-white rounded file:mr-5 file:py-1 file:px-3 file:border-[1px]
                    file:text-xs file:font-small
                    file:bg-stone-50 file:text-stone-700
                    hover:file:cursor-pointer hover:file:bg-blue-50
                    hover:file:text-[#748f80]" />
                <button type="submit" className="bg-[#76a58b] text-white px-4 py-2 rounded hover:bg-[#748f80] transition duration-300">Upload</button>
            </form>
            {blob && <div className="mt-4">
                <Image src={blob.url} width={250} height={250} alt="Upload" className="rounded-lg" />
            </div>}
        </div>
    );
}
