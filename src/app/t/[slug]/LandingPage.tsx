const BOOKING_URL = "https://cal.com/matt364/pieline-demo";

type Feature = {
  title: string;
  description: string;
};

type PageData = {
  slug: string;
  title: string;
  meta_description: string;
  headline: string;
  subheadline: string;
  pain_points: string[];
  features: Feature[];
  cta_text: string;
  cta_url: string;
  context: string;
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍕</span>
          <span className="text-xl font-bold text-gray-900">
            Pie<span className="text-amber-500">Line</span>
          </span>
        </a>
        <a
          href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}

function HeroSection({ page }: { page: PageData }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <span>🍕</span> AI Phone Ordering for Restaurants
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight">
            {page.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            {page.subheadline}
          </p>
          <div className="mt-8">
            <a
              href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg text-center transition shadow-lg shadow-amber-200"
            >
              {page.cta_text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPointsSection({ page }: { page: PageData }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
          Sound familiar?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {page.pain_points.map((pain, i) => (
            <div key={i} className="bg-red-50 rounded-xl p-6">
              <div className="text-red-400 text-2xl mb-3">
                {["😤", "📉", "❌"][i % 3]}
              </div>
              <p className="text-sm text-red-800 leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ page }: { page: PageData }) {
  const icons = ["⚡", "🍕", "📈", "📞", "🔄", "📊"];
  return (
    <section id="features" className="py-20 bg-amber-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          How PieLine solves this
        </h2>
        <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          AI phone ordering built specifically for restaurants. Not a generic
          chatbot.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {page.features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{icons[i % icons.length]}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
          The math is simple
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="text-sm text-gray-500 mb-2">
              Dedicated Phone Employee
            </div>
            <div className="text-3xl font-bold text-gray-900">$3,500+/mo</div>
            <p className="text-sm text-gray-500 mt-3">
              One call at a time. Calls in sick on your busiest nights.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="text-sm text-gray-500 mb-2">Missed Calls</div>
            <div className="text-3xl font-bold text-gray-900">$2,000+/mo</div>
            <p className="text-sm text-gray-500 mt-3">
              At $25 avg order and 20+ missed calls/week, that&apos;s $2K+ lost
              every month.
            </p>
          </div>
          <div className="bg-amber-500 rounded-xl p-8 text-white">
            <div className="text-sm text-amber-100 mb-2">PieLine</div>
            <div className="text-3xl font-bold">70-80% less</div>
            <p className="text-sm text-amber-100 mt-3">
              Flat monthly fee. 20 simultaneous calls. Upsells every order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ page }: { page: PageData }) {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-amber-500 to-orange-500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stop losing orders. Start tonight.
            </h2>
            <p className="mt-4 text-amber-100 text-lg">
              Every missed call is a lost sale. PieLine pays for itself in the
              first week.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Go live the same day",
                "No hardware, no IT team",
                "Cancel anytime",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white text-sm"
                >
                  <span className="text-amber-200">&#10003;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {page.cta_text}
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              15-minute call. We&apos;ll show you how PieLine handles your menu and
              takes orders with 95%+ accuracy.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-lg transition"
            >
              Book a Call
            </a>
            <p className="text-xs text-gray-400 mt-3">
              Free 15-min call. No commitment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span>🍕</span>
          <span className="text-sm font-bold text-white">
            Pie<span className="text-amber-400">Line</span>
          </span>
          <span className="text-xs text-gray-500 ml-2">
            AI Phone Ordering for Restaurants
          </span>
        </div>
        <div className="text-xs">
          &copy; {new Date().getFullYear()} PieLine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage({ page }: { page: PageData }) {
  return (
    <>
      <Navbar />
      <HeroSection page={page} />
      <PainPointsSection page={page} />
      <FeaturesSection page={page} />
      <ComparisonSection />
      <CTASection page={page} />
      <Footer />
    </>
  );
}
