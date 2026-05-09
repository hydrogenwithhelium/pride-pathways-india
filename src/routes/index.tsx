import { createFileRoute } from "@tanstack/react-router";
import { Shield, Scale, Calendar, Ban, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LGBTards — Guidance & Help For LGBTQIA+ India" },
      { name: "description", content: "LGBTards is India's community hub for LGBTQIA+ professionals, aspirants, college students and teens — guidance, legal help, events, and a safe moderated space." },
    ],
  }),
});

const TICKER_ITEMS = ["FOUNDING CHAPTER", "BASED IN INDIA", "JOIN THE COMMUNITY", "LGBTQIA+ FIRST", "PARENT OF GAYNEETARDS", "REGISTRATIONS OPEN"];

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="bg-navy text-yellow border-b-[3px] border-navy overflow-hidden py-2">
      <div className="flex ticker whitespace-nowrap font-mono-ui text-xs font-bold">
        {items.map((t, i) => (
          <span key={i} className="px-6 flex items-center gap-6">
            {t} <span className="text-pink">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="bg-cream border-b-[3px] border-navy">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 border-brut bg-yellow flex items-center justify-center font-display text-navy text-xl">L</div>
          <div className="font-display text-xl text-navy leading-none">
            LGBT<span className="text-pink">ards</span>
            <div className="text-[10px] font-mono-ui text-muted-foreground mt-1">EST. INDIA</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-10 font-mono-ui text-sm font-bold text-navy">
          <a href="#home" className="text-pink border-b-2 border-pink pb-1">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#apart">WHY US</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a href="#join" className="border-brut bg-pink text-white font-display px-5 py-3 shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2 text-sm">
          <Heart className="w-4 h-4" /> JOIN US
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative bg-cyan border-b-[3px] border-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-32 relative z-10">
        <div className="flex justify-center mb-10">
          <div className="border-brut bg-navy text-yellow px-6 py-3 font-mono-ui text-xs font-bold">
            WE BUILT THE COMMUNITY WE WISHED EXISTED
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-pink"></div>
          <div className="relative bg-yellow border-brut px-8 md:px-16 py-16 md:py-20 text-center">
            <h1 className="font-display text-navy text-6xl md:text-8xl leading-[0.9] mb-6">
              LGBT<span className="block md:inline">ards</span>
            </h1>
            <div className="text-navy font-display text-xl md:text-2xl tracking-tight">
              GUIDANCE · COMMUNITY · INDIA
            </div>
            <div className="w-24 h-1 bg-navy mx-auto my-6" />
            <p className="font-mono-ui text-navy text-sm">FOUNDING EDITION · 2026</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
          <a href="#join" className="border-brut bg-pink text-white font-display px-8 py-4 shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-center">
            SECURE YOUR SPOT
          </a>
          <a href="#apart" className="border-brut bg-cyan text-navy font-display px-8 py-4 shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-center">
            EXPLORE THE COMMUNITY
          </a>
        </div>
      </div>

      {/* Cloud-like decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream/40 to-transparent" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-cream border-b-[3px] border-navy py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12 gap-6 flex-wrap">
          <div className="border-brut bg-cream px-4 py-2 font-mono-ui text-xs font-bold text-navy">
            COMMUNIQUÉ — 01
          </div>
          <div className="flex-1 h-[2px] bg-navy/30 min-w-12" />
          <div className="font-mono-ui text-xs font-bold text-muted-foreground">NEW DELHI, INDIA · 2026</div>
        </div>

        <div className="relative inline-block mb-12">
          <h2 className="font-display text-navy text-6xl md:text-8xl leading-[0.85]">ABOUT</h2>
          <div className="relative inline-block mt-2">
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-pink"></div>
            <div className="relative bg-yellow border-brut px-6 py-3">
              <h2 className="font-display text-navy text-5xl md:text-7xl leading-none">LGBTards.</h2>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-pink pl-6 mb-10">
          <p className="font-display text-navy text-2xl md:text-3xl leading-tight">
            <span className="text-pink text-4xl leading-none">"</span>
            India's home for LGBTQIA+ professionals, aspirants and students — built by the community, for the community.
          </p>
        </div>

        <div className="space-y-6 text-lg text-navy/90 leading-relaxed max-w-3xl">
          <p>
            <span className="font-display text-navy">LGBTards</span> is the parent platform of <span className="font-bold text-pink">GayNEETards</span> and the wider <span className="font-bold">LGBTards</span> network — a India-based community dedicated to walking alongside LGBTQIA+ professionals, aspirants, college students and teenagers who need guidance, mentorship or simply a place to be heard.
          </p>
          <p>
            Whether you're navigating board exams, cracking NEET, surviving college, building a career, or stepping into your identity for the first time — we offer structured support, vetted resources, peer mentorship, and a moderated space where you are met with empathy, not judgment. From academic strategy to legal awareness to mental-health signposting, every resource we publish is built around one question: <span className="font-bold">does this actually help the person on the other side of the screen?</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: Ban,
    title: "ZERO DOXXING. ZERO HATE.",
    bg: "bg-yellow",
    text: "text-navy",
    body: "We do not promote, tolerate, or platform doxxing, outing, or targeted hate speech in any form. Privacy is non-negotiable — no member's identity, location, orientation or personal details are ever exposed without explicit consent. Any attempt to weaponise personal information against a community member results in immediate, permanent removal and, where applicable, escalation to legal channels.",
  },
  {
    icon: Scale,
    title: "LEGAL & CYBER HELP DESK",
    bg: "bg-cyan",
    text: "text-navy",
    body: "Our in-house legal and cyber-safety team is on standby for community members facing harassment, blackmail, online abuse, discrimination, or rights-related queries under Indian law. From drafting takedown notices and advising on IPC/IT Act provisions to coordinating with cyber-crime cells — we provide free first-line guidance and connect you with vetted lawyers and counsellors when matters need to escalate offline.",
  },
  {
    icon: Calendar,
    title: "EVENTS & MEETUPS",
    bg: "bg-cream",
    text: "text-navy",
    body: "We host workshops, career-prep sessions, study circles for NEET/JEE/UPSC aspirants, mental-health roundtables, allyship trainings, Pride-month programming and IRL meetups across Indian cities. Every event is curated for psychological safety, accessibility, and genuine value — no performative panels, no rainbow-washing, just programming that delegates, students and professionals actually want to show up to.",
  },
  {
    icon: Shield,
    title: "STRICT MODERATION POLICY",
    bg: "bg-pink",
    text: "text-white",
    body: "Racism, casteism, religious bigotry, transphobia, biphobia, misogyny and queerphobia have no home here. Our moderation team enforces a clearly published code of conduct around the clock, with transparent reporting workflows and zero tolerance for slurs or supremacist rhetoric — regardless of who they're aimed at. The community stays safe because the rules are real, visible, and consistently enforced.",
  },
];

function Apart() {
  return (
    <section id="apart" className="bg-navy py-24 border-b-[3px] border-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-14">
          <h2 className="font-display text-cream text-2xl md:text-3xl whitespace-nowrap">
            WHAT SETS LGBT<span className="text-pink">ards</span> APART
          </h2>
          <div className="flex-1 h-[3px] bg-cream" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PILLARS.map(({ icon: Icon, title, bg, text, body }) => (
            <div key={title} className={`${bg} ${text} border-brut p-8 md:p-10 shadow-brut`}>
              <Icon className="w-10 h-10 mb-6" strokeWidth={2.5} />
              <h3 className={`font-display text-xl md:text-2xl mb-4 ${text}`}>{title}</h3>
              <p className="leading-relaxed opacity-95 text-[15px]">{body}</p>
              <div className={`w-16 h-1 mt-6 ${text === "text-white" ? "bg-white" : "bg-navy"}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="join" className="bg-yellow border-b-[3px] border-navy py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block border-brut bg-cream px-4 py-2 font-mono-ui text-xs font-bold text-navy mb-8">
          ONE LAST THING —
        </div>
        <h2 className="font-display text-navy text-4xl md:text-6xl leading-[0.95] mb-8">
          THE COMMUNITY YOU<br/>
          <span className="bg-pink text-white px-3 inline-block mt-2">WISHED EXISTED.</span>
        </h2>
        <p className="text-navy text-lg max-w-2xl mx-auto mb-10">
          Join LGBTards — get guidance, get heard, get supported. Founding members are permanent. Your name is part of the first chapter.
        </p>
        <a href="#" className="inline-flex items-center gap-3 border-brut bg-navy text-yellow font-display px-8 py-5 shadow-brut hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
          REGISTER NOW <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-navy text-cream py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl mb-3">LGBT<span className="text-pink">ards</span></div>
          <p className="text-cream/70 text-sm leading-relaxed">
            Parent of GayNEETards & the LGBTards network. Built in India, for India's LGBTQIA+ community.
          </p>
        </div>
        <div>
          <div className="font-mono-ui text-xs text-yellow mb-4">EXPLORE</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-pink">About</a></li>
            <li><a href="#apart" className="hover:text-pink">Why Us</a></li>
            <li><a href="#join" className="hover:text-pink">Join</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-ui text-xs text-yellow mb-4">REACH OUT</div>
          <p className="text-sm text-cream/70">hello@lgbtards.in</p>
          <p className="text-sm text-cream/70 mt-1">Legal & Cyber Help: legal@lgbtards.in</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-cream/20 flex flex-wrap justify-between gap-4 text-xs font-mono-ui text-cream/60">
        <div>© 2026 LGBTards · Made with care in India</div>
        <div>FOUNDING EDITION</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <Ticker />
      <Nav />
      <Hero />
      <About />
      <Apart />
      <CTA />
      <Footer />
    </main>
  );
}
