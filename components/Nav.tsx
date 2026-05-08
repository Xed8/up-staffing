import Image from "next/image";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-[rgba(0,0,0,0.08)]">
      <div className="max-w-350 mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <Image src="/company-logo.PNG" alt="UpVirtual" width={120} height={40} className="h-8 w-auto object-contain" />
          <span className="font-jost text-[13px] tracking-widest uppercase text-ink">UpVirtual</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="font-jost text-[13px] tracking-widest uppercase text-[rgba(26,26,26,0.55)] hover:text-ink transition-colors">
            Home
          </a>
          <a href="/services" className="font-jost text-[13px] tracking-widest uppercase text-[rgba(26,26,26,0.55)] hover:text-ink transition-colors">
            Services
          </a>
          <a href="/cloud-services" className="font-jost text-[13px] tracking-widest uppercase text-[rgba(26,26,26,0.55)] hover:text-ink transition-colors">
            Cloud Services
          </a>
          <a href="/about" className="font-jost text-[13px] tracking-widest uppercase text-[rgba(26,26,26,0.55)] hover:text-ink transition-colors">
            About
          </a>
        </div>
        <a
          href="https://cal.com/clint-cena"
          target="_blank"
          rel="noopener noreferrer"
          className="font-jost text-[12px] tracking-[0.12em] uppercase text-ink border border-[rgba(26,26,26,0.25)] px-4 py-2 hover:bg-ink hover:text-cream transition-colors"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
