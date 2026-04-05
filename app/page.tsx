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
    title: "RAG Systems",
    body:
      "RAG means Retrieval-Augmented Generation. In simple terms: the AI first checks your own knowledge (like PDFs, FAQs, and internal docs), then answers. This makes responses more accurate, current, and specific to your business.",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 5.2A2.2 2.2 0 0 1 7.2 3h9.2A2.6 2.6 0 0 1 19 5.6V17a1 1 0 0 1-1.5.9L15 16.4l-2.5 1.5a1 1 0 0 1-1 0L9 16.4l-2.5 1.5A1 1 0 0 1 5 17V5.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.2 8h7.6M8.2 11.2h7.6"
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
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m16 16 4.2 4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build",
    body: "Custom systems are designed around your stack, process, and KPIs.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M14.9 3.9a4.2 4.2 0 0 0-4.8 5.3l-5.5 5.5a2 2 0 0 0 2.8 2.8l5.5-5.5a4.2 4.2 0 0 0 5.3-4.8l-2.2 2.2-2.8-.6-.6-2.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Deploy",
    body: "We launch, test, and refine until the automation is production-ready.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13 3c4.4 1.3 7 4.8 8 9-2.2 1.9-4.9 3-8 3-3.1 0-5.8-1.1-8-3 1-4.2 3.6-7.7 8-9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="10" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.7 15.8 7 21l3.8-2.4L13 21l2.2-2.4L19 21l-1.7-5.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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

