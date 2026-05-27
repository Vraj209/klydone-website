import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Klydone",
  description:
    "Learn how Klydone collects, uses, protects, and shares personal information through its websites, forms, analytics, and marketing tools.",
  alternates: {
    canonical: "/privacy",
  },
};

const lastUpdated = "May 27, 2026";

const noticeItems = [
  {
    category: "Contact and inquiry information",
    examples: "Name, email address, company, project details, budget range, timeline, and messages you submit.",
    purpose: "To respond to inquiries, prepare proposals, schedule calls, and deliver requested services.",
  },
  {
    category: "Marketing preferences",
    examples: "Email address, newsletter preferences, subscription status, and unsubscribe choices.",
    purpose: "To send updates you request and manage consent and unsubscribe records.",
  },
  {
    category: "Website and device data",
    examples: "IP address, browser and device information, pages viewed, referrers, approximate location, and interaction data.",
    purpose: "To operate, secure, improve, measure, and personalize the website.",
  },
  {
    category: "Security and diagnostic data",
    examples: "Server logs, rate limit signals, timestamps, error records, and form submission metadata.",
    purpose: "To prevent abuse, troubleshoot issues, maintain service reliability, and protect Klydone and website visitors.",
  },
];

const rights = [
  "Request access to personal information we hold about you.",
  "Ask us to correct inaccurate or incomplete information.",
  "Withdraw consent for optional marketing communications.",
  "Ask us to delete information when we no longer need it, subject to legal and business record requirements.",
  "Object to or restrict certain processing where applicable law gives you that right.",
  "Opt out of sale, sharing, targeted advertising, or profiling where applicable privacy law gives you that right.",
];

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
              This Privacy Policy explains how Klydone collects, uses, discloses,
              retains, and protects personal information through klydone.com,
              marketai.klydone.com, website forms, analytics tools, marketing tools,
              and related communications.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-2 text-sm" aria-label="Privacy policy sections">
                {[
                  ["Overview", "#overview"],
                  ["Information We Collect", "#information-we-collect"],
                  ["How We Use Information", "#how-we-use-information"],
                  ["Cookies and Analytics", "#cookies-and-analytics"],
                  ["Sharing Information", "#sharing-information"],
                  ["Retention and Security", "#retention-and-security"],
                  ["Your Choices and Rights", "#your-choices-and-rights"],
                  ["Contact", "#contact-privacy"],
                ].map(([label, href]) => (
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
              <section id="overview" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">Overview</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    Klydone provides business automation, technical solution, and Market
                    AI landing page services for organizations. Our websites are primarily
                    business-to-business websites. When you contact us, request information,
                    subscribe to updates, join a waitlist, or interact with a site, we may
                    process personal information as described in this policy.
                  </p>
                  <p>
                    Please do not submit passwords, payment card data, health information,
                    government identifiers, client records, or other sensitive personal
                    information through website forms unless we have specifically agreed
                    to receive it under a written engagement.
                  </p>
                </div>
              </section>

              <section id="information-we-collect" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Information We Collect
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We collect information directly from you, automatically from your
                  browser or device, and from service providers that help us operate the
                  website and communicate with you.
                </p>
                <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
                  <div className="grid bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 sm:grid-cols-[1fr_1.6fr_1.4fr]">
                    <span>Category</span>
                    <span className="hidden sm:block">Examples</span>
                    <span className="hidden sm:block">Purpose</span>
                  </div>
                  {noticeItems.map((item) => (
                    <div
                      key={item.category}
                      className="grid gap-3 border-t border-gray-200 px-4 py-4 text-sm leading-6 text-gray-600 sm:grid-cols-[1fr_1.6fr_1.4fr]"
                    >
                      <div className="font-semibold text-gray-900">{item.category}</div>
                      <div>{item.examples}</div>
                      <div>{item.purpose}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="how-we-use-information" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  How We Use Information
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    We use personal information to respond to your requests, evaluate
                    whether our services are a fit, prepare proposals, schedule meetings,
                    provide customer support, send administrative messages, and deliver
                    services you request.
                  </p>
                  <p>
                    We also use information to improve website performance, understand
                    which content is useful, protect against spam or abuse, comply with
                    legal obligations, enforce our agreements, and maintain records needed
                    for security, accounting, compliance, and dispute resolution.
                  </p>
                  <p>
                    If you subscribe to marketing updates, we use your email address and
                    preferences to send those messages. You can unsubscribe at any time
                    using the unsubscribe link in our emails or by contacting us.
                  </p>
                </div>
              </section>

              <section id="cookies-and-analytics" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Cookies and Analytics
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    We use cookies, pixels, scripts, local storage, and similar
                    technologies to run the website, measure performance, understand
                    traffic, and support marketing communications.
                  </p>
                  <p>
                    The website uses Google Analytics, Vercel Web Analytics, and Klaviyo.
                    These tools may process information such as page views, referrers,
                    device and browser data, approximate location, interactions with the
                    site, and identifiers associated with cookies or similar technologies.
                  </p>
                  <p>
                    Klaviyo onsite tracking may set the <code className="rounded bg-gray-100 px-1 py-0.5">__kla_id</code>{" "}
                    cookie and may identify a browser when a visitor submits a Klaviyo
                    signup form or clicks a link in a Klaviyo email or SMS message. Google
                    Analytics may use cookies or similar identifiers to measure website
                    traffic. Vercel Web Analytics is used for aggregate website insights.
                  </p>
                  <p>
                    You can manage cookies through your browser settings. Some browsers
                    and extensions also let you send opt-out preference signals, including
                    Global Privacy Control where supported. Blocking cookies may affect
                    analytics, personalization, or marketing features, but the core
                    website should remain available.
                  </p>
                </div>
              </section>

              <section id="sharing-information" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Sharing Information
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    We do not sell personal information for money. We may share personal
                    information with service providers that help us host the website,
                    process form submissions, send notifications, provide analytics,
                    manage marketing communications, schedule meetings, secure our
                    systems, and operate our business.
                  </p>
                  <p>
                    These providers may include website hosting, infrastructure, analytics,
                    marketing automation, calendar scheduling, email, security, and
                    professional advisory providers. We require service providers to use
                    personal information only as needed to provide services to us, subject
                    to appropriate confidentiality and data protection obligations.
                  </p>
                  <p>
                    We may also disclose information if required by law, to protect rights,
                    safety, and security, to investigate misuse, or as part of a business
                    transaction such as a merger, acquisition, financing, or sale of assets.
                  </p>
                  <p>
                    Some analytics and marketing activities may be considered targeted
                    advertising, sharing, or cross-context behavioral advertising under
                    certain privacy laws. Where those laws apply, you may contact us to
                    exercise available opt-out rights.
                  </p>
                </div>
              </section>

              <section id="retention-and-security" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Retention and Security
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    We keep personal information only for as long as reasonably needed for
                    the purposes described in this policy, including to manage inquiries,
                    maintain business records, provide services, comply with legal
                    obligations, resolve disputes, and protect our systems.
                  </p>
                  <p>
                    Newsletter information is generally retained until you unsubscribe or
                    ask us to delete it, subject to any suppression list or consent record
                    we need to maintain. Security logs and rate limit data are retained for
                    operational and security purposes for a limited period unless longer
                    retention is needed to investigate abuse or comply with law.
                  </p>
                  <p>
                    We use administrative, technical, and organizational safeguards
                    designed to protect personal information. No website, network, or
                    transmission method is completely secure, so we cannot guarantee
                    absolute security.
                  </p>
                  <p>
                    We and our service providers may process and store information in
                    Canada, the United States, and other jurisdictions. Information may be
                    subject to the laws of those jurisdictions.
                  </p>
                </div>
              </section>

              <section id="your-choices-and-rights" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">
                  Your Choices and Rights
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-600">
                  Depending on where you live, privacy law may give you rights to:
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-600">
                  {rights.map((right) => (
                    <li key={right} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    We will not discriminate against you for exercising privacy rights.
                    We may need to verify your identity before completing certain requests.
                  </p>
                  <p>
                    For Canadian commercial electronic messages, we follow applicable
                    consent, sender identification, and unsubscribe requirements. You can
                    unsubscribe from marketing emails at any time.
                  </p>
                  <p>
                    Our services are not directed to children under 13, and we do not
                    knowingly collect personal information from children under 13 through
                    this website.
                  </p>
                </div>
              </section>

              <section id="contact-privacy" className="scroll-mt-24 border-t border-gray-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-gray-950">Contact</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                  <p>
                    To ask a privacy question, submit a rights request, withdraw marketing
                    consent, or request correction or deletion of your information, contact
                    Klydone at:
                  </p>
                  <p>
                    <a className="font-semibold text-violet-700 hover:text-violet-900" href="mailto:sales@klydone.com">
                      sales@klydone.com
                    </a>
                    <br />
                    <a className="font-semibold text-violet-700 hover:text-violet-900" href="tel:+18734985370">
                      +1 (873) 498-5370
                    </a>
                  </p>
                  <p>
                    We may update this Privacy Policy from time to time. The updated
                    version will be posted on this page with a new last updated date.
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
