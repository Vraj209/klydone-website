import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Klydone",
  description:
    "Review the terms that apply when you access Klydone's website, contact forms, content, and related online services.",
  alternates: {
    canonical: "/terms",
  },
};

const lastUpdated = "May 27, 2026";

const sections = [
  ["Acceptance", "#acceptance"],
  ["Website Use", "#website-use"],
  ["Services and Proposals", "#services-and-proposals"],
  ["Submissions", "#submissions"],
  ["Intellectual Property", "#intellectual-property"],
  ["Third-Party Services", "#third-party-services"],
  ["Disclaimers", "#disclaimers"],
  ["Liability", "#liability"],
  ["Indemnity", "#indemnity"],
  ["Governing Law", "#governing-law"],
  ["Contact", "#contact-terms"],
];

const prohibitedUses = [
  "Use the website for unlawful, fraudulent, abusive, or harmful activity.",
  "Attempt to interfere with, probe, scan, overload, or disrupt the website or related systems.",
  "Submit malicious code, spam, automated scraping requests, or misleading information.",
  "Copy, resell, or commercially exploit the website or its content without our written permission.",
  "Use the website to submit sensitive, regulated, or confidential information unless we have agreed to receive it in writing.",
];

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-gray-900">
        <section className="border-b border-gray-100 bg-gray-50 pt-28 pb-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Legal
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
              These Terms and Conditions govern your access to and use of klydone.com,
              including website content, contact forms, newsletter forms, scheduling
              links, and related online features.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-2 text-sm" aria-label="Terms sections">
                {sections.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-700"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="space-y-12">
              <section id="acceptance" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">Acceptance</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    By accessing or using this website, you agree to these Terms and
                    Conditions. If you do not agree, do not use the website.
                  </p>
                  <p>
                    Klydone may update these terms from time to time. The updated version
                    will be posted on this page with a new last updated date. Your
                    continued use of the website after an update means you accept the
                    updated terms.
                  </p>
                  <p>
                    These terms apply to website use only. Paid consulting, development,
                    automation, implementation, support, or managed services are governed
                    by the separate written agreement, proposal, order form, statement of
                    work, or master services agreement that Klydone and the client sign or
                    otherwise accept.
                  </p>
                </div>
              </section>

              <section id="website-use" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">Website Use</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    You may use the website for lawful informational and business inquiry
                    purposes. You are responsible for your use of the website and for any
                    information you submit.
                  </p>
                  <p>You must not:</p>
                  <ul className="space-y-2">
                    {prohibitedUses.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    We may suspend, block, rate limit, or investigate activity that we
                    reasonably believe violates these terms, threatens website security,
                    or creates risk for Klydone, our users, clients, vendors, or systems.
                  </p>
                </div>
              </section>

              <section id="services-and-proposals" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Services and Proposals
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    Website content describes Klydone&apos;s general capabilities, service
                    areas, packages, examples, timelines, and estimated pricing. This
                    content is for informational purposes only and is not a binding offer,
                    guarantee, warranty, or commitment to deliver a specific result.
                  </p>
                  <p>
                    Any project scope, deliverables, fees, timeline, acceptance process,
                    intellectual property ownership, confidentiality obligations, support
                    terms, payment schedule, and cancellation rights will be set out in
                    the applicable written proposal, statement of work, or services
                    agreement.
                  </p>
                  <p>
                    Unless a signed agreement says otherwise, estimates depend on the
                    information available at the time and may change after discovery,
                    technical review, dependency review, or changes in your requirements.
                  </p>
                </div>
              </section>

              <section id="submissions" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">Submissions</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    If you submit a form, request a call, send an email, or provide
                    information through the website, you represent that the information is
                    accurate and that you have the right to provide it.
                  </p>
                  <p>
                    Website forms are intended for ordinary business inquiries. Do not
                    submit passwords, payment card numbers, health information,
                    government identifiers, production credentials, client records,
                    confidential datasets, or other sensitive information unless Klydone
                    has specifically agreed in writing to receive it through an approved
                    channel.
                  </p>
                  <p>
                    You grant Klydone permission to use submitted information to respond
                    to your inquiry, evaluate a potential engagement, prepare proposals,
                    schedule meetings, maintain business records, and operate the website,
                    subject to our{" "}
                    <Link href="/privacy" className="font-semibold text-violet-700 hover:text-violet-900">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <section id="intellectual-property" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Intellectual Property
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    The website, including text, graphics, layout, brand elements,
                    designs, software, icons, and other content, is owned by Klydone or
                    used with permission and is protected by intellectual property laws.
                  </p>
                  <p>
                    You may view and use website content for personal or internal business
                    evaluation purposes. You may not copy, modify, distribute, publish,
                    sell, sublicense, frame, scrape, or create derivative works from the
                    website or its content without prior written permission from Klydone.
                  </p>
                  <p>
                    Names, logos, and marks displayed on the website belong to their
                    respective owners. No right or licence is granted except as expressly
                    stated in these terms or a separate written agreement.
                  </p>
                </div>
              </section>

              <section id="third-party-services" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Third-Party Services
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    The website may link to or use third-party services, including
                    analytics providers, marketing tools, scheduling tools, hosting
                    providers, embedded content, social platforms, and external websites.
                  </p>
                  <p>
                    Third-party services are controlled by their respective providers and
                    may be subject to their own terms, privacy policies, cookie notices,
                    and security practices. Klydone is not responsible for third-party
                    websites or services that we do not control.
                  </p>
                </div>
              </section>

              <section id="disclaimers" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">Disclaimers</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    The website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To
                    the maximum extent permitted by law, Klydone disclaims all warranties,
                    representations, and conditions, whether express, implied, statutory,
                    or otherwise, including warranties of accuracy, availability,
                    merchantability, fitness for a particular purpose, title, and
                    non-infringement.
                  </p>
                  <p>
                    Website content is general information only. It is not legal,
                    financial, accounting, security, compliance, tax, or professional
                    advice. You should obtain appropriate professional advice before
                    relying on information for a specific business, legal, security, or
                    compliance decision.
                  </p>
                  <p>
                    Klydone does not guarantee that the website will be uninterrupted,
                    error-free, secure, free of harmful components, or compatible with
                    every device, browser, integration, or system.
                  </p>
                </div>
              </section>

              <section id="liability" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Limitation of Liability
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    To the maximum extent permitted by law, Klydone and its directors,
                    officers, employees, contractors, and service providers will not be
                    liable for any indirect, incidental, consequential, special, punitive,
                    exemplary, or similar damages, including loss of profits, revenue,
                    data, goodwill, business opportunity, or business interruption arising
                    from or related to your use of the website.
                  </p>
                  <p>
                    To the maximum extent permitted by law, Klydone&apos;s total liability for
                    claims arising from or related to website use will not exceed CAD $100
                    or the amount you paid to Klydone specifically for website access,
                    whichever is greater.
                  </p>
                  <p>
                    Nothing in these terms limits liability that cannot be limited under
                    applicable law.
                  </p>
                </div>
              </section>

              <section id="indemnity" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">Indemnity</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    You agree to defend, indemnify, and hold harmless Klydone and its
                    directors, officers, employees, contractors, and service providers
                    from claims, losses, liabilities, damages, costs, and expenses,
                    including reasonable legal fees, arising from your misuse of the
                    website, your violation of these terms, your submitted information, or
                    your violation of another person&apos;s rights or applicable law.
                  </p>
                </div>
              </section>

              <section id="governing-law" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Governing Law
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    These terms and any dispute related to website use are governed by
                    the laws of the Province of Ontario and the federal laws of Canada
                    applicable there, without regard to conflict of laws principles.
                  </p>
                  <p>
                    Subject to any rights you may have under applicable law, you agree
                    that disputes related to website use will be brought in the courts
                    located in Ontario, Canada.
                  </p>
                  <p>
                    If any provision of these terms is found unenforceable, the remaining
                    provisions will continue in effect. Any failure by Klydone to enforce a
                    provision is not a waiver of our right to enforce it later.
                  </p>
                </div>
              </section>

              <section id="contact-terms" className="scroll-mt-24 border-t border-gray-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">Contact</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>Questions about these Terms and Conditions can be sent to:</p>
                  <p>
                    <a className="font-semibold text-violet-700 hover:text-violet-900" href="mailto:sales@klydone.com">
                      sales@klydone.com
                    </a>
                    <br />
                    <a className="font-semibold text-violet-700 hover:text-violet-900" href="tel:+18734985370">
                      +1 (873) 498-5370
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
