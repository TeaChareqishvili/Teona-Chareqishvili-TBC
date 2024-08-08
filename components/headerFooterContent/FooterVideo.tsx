const food =
  "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/food-QaVlw0KeX9bkLIliX1lFSr4J6Nu3K0.mp4";
const group =
  "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/group-NuexT8gZ4XlBdXwXluKcSNr5VFhUzr.mp4";
const muscle =
  "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/muscleGain-DSfLcbPrfc7yDpnLkivMNtGMFXzITC.mp4";
const personal =
  "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/personal-dNeUHzHVEtx6Q6w1zkUgfXf5F4Koa4.mp4";
const pool =
  "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/pool-sjZHnSZwgssMzOmAuLy5s96XakwYPy.mp4";
const spa =
  "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/spa-Kts9N5t5CDrqGEwj46Msv9aYJrFOBe.mp4";
const weight =
  "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/weight-uf1Y9CldKKQIbzKXeW6gZh6Tidyk1o.mp4";
const yoga =
  "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/yoga-Dw7bylulYMzk5mqwdaJsl9yVbfudWR.mp4";
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
