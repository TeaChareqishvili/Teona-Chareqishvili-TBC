import Image from "next/image";
import weightImg from "../../../../public/assets/image/offers/muscleGain.webp";

export default function LooseWeightComponent() {
  const muscleGain =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/muscleGain-Z95MsIm5XiVcqOZiXRUtarjdJv9XQ3.mp4";

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="rounded-lg overflow-hidden mb-8">
        <div className="lg:h-[500px]">
          <video
            className="w-full rounded-t-lg h-[full]"
            src={muscleGain}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="p-4 hidden lg:absolute lg:bottom-[200px] lg:right-[20px] lg:block">
        <h2 className="text-2xl font-semibold text-white">Muscle Gain</h2>
        <p className="mt-2 text-white">
          Learn effective strategies to build muscle and enhance your strength.
        </p>
        <Image
          width={400}
          height={300}
          src={weightImg}
          alt="Muscle gain"
          className="mt-4 rounded-lg"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pt-[50px] dark:text-white">
          Muscle Gain Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Tip 1: Proper Nutrition
            </h3>
            <p className="mt-2 text-gray-600">
              Eating a diet rich in protein, healthy fats, and carbohydrates is
              essential for muscle growth.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Tip 2: Consistent Training
            </h3>
            <p className="mt-2 text-gray-600">
              Engage in regular strength training exercises to stimulate muscle
              growth and increase strength.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Tip 3: Rest and Recovery
            </h3>
            <p className="mt-2 text-gray-600">
              Allowing your muscles time to recover is crucial for growth.
              Ensure you get enough sleep and rest between workouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
