import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  // service_dz13s7d
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
        await emailjs.send('service_dz13s7d', 'template_9pn3c2r', {
            from_name: form.name,
            to_name: 'Amitabh',
            from_email: form.email,
            to_email: 'amitabh2002@gmail.com',
            message: form.message
        },
        '2KW0ZAXq1fyglBVCs');
        setForm({
            name: '',
            email: '',
            message: ''
        });
        setLoading(false);
        alert('Your message has been sent');
    } catch(e) {
        setLoading(false);
        alert('Something went wrong while sending email');
    }
  };
  return (
    <section className="sm:px-10 px-5 my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-40">
          <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
            Let's talk
          </h3>
          <p className="text-lg text-[#AFB0B6]">
            Whether you're looking to build a new website, improve your
            exisiting platform, or bring a unique project to life, I'm here to
            help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="text-lg text-[#AFB0B6]">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John"
                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#62646C] shadow-black-200 shadow-2xl focus:outline-none"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-[#AFB0B6]">Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="johndoe@email.com"
                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#62646C] shadow-black-200 shadow-2xl focus:outline-none"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-[#AFB0B6]">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Hi, I'm interested in ..."
                className="w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#62646C] shadow-black-200 shadow-2xl focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="bg-[#3A3A49] px-5 py-2 min-h-12 rounded-lg shadow-[#0E0E10] shadow-2xl flex justify-center items-center text-lg text-white gap-3"
            >
                {loading ? 'Sending...' : 'Sent Message'}
                <img src="/assets/arrow-up.png" alt='arrow-up' className="w-2.5 h-2.5 object-contain invert brightness-0" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
