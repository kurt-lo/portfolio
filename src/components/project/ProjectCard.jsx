import Card from "./Card"
import { FaGithub } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { SiDaisyui } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeCss } from "react-icons/bs";
import { SiJquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import instantMernNoodles from '../../assets/images/instantmernnoodles.png'
import bookSwift from '../../assets/images/bookswift.png'
import blogr from '../../assets/images/blogr.png'
import futurevault from '../../assets/images/futurevault.png'
import navigation from '../../assets/images/navigation.png'
import carsApi from '../../assets/images/cars-api.png'
import nulqueue from '../../assets/images/nulqueue.png'
import zoomy from '../../assets/images/zoomy.png'
import reactYt from '../../assets/images/react-youtube.png'

const ProjectCard = () => {

    const iconClass = 'text-secondary hover:-translate-y-1 duration-[400ms] cursor-grab';

    return (
        <div className="flex flex-wrap justify-center gap-[2rem]">
            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={instantMernNoodles} alt="Homepage of InstantMernNoodles" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='Instant Mern Noodles'
                    description='A fullstack e-commerce for instant noodles.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/instantmern-noodles'
                    githubIcon={<FaGithub size={20} />}
                    videoDemo='Demo'
                    videoDemoLink='https://drive.google.com/file/d/1f5PExk3A1_aCT9C_Kxk32gK2SgKjVTSF/view'
                    videoDemoIcon={<FaVideo  size={20} />}
                >
                    <>
                        <FaReact size={20} className={iconClass} />
                        <FaNodeJs size={20} className={iconClass} />
                        <SiExpress size={20} className={iconClass} />
                        <DiMongodb size={20} className={iconClass} />
                        <SiTailwindcss size={20} className={iconClass} />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={zoomy} alt="Homepage of Zoomy" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='Zoomy'
                    description='A video conference call.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/Zoomy'
                    githubIcon={<FaGithub size={20} />}
                    live='Live'
                    liveLink='https://zoomy-gray.vercel.app/'
                    liveIcon={<IoGlobeSharp size={20} />}
                    videoDemo='Demo'
                    videoDemoLink='https://www.youtube.com/watch?v=ue3OmChzzIM'
                    videoDemoIcon={<FaVideo  size={20} />}
                >
                    <>
                        <SiNextdotjs size={20} className={iconClass} />
                        {/* <SiClerk size={20} className={iconClass} /> */}
                        <SiTailwindcss size={20} className={iconClass} />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={reactYt} alt="Homepage of Youtube Clone" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='React Youtube Clone'
                    description='A youtube clone made with react and rapid api.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/react-youtube'
                    githubIcon={<FaGithub size={20} />}
                    live='Live'
                    liveLink='https://react-youtube-rho.vercel.app/'
                    liveIcon={<IoGlobeSharp size={20} />}
                    videoDemo='Demo'
                    videoDemoLink='https://www.youtube.com/watch?v=-Cg8HpHjK4Y'
                    videoDemoIcon={<FaVideo  size={20} />}
                >
                    <>
                        <FaReact size={20} className={iconClass} />
                        <SiTailwindcss size={20} className={iconClass} />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={bookSwift} alt="Homepage of bookSwift" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='BookSwift'
                    description='A book management crud website using json-server.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/BookSwift'
                    githubIcon={<FaGithub size={20} />}
                >
                    <>
                        <SiNextdotjs size={20} className={iconClass} />
                        <SiTailwindcss size={20} className={iconClass} />
                        <SiTypescript size={20} className={iconClass} />
                        <BsFiletypeJson size={20} className={iconClass} />
                        <SiDaisyui size={20} className={iconClass} />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={blogr} alt="Homepage of blogr" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='Blogr'
                    description='Designed and developed a responsive and interactive blog website based on the Frontend Mentor challenge.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/blogr'
                    githubIcon={<FaGithub size={20} />}
                    live='Live'
                    liveLink='https://blogr-snowy.vercel.app/'
                    liveIcon={<IoGlobeSharp size={20} />}
                >
                    <>
                        <SiNextdotjs size={20} className={iconClass} />
                        <SiTailwindcss size={20} className={iconClass} />
                        <SiTypescript size={20} className={iconClass} />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={futurevault} alt="Overview of futurevault" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='Future Vault'
                    description='A desktop application that predict number of student enrollment based on historical data.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/futurevault'
                    githubIcon={<FaGithub size={20} />}
                >
                    <>
                        <FaPython size={20} className={iconClass} />
                        <SiNumpy size={20} className={iconClass} />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={nulqueue} alt="Landing page of Navigation" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='Queueing Management System'
                    description='Developed a queue management system for NU Laguna campus'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/NUL-QUEUE'
                    githubIcon={<FaGithub size={20} />}
                >
                    <>
                        <FaHtml5 size={20} className={iconClass} />
                        <BsFiletypeCss size={20} className={iconClass} />
                        <IoLogoJavascript size={20} className={iconClass} />
                        <SiPhp size={20} className={iconClass} />
                        <SiJquery size={20} className={iconClass} />
                        <FaBootstrap size={20} className={iconClass} />
                        <SiMysql size={20} className={iconClass} />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={navigation} alt="Landing page of Navigation" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='Navigation'
                    description='Created a landing page, showing my abilities in making websites look good and work well.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/navigation'
                    githubIcon={<FaGithub size={20} />}
                    live='Live'
                    liveLink='https://navigation-one-nu.vercel.app/'
                    liveIcon={<IoGlobeSharp size={20} />}
                >
                    <>
                        <SiNextdotjs size={20} className={iconClass} />
                        <SiTailwindcss size={20} className={iconClass} />
                        <SiTypescript size={20} className={iconClass} />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={carsApi} alt="Landing page of carsApi" className="hover:scale-150 ease-in-out duration-500" />
                </figure>
                <Card
                    cardTitle='Cars API'
                    description='Developed and deployed an interactive website for exploring car-related data, showcasing proficiency in API integration.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/cars-api'
                    githubIcon={<FaGithub size={20} />}
                    live='Live'
                    liveLink='https://cars-api-sigma.vercel.app/'
                    liveIcon={<IoGlobeSharp size={20} />}
                >
                    <>
                        <FaReact size={20} className={iconClass} />
                        <SiTailwindcss size={20} className={iconClass} />
                    </>
                </Card>
            </div>
        </div>
    )
}

export default ProjectCard