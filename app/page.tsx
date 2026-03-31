"use client";

import { useEffect } from "react";

const services = [
  {
    title: "AI Voice Agents",
    body:
      "Inbound or outbound, AI voice agents talk to your leads and customers in real-time. They answer, qualify, remind, and follow up so your team does not have to.",
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 7.5A3.5 3.5 0 0 1 9.5 4h8A3.5 3.5 0 0 1 21 7.5v5A3.5 3.5 0 0 1 17.5 16H10l-4 4v-4.5A3.5 3.5 0 0 1 2.5 12v-4.5A3.5 3.5 0 0 1 6 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Social Media AI Systems",
    body:
      "AI handles your content, comments, and conversations. It writes, schedules, replies, and reaches out while you stay focused on running the business.",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 7v5l3 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Autonomous AI Agents",
    body:
      "Agentic systems do more than automate. They act, decide, and move work forward across internal operations and customer-facing tasks around the clock.",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          rx="2.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Workflow Automations",
    body:
      "Quiet, fast systems that run on schedules or triggers. From reporting to onboarding and invoicing, repetitive work gets done before your team notices.",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13 3 6 14h5l-1 7 8-12h-5l1-6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit",
    body: "We identify the exact workflow where AI creates measurable leverage.",
  },
  {
    number: "02",
    title: "Build",
    body: "Custom systems are designed around your stack, process, and KPIs.",
  },
  {
    number: "03",
    title: "Deploy",
    body: "We launch, test, and refine until the automation is production-ready.",
  },
];

function HighLevelLogo() {
  return (
    <svg viewBox="0 0 72 72">
      <path d="M12 58V26h8v32h-8Zm-5-26 9-9 9 9H7Zm23 26V40h8v18h-8Zm-5-18 9-9 9 9H25Zm23 18V20h8v38h-8Zm-5-38 9-9 9 9H43Z" fill="none" />
      <path d="M12 58V26h8v32h-8Z" fill="#fbbc05" />
      <path d="M7 32l9-9 9 9H7Z" fill="#fcd34d" />
      <path d="M30 58V40h8v18h-8Z" fill="#2196f3" />
      <path d="M25 40l9-9 9 9H25Z" fill="#64b5f6" />
      <path d="M48 58V20h8v38h-8Z" fill="#00e000" />
      <path d="M43 20l9-9 9 9H43Z" fill="#34d399" />
    </svg>
  );
}

function ClaudeLogo() {
  return (
    <svg viewBox="0 0 64 64">
      <path
        d="M32 6 35.5 23.4 49 12.7 40.7 28 58 24.5 42.6 32 58 39.5 40.7 36 49 51.3 35.5 40.6 32 58 28.5 40.6 15 51.3 23.3 36 6 39.5 21.4 32 6 24.5 23.3 28 15 12.7 28.5 23.4Z"
        fill="#e07a5f"
      />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M21 12.3c0-.8-.1-1.4-.2-2H12v3.8h5.1a4.5 4.5 0 0 1-1.9 3v2.5h3.1c1.8-1.6 2.7-4 2.7-7.3Z" fill="#4285f4" />
      <path d="M12 21c2.4 0 4.4-.8 5.8-2.1l-3.1-2.5c-.8.6-1.8 1-2.7 1-2.1 0-4-1.4-4.6-3.4H4.1v2.6A9 9 0 0 0 12 21Z" fill="#34a853" />
      <path d="M7.4 14c-.2-.6-.3-1.2-.3-2s.1-1.4.3-2V7.4H4.1A9 9 0 0 0 3 12c0 1.5.4 3 1.1 4.6L7.4 14Z" fill="#fbbc05" />
      <path d="M12 6.6c1.3 0 2.5.5 3.4 1.3l2.5-2.5A8.7 8.7 0 0 0 12 3 9 9 0 0 0 4.1 7.4L7.4 10c.6-2 2.5-3.4 4.6-3.4Z" fill="#ea4335" />
    </svg>
  );
}

