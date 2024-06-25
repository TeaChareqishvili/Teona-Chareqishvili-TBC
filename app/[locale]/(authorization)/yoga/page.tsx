import Image from "next/image";
import yogaImg from "../../../../public/assets/image/offers/yoga.webp";

export default function LooseWeightComponent() {
  const yogaVideo =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/yoga-OqpMaCJOpbhQRzb3CzVR6kSRUcb1Iy.mp4";

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="rounded-lg overflow-hidden mb-8">
        <div className="lg:h-[500px]">
          <video
            className="w-full rounded-t-lg h-[full]"
            src={yogaVideo}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="p-4 hidden lg:absolute lg:bottom-[200px] lg:right-[10px] lg:block">
        <h2 className="text-2xl font-semibold text-white">Yoga</h2>
        <p className="mt-2 text-white w-[200px]">
          Discover the benefits of yoga and how it can enhance your physical and
          mental well-being.
        </p>
        <Image
          width={400}
          height={300}
          src={yogaImg}
          alt="Yoga"
          className="mt-4 rounded-lg"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pt-[50px] dark:text-white">
          Benefits of Yoga
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 1: Flexibility
            </h3>
            <p className="mt-2 text-gray-600">
              Yoga helps to improve your flexibility, making your body more
              agile and less prone to injuries.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 2: Stress Relief
            </h3>
            <p className="mt-2 text-gray-600">
              Practicing yoga regularly can help reduce stress and promote a
              sense of calm and relaxation.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 3: Strength
            </h3>
            <p className="mt-2 text-gray-600">
              Yoga not only enhances your flexibility but also builds muscle
              strength, improving overall body stability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
