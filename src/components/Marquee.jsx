import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] flex'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap">
            <motion.h1  inital={{x: 0}} 
                        animate={{x: "-100%"}} 
                        transition={{ease: "linear", repeat: Infinity, duration: 5}} 
                        className="text-[22vw] leading-none uppercase pt-1 mb-5 font-semibold">we are ochi</motion.h1>
            
            <motion.h1  inital={{x: 0}} 
                        animate={{x: "-100%"}} 
                        transition={{ease: "linear", repeat: Infinity, duration: 5}} 
                        className="text-[22vw] leading-none uppercase pt-1 mb-5 font-semibold">we are ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marquee

//1:07hs