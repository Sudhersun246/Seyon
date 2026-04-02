import { useState } from "react";

export function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputBase =
    "w-full font-['Space_Grotesk'] font-bold text-[14px] leading-[21px] tracking-[-0.32px] text-black rounded-[10px] px-[21px] py-[11px] outline-none transition-colors placeholder:text-black/60 placeholder:font-bold";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[29px]">
      <div>
        <label
          htmlFor="contact-name"
          className="block font-['Space_Grotesk'] font-medium text-[16px] leading-[24px] tracking-[-0.32px] text-[#696969] mb-[8px]"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Michael Carter"
          value={formData.name}
          onChange={handleChange}
          className={`${inputBase} bg-white`}
          style={{ border: "1px solid #F9773B" }}
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block font-['Space_Grotesk'] font-medium text-[16px] leading-[24px] tracking-[-0.32px] text-[#696969] mb-[8px]"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="michaelcarter@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className={`${inputBase} bg-[#F8F8F8] border border-transparent focus:border-[#DF440E]`}
        />
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block font-['Space_Grotesk'] font-medium text-[16px] leading-[24px] tracking-[-0.32px] text-[#696969] mb-[8px]"
        >
          Phone number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+1 650 213 7379"
          value={formData.phone}
          onChange={handleChange}
          className={`${inputBase} bg-[#F8F8F8] border border-transparent focus:border-[#DF440E]`}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-['Space_Grotesk'] font-medium text-[16px] leading-[24px] tracking-[-0.32px] text-[#696969] mb-[8px]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          placeholder="Tell us about your project needs..."
          value={formData.message}
          onChange={handleChange}
          className={`${inputBase} bg-[#F8F8F8] border border-transparent focus:border-[#DF440E] resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[16px] hover:bg-[#c53a0c] transition-colors"
      >
        <span className="font-['Space_Grotesk'] font-medium text-[20px] leading-[20px] text-white">
          Submit
        </span>
        <div className="w-[28px] h-[28px] rounded-[14px] bg-white flex items-center justify-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="transform -rotate-45"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="#DF440E"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </button>
    </form>
  );
}
