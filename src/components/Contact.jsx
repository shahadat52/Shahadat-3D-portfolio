import { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../Utilities/motion ";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";


// template_li8004i
// service_c1gls4p
// yDKG1P_4gE_6ARh5o


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_c1gls4p',
      'template_li8004i',
      {
        from_name: form.name,
        to_name: "Shahadat Hossain",
        from_email: form.email,
        to_email: "shahadathossain.sh255@gmail.com",
        message: form.message,
      },
      'yDKG1P_4gE_6ARh5o'

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
      )
  };
  return (
    <div className={`xl:mt-12 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-tertiary xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="p-8 rounded-2xl text-gray-300 grid justify-center items-center "
      >
        <div>
        <p className={styles.sectionSubText}>Get in touch</p>
        <div className="relative  text-gray-500 my-4 py-2 ">
          <div className="absolute">
            <p className="text-xs">
              {" "}
              <span>{"<"}</span> h1 <span>{">"}</span>{" "}
            </p>
            <div className="h-16 w-[1px] left-1 top-0 bg-gray-600"></div>
            <p className="text-xs">
              <span>{"<"}</span> h1 <span>{"/>"}</span>
            </p>
          </div>

          <div className="p-3">
            <h2 className="bg-clip-text text-6xl font-bold  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Contact.
            </h2>
          </div>
        </div>
        <p className="w-full ">
          Feel free to send me any message about me or wanna hire me or need any
          help in your project. I will reply you as soon as possible. Please
          enter a valid emal so that I can contact you.{" "}
        </p>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.75]  p-8 rounded-2xl'
      >

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-4'
        >
          <label className='flex flex-row gap-1'>
            <div>
              <span className='text-white font-medium mb-'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-gray-600 py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </div>
            <div>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-gray-600 py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </div>
          </label>
          <label className='flex flex-col'>


          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-gray-600 py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-gray-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");