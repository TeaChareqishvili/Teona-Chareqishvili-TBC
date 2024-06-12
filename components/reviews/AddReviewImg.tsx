"use client";

import React, { useRef } from "react";
import { Host } from "../../apiUsers";

interface AddBlogPictureProps {
  setBlobUrl: (url: string) => void;
}

const AddReviewImg: React.FC<AddBlogPictureProps> = ({ setBlobUrl }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(`${Host}/api/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    const newBlob = await response.json();

    setBlobUrl(newBlob.url);
  };

  return (
    <div>
      <form onSubmit={handleUpload} className="upload-photo">
        <label htmlFor="file-upload">ატვირთეთ ფოტო</label>
        <input
          name="file"
          ref={inputFileRef}
          type="file"
          required
          id="file-upload"
        />
        <button type="submit">ატვირთვა </button>
      </form>
    </div>
  );
};

export default AddReviewImg;
