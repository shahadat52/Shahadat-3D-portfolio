import { motion } from "framer-motion";
import { slideIn } from "../Utilities/motion ";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [show, setshow] = useState(false);
  return (
    <section className="mt-[-60px]">
      <div className={`xl:mt-12 grid lg:grid-cols-2  gap-10 max-h-screen overflow-hidden text-white `}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] p-8 mt-14 rounded-2xl mx-auto '
        >

          <h2 className=''>
            <span className="text-5xl font-bold gradient-text bg-gradient-to-r from-blue-700 via-pink-500 to-pink-500 text-transparent bg-clip-text">Hello world!  <span className="ml-5"> I'm</span> </span>
          </h2>

          <h1 className="text-[80px] font-extrabold">
            <span className="gradient-text bg-gradient-to-r from-blue-700 via-pink-500 to-pink-500 text-transparent bg-clip-text">Shahadat</span>
          </h1>
          <div
            onMouseEnter={() => setshow(true)}
            onMouseLeave={() => setshow(false)}
            className="relative"
          >
            <h1 className="text-xl mt-[-20px] pl-3 relative z-50 font-semibold  gradient-text bg-gradient-to-r from-blue-700 via-pink-500 to-pink-500 text-transparent bg-clip-text">
              {" "}
              Enthusiast Developer From Bangladesh
            </h1>
            <div
              className={`absolute h-full duration-300 ease-in-out  ${show ? "w-full" : "w-1"
                } hover:w-32 z-40  bg-gradient-to-r from-blue-100 via-pink-100 to-pink-200   top-0 left-0`}
            ></div>
          </div>

          <div className="mt-5 hover:bg-gray-800 hover:rounded-xl"  >
            <a href="/shahadat_resume.pdf" download>
              <h1 className="text-center font-semibold border rounded-xl border-pink-300  gradient-text bg-gradient-to-r from-blue-700 via-pink-500 to-pink-500 text-transparent bg-clip-text"
              >
                Download Resume
              </h1>
            </a>
          </div>

        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className=' xl:flex-1  mt-[-60px] lg:mr-[-200px] md:h-[550px] h-[380px] hidden lg:flex'
        >
          <EarthCanvas />
        </motion.div>
      </div>



      <div className="absolute  hidden xs:bottom-10 bottom-0 w-full lg:flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>

      <div className="backdrop-blur-lg -mt-12 ml-10   box-shadow  bg-gradient-to-r md:bg-gradient-to-t from-pink-500 via-pink-700 to-blue-700 md:w-10 w-72 h-12 md:h-72 absolute left-0 -md:left-20 bottom-0 md:top-40 rounded-r-lg">
        <div className="flex flex-row md:flex-col gap-x-5 items-center gap-y-0 md:gap-y-5 justify-center">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.linkedin.com/in/md-shahadat-hossain-a4388a221/"
            title="Linkedin"
            className="flex items-center justify-center w-12 h-12 rounded-full sm:w-10 sm:h-10   text-gray-100"
          >
            <FaLinkedin className="w-6 h-6"></FaLinkedin>
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/shahadat52"
            title="Github"
            className="flex items-center justify-center  rounded-full sm:w-10 sm:h-10  text-gray-100"
          >
            <FaGithub className="w-6 h-6"></FaGithub>
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://web.facebook.com/profile.php?id=100012335082538"
            title="Facebook"
            className="flex items-center justify-center  rounded-full sm:w-10 sm:h-10  text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-6 h-6"
            >
              <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
            </svg>
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.instagram.com/shahadat_hossain_mq/"
            title="Instagram"
            className="flex items-center justify-center  rounded-full sm:w-10 sm:h-10  text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
            </svg>
          </a>

          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://twitter.com/Shahadat696"
            title="Twitter"
            className="flex items-center justify-center rounded-full sm:w-10 sm:h-10  text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-6 h-6"
            >
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, 'hero');