export default function Home() {
  useEffect(() => {
    const envelopeTimers: number[] = [];
    const revealTextItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".hero h1, .hero p, .hero-actions, .stats-band .stat-card, .services-header h2, .services-header p, .service-card, .cta-banner, .process-section .section-copy, .process-grid article, .tools-header h2, .tool-chip, .quote-title, .quote-card, .contact-section .section-copy .eyebrow, .contact-section .section-copy h2, .contact-section .section-copy p, .contact-envelope"
      )
    );
    const revealGears = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".brand-title-gear"
      )
    );
    const revealOrbs = Array.from(
      document.querySelectorAll<HTMLElement>(".hero-lux-orb, .about-lux-orb")
    );

    revealTextItems.forEach((item, index) => {
      item.classList.add("reveal-fly");
      item.style.setProperty("--reveal-delay", `${Math.min(index * 40, 520)}ms`);
    });

    revealGears.forEach((gear, index) => {
      gear.classList.add("reveal-gear");
      if (gear.className.includes("left")) {
        gear.classList.add("reveal-from-left");
      } else if (gear.className.includes("right")) {
        gear.classList.add("reveal-from-right");
      }
      gear.style.setProperty("--reveal-delay", `${Math.min(index * 90, 420)}ms`);
    });

    revealOrbs.forEach((orb, index) => {
      orb.classList.add("reveal-orb");
      if (orb.className.includes("left")) {
        orb.classList.add("reveal-from-left");
      } else if (orb.className.includes("right")) {
        orb.classList.add("reveal-from-right");
      }
      orb.style.setProperty("--reveal-delay", `${Math.min(index * 120, 260)}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    const counters = document.querySelectorAll<HTMLElement>(".count-up");
    const envelopes = document.querySelectorAll<HTMLElement>(".contact-envelope");
    const spotlights = document.querySelectorAll<HTMLElement>(".scroll-spotlight");
    const cursorGearLayer = document.querySelector<HTMLElement>(".cursor-gear-layer");
    const canUseCursorEffect =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let lastSpawnTime = 0;

    const spawnCursorGear = (x: number, y: number) => {
      if (!cursorGearLayer) {
        return;
      }
      const puff = document.createElement("span");
      puff.className = "cursor-gear-puff";
      puff.textContent = "⚙";
      puff.style.left = `${x}px`;
      puff.style.top = `${y}px`;
      puff.style.setProperty("--gear-size", `${12 + Math.random() * 12}px`);
      puff.style.setProperty("--drift-x", `${(Math.random() - 0.5) * 44}px`);
      puff.style.setProperty("--drift-y", `${-44 - Math.random() * 42}px`);
      puff.style.setProperty("--spin", `${80 + Math.random() * 180}deg`);
      cursorGearLayer.appendChild(puff);
      puff.addEventListener("animationend", () => puff.remove(), { once: true });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const now = performance.now();
      const dx = event.clientX - lastMouseX;
      const dy = event.clientY - lastMouseY;
      const distance = Math.hypot(dx, dy);

      if (now - lastSpawnTime < 36 || distance < 16) {
        return;
      }

      lastSpawnTime = now;
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
      spawnCursorGear(event.clientX, event.clientY);
    };

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
            const envelope = entry.target as HTMLElement;
            if (envelope.dataset.openScheduled === "true") {
              return;
            }
            envelope.dataset.openScheduled = "true";
            const timerId = window.setTimeout(() => {
              envelope.classList.add("is-open");
            }, 320);
            envelopeTimers.push(timerId);
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
    [...revealTextItems, ...revealGears, ...revealOrbs].forEach((element) =>
      revealObserver.observe(element)
    );
    if (canUseCursorEffect) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      counters.forEach((counter) => observer.unobserve(counter));
      envelopes.forEach((envelope) => envelopeObserver.unobserve(envelope));
      spotlights.forEach((spotlight) => spotlightObserver.unobserve(spotlight));
      [...revealTextItems, ...revealGears, ...revealOrbs].forEach((element) =>
        revealObserver.unobserve(element)
      );
      observer.disconnect();
      envelopeObserver.disconnect();
      spotlightObserver.disconnect();
      revealObserver.disconnect();
      envelopeTimers.forEach((timerId) => window.clearTimeout(timerId));
      if (canUseCursorEffect) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <div className="page-shell">
        <div className="cursor-gear-layer" aria-hidden="true" />
        <header className="site-header">
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
            <div className="hero-sheen" aria-hidden="true" />
            <div className="hero-lux-orb hero-lux-orb-left" aria-hidden="true" />
            <div className="hero-lux-orb hero-lux-orb-right" aria-hidden="true" />
            <div className="hero-noise" aria-hidden="true" />
            <div className="hero-content">
              <h1>
                <span className="hero-line">Accelerate Your Business</span>
                <span className="hero-highlight">with AI</span>
                <span className="hero-line">Automation</span>
              </h1>
              <p>
                Custom AI systems for businesses ready to cut costs, streamline ops, and scale
                fast.
              </p>
              <div className="hero-actions">
                <a className="button button-ghost" href="#services">
                  Explore Systems
                </a>
                <a className="button" href="https://calendly.com/adelvo-global-info/new-meeting">
                  Book a Call
                </a>
              </div>
            </div>
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
              <a className="cta-banner-button" href="https://calendly.com/adelvo-global-info/new-meeting">
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
                  <div className="process-step-top">
                    <span>{step.number}</span>
                    <div className="process-step-icon">{step.icon}</div>
                  </div>
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
                “Adelvo Global and their team rebuilt our follow-ups and sales processes, allowing us to
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
            <div className="about-dark-bg" aria-hidden="true">
              <div className="about-aurora about-blob1" />
              <div className="about-aurora about-blob2" />
              <div className="about-aurora about-blob3" />
            </div>
            <div className="about-sheen" aria-hidden="true" />
            <div className="about-lux-orb about-lux-orb-left" aria-hidden="true" />
            <div className="about-lux-orb about-lux-orb-right" aria-hidden="true" />
            <div className="about-noise" aria-hidden="true" />
            <div className="section-copy">
              <span className="eyebrow">About us</span>
              <h2>AI won&apos;t replace you. But someone using it will.</h2>
              <p>
                Artificial intelligence is no longer optional. Businesses that ignore it fall
                behind. The problem: most companies don&apos;t know how to use it in a way that
                actually delivers results.
              </p>
              <p>Adelvo Global fixes that.</p>
              <p>
                We work hands-on with the latest AI tools and focus only on what works in real
                business environments - not theory.
              </p>
              <p>
                Most companies lose time and opportunities because their processes are outdated or
                inefficient.
              </p>
              <p>
                We build AI systems that automate tasks, streamline operations, and improve
                performance.
              </p>
              <p>
                Simple goal: save time, increase efficiency, and drive measurable results.
              </p>
              <p>AI done wrong creates complexity.</p>
              <p>AI done right creates leverage.</p>
              <p>We make sure it&apos;s done right.</p>
            </div>
            <div className="contact-envelope" id="contact">
              <div className="contact-lux-panel">
                <span className="contact-lux-kicker">Private Strategy Session</span>
                <h3>Ready for Your AI Upgrade?</h3>
                <p>
                  Book a focused strategy call and get a clear roadmap for where AI creates the
                  biggest leverage in your business.
                </p>
                <a className="button" href="https://calendly.com/adelvo-global-info/new-meeting">
                  Book a Call
                </a>
              </div>
            </div>
          </section>

          <section className="faq-bottom-section">
            <section className="faq-section" aria-labelledby="faq-title">
              <h2 id="faq-title" className="faq-title">
                Frequently Asked Questions
              </h2>
              <div className="faq-list">
                <details>
                  <summary>1. What exactly do you do?</summary>
                  <p>
                    We help businesses automate repetitive tasks like responding to enquiries,
                    following up with leads, and handling customer communication - so you don&apos;t
                    lose potential customers.
                  </p>
                </details>
                <details>
                  <summary>2. Who is this for?</summary>
                  <p>
                    Our solutions are designed for service-based businesses that receive regular
                    enquiries and want to respond faster and more efficiently.
                  </p>
                </details>
                <details>
                  <summary>3. How does it work?</summary>
                  <p>
                    We analyze your current process, identify bottlenecks, and implement simple
                    automation systems that handle tasks automatically - without disrupting your
                    workflow.
                  </p>
                </details>
                <details>
                  <summary>4. Do I need technical knowledge?</summary>
                  <p>
                    No. Everything is set up for you. You don&apos;t need any technical skills to use
                    the systems.
                  </p>
                </details>
                <details>
                  <summary>5. Will this replace my team?</summary>
                  <p>
                    No. The goal is not to replace your team, but to remove repetitive work so your
                    team can focus on high-value tasks.
                  </p>
                </details>
                <details>
                  <summary>6. What kind of results can I expect?</summary>
                  <p>
                    Most businesses lose 30-50% of their leads due to slow response times. Our
                    systems help reduce that loss and improve response speed significantly.
                  </p>
                </details>
                <details>
                  <summary>7. How long does it take to set up?</summary>
                  <p>
                    Depending on your setup, most systems can be implemented within a few days.
                  </p>
                </details>
                <details>
                  <summary>8. Is this expensive?</summary>
                  <p>
                    No. Our focus is on simple, high-impact solutions that quickly pay for
                    themselves by capturing more leads and saving time.
                  </p>
                </details>
                <details>
                  <summary>9. What tools do you use?</summary>
                  <p>
                    We use modern, reliable tools and tailor everything to your business. The focus
                    is always on what works best for your workflow.
                  </p>
                </details>
                <details>
                  <summary>10. How do I get started?</summary>
                  <p>
                    Simply book a call. We&apos;ll review your current process and show you exactly
                    where automation can help.
                  </p>
                </details>
              </div>
            </section>
          </section>

          <footer className="legal-footer">
            <div className="legal-footer-inner">
              <p>Adelvo Global</p>
              <nav className="legal-nav" aria-label="Legal">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/imprint">Imprint</a>
                <a href="mailto:info@adelvo-global.ae">info@adelvo-global.ae</a>
              </nav>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
