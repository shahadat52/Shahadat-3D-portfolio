import { motion } from "framer-motion"
import { technologies } from "../Constants"
import SectionWrapper from "../hoc/SectionWrapper"
import BallCanvas from "./canvas/Ball"
import { textVariant } from "../Utilities/motion "
import { styles } from "../styles"

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <div className="relative text-gray-500 my-2 py-2   ">
          <div className="absolute">
            <p className="text-xs"> <span>{'<'}</span> h1  <span>{'>'}</span> </p>
            <div className=" md:h-16 h-10 w-[1px] left-1 top-0 bg-gray-600"></div>
            <p className="text-xs"><span>{'<'}</span> h1  <span>{'/>'}</span></p>
          </div>

          <div className="p-3">
            <h2 className="bg-clip-text text-5xl md:text-7xl font-bold  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">My Skills Set</h2>
          </div>
        </div>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>

        {
          technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name} >
              <BallCanvas icon={technology.icon} ></BallCanvas>
            </div>
          ))
        }
      </div >
    </>
  )
}

export default SectionWrapper(Tech, "")