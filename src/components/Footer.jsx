import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer place-items-center p-10 bg-neutral text-neutral-content">
            <nav>
                <h6 className="footer-title">Contact me, below!</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/kurt-lo" target='_blank'>
                        <FaGithub size={37} />
                    </a>
                    <a href="https://www.linkedin.com/in/kurtlo/" target='_blank'>
                        <FaLinkedin size={37} />
                    </a>
                    <a href="mailto:kurtlonolasco@gmail.com"><SiGmail size={37} /></a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer