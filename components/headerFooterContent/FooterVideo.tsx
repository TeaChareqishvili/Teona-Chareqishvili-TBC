const food =
  "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/food-Ld4EJceoeEIDC1pQjhmRFqu47NU4z7.mp4";
const group =
  "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/group-bKoHqiHzCbBGZapMDiDUg8tEcuUu2P.mp4";
const muscle =
  "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/muscleGain-Z95MsIm5XiVcqOZiXRUtarjdJv9XQ3.mp4";
const personal =
  "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/personal-f2JHKfdmnLmvZ98PJJhI1mtDxyL3Gx.mp4";
const pool =
  "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/pool-1ONJIm6dwemEkueXQQEQBTr8kc3ANc.mp4";
const spa =
  "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/spa-yMZAx5Bfc4aTxXsnE4Uh6ZeQ7DAVrc.mp4";
const weight =
  "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/weight-6OtEu3TD1QODoYxfgcjWSc2s9mrkHk.mp4";
const yoga =
  "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/yoga-OqpMaCJOpbhQRzb3CzVR6kSRUcb1Iy.mp4";
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
