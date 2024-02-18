import profileImage from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <main id="home">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:gap-[4rem] flex-col lg:flex-row-reverse">
          <img
            src={profileImage}
            className="max-w-[15rem] lg:max-w-[25rem] rounded-2xl shadow-2xl"
            alt='A boy sitting on a chair'
          />
          <div className='text-center lg:text-left'>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Hello, I&apos;m Russel Kurt Nolasco.
            </h1>
            <p className="py-6">
              An aspiring web developer. Dedicated to continuous learning growing in the tech field.
            </p>
            <button className="btn btn-primary">Download CV</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero