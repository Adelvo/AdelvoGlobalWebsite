import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Adelvo Global",
  description: "Privacy Policy for Adelvo Global.",
};

const sections = [
  {
    title: "1. Responsible Entity",
    body: (
      <>
        <p>Adelvo Global</p>
        <p>Dubai, UAE (Al Barsha South)</p>
        <p>
          Email: <a href="mailto:info@adelvo-global.ae">info@adelvo-global.ae</a>
        </p>
      </>
    ),
  },
  {
    title: "2. Data Collection on this Website",
    body: (
      <>
        <p>We do not actively collect personal data directly on this website.</p>
        <p>
          However, when you visit this website, technical data may be automatically collected,
          including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Date and time of access</li>
        </ul>
        <p>
          This data is required to ensure the proper functioning and security of the website.
        </p>
      </>
    ),
  },
  {
    title: "3. Hosting (GitHub Pages)",
    body: (
      <>
        <p>
          This website is hosted via GitHub Pages, a service provided by GitHub Inc., 88 Colin P
          Kelly Jr St, San Francisco, CA 94107, USA.
        </p>
        <p>
          When visiting this website, GitHub may process technical data such as IP addresses and
          server log data.
        </p>
        <p>
          For more information, please refer to GitHub&apos;s Privacy Policy:{" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
          </a>
        </p>
      </>
    ),
  },
  {
    title: "4. Appointment Booking via Calendly",
    body: (
      <>
        <p>When you click on &ldquo;Book a Call&rdquo;, you will be redirected to Calendly.</p>
        <p>Calendly may collect the following data:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Additional information provided by you</li>
        </ul>
        <p>This data is used solely for scheduling and conducting meetings.</p>
        <p>Provider: Calendly LLC, USA</p>
        <p>
          Privacy Policy:{" "}
          <a href="https://calendly.com/privacy" target="_blank" rel="noreferrer">
            https://calendly.com/privacy
          </a>
        </p>
        <p>Please note that data may be transferred to the United States.</p>
      </>
    ),
  },
  {
    title: "5. Purpose of Data Processing",
    body: (
      <>
        <p>Data is processed exclusively for:</p>
        <ul>
          <li>Scheduling appointments</li>
          <li>Communication with potential clients</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data Sharing",
    body: (
      <p>
        We do not share your personal data with third parties, except through the services
        mentioned above (GitHub Pages and Calendly).
      </p>
    ),
  },
  {
    title: "7. Data Retention",
    body: (
      <p>
        Personal data is stored only for as long as necessary to fulfill the purpose of the
        processing.
      </p>
    ),
  },
  {
    title: "8. Your Rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access your data</li>
          <li>Request correction</li>
          <li>Request deletion</li>
          <li>Object to processing</li>
        </ul>
        <p>
          To exercise your rights, contact:{" "}
          <a href="mailto:info@adelvo-global.ae">info@adelvo-global.ae</a>
        </p>
      </>
    ),
  },
  {
    title: "9. Security",
    body: <p>We implement appropriate technical and organizational measures to protect your data.</p>,
  },
  {
    title: "10. Updates",
    body: <p>We reserve the right to update this Privacy Policy at any time.</p>,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <a className="policy-back" href="/">
          Back to Home
        </a>
        <p className="policy-kicker">Adelvo Global</p>
        <h1>Privacy Policy</h1>
      </section>

      <section className="policy-content">
        {sections.map((section) => (
          <article className="policy-card" key={section.title}>
            <h2>{section.title}</h2>
            <div>{section.body}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
