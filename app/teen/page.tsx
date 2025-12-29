import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earn Money & Learn Skills with Paid Projects | Funngro",
  description:
    "Earn money, learn skills, and gain real-world experience with Funngro paid projects for teens.",
};

export default function TeenPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Earn, Learn & Grow with Funngro
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Work on real company projects, build skills, and get paid.
        </p>
        <button className="mt-8 bg-white text-pink-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition">
          Start Earning Today
        </button>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-5 gap-6">
        {[
          "Digital Marketing",
          "Content Writing",
          "Graphic Design",
          "Data Research",
          "Sales Support",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
          >
            <p className="font-semibold">{skill}</p>
          </div>
        ))}
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Join Funngro?
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "Get Paid for Real Work",
            "Flexible Working Hours",
            "Learn Industry Skills",
            "Start Your Career Early",
          ].map((benefit) => (
            <div
              key={benefit}
              className="p-6 border rounded-xl hover:bg-orange-50 transition"
            >
              <p className="font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">
          Your Career Starts Here
        </h2>
        <p className="text-gray-600 mb-6">
          Join Funngro and start earning today.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition">
          Join Now
        </button>
      </section>
    </main>
  );
}
