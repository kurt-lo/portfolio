import profileImage from '../assets/images/profile.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import Button from './Button';

const Hero = () => {
  return (
    <main id="home">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content pt-[4rem] lg:pt-0 gap-[4rem] flex-col lg:flex-row-reverse">
          <img
            src={profileImage}
            className="max-w-[15rem] lg:max-w-[25rem] rounded-2xl shadow-2xl"
            alt='A boy sitting on a chair'
          />
          <div className='text-center lg:text-left'>
            <p className='flex justify-center lg:justify-start items-center gap-[.5rem]'>Hello, I&apos;m <MdWavingHand size={25} className='text-primary' /></p>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Russel Kurt Nolasco.
            </h1>
            <p className="py-6">
              An aspiring web developer. Dedicated to continuous learning growing in the tech field.
            </p>
            <ul className='flex justify-center lg:justify-start gap-[1rem] pb-[1.5rem]'>
              <li>
                <a href="https://github.com/kurt-lo" target='_blank'>
                  <FaGithub size={50} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kurtlo/" target='_blank'>
                  <FaLinkedin size={50} />
                </a>
              </li>
            </ul>
            <div>
              <Button className='font-[700]'>FIND OUT MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero