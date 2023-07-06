import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";


const ScrollSign = () => {
    return (
        <div className='absolute  hidden xs:bottom-10 bottom-0 w-full lg:flex justify-center items-center'>
            <a href='#about'>
                <div className='w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                    />
                </div>
            </a>
        </div>
    );
};

export default SectionWrapper(ScrollSign, "") ;