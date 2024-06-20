import Image from "next/image";
import foodImg from "../../../../public/assets/image/offers/food.webp";

export default function HealthyFood() {
  const foodVideo =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/food-nOy9VXPWEK5ddc61jG2wm5ekqoFMBY.mp4";

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="rounded-lg overflow-hidden mb-8">
        <div className="lg:h-[500px]">
          <video
            className="w-full rounded-t-lg h-[full]"
            src={foodVideo}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="p-4 hidden lg:absolute lg:bottom-[200px] lg:right-[10px] lg:block">
        <h2 className="text-2xl font-semibold text-white">Healthy Food</h2>
        <p className="mt-2 text-white w-[200px]">
          Learn about the importance of consuming healthy food while visiting
          the gym to maximize your fitness results.
        </p>
        <Image
          width={400}
          height={300}
          src={foodImg}
          alt="Healthy food"
          className="mt-4 rounded-lg"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pt-[50px] dark:text-white">
          Importance of Healthy Food
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 1: Energy Levels
            </h3>
            <p className="mt-2 text-gray-600">
              Eating healthy food provides the necessary energy to perform
              workouts effectively and maintain stamina.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 2: Muscle Recovery
            </h3>
            <p className="mt-2 text-gray-600">
              Proper nutrition helps in muscle recovery, reducing soreness and
              promoting muscle growth.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 3: Overall Health
            </h3>
            <p className="mt-2 text-gray-600">
              Consuming a balanced diet supports overall health, enhancing both
              physical and mental well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
