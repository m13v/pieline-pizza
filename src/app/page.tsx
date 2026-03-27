"use client";

import { useState } from "react";

const BOOKING_URL = "https://cal.com/matt364/pieline-demo";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍕</span>
          <span className="text-xl font-bold text-gray-900">
            Pie<span className="text-amber-500">Line</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#problem" className="hover:text-gray-900 transition">
            Why PieLine
          </a>
          <a href="#features" className="hover:text-gray-900 transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-gray-900 transition">
            How It Works
          </a>
          <a href="#faq" className="hover:text-gray-900 transition">
            FAQ
          </a>
        </div>
        <a
          href="#demo"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition"
        >
          Try Demo
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <span>🍕</span> Built specifically for pizza restaurants
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Never miss a phone order during{" "}
              <span className="text-amber-500">Friday night rush</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              PieLine answers every call, handles half-and-half pizzas and
              complex toppings, upsells sides and drinks, and sends orders
              straight to your POS. 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg text-center transition shadow-lg shadow-amber-200"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-lg text-center transition"
              >
                See How It Works
              </a>
            </div>
          </div>
          <BookingCard />
        </div>
      </div>
    </section>
  );
}

function BookingCard() {
  return (
    <div
      id="demo"
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        See PieLine in Action
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        15-minute demo - we&apos;ll show you how PieLine handles your menu,
        takes complex pizza orders, and integrates with your POS.
      </p>
      <ul className="space-y-3 mb-6">
        {[
          "Live demo with your actual menu",
          "See how it handles half-and-half, custom toppings",
          "POS integration walkthrough",
          "Pricing tailored to your call volume",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
            <span className="text-amber-500 mt-0.5">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-lg transition text-center"
      >
        Book a Call
      </a>
      <p className="text-xs text-gray-400 text-center mt-3">
        Free 15-min call. No commitment required.
      </p>
    </div>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The phone ordering problem is real
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Pizza shops get more phone orders than almost any other restaurant
            type. During peak hours, every missed call is a lost order.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="font-semibold text-red-700 mb-4 text-lg">
              Without PieLine
            </h3>
            <ul className="space-y-3">
              {[
                "Staff juggling phones, ovens, and walk-ins during Friday rush",
                "30-40% of calls go unanswered during peak hours",
                "Complex orders get wrong - half pepperoni half sausage becomes all pepperoni",
                "No upselling - staff just want to get off the phone",
                "Hiring a dedicated phone person costs $3-4K/month",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-red-800">
                  <span className="text-red-400 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="font-semibold text-green-700 mb-4 text-lg">
              With PieLine
            </h3>
            <ul className="space-y-3">
              {[
                "Every call answered instantly, even 20 at once on game night",
                "Handles half-and-half, extra toppings, crust swaps perfectly",
                "Upsells breadsticks, drinks, and desserts on every order",
                "Orders go straight to your POS - no re-keying",
                "Fraction of the cost of a dedicated phone employee",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-green-800">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "🍕",
      title: "Pizza-Specific AI",
      description:
        "Understands half-and-half, extra toppings, stuffed crust, thin vs deep dish, custom sizes. Not a generic voice bot adapted for food.",
    },
    {
      icon: "📈",
      title: "Smart Upselling",
      description:
        "Suggests breadsticks with every large pizza, drinks with combos, desserts on orders over $30. Increases average order value by 15-20%.",
    },
    {
      icon: "⚡",
      title: "POS Integration",
      description:
        "Orders flow directly into Clover, Square, and more. No manual re-entry, no mistakes. Toast and NCR Aloha coming soon.",
    },
    {
      icon: "📞",
      title: "20 Simultaneous Calls",
      description:
        "Super Bowl Sunday, Friday night, game day - PieLine handles them all at once. Zero hold time, zero missed orders.",
    },
    {
      icon: "🔄",
      title: "Smart Call Transfer",
      description:
        "Customer wants to complain or has a complex catering request? PieLine transfers to your staff with full context of the conversation.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description:
        "See call volumes, peak hours, most popular orders, upsell conversion rates. Know exactly what your customers want and when.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-amber-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built for how pizza shops actually work
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Not a generic restaurant AI. PieLine understands pizza ordering
            inside and out.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
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

function SampleConversation() {
  const messages = [
    {
      role: "customer" as const,
      text: "Hi, I'd like to order a large pizza for delivery.",
    },
    {
      role: "ai" as const,
      text: "Of course! What would you like on your large pizza? We have our classic pepperoni, meat lovers, veggie supreme, or you can build your own.",
    },
    {
      role: "customer" as const,
      text: "Can I do half pepperoni half mushroom with extra cheese?",
    },
    {
      role: "ai" as const,
      text: "Absolutely - one large half pepperoni, half mushroom with extra cheese. That's $18.99. Would you like to add an order of garlic breadsticks for $4.99? They're our most popular side.",
    },
    {
      role: "customer" as const,
      text: "Yeah sure, throw those in.",
    },
    {
      role: "ai" as const,
      text: "Great choice! Your total is $23.98. Can I get your delivery address?",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hear how PieLine handles a real order
          </h2>
          <p className="mt-4 text-gray-600">
            Half-and-half toppings, extra cheese, upsell - all handled
            perfectly.
          </p>
        </div>
        <div className="space-y-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "customer" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-sm px-4 py-3 rounded-2xl text-sm ${
                  m.role === "customer"
                    ? "bg-amber-500 text-white rounded-br-md"
                    : "bg-gray-100 text-gray-800 rounded-bl-md"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg transition inline-block"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Connect your phone system",
      description:
        "Forward your restaurant line to PieLine, or set it as your overflow when staff can't pick up. Takes 10 minutes.",
    },
    {
      num: "2",
      title: "Upload your menu",
      description:
        "Share your menu, pricing, specials, and any custom rules (minimum order, delivery zones, hours). We handle the rest.",
    },
    {
      num: "3",
      title: "Go live - same day",
      description:
        "PieLine starts answering calls, taking orders, and sending them to your POS. You focus on making great pizza.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Live in one day, not one month
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            No hardware to install. No IT team needed. Just connect your phone
            line and go.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 font-bold text-lg rounded-full mb-4">
                {s.num}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {s.description}
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
    <section className="py-20 bg-amber-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The math is simple
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Compare the cost of missed orders and extra staff vs PieLine.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-sm text-gray-500 mb-2">
              Dedicated Phone Employee
            </div>
            <div className="text-3xl font-bold text-gray-900">$3,500+/mo</div>
            <p className="text-sm text-gray-500 mt-3">
              Salary, benefits, training. Only handles one call at a time. Calls
              in sick on your busiest nights.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-sm text-gray-500 mb-2">
              Missed Calls (No Solution)
            </div>
            <div className="text-3xl font-bold text-gray-900">
              $2,000+/mo
            </div>
            <p className="text-sm text-gray-500 mt-3">
              At $25 avg order and 20+ missed calls per week, that&apos;s $2,000+ in
              lost revenue every month.
            </p>
          </div>
          <div className="bg-amber-500 rounded-xl p-8 text-white">
            <div className="text-sm text-amber-100 mb-2">PieLine</div>
            <div className="text-3xl font-bold">
              70-80% less
            </div>
            <p className="text-sm text-amber-100 mt-3">
              Flat monthly fee. Handles 20 calls at once. Never calls in sick.
              Upsells on every order.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-white text-amber-600 font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-amber-50 transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function POSSection() {
  const integrations = [
    { name: "Clover", status: "Live" },
    { name: "Square", status: "Live" },
    { name: "Toast", status: "Coming Soon" },
    { name: "NCR Aloha", status: "Coming Soon" },
    { name: "Revel", status: "Coming Soon" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Integrates with your POS
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Orders go straight from the phone call to your kitchen display. No
            re-keying, no mistakes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((pos) => (
            <div
              key={pos.name}
              className="bg-white rounded-xl px-6 py-4 border border-gray-200 flex items-center gap-3"
            >
              <span className="font-semibold text-gray-900">{pos.name}</span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  pos.status === "Live"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {pos.status}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="inline-block bg-amber-100 rounded-xl px-8 py-5">
            <p className="text-sm text-amber-800 font-medium">
              Don&apos;t see your POS?{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 underline hover:text-amber-700"
              >
                Contact us
              </a>{" "}
              - we can integrate with any API-equipped system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "How does PieLine handle half-and-half or complex pizza orders?",
      a: "PieLine was built for pizza from the ground up. It handles split toppings, different sizes on each half, crust types, extra/light toppings, and any custom modification your menu supports. It confirms the order back to the customer before sending it to your POS.",
    },
    {
      q: "What happens during a huge rush like Super Bowl Sunday?",
      a: "PieLine handles up to 20 simultaneous phone calls with zero hold time. While your staff focuses on making pizzas and handling walk-ins, PieLine takes every phone order perfectly. No more choosing between the phone and the oven.",
    },
    {
      q: "Can it handle our specials and deals?",
      a: "Yes. You can update specials, limited-time offers, and pricing in real time through POS sync. PieLine will automatically offer current deals to callers when relevant.",
    },
    {
      q: "What if a customer has a complaint or unusual request?",
      a: "PieLine uses smart call transfer. If a customer needs to speak to a human, PieLine hands the call to your staff with a full summary of the conversation so far. No context lost.",
    },
    {
      q: "How fast is setup?",
      a: "Most pizza shops go live the same day. We connect your phone system, import your menu from your POS, configure your rules (delivery zones, minimum orders, hours), test it, and you're live.",
    },
    {
      q: "How much does it cost?",
      a: "Flat monthly fee based on your call volume. Most pizza shops save 70-80% compared to a dedicated phone employee. Contact us for a quote tailored to your volume.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-amber-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-gray-900 text-sm pr-4">
                  {faq.q}
                </span>
                <span className="text-gray-400 text-xl flex-shrink-0">
                  {open === i ? "-" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Stop losing orders. Start tonight.
        </h2>
        <p className="mt-4 text-amber-100 text-lg max-w-xl mx-auto">
          Every missed call is a lost pizza sale. PieLine pays for itself in the
          first week.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-amber-600 font-semibold px-10 py-4 rounded-lg text-lg hover:bg-amber-50 transition shadow-lg"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🍕</span>
              <span className="text-lg font-bold text-white">
                Pie<span className="text-amber-400">Line</span>
              </span>
            </div>
            <p className="text-sm max-w-xs">
              AI phone ordering built for pizza restaurants. Never miss a call,
              never lose an order.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="text-white font-medium mb-3">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://getpieline.com"
                    className="hover:text-white transition"
                  >
                    PieLine Home
                  </a>
                </li>
                <li>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Book a Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-xs text-center">
          &copy; {new Date().getFullYear()} PieLine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <SampleConversation />
      <HowItWorks />
      <ComparisonSection />
      <POSSection />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