const tools = [
  {
    kind: "n8n",
    wordmarkClass: "tool-wordmark tool-wordmark-n8n",
    label: "n8n",
    logo: <img className="tool-logo-image tool-logo-image-n8n" src="https://n8n.io/brandguidelines/logo-white.svg" alt="" />,
    logoClass: "tool-logo",
  },
  {
    kind: "openai",
    wordmarkClass: "tool-wordmark tool-wordmark-openai",
    label: "OpenAI",
    logo: <img className="tool-logo-image tool-logo-image-openai-mark" src="/openai-symbol.png" alt="" />,
    logoClass: "tool-logo tool-logo-openai-mark",
  },
  {
    kind: "ghl",
    wordmarkClass: "tool-wordmark tool-wordmark-ghl",
    label: "HighLevel",
    logo: <HighLevelLogo />,
    logoClass: "tool-logo tool-logo-ghl",
  },
  {
    kind: "claude",
    wordmarkClass: "tool-wordmark tool-wordmark-claude",
    label: "Claude",
    logo: <ClaudeLogo />,
    logoClass: "tool-logo tool-logo-claude",
  },
  {
    kind: "vapi",
    wordmarkClass: "tool-wordmark tool-wordmark-vapi",
    label: "Vapi",
    logo: <img className="tool-logo-image tool-logo-image-vapi" src="/va-square-5.svg" alt="" />,
    logoClass: "tool-logo",
  },
  {
    kind: "eleven",
    wordmarkClass: "tool-wordmark tool-wordmark-eleven",
    label: "ElevenLabs",
    logo: <img className="tool-logo-image tool-logo-image-eleven" src="/elevenlabs-symbol.svg" alt="" />,
    logoClass: "tool-logo",
  },
  {
    kind: "google",
    wordmarkClass: "tool-wordmark tool-wordmark-google",
    label: "Google",
    logo: <GoogleLogo />,
    logoClass: "tool-logo tool-logo-google",
  },
];

