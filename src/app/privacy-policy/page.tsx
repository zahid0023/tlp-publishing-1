import { Navbar1 } from "@/components/navbar1";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | TLP Publishing",
  description: "How TLP Publishing collects, uses, and protects your information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, book an appointment, or communicate with us. This may include your name, email address, phone number, and any other details you choose to share.

We also automatically collect certain technical information when you visit our website, including your IP address, browser type, pages visited, and time spent on pages.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your inquiries and provide the services you request
• Send you updates, marketing communications, and promotional materials (where permitted)
• Improve and personalise your experience on our website
• Comply with legal obligations and protect our legal rights`,
  },
  {
    title: "Sharing Your Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.

We may also disclose your information when required by law or to protect our rights, property, or safety.`,
  },
  {
    title: "Cookies",
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you interact with our site. You may disable cookies through your browser settings, though some features of the site may not function properly as a result.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or request deletion of your personal information. To exercise any of these rights, please contact us at hello@tlppublishing.com. We will respond to your request within a reasonable timeframe.`,
  },
  {
    title: "Security",
    content: `We implement reasonable technical and organisational measures to protect your information from unauthorised access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen" style={{ backgroundColor: "#f9f9f9" }}>
      <Navbar1 />

      {/* Hero */}
      <section className="pt-32 pb-16 text-white" style={{ backgroundColor: "#07142D" }}>
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#F08A85" }}>
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-white/50 text-sm">Effective date: 1 January 2025</p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full" style={{ backgroundColor: "#F08A85" }} />
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-12 text-sm leading-relaxed text-gray-500">
            At TLP Publishing, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={s.title} className="flex gap-6">
                <div
                  className="flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-black mt-0.5"
                  style={{ backgroundColor: "#07142D", color: "#F08A85" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight" style={{ color: "#07142D" }}>
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 whitespace-pre-line">
                    {s.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-dashed p-6 text-center" style={{ borderColor: "#F08A85" }}>
            <p className="text-sm text-gray-500">
              Questions about this policy?{" "}
              <a href="mailto:hello@tlppublishing.com" className="font-semibold" style={{ color: "#F08A85" }}>
                hello@tlppublishing.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
