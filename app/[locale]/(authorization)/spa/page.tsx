import Image from "next/image";
import spaImg from "../../../../public/assets/image/offers/spaoffer.webp";

export default function Spa() {
  const spa =
    "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/spa-yMZAx5Bfc4aTxXsnE4Uh6ZeQ7DAVrc.mp4";

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="rounded-lg overflow-hidden mb-8">
        <div className="lg:h-[500px]">
          <video
            className="w-full rounded-t-lg h-[full]"
            src={spa}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="p-4 hidden lg:absolute lg:bottom-[200px] lg:right-[10px] lg:block">
        <h2 className="text-2xl font-semibold text-white">Spa</h2>
        <p className="mt-2 text-white w-[200px]">
          Discover the benefits of having a spa session after your workout to
          enhance recovery and relaxation.
        </p>
        <Image
          width={400}
          height={300}
          src={spaImg}
          alt="Spa"
          className="mt-4 rounded-lg"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pt-[50px] dark:text-white">
          Benefits of a Spa After Workout
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 1: Muscle Relaxation
            </h3>
            <p className="mt-2 text-gray-600">
              A spa session helps to relax your muscles, reducing soreness and
              tension after a strenuous workout.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 2: Stress Relief
            </h3>
            <p className="mt-2 text-gray-600">
              Enjoying a spa can significantly reduce stress, providing a sense
              of calm and promoting mental well-being.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 3: Improved Circulation
            </h3>
            <p className="mt-2 text-gray-600">
              Spa treatments can improve blood circulation, helping to deliver
              oxygen and nutrients to your muscles more effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
