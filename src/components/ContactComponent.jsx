// ContactComponent.jsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
 const formRef = useRef();
 const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
 });

 const [loading, setLoading] = useState(false);

 const handleChange = (e) => {
  const { target } = e;
  const { name, value } = target;

  setForm({
    ...form,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
      "service_oy7hxgs",
      "template_ag4550c",
      {
        from_name: form.name,
        to_name: "Aman Sagar",
        from_email: form.email,
        to_email: "amansagar0307@gmail.com",
        message: form.message,
      },
      "OveJ7crsLih-sJa4N"
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};

return (
  <div
    className={`xl:mt-0 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
type="submit"
className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
dangerouslySetInnerHTML={{
  __html: loading
    ? "Sending..."
    : "Send Message&nbsp; <span style='transform: rotate(-60deg); display: inline-block;'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6 inline-block'><path stroke-linecap='round' stroke-linejoin='round' d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5' /></svg></span>",
}}
/>

      </form>
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
    >
      <EarthCanvas />
    </motion.div>
  </div>
);
};

export default Contact;