"use client";

import { Fragment, useEffect } from "react";

const icon = {
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 20c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5.5" width="16" height="14.5" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 9.6h16M8 3.5v3M16 3.5v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.5c-2.5 0-4.4 2-4.4 4.6v3.1c0 .6-.2 1.2-.6 1.7l-1 1.3c-.5.6-.1 1.5.6 1.5h11c.7 0 1.1-.9.6-1.5l-1-1.3c-.4-.5-.6-1.1-.6-1.7V8.1c0-2.6-1.9-4.6-4.4-4.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 18.5a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.5M19.5 12a7.5 7.5 0 0 1-12.6 5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 3.5v3.5h-3.5M7 20.5V17h3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  trendingUp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 16.5 9 11l4 4 7-7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 7.5H20v4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  calendarCheck: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5.5" width="16" height="14.5" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 9.6h16M8 3.5v3M16 3.5v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8.6" cy="14.2" r="1" fill="currentColor" stroke="none" />
      <path d="M12.6 14.4 14.4 16.2 17.6 12.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  searchChart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15.4 15.4 4.3 4.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.8 12.6v-1.4M10.5 12.6V8.2M13.2 12.6V9.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  hierarchy: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="3.5" width="6" height="5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="3" y="15" width="6" height="5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="15" y="15" width="6" height="5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8.5v3M12 11.5H6v3.5M12 11.5h6v3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.007-1.875 2.25-1.875s2.25.84 2.25 1.875c0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.532.532 0 0 0-.57-.61c-1.687.14-3.383.222-5.096.245A.657.657 0 0 1 14.25 6.087Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5 10 17.5 19.5 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.6 12h16.8M12 3.6c2.6 2.3 4 5.3 4 8.4s-1.4 6.1-4 8.4c-2.6-2.3-4-5.3-4-8.4s1.4-6.1 4-8.4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h6M13 6h8M3 12h11M18 12h3M3 18h8M15 18h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="15" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="11" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  circleArrow: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12a7 7 0 1 1-2.2-5.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 4.5v4.5h-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  muffin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 9.4c1.1-2.6 2.7-2.6 3.8-1 1-2.4 2.8-2.4 3.7 0 .9-2.4 2.7-2.4 3.7 0 1.1-1.6 2.7-1.6 3.3 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.4 9.6h13.2l-1.5 7.6a1.8 1.8 0 0 1-1.77 1.5H8.67a1.8 1.8 0 0 1-1.77-1.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 11.6 8.1 17.2M12 11.6v5.6M15.4 11.6l.5 5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  userCheck: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.3 20c0-3.4 2.9-6 6.2-6M15.5 15.5l1.8 1.8 3-3.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.5 5.8c0-1 .8-1.8 1.8-1.8h11.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H9l-4 3.2v-3.2H6.3c-1 0-1.8-.8-1.8-1.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shieldCheck: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.5 5 6v5.4c0 4.3 2.9 7.6 7 8.6 4.1-1 7-4.3 7-8.6V6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m9 12.2 2 2 4-4.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  escalate: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 18 18 6M9 6h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.7 6.3l-1.5 1.5M7.8 16.2l-1.5 1.5M17.7 17.7l-1.5-1.5M7.8 7.8 6.3 6.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  sync: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.5 14.5 14.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M8 16.2 6.3 17.9a3.2 3.2 0 0 1-4.5-4.5l2.5-2.5M16 7.8l1.7-1.7a3.2 3.2 0 0 1 4.5 4.5l-2.5 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 21V4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 5h11l-2.6 3.5L17 12H6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4.2 6.5 7.8 6.4 7.8-6.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 3 5 13.5h5.6L11 21l8-11.2h-5.6L13 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.4V12l3.4 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 13.4v-1.9a7.5 7.5 0 0 1 15 0v1.9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="13" width="4" height="6" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19 19.4v.6a3 3 0 0 1-3 3h-2.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const aiEmployees = [
  {
    title: "Phone Assistant",
    subtitle: "Never miss another customer call.",
    problemLabel: "THE PROBLEM",
    problemHeadline: "Calls go unanswered while you're on the job.",
    features: [
      { icon: icon.phone, text: "Answers every call instantly, 24/7." },
      { icon: icon.person, text: "Qualifies every lead automatically." },
      { icon: icon.calendar, text: "Books appointments automatically." },
    ],
    image: "/images/ai-phone-agent.png",
  },
  {
    title: "Appointment Agent",
    subtitle: "Fill your calendar without lifting a finger.",
    problemLabel: "THE PROBLEM",
    problemHeadline: "No-shows and empty slots drain your calendar.",
    features: [
      { icon: icon.calendar, text: "Books qualified appointments automatically." },
      { icon: icon.bell, text: "Sends reminders that cut no-shows in half." },
      { icon: icon.refresh, text: "Reschedules and follows up without staff time." },
    ],
    image: "/images/appointment-agent.png",
  },
  {
    title: "Sales Agent",
    subtitle: "Turn conversations into closed deals.",
    problemLabel: "THE PROBLEM",
    problemHeadline: "Leads go cold before your team can follow up.",
    features: [
      { icon: icon.trendingUp, text: "Follows up with every lead within seconds." },
      { icon: icon.userCheck, text: "Qualifies buyers before they reach your team." },
      { icon: icon.target, text: "Nurtures prospects until they're ready to close." },
    ],
    image: "/images/sales-agent.png",
  },
  {
    title: "Support Agent",
    subtitle: "Resolve customer issues around the clock.",
    problemLabel: "THE PROBLEM",
    problemHeadline: "Support tickets pile up while customers wait.",
    features: [
      { icon: icon.message, text: "Answers customer questions instantly, 24/7." },
      { icon: icon.shieldCheck, text: "Resolves common issues without a human agent." },
      { icon: icon.escalate, text: "Escalates complex cases to your team automatically." },
    ],
    image: "/images/support-agent.png",
  },
  {
    title: "Operations Agent",
    subtitle: "Keep your internal workflows running themselves.",
    problemLabel: "THE PROBLEM",
    problemHeadline: "Manual busywork slows your whole team down.",
    features: [
      { icon: icon.gear, text: "Automates repetitive internal workflows end-to-end." },
      { icon: icon.sync, text: "Syncs data across every tool your team uses." },
      { icon: icon.flag, text: "Flags exceptions before they become problems." },
    ],
    image: "/images/operations-agent.jpeg",
  },
];

const aiDashboard = {
  title: "AI Dashboard",
  subtitle: "See everything. Control everything.",
  tagline: "Your entire business, your AI Employees, all in one place.",
  image: "/images/ai-dashboard.jpeg",
};

const workflowSteps = [
  {
    number: "01",
    title: "Book a Call",
    body: "Schedule your strategy session.",
    icon: icon.calendarCheck,
  },
  {
    number: "02",
    title: "Discover",
    body: "Analyze your workflow and identify opportunities.",
    icon: icon.searchChart,
  },
  {
    number: "03",
    title: "Build",
    body: "Custom AI Employees built for your business.",
    icon: icon.hierarchy,
  },
  {
    number: "04",
    title: "Deploy",
    body: "Integrated, tested and ready to work.",
    icon: icon.puzzle,
  },
  {
    number: "05",
    title: "Optimize",
    body: "Continuous improvements and support.",
    icon: icon.trendingUp,
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
    const workflowTimers: number[] = [];
    const revealTextItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".hero-heading, .hero-tagline, .hero-paragraph, .hero-cta-row, .hero-stats-row, .services-header h2, .services-header p, .employee-row, .dashboard-feature, .cta-banner, .process-section .section-copy, .process-grid article, .tools-header h2, .tool-chip, .quote-title, .quote-card, .why-heading, .comparison-row"
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

    const workflowTrack = document.querySelector<HTMLElement>(".workflow-track");
    let workflowRunning = false;

    const stopWorkflowCycle = (track: HTMLElement) => {
      workflowRunning = false;
      workflowTimers.forEach((timerId) => window.clearTimeout(timerId));
      workflowTimers.length = 0;
      track
        .querySelectorAll<HTMLElement>(".workflow-step")
        .forEach((stepEl) => stepEl.classList.remove("is-active", "is-checked"));
      track
        .querySelectorAll<HTMLElement>(".workflow-connector")
        .forEach((connectorEl) => connectorEl.classList.remove("is-filled"));
    };

    const workflowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const track = entry.target as HTMLElement;

          if (!entry.isIntersecting) {
            stopWorkflowCycle(track);
            return;
          }
          if (workflowRunning) {
            return;
          }
          workflowRunning = true;

          const steps = Array.from(track.querySelectorAll<HTMLElement>(".workflow-step"));
          const connectors = Array.from(track.querySelectorAll<HTMLElement>(".workflow-connector"));
          const STEP_GAP = 1000;
          const GROW_DURATION = 600;
          const CHECK_DELAY = 350;
          const LOOP_PAUSE = 1400;
          const RESET_PAUSE = 500;

          const playWorkflowCycle = () => {
            let cumulative = 0;
            steps.forEach((stepEl, index) => {
              const activateAt = cumulative;
              workflowTimers.push(
                window.setTimeout(() => stepEl.classList.add("is-active"), activateAt),
                window.setTimeout(() => stepEl.classList.add("is-checked"), activateAt + CHECK_DELAY)
              );

              const connector = connectors[index];
              if (connector) {
                const connectorStart = activateAt + STEP_GAP;
                workflowTimers.push(
                  window.setTimeout(() => connector.classList.add("is-filled"), connectorStart)
                );
                cumulative = connectorStart + GROW_DURATION;
              } else {
                cumulative = activateAt + STEP_GAP;
              }
            });

            workflowTimers.push(
              window.setTimeout(() => {
                steps.forEach((stepEl) => stepEl.classList.remove("is-active", "is-checked"));
                connectors.forEach((connectorEl) => connectorEl.classList.remove("is-filled"));
                workflowTimers.push(window.setTimeout(playWorkflowCycle, RESET_PAUSE));
              }, cumulative + LOOP_PAUSE)
            );
          };

          playWorkflowCycle();
        });
      },
      { threshold: 0.3 }
    );
    if (workflowTrack) {
      workflowObserver.observe(workflowTrack);
    }

    spotlights.forEach((spotlight) => spotlightObserver.observe(spotlight));
    [...revealTextItems, ...revealGears, ...revealOrbs].forEach((element) =>
      revealObserver.observe(element)
    );
    if (canUseCursorEffect) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      spotlights.forEach((spotlight) => spotlightObserver.unobserve(spotlight));
      [...revealTextItems, ...revealGears, ...revealOrbs].forEach((element) =>
        revealObserver.unobserve(element)
      );
      spotlightObserver.disconnect();
      revealObserver.disconnect();
      workflowObserver.disconnect();
      workflowTimers.forEach((timerId) => window.clearTimeout(timerId));
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
          <a className="site-brand" href="#top">
            Adelvo Global
          </a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#services">Solutions</a>
            <a href="#process">How it Works</a>
            <a href="#about">About</a>
          </nav>
          <a className="button button-small hero-btn-with-arrow" href="https://calendly.com/adelvo-global-info/new-meeting">
            Book a Call
            <span className="button-arrow">{icon.arrowRight}</span>
          </a>
        </header>

        <main>
          <section className="hero" id="top">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="hero-heading">
                  <span className="hero-heading-accent">AI Employees</span>
                  <span>That Run Your</span>
                  <span>Business.</span>
                </h1>
                <p className="hero-tagline">
                  <span className="hero-tagline-accent">More Customers.</span> Less Busy Work.
                </p>
                <p className="hero-paragraph">
                  Answer calls. Book appointments. Follow up with every lead. Automate the work
                  your team repeats every day.
                </p>
                <div className="hero-cta-row">
                  <a
                    className="button hero-btn-with-arrow"
                    href="https://calendly.com/adelvo-global-info/new-meeting"
                  >
                    Book a Call
                    <span className="button-arrow">{icon.arrowRight}</span>
                  </a>
                  <a className="button button-ghost hero-btn-with-arrow" href="#services">
                    Explore AI Employees
                    <span className="button-arrow">{icon.arrowRight}</span>
                  </a>
                </div>
                <div className="hero-stats-row">
                  <div className="hero-stat">
                    <span className="hero-stat-icon">{icon.zap}</span>
                    <div>
                      <strong>99.9%</strong>
                      <p>Response Rate</p>
                    </div>
                  </div>
                  <span className="hero-stat-divider" aria-hidden="true" />
                  <div className="hero-stat">
                    <span className="hero-stat-icon">{icon.clock}</span>
                    <div>
                      <strong>24/7</strong>
                      <p>Availability</p>
                    </div>
                  </div>
                  <span className="hero-stat-divider" aria-hidden="true" />
                  <div className="hero-stat">
                    <span className="hero-stat-icon">{icon.headset}</span>
                    <div>
                      <strong>0</strong>
                      <p>Missed Calls</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-globe-col">
                <img
                  className="hero-globe-photo"
                  src="/images/hero-globe.png"
                  alt="Globe showing AI Employees automating a call answered, an appointment booked, a follow-up sent, and a workflow completed"
                />
              </div>
            </div>
          </section>

          <section className="services-section" id="services">
            <div className="employees-list">
              <div className="employee-next-separator" aria-hidden="true" />
              {aiEmployees.map((agent, index) => (
                <Fragment key={agent.title}>
                  <article className="employee-card">
                    <div className="employee-hero">
                      <h3 className="employee-hero-title">{agent.title}</h3>
                      <p className="employee-hero-subtitle">{agent.subtitle}</p>
                    </div>
                    <div className={`employee-row${index % 2 === 1 ? " employee-row-reverse" : ""}`}>
                      <div className="employee-visual" aria-label={`${agent.title} image`}>
                        {agent.image ? (
                          <img className="employee-visual-image" src={agent.image} alt={agent.title} />
                        ) : (
                          <span>{agent.title}</span>
                        )}
                      </div>
                      <div className="employee-copy-problem">
                        <span className="employee-problem-label">{agent.problemLabel}</span>
                        <h4 className="employee-problem-headline">{agent.problemHeadline}</h4>
                        <div className="employee-divider" />
                        <ul className="employee-features">
                          {agent.features.map((feature) => (
                            <li key={feature.text}>
                              <span className="employee-feature-icon">{feature.icon}</span>
                              <span className="employee-feature-text">{feature.text}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          className="button button-ghost button-small hero-btn-with-arrow employee-cta-button"
                          href="https://calendly.com/adelvo-global-info/new-meeting"
                        >
                          Book a Call
                          <span className="button-arrow">{icon.arrowRight}</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {index < aiEmployees.length - 1 && (
                    <div className="employee-next-separator" aria-hidden="true" />
                  )}
                </Fragment>
              ))}
              <div className="employee-next-separator" aria-hidden="true" />
            </div>

            <div className="dashboard-block">
              <div className="services-header services-header-dashboard">
                <h2>{aiDashboard.title}</h2>
                <h3 className="dashboard-subheading">{aiDashboard.subtitle}</h3>
                <p className="dashboard-tagline">{aiDashboard.tagline}</p>
              </div>

              <div className="dashboard-image-wrap">
                <img
                  className="dashboard-image"
                  src={aiDashboard.image}
                  alt="AI Dashboard overview showing calls, leads, appointments, and revenue"
                />
              </div>
            </div>
          </section>

          <section className="cta-banner-section">
            <div className="cta-banner">
              <div className="cta-copy">
                <h2>
                  Let&rsquo;s build your first <span>AI Employee.</span>
                </h2>
              </div>
              <a className="cta-banner-button" href="https://calendly.com/adelvo-global-info/new-meeting">
                Book a Call
                <span className="cta-banner-button-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </section>

          <section className="workflow-section" id="process">
            <div className="workflow-header">
              <span className="eyebrow">How it works</span>
              <h2>From your first call to a fully deployed AI Employee.</h2>
            </div>
            <div className="workflow-track">
              {workflowSteps.map((step, index) => (
                <Fragment key={step.number}>
                  <div className="workflow-step" data-step-index={index}>
                    <div className="workflow-circle">
                      <span className="workflow-circle-icon">{step.icon}</span>
                      <span className="workflow-circle-check" aria-hidden="true">
                        {icon.check}
                      </span>
                    </div>
                    <span className="workflow-number">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="workflow-connector" data-connector-index={index}>
                      <span className="workflow-connector-fill" />
                    </div>
                  )}
                </Fragment>
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

          <section className="contact-section" id="about">
            <div className="section-copy">
              <h2 className="why-heading">Why Adelvo Global?</h2>
              <div className="comparison-table">
                <div className="comparison-row comparison-row-head">
                  <div className="comparison-cell comparison-cell-label" />
                  <div className="comparison-cell comparison-cell-adelvo">
                    <span className="comparison-adelvo-icon">{icon.globe}</span>
                    Adelvo Global
                  </div>
                  <div className="comparison-cell comparison-cell-other">Other Companies</div>
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell comparison-cell-label">
                    <span className="comparison-row-icon">{icon.sliders}</span>
                    Tailored to your workflows
                  </div>
                  <div className="comparison-cell comparison-cell-adelvo">
                    <span className="comparison-check">{icon.check}</span>
                  </div>
                  <div className="comparison-cell comparison-cell-other" />
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell comparison-cell-label">
                    <span className="comparison-row-icon">{icon.puzzle}</span>
                    Integrated with your existing tools
                  </div>
                  <div className="comparison-cell comparison-cell-adelvo">
                    <span className="comparison-check">{icon.check}</span>
                  </div>
                  <div className="comparison-cell comparison-cell-other" />
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell comparison-cell-label">
                    <span className="comparison-row-icon">{icon.zap}</span>
                    Fast implementation
                  </div>
                  <div className="comparison-cell comparison-cell-adelvo">
                    <span className="comparison-check">{icon.check}</span>
                  </div>
                  <div className="comparison-cell comparison-cell-other" />
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell comparison-cell-label">
                    <span className="comparison-row-icon">{icon.circleArrow}</span>
                    Continuous optimization
                  </div>
                  <div className="comparison-cell comparison-cell-adelvo">
                    <span className="comparison-check">{icon.check}</span>
                  </div>
                  <div className="comparison-cell comparison-cell-other" />
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell comparison-cell-label">
                    <span className="comparison-row-icon">{icon.muffin}</span>
                    Delivers muffins 🧁
                  </div>
                  <div className="comparison-cell comparison-cell-adelvo" />
                  <div className="comparison-cell comparison-cell-other">
                    <span className="comparison-check">{icon.check}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="real-world-section" aria-labelledby="real-world-title">
            <h2 id="real-world-title" className="real-world-title">
              How it works in the real world
            </h2>
            <p className="real-world-subtitle">
              See how one customer call turns into a completed job.
            </p>
            <div className="real-world-image-wrap">
              <img
                className="real-world-image"
                src="/images/how-it-works-real-world.png"
                alt="Step-by-step example of an AI Employee handling an incoming call from lead to job completion"
              />
            </div>
          </section>

          <footer className="legal-footer">
            <div className="legal-footer-inner">
              <p>Adelvo Global</p>
              <nav className="legal-nav" aria-label="Legal">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/imprint">Imprint</a>
                <a href="mailto:support@adelvo-global.ae">support@adelvo-global.ae</a>
              </nav>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
