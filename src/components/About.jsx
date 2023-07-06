
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../Utilities/motion ";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (

  <Tilt className="xs:w-[250px] w-full'" >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>

);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <div className="relative text-gray-500 my-2 py-2   ">
          <div className="absolute">
            <p className="text-xs"> <span>{'<'}</span> h1  <span>{'>'}</span> </p>
            <div className="md:h-16 h-10 w-[1px] left-1 top-0 bg-gray-600"></div>
            <p className="text-xs"><span>{'<'}</span> h1  <span>{'/>'}</span></p>
          </div>

          <div className="p-3">
            <h2 className="bg-clip-text text-5xl md:text-7xl font-bold  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Overview.</h2>
          </div>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled developer with experience in 
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center mx-auto  gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");