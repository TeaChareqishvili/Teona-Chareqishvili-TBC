const food =
  "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/food-nOy9VXPWEK5ddc61jG2wm5ekqoFMBY.mp4";
const group =
  "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/group-q8HQhoIUPkK0aDc0tqapbA7xTR6QkB.mp4";
const muscle =
  "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/muscleGain-W9XoXW8OaTqPJTm69dzsV95px6Do5y.mp4";
const personal =
  "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/personal-5Whmc7eRltNN9sLzNicJKzCB30d0e1.mp4";
const pool =
  " https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/pool-q74F8NFU6ngXQYiWGQYtTjGeHw9Swg.mp4";
const spa =
  "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/spa-1IeAlkOqu3KwAESg4Z1f38nsiolsoY.mp4";
const weight =
  "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/weight-NhPhrK614rAKZBOmgXCQQIxwJY7Br1.mp4";
const yoga =
  "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/yoga-h6kiBcF6JyHeR8GVDBYIEPN6Q9vkAB.mp4";

const offers = [
  {
    id: 1,
    video: pool,
  },
  {
    id: 2,
    video: weight,
  },
  {
    id: 3,
    video: personal,
  },
  {
    id: 4,
    video: muscle,
  },
  {
    id: 5,
    video: yoga,
  },
  {
    id: 6,
    video: group,
  },
  {
    id: 7,
    video: spa,
  },
  {
    id: 8,
    video: food,
  },
];

export default function FooterVideo() {
  return (
    <div className=" w-full m-auto grid  grid-cols-3 gap-2 py-[30px]">
      {offers.map((item) => (
        <div
          key={item.id}
          className=" offers relative rounded-md cursor-pointer"
        >
          <video className="rounded-md" src={item.video} autoPlay muted loop />
        </div>
      ))}
    </div>
  );
}
