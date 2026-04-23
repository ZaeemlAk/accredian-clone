export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Why Choose Accredian
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Live Classes</h3>
            <p className="mt-3 text-gray-600">
              Interactive learning with experts
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Mentorship</h3>
            <p className="mt-3 text-gray-600">
              1:1 career guidance
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Certification</h3>
            <p className="mt-3 text-gray-600">
              Recognized credentials
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}