// "use client";

// import { useState } from "react";

// export default function ReviewForm({
//   id,
//   initReviews,
// }: {
//   id: number;
//   initReviews: string[] | null;
// }) {
//   const [review, setReview] = useState("");
//   const [reviews, setReviews] = useState(initReviews || []);

//   const formData = {
//     review,
//   };
//   console.log(formData, "formdata");
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await addReview({ formData, id });
//       setReviews((prevReviews) => [...prevReviews, review]);
//       setReview("");
//     } catch (error) {
//       console.error(error);
//     }
//     // window.location.reload();
//   };

//   return (
//     <div className="w-full min-h-[100px] bg-[#cfe1d8] flex flex-col items-center mt-4 p-4 rounded-md dark:bg-[#527361]">
//       <h1 className="text-black text-xl font-semibold dark:text-white">hi</h1>
//       <form
//         className=" w-[50%] flex flex-col items-center mt-4"
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           placeholder="write review"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>
//       <div>
//         {reviews.length > 0 ? (
//           reviews.map((rev, index) => (
//             <div key={index} className="p-2 border-b border-gray-200">
//               {rev}
//             </div>
//           ))
//         ) : (
//           <p>No reviews yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }
