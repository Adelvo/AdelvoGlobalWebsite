import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Adelvo Global",
  description: "Imprint for Adelvo Global.",
};

const sections = [
  {
    title: "Information according to applicable regulations",
    body: (
      <>
        <p>
          <strong>Company Name</strong>
        </p>
        <p>Adelvo Global</p>
        <p>
          <strong>Address</strong>
        </p>
        <p>Al Barsha South</p>
        <p>Dubai, United Arab Emirates</p>
        <p>
          <strong>Contact</strong>
        </p>
        <p>
          Email: <a href="mailto:info@adelvo-global.ae">info@adelvo-global.ae</a>
        </p>
        <p>
          <strong>Represented by</strong>
        </p>
        <p>Klaus Wagner</p>
      </>
    ),
  },
  {
    title: "Disclaimer",
    body: (
      <>
        <p>
          <strong>Liability for Content</strong>
        </p>
        <p>
          The contents of our website have been created with the utmost care. However, we cannot
          guarantee the accuracy, completeness, or timeliness of the content.
        </p>
        <p>
          <strong>Liability for Links</strong>
        </p>
        <p>
          Our website may contain links to external websites. We have no control over the content
          of those websites and therefore cannot accept any liability for them.
        </p>
      </>
    ),
  },
  {
    title: "Copyright",
    body: (
      <p>
        All content on this website, including text, graphics, and images, is the property of
        Adelvo Global unless otherwise stated and may not be reproduced without permission.
      </p>
    ),
  },
];

export default function ImprintPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <a className="policy-back" href="/">
          Back to Home
        </a>
        <p className="policy-kicker">Adelvo Global</p>
        <h1>Imprint</h1>
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
