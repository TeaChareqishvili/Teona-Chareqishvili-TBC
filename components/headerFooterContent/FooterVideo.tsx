const food =
  "https://live.staticflickr.com/video/53808038960/e6aa4f8a0a/1080p.mp4?s=eyJpIjo1MzgwODAzODk2MCwiZSI6MTcxOTA0NDY3MywicyI6ImE4MjA1YWE0ZTZiM2E0OTY3M2M3NzQ3YTlhN2UzMWRjMTYyMGM4MWIiLCJ2IjoxfQ";
const group =
  "https://live.staticflickr.com/video/53807642071/8d7a2cb60b/1080p.mp4?s=eyJpIjo1MzgwNzY0MjA3MSwiZSI6MTcxOTA0Njk5MywicyI6IjBlNzhjMDUxYjI3Nzk0ZDkyYzEwNTEwNThiNDE0M2VlMmQzZjc5N2MiLCJ2IjoxfQ";
const muscle =
  "https://live.staticflickr.com/video/53807647656/3744494e6a/1080p.mp4?s=eyJpIjo1MzgwNzY0NzY1NiwiZSI6MTcxOTA0NzMyNiwicyI6ImI0MDhkYzg5YzllMWRkOGEzNmM1MDc0ZWJhMzA2ODA0ZDI1ZjU2MjEiLCJ2IjoxfQ";
const personal =
  "https://live.staticflickr.com/video/53807600741/9e6e34d4a0/1080p.mp4?s=eyJpIjo1MzgwNzYwMDc0MSwiZSI6MTcxOTA0NDgzMCwicyI6IjY0Y2JmOTRjNWU3MGFiM2U0YzcwMDliODAwN2Q3ODE3MjIyMDdkNGIiLCJ2IjoxfQ";
const pool =
  "https://live.staticflickr.com/video/53807646216/0717956750/1080p.mp4?s=eyJpIjo1MzgwNzY0NjIxNiwiZSI6MTcxOTA0NzIxMywicyI6IjNkMWU0OTAzMjAxMmU5M2NjYzUyYzdlZTI2N2VkNzY0YjU1MzI2MDkiLCJ2IjoxfQ";
const spa =
  "https://live.staticflickr.com/video/53807888993/40158b3f62/1080p.mp4?s=eyJpIjo1MzgwNzg4ODk5MywiZSI6MTcxOTA0NzE4MywicyI6IjI5YWJhZDQzZTZkOWMwYzQyM2FlMTk4OWZmYjc2MGQzMWRiN2Y5YmUiLCJ2IjoxfQ";
const weight =
  "https://live.staticflickr.com/video/53808062925/b2dfd6d307/1080p.mp4?s=eyJpIjo1MzgwODA2MjkyNSwiZSI6MTcxOTA0NTk0OCwicyI6IjM3YzU2ZmUyMzc4ODIxM2Q0YjJhN2I5MDU5MzgwZWE4ZTU0NjcwNWMiLCJ2IjoxfQ";
const yoga =
  "https://live.staticflickr.com/video/53807642436/76f9b90e29/1080p.mp4?s=eyJpIjo1MzgwNzY0MjQzNiwiZSI6MTcxOTA0NzEwMiwicyI6ImI0NmQ4NzdkMzYzMzRhNDFmMzFlMTg4OTAwMDIwOTJjZDZmNTMyODEiLCJ2IjoxfQ";

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
