import { Navbar1 } from "@/components/navbar1";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service | TLP Publishing",
  description: "Terms and conditions for using TLP Publishing services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using the TLP Publishing website or any of our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.`,
  },
  {
    title: "Services",
    content: `TLP Publishing provides publishing, branding, and audience growth services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We will not be liable to you or any third party for any such modification, suspension, or discontinuation.`,
  },
  {
    title: "Use of the Website",
    content: `You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:

• Use the site in any way that violates applicable local, national, or international law
• Transmit any unsolicited or unauthorised advertising or promotional material
• Attempt to gain unauthorised access to any part of our website or systems
• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the site`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website — including text, graphics, logos, and images — is the property of TLP Publishing and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
  },
  {
    title: "Appointments & Engagements",
    content: `When you book an appointment or engage our services, a separate service agreement may apply. Any such agreement will govern the scope, deliverables, and payment terms of the engagement. These Terms of Service apply in addition to, not in place of, any such agreement.`,
  },
  {
    title: "Disclaimer of Warranties",
    content: `Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, TLP Publishing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services, even if we have been advised of the possibility of such damages.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the relevant courts.`,
  },
  {
    title: "Changes to These Terms",
    content: `We may revise these Terms of Service at any time. Changes will be posted on this page with a revised effective date. Your continued use of our website following any changes constitutes your acceptance of the new terms.`,
  },
];

export default function TermsOfService() {
  return (
    <main className="flex flex-col min-h-screen" style={{ backgroundColor: "#f9f9f9" }}>
      <Navbar1 />

      {/* Hero */}
      <section className="pt-32 pb-16 text-white" style={{ backgroundColor: "#07142D" }}>
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#F08A85" }}>
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-white/50 text-sm">Effective date: 1 January 2025</p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full" style={{ backgroundColor: "#F08A85" }} />
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-12 text-sm leading-relaxed text-gray-500">
            Please read these Terms of Service carefully before using the TLP Publishing website or engaging our services. These terms govern your access to and use of our platform.
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
              Questions about these terms?{" "}
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
