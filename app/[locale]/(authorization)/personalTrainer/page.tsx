import Image from "next/image";
import personalImg from "../../../../public/assets/image/offers/trainer.webp";

export default function PersonalTrainer() {
  const personal =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/personal-5Whmc7eRltNN9sLzNicJKzCB30d0e1.mp4";

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="rounded-lg overflow-hidden mb-8">
        <div className="lg:h-[500px]">
          <video
            className="w-full rounded-t-lg h-[full]"
            src={personal}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="p-4 hidden lg:absolute lg:bottom-[200px] lg:right-[10px] lg:block">
        <h2 className="text-2xl font-semibold text-white">Personal Trainer</h2>
        <p className="mt-2 text-white w-[200px]">
          Discover the benefits of having a personal fitness trainer and how it
          can enhance your fitness journey.
        </p>
        <Image
          width={400}
          height={300}
          src={personalImg}
          alt="Personal Trainer"
          className="mt-4 rounded-lg"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pt-[50px] dark:text-white">
          Benefits of a Personal Fitness Trainer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 1: Personalized Workout Plans
            </h3>
            <p className="mt-2 text-gray-600">
              A personal trainer creates customized workout plans tailored to
              your specific fitness goals and needs.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 2: Motivation and Accountability
            </h3>
            <p className="mt-2 text-gray-600">
              Personal trainers provide the motivation and accountability needed
              to stay on track with your fitness regimen.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefit 3: Expert Guidance
            </h3>
            <p className="mt-2 text-gray-600">
              Trainers offer expert guidance on proper exercise techniques,
              reducing the risk of injury and maximizing effectiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
