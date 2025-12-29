import type { Metadata } from "next";
import Link from "next/link"
export const metadata: Metadata = {
  title: "Hire Skilled Teens for Business Projects | Funngro",
  description:
    "Hire skilled teens for real business projects. Funngro helps companies scale faster with cost-effective young talent.",
};

export default function CompanyPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hire Skilled Teens for Real Business Projects
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Funngro connects companies with trained teens who deliver quality
          results at affordable costs.
        </p>
        <Link href="/teen">
  <span className="inline-block mt-8 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
    Hire Teens Now
  </span>
</Link>
      </section>

      {/* Why Funngro */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-6">
        {[
          "Cost-Effective Hiring",
          "Pre-Trained Teen Talent",
          "Flexible Project Model",
          "Fresh Ideas & Creativity",
        ].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg">{item}</h3>
            <p className="text-gray-600 mt-2">
              Access motivated young professionals ready to deliver.
            </p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            "Post Your Project",
            "Get Matched",
            "Collaborate",
            "Pay on Completion",
          ].map((step, index) => (
            <div
              key={step}
              className="p-6 border rounded-xl hover:bg-indigo-50 transition"
            >
              <span className="text-indigo-600 text-2xl font-bold">
                {index + 1}
              </span>
              <p className="mt-3 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build with Young Talent?
        </h2>
        <p className="text-gray-600 mb-6">
          Start hiring skilled teens today and scale faster.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}
