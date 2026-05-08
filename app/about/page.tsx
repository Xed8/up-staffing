import Nav from "@/components/Nav";

const differentiators = [
  {
    number: "01",
    title: "Custom Everything",
    body: "Every website, funnel, and brand asset is built from scratch for your business. We don't reskin templates and call it \"custom design.\" If it looks generic, we failed — and we don't fail.",
  },
  {
    number: "02",
    title: "Global Team, Local Understanding",
    body: "We serve clients across multiple markets and timezones. We understand that different audiences need different approaches — cultural tone, timezone coverage, compliance requirements — and we build for your audience, not ours.",
  },
  {
    number: "03",
    title: "Systems, Not Just Designs",
    body: "A pretty website without a CRM, email sequences, and booking system is just a digital brochure. We build the full machine — so leads come in, get nurtured, and convert without you manually chasing every one.",
  },
  {
    number: "04",
    title: "Speed Without Shortcuts",
    body: "Most agencies take 8–12 weeks to deliver a website. We move in 2–3 weeks. Not because we cut corners — because we don't waste time in endless revision loops and committee meetings.",
  },
];

const teamMembers = [
  {
    initials: "CF",
    name: "[Co-Founder Name]",
    role: "Co-Founder & [Title]",
    bio: "[2–3 sentence bio about their background, what they bring to UpVirtual, and what drives them. Keep it human — mention a skill, a belief, or a quirk.]",
  },
  {
    initials: "CF",
    name: "[Co-Founder Name]",
    role: "Co-Founder & [Title]",
    bio: "[2–3 sentence bio about their background, what they bring to UpVirtual, and what drives them.]",
  },
  {
    initials: "TM",
    name: "[Team Member Name]",
    role: "[Role Title]",
    bio: "[2–3 sentence bio.]",
  },
];

const values = [
  {
    title: "Radical Transparency",
    body: "You'll always know where your project stands. No surprises, no vague updates.",
  },
  {
    title: "Ship Over Perfect",
    body: "Done and live beats \"almost perfect\" sitting in a Google Doc. We iterate fast and improve in real-time.",
  },
  {
    title: "Ownership Mentality",
    body: "We don't treat your project like a ticket in a queue. Your business is our business until it's thriving.",
  },
  {
    title: "Direct Communication",
    body: "We say what we mean. If something won't work, we'll tell you — and offer a better solution.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] py-28 md:py-36 px-6">
        <div className="max-w-350 mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B]">
              About UpVirtual
            </p>
            <div className="w-10 h-[2px] bg-[#B8A88A]" />
          </div>
          <h1 className="font-cormorant text-[40px] md:text-[64px] font-light text-[#F5F5F0] leading-[1.05] max-w-3xl mb-8">
            Built Different. On Purpose.
          </h1>
          <p className="font-jost font-light text-[16px] md:text-[20px] leading-[1.7] text-[#C8C5BC] max-w-2xl">
            We started UpVirtual because we saw too many businesses getting burned by agencies that overpromise and underdeliver. So we built something better — a team that&apos;s fast, technical, and obsessed with results.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B] mb-4">
              Our Story
            </p>
            <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#1A1A1A] leading-tight mb-8">
              Why UpVirtual Exists
            </h2>
            <div
              className="font-cormorant leading-none text-[#E8E4DC] select-none hidden md:block"
              style={{ fontSize: "200px" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
          </div>
          <div className="[border-left:3px_solid_#B8A88A] pl-8 space-y-6">
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.8] text-[#2D2D2D]">
              Most agencies sell you a website and disappear. Or worse — they lock you into a 6-month retainer with nothing to show for it.
            </p>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.8] text-[#2D2D2D]">
              We&apos;ve been on the other side of that. We&apos;ve seen businesses bleed money on &ldquo;brand strategies&rdquo; that never ship, funnels that never convert, and designers who ghost after the deposit clears.
            </p>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.8] text-[#2D2D2D]">
              UpVirtual exists to be the opposite of that. We&apos;re a digital agency built by people who actually build things — developers, designers, and marketers who&apos;d rather show results than pitch decks.
            </p>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.8] text-[#2D2D2D]">
              We keep our team lean, our communication direct, and our turnaround fast. No account managers. No layers. You talk to the people doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-panel py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto">
          <div className="mb-14">
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B] mb-4">
              What Makes Us Different
            </p>
            <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#1A1A1A] leading-tight">
              No Fluff. No Templates. No BS.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-xl p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="font-cormorant text-[56px] font-light text-[#C8C5BC] leading-none mb-4">
                  {item.number}
                </p>
                <h3 className="font-jost text-[20px] md:text-[24px] font-bold text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="font-jost font-light text-[16px] leading-[1.6] text-[#3D3D3D]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto">
          <div className="mb-14">
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B] mb-4">
              The Team
            </p>
            <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#1A1A1A] leading-tight">
              The People Behind the Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] [border-top:3px_solid_#B8A88A] flex flex-col items-center text-center"
              >
                <div className="w-[120px] h-[120px] rounded-full bg-[#D4D0C8] flex items-center justify-center mb-6">
                  <span className="font-jost text-[24px] font-semibold text-[#6B6B6B]">
                    {member.initials}
                  </span>
                </div>
                <p className="font-jost text-[22px] font-semibold text-[#1A1A1A] mb-1">{member.name}</p>
                <p className="font-jost text-[14px] uppercase tracking-[0.10em] text-[#6B6B6B] mb-5">
                  {member.role}
                </p>
                <p className="font-jost font-light text-[16px] leading-[1.6] text-[#3D3D3D] text-left">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#1A1A1A] py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto">
          <div className="mb-14 text-center">
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#8A8A8A] mb-4">
              Our Values
            </p>
            <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#F5F5F0] leading-tight">
              What We Stand On
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#B8A88A] shrink-0" />
                  <h3 className="font-jost text-[20px] font-semibold text-[#F5F5F0]">{value.title}</h3>
                </div>
                <p className="font-jost font-light text-[16px] leading-[1.6] text-[#B8B5AC] pl-5">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] border-t border-[rgba(255,255,255,0.08)] py-20 md:py-[120px] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#F5F5F0] leading-tight mb-6">
            Ready to Work With a Team That Actually Delivers?
          </h2>
          <p className="font-jost font-light text-[16px] md:text-[18px] text-[#B8B5AC] mb-10 leading-relaxed">
            Book a free discovery call and let&apos;s figure out exactly what your business needs — no pitch, no pressure.
          </p>
          <a
            href="https://cal.com/clint-cena"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost font-semibold text-[14px] uppercase tracking-[0.12em] text-[#1A1A1A] bg-[#F5F5F0] px-10 py-5 rounded-lg hover:bg-white transition-colors inline-block"
          >
            Book a Free Discovery Call →
          </a>
        </div>
      </section>
    </div>
  );
}
