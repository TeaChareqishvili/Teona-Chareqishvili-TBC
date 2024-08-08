import Image from "next/image";
import poolImg from "../../../../public/assets/image/offers/pool.webp";

export default function Pool() {
  const poolVideo =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/pool-sjZHnSZwgssMzOmAuLy5s96XakwYPy.mp4";

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="rounded-lg overflow-hidden mb-8">
        <div className="lg:h-[450px]">
          <video
            className="w-full rounded-t-lg h-[full]"
            src={poolVideo}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="p-4 hidden lg:absolute lg:bottom-[200px] lg:right-[10px] lg:block">
        <h2 className="text-2xl font-semibold text-white">Aqua Aerobics</h2>
        <p className="mt-2 text-white w-[200px]">
          Discover the benefits of aqua aerobics and how it can enhance your
          fitness routine at our gym.
        </p>
        <Image
          width={400}
          height={300}
          src={poolImg}
          alt="Aqua aerobics"
          className="mt-4 rounded-lg mb-[15px]"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pt-[50px] dark:text-white">
          Benefits of Aqua Aerobics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 1: Low-Impact Workout
            </h3>
            <p className="mt-2 text-gray-600">
              Aqua aerobics provides a low-impact workout, making it easier on
              your joints while still providing effective exercise.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 2: Improved Cardiovascular Health
            </h3>
            <p className="mt-2 text-gray-600">
              Engaging in aqua aerobics can help improve your cardiovascular
              health, enhancing your heart and lung function.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 3: Full-Body Workout
            </h3>
            <p className="mt-2 text-gray-600">
              Aqua aerobics provides a full-body workout, engaging multiple
              muscle groups and helping you build strength and endurance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
