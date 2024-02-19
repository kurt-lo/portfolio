import Section from '../components/Section'
import { skills } from '../utils/skills'

const Skills = () => {
  return (
    <Section id='skills' title='Skills' className="bg-base-300">
      <ul className='flex flex-wrap justify-center items-center gap-[.5rem] md:gap-[1rem] md:px-[20%]'>
        {skills.map((skill) => (
          <li key={skill.id} className='text-4xl md:text-5xl hover:-translate-y-1 duration-[400ms]'>
            <i className={`${skill.className} hover:cursor-grab`}></i>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Skills