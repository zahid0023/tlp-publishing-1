"use client";

import { useState } from "react";
import { Navbar1 } from "@/components/navbar1";
import { Footer } from "@/components/footer";

const services = [
  "Brand Strategy",
  "Content Publishing",
  "Audience Growth",
  "Social Media Management",
  "Business Consulting",
  "Other",
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col min-h-screen" style={{ backgroundColor: "#f9f5f5" }}>
      <Navbar1 />

      {/* Hero */}
      <section className="pt-32 pb-16 text-white" style={{ backgroundColor: "#07142D" }}>
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#F08A85" }}>
            Let's Connect
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Book An Appointment</h1>
          <p className="mt-4 text-white/50 text-sm max-w-md mx-auto">
            Choose a time that works for you and let's start growing your business together.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full" style={{ backgroundColor: "#F08A85" }} />
        </div>
      </section>

      {/* Form */}
      <section className="flex-1 py-16">
        <div className="container mx-auto max-w-2xl px-4">
          {submitted ? (
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-dashed py-20 text-center" style={{ borderColor: "#F08A85" }}>
              <div
                className="flex size-16 items-center justify-center rounded-full text-2xl font-black"
                style={{ backgroundColor: "#F08A85", color: "#07142D" }}
              >
                ✓
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#07142D" }}>
                  You're booked in!
                </h2>
                <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
                  Thanks, <strong>{form.name}</strong>! We'll confirm your appointment via email at <strong>{form.email}</strong> shortly.
                </p>
              </div>
              <a
                href="/"
                className="mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#07142D" }}
              >
                ← Back to Home
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Personal Info */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#F08A85" }}>
                  01 — Your Details
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#F08A85] focus:ring-2 focus:ring-[#F08A85]/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#F08A85] focus:ring-2 focus:ring-[#F08A85]/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs font-medium text-gray-500">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#F08A85] focus:ring-2 focus:ring-[#F08A85]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#F08A85" }}>
                  02 — Service
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setForm((prev) => ({ ...prev, service: s }))}
                      className="rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200"
                      style={{
                        borderColor: form.service === s ? "#F08A85" : "#e5e7eb",
                        backgroundColor: form.service === s ? "#F08A85" : "#ffffff",
                        color: form.service === s ? "#07142D" : "#6b7280",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#F08A85" }}>
                  03 — Date & Time
                </p>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500">Preferred Date *</label>
                  <input
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#F08A85] focus:ring-2 focus:ring-[#F08A85]/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-gray-500">Preferred Time *</label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {timeSlots.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm((prev) => ({ ...prev, time: t }))}
                        className="rounded-xl border px-3 py-2.5 text-sm font-medium transition-all duration-200"
                        style={{
                          borderColor: form.time === t ? "#F08A85" : "#e5e7eb",
                          backgroundColor: form.time === t ? "#F08A85" : "#ffffff",
                          color: form.time === t ? "#07142D" : "#6b7280",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#F08A85" }}>
                  04 — Anything Else?
                </p>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business or what you'd like to discuss..."
                  rows={4}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#F08A85] focus:ring-2 focus:ring-[#F08A85]/20 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative h-14 w-full overflow-hidden rounded-full text-base font-semibold tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ backgroundColor: "#07142D", color: "#ffffff" }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Confirm Appointment
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>

            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
