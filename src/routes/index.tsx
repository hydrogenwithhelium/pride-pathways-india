import { createFileRoute } from "@tanstack/react-router";
import { Shield, Scale, Calendar, Ban, Heart, ArrowRight, Trophy, Vote, Send } from "lucide-react";
import { useState } from "react";
import winnerAvatar from "@/assets/winner-avatar.png";

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
          <a href="#hall">HALL</a>
          <a href="#timeline">TIMELINE</a>
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

        <div className="flex justify-center mt-12">
          <a href="#apart" className="border-brut bg-pink text-white font-display px-8 py-4 shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-center">
            EXPLORE THE COMMUNITY
          </a>
        </div>
      </div>

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
          <div className="font-mono-ui text-xs font-bold text-muted-foreground">INDIA · 2026</div>
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
    title: "OUR EVENTS",
    bg: "bg-cream",
    text: "text-navy",
    body: "We host workshops, career-prep sessions, study circles for NEET/JEE/UPSC aspirants, mental-health roundtables, allyship trainings and Pride-month programming — every event curated for psychological safety, accessibility and genuine value. Our flagship community ritual is the GayNEETards 2025 MOD-Admin Election: a transparent, member-driven vote where the community itself nominates, debates and elects the moderators and admins who steward our spaces for the year ahead. No appointments from above, no quiet hand-picking — just a clean, public ballot that keeps leadership accountable to the people it serves.",
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

