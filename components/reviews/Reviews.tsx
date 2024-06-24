"use client";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addProductComment } from "../../app/[locale]/actions";

const SingleProductAddComment = ({ id }: { id: string }) => {
  const { user } = useUser();

  const [userId, setUserId] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  console.log(id, "id");

  useEffect(() => {
    if (user && user.sub) {
      setUserId(user.sub);
    }
  }, [user]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleRatingClick = (ratingValue: number) => {
    setRating(ratingValue);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      user_id: userId,
      product_id: id,
      comment: comment,
      rating: rating,
    };

    console.log(formData, "review");
    try {
      await addProductComment(formData);
      setComment("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className=" bg-gray-50 p-5 rounded-lg shadow-lg max-w-md mx-auto my-[25px]">
      <h1 className="text-2xl mb-5 text-center text-gray-800">
        Write Your Comment
      </h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <div className="form-group flex flex-col gap-2">
          <textarea
            placeholder="Write your comment here..."
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            className="p-2 rounded border bg-transparent border-[#1d273d] resize-y min-h-[100px] text-[#1d273d]"
          ></textarea>
        </div>
        <div className=" flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={`rating-stars-${star}`}
              onClick={() => handleRatingClick(star)}
              className={`cursor-pointer ${
                rating >= star
                  ? "text-orange-500 text-2xl"
                  : "text-gray-400 text-xl"
              } transition duration-200`}
            >
              ⭐
            </span>
          ))}
        </div>
        <div className=" text-center">
          <button
            type="submit"
            className="bg-[#1d273d] text-white py-2 px-4 rounded hover:bg-[#385491] transition duration-200"
          >
            Submit Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleProductAddComment;
