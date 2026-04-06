import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ctaBgImage from "@/assets/images/cta/cta-bg.webp";
import { ContactForm } from "./contact/ContactForm";

const socialLinks = [
  {
    label: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="4" stroke="white" strokeWidth="1.5" />
        <path d="M10 9l5 3-5 3V9z" fill="white" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function ContactSection(): React.ReactElement {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      className="w-full px-[16px] md:px-[60px] lg:px-[200px] pt-[100px] pb-[100px] bg-white"
      aria-labelledby="contact-heading"
    >
      <div
        ref={sectionRef}
        className="relative w-full rounded-[24px] overflow-hidden flex flex-col lg:flex-row items-center justify-between"
        style={{
          background: "linear-gradient(135deg, #DF440E 0%, #FF7342 100%)",
          padding: "25px 24px 25px 50px",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img src={ctaBgImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(223, 68, 14, 0.85)" }} aria-hidden="true" />
        </div>

        {/* Left Side */}
        <div
          className={`relative w-full lg:w-1/2 min-h-[500px] flex flex-col justify-between scroll-fade-left ${isVisible ? "visible" : ""}`}
        >
          <div className="relative z-10 flex flex-col justify-between h-full p-[50px]">
            <div>
              <h2
                id="contact-heading"
                className="font-['Space_Grotesk'] font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[46px] lg:text-[48px] lg:leading-[61px] tracking-[-0.32px] text-white mb-[20px]"
              >
                Let's build something great together!
              </h2>
              <p className="font-['Space_Grotesk'] font-medium text-[16px] leading-[24px] tracking-[-0.32px] text-white/90">
                Get in touch with us for a consultation or quote on your next commercial project.
              </p>
            </div>

            <div className="flex items-center gap-[10px] mt-[40px]">
              {socialLinks.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  className="w-[50px] h-[50px] rounded-full bg-[#FF5A21] flex items-center justify-center hover:opacity-90 transition-opacity"
                  style={{ boxShadow: "0px 1px 5.5px rgba(185, 72, 23, 0.16)" }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div
          className={`w-full lg:w-[600px] bg-white rounded-[20px] p-[30px] scroll-fade-right ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
