import Image from "next/image";
import groupImg from "../../../../public/assets/image/offers/group.webp";

export default function LooseWeightComponent() {
  const group =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/group-bKoHqiHzCbBGZapMDiDUg8tEcuUu2P.mp4";

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="rounded-lg overflow-hidden mb-8">
        <div className="lg:h-[500px]">
          <video
            className="w-full rounded-t-lg h-[full]"
            src={group}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="p-4 hidden lg:absolute lg:bottom-[200px] lg:right-[20px] lg:block">
        <h2 className="text-2xl font-semibold text-white">Group Exercises</h2>
        <p className="mt-2 text-white  md:w-[200px]">
          Explore the benefits of group exercises and how they can improve your
          fitness journey.
        </p>
        <Image
          width={400}
          height={300}
          src={groupImg}
          alt="Group exercise"
          className="mt-4 rounded-lg"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pt-[50px] dark:text-white">
          Benefits of Group Exercises
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 1: Motivation
            </h3>
            <p className="mt-2 text-gray-600">
              Working out in a group provides motivation and support from peers,
              making it easier to stick to your fitness goals.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 2: Social Interaction
            </h3>
            <p className="mt-2 text-gray-600">
              Group exercises offer a great opportunity to meet new people and
              make friends with similar fitness interests.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 3: Variety
            </h3>
            <p className="mt-2 text-gray-600">
              Group classes often include a variety of workouts, keeping your
              routine exciting and preventing boredom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
