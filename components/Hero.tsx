import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Level Up Your Career With{" "}
            <span className="text-blue-600">
              India's Top Institutes
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Learn from the best universities and industry experts.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow">
              Get Started
            </button>
            <button className="border px-6 py-3 rounded-lg">
              Talk to Expert
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/hero.webp"
            alt="hero"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}