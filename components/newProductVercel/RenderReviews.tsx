import { useState } from "react";

interface Comments {
  comment?: string;
}
export default function RenderReviews({
  validComments,
}: {
  validComments: Comments[];
}) {
  const [comment, setComment] = useState(false);
  console.log(validComments, "valid");
  return (
    <div className="p-4">
      <button
        onClick={() => setComment(!comment)}
        className="px-4 py-2 bg-[#2E3944] text-white rounded-md hover:bg-[#171d23] dark:bg-[#D3D9D4] dark:text-[#2E3944] dark:hover:bg-[#748D92] dark:hover:text-white transition"
      >
        {comment ? "Hide Comments" : "View Comments"}
      </button>
      <div className="flex- flex-col items-center justify-center">
        {" "}
        {comment && (
          <div className="mt-4 space-y-4">
            {validComments.length === 0 ? (
              <div className="text-gray-500 text-center">No comments</div>
            ) : (
              validComments.map((comment, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-md shadow-md"
                >
                  <p className="text-gray-800">{comment.comment}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
