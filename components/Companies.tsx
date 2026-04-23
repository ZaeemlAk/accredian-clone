import Image from "next/image";

export default function Companies() {
  return (
    <section className="py-16 bg-white border-t border-b">
      <div className="max-w-6xl mx-auto text-center px-6">

        <p className="text-gray-500 text-lg mb-10">
          Trusted by leading organizations
        </p>

        {/* LOGO STRIP */}
        <div className="flex flex-wrap justify-center items-center gap-12">

          {/* Google */}
          <div className="relative w-[120px] h-[40px]">
            <Image
              src="/images/google.png"
              alt="Google"
              fill
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div>

          {/* Amazon */}
          <div className="relative w-[120px] h-[40px]">
            <Image
              src="/images/amazon.png"
              alt="Amazon"
              fill
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div>

          {/* Microsoft */}
          <div className="relative w-[130px] h-[40px]">
            <Image
              src="/images/microsoft.png"
              alt="Microsoft"
              fill
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div>

        </div>

      </div>
    </section>
  );
}