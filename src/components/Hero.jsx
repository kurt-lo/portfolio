import { motion } from "framer-motion";
import gif from '../assets/images/giphy.gif';
import cv from '../assets/cv/Russel_Kurt_Nolasco.pdf';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdWavingHand } from "react-icons/md";

const Hero = () => {
  return (
    <main id="home">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content pt-[4rem] lg:pt-0 gap-[4rem] flex-col lg:flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={gif}
              className="max-w-[15rem] lg:max-w-[25rem] rounded-2xl shadow-2xl"
              alt='A boy sitting on a chair'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className='text-center lg:text-left'>
              <span className='flex justify-center lg:justify-start items-center gap-[.5rem]'><span>Hello, I&apos;m</span>
                <MdWavingHand size={25} className='text-primary animate-wave' />
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold">
                Russel Kurt Nolasco.
              </h1>
              <p className="py-6">
                An aspiring web developer. Dedicated to continuous learning growing in the tech field.
              </p>
              <ul className='flex justify-center lg:justify-start gap-[.7rem] pb-[1.5rem]'>
                <li>
                  <a href="https://github.com/kurt-lo" target='_blank'>
                    <FaGithub size={37} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kurtlo/" target='_blank'>
                    <FaLinkedin size={37} />
                  </a>
                </li>
                <li>
                  <a href="mailto:kurtlonolasco@gmail.com"><SiGmail size={37} /></a>
                </li>
              </ul>
              <div>
                <a
                  href={cv}
                  download
                  className="btn btn-primary font-[700] font-mono"
                >
                  FIND OUT MORE
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Hero