import Section from './Section'

const About = () => {
    return (
        <Section title='About Me' id="about" className="bg-base-300 relative">
            <p className="text-center leading-[2rem] md:px-[20%]">
                I&apos;m passionate and dedicated about web development. I&apos;ve got a solid foundation in HTML, CSS, and JavaScript, and I always want to learn more.
                I&apos;m currently working on expanding my skills in front-end development, and also learning into back-end development as well.
                I&apos;m also interested in learning more about UX/UI design and how to create websites that are accessible to everyone.
                In my free time, I enjoy working on personal projects and exploring new technologies. I&apos;m always looking for opportunities to collaborate with others and contribute to meaningful projects.
            </p>
            <div className='box absolute h-[15rem] w-[15rem] bottom-[10%] left-[50%] -translate-x-[50%] sm:bottom-[15%] sm:left-[80%] sm:-translate-x-[80%] rotate-45 bg-black rounded-md opacity-20'></div>
        </Section>
    )
}

export default About;