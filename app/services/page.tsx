import Nav from "@/components/Nav";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesFooterCTA from "@/components/services/ServicesFooterCTA";

interface ServiceEntry {
  number: string;
  label: string;
  title: string;
  body: string;
  checklist: string[];
  platforms: string[];
  reverse: boolean;
  imageSrc?: string;
}

const services: ServiceEntry[] = [
  {
    number: "01",
    label: "Web Design",
    title: "Stunning, Strategic Websites That Convert",
    body: "Your website is your digital storefront. We design and develop websites that build trust, show authority, and guide your audience into taking action.",
    checklist: [
      "Custom website design — no templates",
      "Calendar & booking system integration",
      "Lead capture, CRM setup & on-page SEO",
    ],
    platforms: ["HighLevel", "Systeme.io", "WordPress", "Webflow", "Wix"],
    reverse: false,
    imageSrc: "/web-design.jpg",
  },
  {
    number: "02",
    label: "Funnel Design",
    title: "Funnels & Automations That Handle the Heavy Lifting",
    body: "From lead generation to sales — we build funnels and automations that handle the heavy lifting for you. Predictable leads, consistent sales, smoother business.",
    checklist: [
      "Lead magnet, webinar & sales page funnels",
      "Email sequences, tagging & lead nurturing",
      "CRM setup & pipeline management",
    ],
    platforms: [],
    reverse: true,
    imageSrc: "/funnel-design.jpg",
  },
  {
    number: "03",
    label: "Social Media",
    title: "Brand-Aligned Content That Positions You as the Expert",
    body: "We create content that attracts, nurtures, and converts your audience — designed to match your brand perfectly.",
    checklist: [
      "Monthly content plan & carousel designs",
      "Reels scripts, concepts & brand-aligned graphics",
      "Social media templates & caption writing",
    ],
    platforms: [],
    reverse: false,
    imageSrc: "/social-media.jpg",
  },
  {
    number: "04",
    label: "Brand Identity",
    title: "Brand Identity That Reflects Your Vision",
    body: "Your brand is the first impression — and it needs to look as premium as the experience you provide. Strategic, cohesive, elevated branding.",
    checklist: [
      "Logo suite — primary, secondary & submarks",
      "Typography, color palette & brand moodboard",
      "Visual identity guidelines & social media kit",
    ],
    platforms: [],
    reverse: true,
    imageSrc: "/brand-identity.jpg",
  },
  {
    number: "05",
    label: "Virtual Assistance",
    title: "Reliable, Strategic Support for Growing Businesses",
    body: "As your business grows, doing everything yourself becomes unsustainable. Strategic behind-the-scenes support that understands your systems, brand, and goals.",
    checklist: [
      "Email management, scheduling & admin tasks",
      "CRM maintenance & client onboarding support",
      "Project coordination & systems management",
    ],
    platforms: [],
    reverse: false,
    imageSrc: "/virtual-assist.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Nav />

      <ServicesHero />

      <main>
        {services.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </main>

      <ServicesFooterCTA />
    </div>
  );
}