function Gear({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <path d="M56.4 7.6 58 16a34.6 34.6 0 0 1 8.8 3.6l7.2-4.5 8.4 8.4-4.5 7.2A34.6 34.6 0 0 1 81.5 39l8.4 1.6v11.8L81.5 54a34.6 34.6 0 0 1-3.6 8.8l4.5 7.2-8.4 8.4-7.2-4.5a34.6 34.6 0 0 1-8.8 3.6l-1.6 8.4H44.6L43 77.5a34.6 34.6 0 0 1-8.8-3.6L27 78.4l-8.4-8.4 4.5-7.2A34.6 34.6 0 0 1 19.5 54L11 52.4V40.6l8.5-1.6a34.6 34.6 0 0 1 3.6-8.8l-4.5-7.2 8.4-8.4 7.2 4.5A34.6 34.6 0 0 1 43 16l1.6-8.4h11.8ZM50.5 31a15 15 0 1 0 0 30 15 15 0 0 0 0-30Z" />
      </svg>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".count-up");
    const envelopes = document.querySelectorAll<HTMLElement>(".contact-envelope");
    const spotlights = document.querySelectorAll<HTMLElement>(".scroll-spotlight");

    const formatCount = (value: number, prefix: string, suffix: string) =>
      prefix + value.toLocaleString("en-US") + suffix;

    const animateCounter = (element: HTMLElement) => {
      if (element.dataset.animated === "true") {
        return;
      }

      element.dataset.animated = "true";
      const target = Number(element.dataset.target || 0);
      const prefix = element.dataset.prefix || "";
      const suffix = element.dataset.suffix || "";
      const duration = target >= 1000 ? 3200 : 2200;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        element.textContent = formatCount(value, prefix, suffix);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          element.textContent = formatCount(target, prefix, suffix);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const envelopeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-open");
            envelopeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45 }
    );

    const spotlightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-lit");
            spotlightObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
    envelopes.forEach((envelope) => envelopeObserver.observe(envelope));
    spotlights.forEach((spotlight) => spotlightObserver.observe(spotlight));

    return () => {
      counters.forEach((counter) => observer.unobserve(counter));
      envelopes.forEach((envelope) => envelopeObserver.unobserve(envelope));
      spotlights.forEach((spotlight) => spotlightObserver.unobserve(spotlight));
      observer.disconnect();
      envelopeObserver.disconnect();
      spotlightObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="page-shell">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Automatez AI home">
            <span className="brand-mark">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c77dff" />
                    <stop offset="100%" stopColor="#7b2ce2" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 8c-3.5 0-6.3 2.8-6.3 6.3v1.6c-3.7.8-7 2.8-9.5 5.5l-1.4-1.4a4.5 4.5 0 0 0-6.4 0 4.5 4.5 0 0 0 0 6.4l1.5 1.5A24 24 0 0 0 8 36c0 3 2.4 5.4 5.4 5.4H15c.7 3.6 2.4 6.9 4.8 9.5L18 52.5a4.5 4.5 0 0 0 0 6.4 4.5 4.5 0 0 0 6.4 0l1.6-1.6a24.1 24.1 0 0 0 8 1.4c3 0 5.4-2.4 5.4-5.4v-1.8a24.1 24.1 0 0 0 8-3.6l1.4 1.4a4.5 4.5 0 0 0 6.4 0 4.5 4.5 0 0 0 0-6.4l-1.4-1.4a24.1 24.1 0 0 0 2.3-7.8H58c3 0 5.4-2.4 5.4-5.4S61 22.9 58 22.9h-1.8a24 24 0 0 0-3.4-7l1.5-1.5a4.5 4.5 0 0 0 0-6.4 4.5 4.5 0 0 0-6.4 0l-1.7 1.7A24 24 0 0 0 38.3 8h-1.8C36.5 10.2 34.5 12 32 12c6.6 0 12 5.4 12 12 0 3.2-1.3 6.2-3.5 8.5L32 41l-8.6-8.5A11.9 11.9 0 0 1 20 24c0-6.6 5.4-12 12-12Z"
                  fill="url(#logoGradient)"
                />
                <path d="M26 42h4v12h-4zM34 36h4v18h-4zM42 30h4v24h-4z" fill="url(#logoGradient)" />
              </svg>
            </span>
            <span className="brand-text">
              <strong>Automatez</strong>
              <span>AI</span>
            </span>
          </a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#about">About Us</a>
          </nav>
          <a className="button button-small" href="#contact">
            Let&apos;s Talk
          </a>
        </header>

        <main>
          <section className="hero" id="top">
            <div className="aurora-bg">
              <div className="aurora blob1" />
              <div className="aurora blob2" />
              <div className="aurora blob3" />
              <div className="aurora blob4" />
            </div>
            <div className="hero-noise" aria-hidden="true" />
            <div className="hero-pill">Automatez AI</div>
            <div className="hero-content">
              <h1>
                Accelerate Your Business
                <span>with AI</span>
                Automation
              </h1>
              <p>
                Custom AI systems for businesses ready to cut costs, streamline ops, and scale
                fast.
              </p>
              <div className="hero-actions">
                <a className="button button-ghost" href="#services">
                  Explore Systems
                </a>
                <a className="button" href="#contact">
                  Book a Call
                </a>
              </div>
            </div>

            <Gear className="hero-gear hero-gear-left" />
            <Gear className="hero-gear hero-gear-top" />
            <Gear className="hero-gear hero-gear-right" />
            <Gear className="hero-gear hero-gear-bottom-left" />
            <Gear className="hero-gear hero-gear-bottom-right" />
          </section>

          <section className="stats-band" aria-label="Business results">
            <div className="stat-card">
              <span className="stat-arrow">↗</span>
              <strong className="count-up" data-target="56" data-prefix="" data-suffix="+">
                0
              </strong>
              <p>AI Systems Deployed</p>
            </div>
            <div className="stat-card">
              <span className="stat-arrow">↗</span>
              <strong className="count-up" data-target="6" data-prefix="" data-suffix="X">
                0
              </strong>
              <p>Avg. ROI Per Project</p>
            </div>
            <div className="stat-card">
              <span className="stat-arrow">↗</span>
              <strong className="count-up" data-target="5800" data-prefix="" data-suffix="+">
                0
              </strong>
              <p>Hours Saved</p>
            </div>
          </section>

          <section className="services-section" id="services">
            <div className="services-header">
              <h2>AI Systems Built for Impact</h2>
              <p>
                Built for teams ready to move fast, cut waste, and win bigger with AI. Get
                fully-built, battle-tested AI systems done right, delivered fast.
              </p>
              <span className="section-accent" />
            </div>

            <div className="services-marquee">
              <div className="services-track">
                {[...services, ...services].map((service, index) => (
                  <article
                    key={`${service.title}-${index}`}
                    className={`service-card${service.featured ? " featured" : ""}`}
                    aria-hidden={index >= services.length}
                  >
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="cta-banner-section">
            <div className="cta-banner">
              <div className="cta-copy">
                <h2>
                  The Shift to <span>AI</span> Is Happening. Are You In?
                </h2>
                <p>
                  Our team of AI experts will analyze your business needs and design a customized
                  AI adoption strategy to maximize your ROI, or tailor around your vision and build
                  fast.
                </p>
              </div>
              <a className="cta-banner-button" href="#contact">
                Book a Call
              </a>
            </div>
          </section>

          <section className="process-section" id="process">
            <div className="section-copy">
              <span className="eyebrow">Simple delivery</span>
              <h2>Fast rollout. Clear execution.</h2>
              <p>
                We map the bottlenecks, build the right AI system, and deploy it without dragging
                your team into a months-long implementation cycle.
              </p>
            </div>
            <div className="process-grid">
              {processSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="tools-section" aria-labelledby="tools-title">
            <div className="tools-header">
              <h2 id="tools-title">Tools made for Productivity</h2>
            </div>
            <div className="tools-marquee">
              <div className="tools-track">
                {[...tools, ...tools].map((tool, index) => (
                  <article className="tool-chip" key={`${tool.kind}-${index}`} aria-hidden={index >= tools.length}>
                    <span className={tool.logoClass} aria-hidden="true">
                      {tool.logo}
                    </span>
                    <span className={tool.wordmarkClass}>{tool.label}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="quote-section scroll-spotlight" id="testimonials">
            <div className="section-spotlight" aria-hidden="true">
              <div className="section-spotlight-bar" />
              <div className="section-spotlight-beam" />
              <div className="section-spotlight-glow" />
            </div>
            <h2 className="quote-title">Testemonials</h2>
            <div className="quote-card">
              <p>
                “Adelvo and their team rebuilt our follow-ups and sales processes, allowing us to
                keep leads warm while focusing on high-value work instead of repetitive tasks.”
              </p>
              <div>
                <strong>Kathrin Grajez</strong>
                <span>CEO and Founder, Liga One Consulting</span>
              </div>
            </div>
            <div className="quote-card">
              <p>
                “I was really surprised that the team was able to enhance my systems and identify
                bottlenecks. I now have an AI receptionist that answers all my calls. I love it!”
              </p>
              <div>
                <strong>Klaus Wagner</strong>
                <span>CEO, KW Yachts</span>
              </div>
            </div>
          </section>

          <section className="contact-section" id="about">
            <div className="section-copy">
              <span className="eyebrow">About us</span>
              <h2>AI won&apos;t replace you. But someone using it will.</h2>
              <p>
                Artificial intelligence is no longer optional. It is a fundamental requirement
                for any business that wants to stay competitive. The challenge is that most
                companies still don&apos;t know how to implement it in a way that actually delivers
                results.
              </p>
              <p>That&apos;s where Adelvo comes in.</p>
              <p>
                We are a team that works hands-on with the latest AI tools and technologies every
                day. We don&apos;t rely on theory or trends - we focus on what works in real business
                environments.
              </p>
              <p>
                Many companies struggle with inefficient processes, repetitive tasks, and missed
                opportunities. Not because of a lack of effort, but because their systems are
                outdated or disconnected.
              </p>
              <p>
                We design and implement AI-driven solutions that streamline operations, reduce
                manual work, and improve performance across the board.
              </p>
              <p>
                Our approach is straightforward: Build systems that save time, increase
                efficiency, and create measurable impact.
              </p>
              <p>AI done wrong creates complexity.</p>
              <p>AI done right creates leverage.</p>
              <p>We make sure it&apos;s done right.</p>
            </div>
            <div className="contact-envelope" id="contact">
              <div className="envelope-shell" aria-hidden="true">
                <div className="envelope-shadow" />
                <div className="envelope-back" />
                <div className="envelope-side envelope-side-left" />
                <div className="envelope-side envelope-side-right" />
                <div className="envelope-bottom" />
                <div className="envelope-flap" />
              </div>
              <div className="contact-card contact-letter">
                <h3>Ready to talk?</h3>
                <p>Book a strategy call and get a concrete recommendation for your business.</p>
                <a className="button" href="mailto:hello@automatez.ai">
                  hello@automatez.ai
                </a>
              </div>
            </div>
          </section>

          <footer className="legal-footer">
            <div className="legal-footer-inner">
              <p>Adelvo</p>
              <nav className="legal-nav" aria-label="Legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Imprint</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
