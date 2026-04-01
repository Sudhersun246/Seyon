import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ctaBgImage from "@/assets/images/cta/cta-bg.jpg";
import { Mail, Globe, Phone } from "lucide-react";


export function GetInTouch(): React.ReactElement {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { ref, isVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="get-in-touch" className="w-full py-[80px] px-4 md:px-[60px] lg:px-[100px] bg-white">
      <div
        ref={ref}
        className="relative w-full rounded-[24px] overflow-hidden flex flex-col lg:flex-row"
        style={{ background: "linear-gradient(135deg, #DF440E 0%, #FF7342 100%)" }}
      >
        {/* BG image overlay */}
        <div className="absolute inset-0 opacity-10">
          <img src={ctaBgImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>

        {/* Left – contact info */}
        <div className={`relative z-10 w-full lg:w-[45%] p-[40px] flex flex-col gap-[20px] justify-center scroll-fade-left ${isVisible ? "visible" : ""}`}>
          <h2 className="font-['Space_Grotesk'] font-bold text-[36px] leading-[1.2] text-white mb-[8px]">
            Get In Touch
          </h2>

          {/* Office Address */}
          <div className="rounded-[14px] p-[20px] flex items-start gap-[14px]" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
            </svg>
            <div>
              <p className="font-['Space_Grotesk'] font-bold text-[14px] text-white mb-[6px]">Office Address</p>
              <p className="font-['Space_Grotesk'] font-normal text-[13px] leading-[22px] text-white/80">
                Seyon Constrotech Private Limited<br />
                No. 31/3, Vinayagar Kovil Street<br />
                Aminjikarai<br />
                Chennai – 600029
              </p>
            </div>
          </div>

          {/* Email / Website / Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px]">
            {[
              {
                label: "Email",
                value: "contact@seyonconstrotech.com",
                icon: <Mail size={18} color="white" />,
              },
              {
                label: "Website",
                value: "www.seyonconstrotech.com",
                icon: <Globe size={18} color="white" />,
              },
              {
                label: "Phone",
                value: "+91 89258 87381",
                icon: <Phone size={18} color="white" />,
              },
            ].map((item) => (
              <div key={item.label} className="rounded-[12px] p-[16px] flex flex-col gap-[10px]" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                {item.icon}
                <div>
                  <p className="font-['Space_Grotesk'] font-bold text-[12px] text-white mb-[4px]">{item.label}</p>
                  <p className="font-['Space_Grotesk'] font-normal text-[11px] text-white/80 break-words">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – form */}
        <div
          className={`relative z-10 w-full lg:w-[55%] p-[30px] lg:p-[40px] scroll-fade-right ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="bg-white rounded-[20px] p-[32px] h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
              {[
                { id: "c-name", name: "name", label: "Name", type: "text", placeholder: "Michael Carter", bordered: true },
                { id: "c-email", name: "email", label: "Email", type: "email", placeholder: "michaelcarter@gmail.com", bordered: false },
                { id: "c-phone", name: "phone", label: "Phone number", type: "tel", placeholder: "+1 650 213 7379", bordered: false },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-['Space_Grotesk'] font-medium text-[14px] text-[#696969] mb-[8px]">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full font-['Space_Grotesk'] text-[14px] text-black bg-[#F8F8F8] rounded-[10px] px-[18px] py-[11px] outline-none focus:border-[#DF440E] transition-colors placeholder:text-black/40"
                    style={{ border: field.bordered ? "1px solid #F9773B" : "1px solid transparent" }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="c-message" className="block font-['Space_Grotesk'] font-medium text-[14px] text-[#696969] mb-[8px]">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full font-['Space_Grotesk'] text-[14px] text-black bg-[#F8F8F8] rounded-[10px] px-[18px] py-[11px] border border-transparent outline-none focus:border-[#DF440E] transition-colors resize-none placeholder:text-black/40"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[15px] hover:bg-[#c53a0c] transition-colors"
              >
                <span className="font-['Space_Grotesk'] font-medium text-[16px] text-white">Submit</span>
                <div className="w-[26px] h-[26px] rounded-full bg-white flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="-rotate-45" aria-hidden="true">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#DF440E" strokeWidth="2.5" strokeLinecap="square" />
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
