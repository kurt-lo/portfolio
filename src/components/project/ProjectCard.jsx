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
import instantMernNoodles from '../../assets/images/instantmernnoodles.png'
import bookSwift from '../../assets/images/bookswift.png'
import blogr from '../../assets/images/blogr.png'

const ProjectCard = () => {
    return (
        <>
            <div className="card w-96 glass">
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

            <div className="card w-96 glass">
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

            <div className="card w-96 glass">
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
                />

            </div>
        </>
    )
}

export default ProjectCard