import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Products",
    items: ["MLOps", "AI Agents", "Reporting", "Industrial", "Retail"],
  },
  {
    title: "Industries",
    items: ["Retail", "Manufacturing", "Healthcare", "Financial Services", "Professional Services"],
  },
  {
    title: "Resources",
    items: ["Case Studies", "Blog", "Documentation", "Podcasts", "Webinars"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "Newsroom", "Partners", "Affiliates", "Contact"],
  },
];

const legal = ["Terms of Service", "Privacy Policy", "Trust Center", "AI Policy", "Acceptable Use", "Cookies"];

const socialPaths = [
  "M5 3a2 2 0 100 4 2 2 0 000-4zM3 9h4v8H3V9zM10 9h3.8v1.1c.6-.9 1.7-1.3 2.9-1.3 2.5 0 3.3 1.7 3.3 4V17h-4v-3.7c0-.9-.3-1.6-1.2-1.6s-1.3.7-1.3 1.6V17H10V9z",
  "M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.4 1.8-2.3-.8.5-1.7.8-2.7 1-.8-.8-1.9-1.4-3.1-1.4-2.4 0-4.3 2-4.3 4.4 0 .3 0 .7.1 1C7.8 8.9 4.3 7 2 4.1c-.4.7-.6 1.4-.6 2.3 0 1.5.8 2.9 2 3.6-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.7 2.2 3 4.1 3-1.5 1.2-3.4 1.9-5.4 1.9H0c2 1.3 4.3 2 6.8 2 8.1 0 12.6-6.8 12.6-12.7v-.6c.8-.6 1.6-1.4 2.2-2.3z",
  "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .5 2.2 0 1.3.1 1.7.1 4.9 0 3.2 0 3.6-.1 4.9-.1 1.2-.3 1.8-.5 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.5-1.3 0-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.5-2.2C2 15.6 2 15.2 2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0 5.4c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4zm0 7.2c-1.5 0-2.8-1.3-2.8-2.8S10.5 9.2 12 9.2s2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm5.6-7.4c0 .6-.5 1-1 1s-1-.4-1-1 .4-1 1-1 1 .5 1 1z",
  "M23.5 6.2c-.3-1-1-1.8-2-2C19.7 3.8 12 3.8 12 3.8s-7.7 0-9.5.4c-1 .2-1.8 1-2 2C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2 1.8.4 9.5.4 9.5.4s7.7 0 9.5-.4c1-.2 1.8-1 2-2 .5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z",
];

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #08080d 0%, #100c2e 60%, #08080d 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[1200px] blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(91,78,247,0.6), transparent 70%)",
        }}
      />

      <div className="relative container-x py-16 md:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-6 text-[14px] text-white/55 max-w-[34ch] leading-relaxed">
              Next Layer Intelligence is the enterprise AI platform powering vertical agents, automation, and predictive intelligence for the world&apos;s most demanding teams.
            </p>
            <div className="mt-7">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 font-semibold">
                Get product updates
              </p>
              <form className="flex items-center max-w-[320px] rounded-full bg-white/[0.04] ring-1 ring-white/10 p-1 focus-within:ring-white/25 transition-all">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-3 py-2 text-[13px] text-white placeholder:text-white/40 outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-8 items-center justify-center rounded-full bg-white text-[#08080d] text-[12.5px] font-semibold px-3.5 hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="mt-7 flex items-center gap-2">
              {socialPaths.map((d, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-white/[0.05] hover:bg-white/12 ring-1 ring-white/[0.06] hover:ring-white/15 flex items-center justify-center transition-all"
                  aria-label="Social"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white" opacity="0.85">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12px] font-semibold text-white mb-4 uppercase tracking-[0.12em]">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it}>
                    <Link
                      href="#"
                      className="reveal-on-hover inline-flex items-center text-[13.5px] text-white/55 hover:text-white transition-colors"
                    >
                      {it}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-20 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <p className="text-[12px] text-white/45">
              &copy; {new Date().getFullYear()} Next Layer Intelligence. All rights reserved.
            </p>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[12px] text-white/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
              All systems operational
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <li key={l}>
                <Link href="#" className="text-[12px] text-white/50 hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className="select-none pointer-events-none absolute inset-x-0 -bottom-12 md:-bottom-24 flex justify-center"
      >
        <span
          className="text-[22vw] md:text-[18vw] font-semibold leading-none tracking-tighter bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 80%)",
            WebkitBackgroundClip: "text",
          }}
        >
next layer
        </span>
      </div>
    </footer>
  );
}
