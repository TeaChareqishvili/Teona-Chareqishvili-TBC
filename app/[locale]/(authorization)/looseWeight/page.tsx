import Image from "next/image";
import weightImg from "../../../../public/assets/image/offers/weightimg.webp";

export default function LooseWeightComponent() {
  const weight =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/weight-NhPhrK614rAKZBOmgXCQQIxwJY7Br1.mp4";

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className=" rounded-lg overflow-hidden mb-8 ">
        <div className=" lg:h-[500px]">
          {" "}
          <video
            className="w-full rounded-t-lg h-[full] "
            src={weight}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="p-4 hidden  lg:absolute lg:bottom-[200px] lg:right-[20px] lg:block">
        <h2 className="text-2xl font-semibold text-white ">Loose Weight</h2>
        <p className="mt-2 text-white">
          Discover effective ways to lose weight and achieve a healthier
          lifestyle.
        </p>
        <Image
          width={400}
          height={300}
          src={weightImg}
          alt="Loose weight"
          className="mt-4 rounded-lg"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pt-[50px] dark:text-white">
          Weight Loss Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 ">
            <h3 className="text-xl font-semibold text-gray-700">
              Tip 1: Balanced Diet
            </h3>
            <p className="mt-2 text-gray-600">
              Maintaining a balanced diet is crucial for weight loss. Include a
              variety of foods in your meals.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Tip 2: Regular Exercise
            </h3>
            <p className="mt-2 text-gray-600">
              Regular exercise helps to burn calories and build muscle, which is
              essential for weight loss.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Tip 3: Stay Hydrated
            </h3>
            <p className="mt-2 text-gray-600">
              Drinking plenty of water aids in digestion and helps control
              hunger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