function HallOfFame() {
  return (
    <section id="hall" className="bg-cream border-b-[3px] border-navy py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-14">
          <div className="border-brut bg-yellow px-4 py-2 font-mono-ui text-xs font-bold text-navy flex items-center gap-2">
            <Trophy className="w-4 h-4" /> HALL OF FAME
          </div>
          <div className="flex-1 h-[3px] bg-navy" />
        </div>

        <h2 className="font-display text-navy text-4xl md:text-6xl leading-[0.9] mb-12">
          MOD-ADMIN ELECTION<br/>
          <span className="bg-pink text-white px-3 inline-block mt-2">WINNER 🏆</span>
        </h2>

        <div className="flex justify-center">
          <div className="relative max-w-md w-full">
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-navy"></div>
            <div className="relative bg-yellow border-brut p-10 text-center">
              <div className="font-mono-ui text-xs font-bold text-navy mb-6">● MOD-ADMIN ELECTION WINNER 2025</div>
              <div className="flex justify-center mb-6">
                <div className="border-brut bg-cream p-4 shadow-brut-sm">
                  <img
                    src={winnerAvatar}
                    alt="MOD-Admin Election Winner 2025 avatar"
                    width={160}
                    height={160}
                    loading="lazy"
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
              <div className="w-16 h-1 bg-navy mx-auto mb-4" />
              <h3 className="font-display text-navy text-4xl md:text-5xl">Soanpapdi</h3>
              <p className="font-mono-ui text-xs text-navy/70 mt-3">ELECTED · GAYNEETARDS · 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  { date: "JUN 2025", title: "GayNEETards Born", body: "The first spark — GayNEETards is created as a safe corner for queer NEET aspirants navigating coaching, hostels and exam pressure." },
  { date: "AUG 2025", title: "LGBTards on Telegram", body: "The community widens — the LGBTards Telegram group is launched as an open hub for LGBTQIA+ students and professionals across India." },
  { date: "SEP 2025", title: "MOD-Admin Election 2025", body: "The community holds its first ever MOD-Admin Election — a transparent, member-driven ballot that puts moderation power directly in the hands of the people who use the space." },
  { date: "OCT 2025", title: "LGBTards Founded", body: "LGBTards is formally established as the parent network — bringing GayNEETards and future chapters under one roof." },
  { date: "2026 · TBD", title: "Next MOD-Admin Election", body: "The next MOD-Admin Election is on the horizon. Date to be announced — leadership stays in the community's hands." },
];

function Timeline() {
  return (
    <section id="timeline" className="bg-navy py-24 border-b-[3px] border-navy overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="font-display text-cream text-2xl md:text-3xl whitespace-nowrap">
            EVENT <span className="text-yellow">TIMELINE</span>
          </h2>
          <div className="flex-1 h-[3px] bg-cream" />
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 h-[6px] bg-cream/20 border-y-2 border-cream/30 hidden md:block" />
          <div className="absolute top-[18px] hidden md:block train-anim z-10">
            <div className="border-brut bg-pink text-white font-mono-ui text-[10px] font-bold px-3 py-1 shadow-brut-sm">
              🚂 LGBTards EXPRESS
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative pt-20 md:pt-24">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative">
                <div className="hidden md:block absolute -top-[58px] left-1/2 -translate-x-1/2 w-6 h-6 border-brut bg-yellow rounded-full" />
                <div className="border-brut bg-cream p-5 shadow-brut h-full">
                  <div className="font-mono-ui text-[11px] font-bold text-pink mb-2">{item.date}</div>
                  <h3 className="font-display text-navy text-lg mb-3">{item.title}</h3>
                  <p className="text-navy/80 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
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
          Two doors. One community. Step into the subreddit that fits you — or join both.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="https://www.reddit.com/r/LGBTards/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-brut bg-navy text-yellow font-display px-8 py-5 shadow-brut hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all w-full sm:w-auto justify-center"
          >
            r/LGBTards <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://www.reddit.com/r/GayNEETards/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-brut bg-pink text-white font-display px-8 py-5 shadow-brut hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all w-full sm:w-auto justify-center"
          >
            r/GayNEETards <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [userId, setUserId] = useState("");
  const [concern, setConcern] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const subject = encodeURIComponent(`[LGBTards] Concern from ${userId}`);
      const body = encodeURIComponent(
        `User ID: ${userId}\nAge Range: ${ageRange}\n\nConcern:\n${concern}`,
      );
      window.location.href = `mailto:hello@lgbtards.in?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-cream border-brut p-5 shadow-brut-sm space-y-3 text-navy">
      <div>
        <label className="font-mono-ui text-[10px] font-bold block mb-1">USER ID · ANY PLATFORM</label>
        <input
          required
          maxLength={200}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="@yourhandle / discord / telegram / email"
          className="w-full border-2 border-navy bg-white px-3 py-2 text-sm font-mono-ui focus:outline-none focus:border-pink"
        />
      </div>
      <div>
        <label className="font-mono-ui text-[10px] font-bold block mb-1">CONCERN</label>
        <textarea
          required
          maxLength={2000}
          rows={3}
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          placeholder="Tell us what's going on — we read every message."
          className="w-full border-2 border-navy bg-white px-3 py-2 text-sm focus:outline-none focus:border-pink resize-none"
        />
      </div>
      <div>
        <label className="font-mono-ui text-[10px] font-bold block mb-1">AGE RANGE</label>
        <select
          required
          value={ageRange}
          onChange={(e) => setAgeRange(e.target.value)}
          className="w-full border-2 border-navy bg-white px-3 py-2 text-sm font-mono-ui focus:outline-none focus:border-pink"
        >
          <option value="">Select…</option>
          <option value="Under 18">Under 18</option>
          <option value="18-24">18–24</option>
          <option value="25-34">25–34</option>
          <option value="35-44">35–44</option>
          <option value="45+">45+</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full border-brut bg-pink text-white font-display px-4 py-3 shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <Send className="w-4 h-4" />
        {status === "loading" ? "SENDING…" : "SEND MESSAGE"}
      </button>
      {status === "success" && (
        <p className="font-mono-ui text-xs text-navy bg-yellow border-2 border-navy px-3 py-2">
          ✓ Got it — we'll be in touch.
        </p>
      )}
      {status === "error" && (
        <p className="font-mono-ui text-xs text-white bg-pink border-2 border-navy px-3 py-2">
          ✗ {errorMsg || "Could not send. Try again."}
        </p>
      )}
    </form>
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
            <li><a href="#hall" className="hover:text-pink">Hall of Fame</a></li>
            <li><a href="#timeline" className="hover:text-pink">Timeline</a></li>
            <li><a href="#join" className="hover:text-pink">Join</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-ui text-xs text-yellow mb-4">REACH OUT</div>
          <ContactForm />
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
  void Vote;
  return (
    <main className="min-h-screen bg-cream">
      <Ticker />
      <Nav />
      <Hero />
      <About />
      <Apart />
      <HallOfFame />
      <Timeline />
      <CTA />
      <Footer />
    </main>
  );
}
