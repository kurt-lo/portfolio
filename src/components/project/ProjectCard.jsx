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
import instantMernNoodles from '../../assets/images/instantmernnoodles.png'
import bookSwift from '../../assets/images/bookswift.png'
import blogr from '../../assets/images/blogr.png'
import futurevault from '../../assets/images/futurevault.png'
import navigation from '../../assets/images/navigation.png'
import carsApi from '../../assets/images/cars-api.png'

const ProjectCard = () => {
    return (
        <div className="flex flex-wrap justify-center gap-[2rem]">
            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={instantMernNoodles} alt="Homepage of InstantMernNoodles" />
                </figure>
                <Card
                    cardTitle='Instant Mern Noodles'
                    description='A fullstack e-commerce for instant noodles.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/instantmern-noodles'
                    githubIcon={<FaGithub size={20} />}
                >
                    <>
                        <FaReact size={20} className="text-secondary" />
                        <FaNodeJs size={20} className="text-secondary" />
                        <SiExpress size={20} className="text-secondary" />
                        <DiMongodb size={20} className="text-secondary" />
                        <SiTailwindcss size={20} className="text-secondary" />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={bookSwift} alt="Homepage of bookSwift" />
                </figure>
                <Card
                    cardTitle='BookSwift'
                    description='A book management crud website using json-server.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/BookSwift'
                    githubIcon={<FaGithub size={20} />}
                >
                    <>
                        <SiNextdotjs size={20} className="text-secondary" />
                        <SiTailwindcss size={20} className="text-secondary" />
                        <SiTypescript size={20} className="text-secondary" />
                        <BsFiletypeJson size={20} className="text-secondary" />
                        <SiDaisyui size={20} className="text-secondary" />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={blogr} alt="Homepage of blogr" />
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
                        <SiNextdotjs size={20} className="text-secondary" />
                        <SiTailwindcss size={20} className="text-secondary" />
                        <SiTypescript size={20} className="text-secondary" />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={futurevault} alt="Overview of futurevault" />
                </figure>
                <Card
                    cardTitle='Future Vault'
                    description='A desktop application that predict number of student enrollment based on historical data.'
                    code='Code'
                    githubLink='https://github.com/kurt-lo/futurevault'
                    githubIcon={<FaGithub size={20} />}
                >
                    <>
                        <FaPython size={20} className="text-secondary" />
                        <SiNumpy size={20} className="text-secondary" />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={navigation} alt="Landing page of Navigation" />
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
                        <SiNextdotjs size={20} className="text-secondary" />
                        <SiTailwindcss size={20} className="text-secondary" />
                        <SiTypescript size={20} className="text-secondary" />
                    </>
                </Card>
            </div>

            <div className="card w-80 sm:w-96 glass">
                <figure>
                    <img src={carsApi} alt="Landing page of carsApi" />
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
                        <FaReact size={20} className="text-secondary" />
                        <SiTailwindcss size={20} className="text-secondary" />
                    </>
                </Card>
            </div>
        </div>
    )
}

export default ProjectCard