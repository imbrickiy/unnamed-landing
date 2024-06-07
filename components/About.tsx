import Image from 'next/image'

const About = () => {
  return (
    <section
      id='about'
      className='relative z-10 bg-black pb-20 pt-32 md:pb-0 md:pt-0 lg:pb-0'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0'>
        <div
          data-rellax-speed='-0.4'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          className='rellax flex flex-wrap items-center gap-6 transform:translate3d(0px, 0px, 0px)'
        >
          <h2 className='text-7xl font-bold text-white xl:text-8xl'>
            About us
          </h2>
          <span className='h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white'>
            01 Duo
          </span>
        </div>
        <div className='mt-24 md:mt-72'>
          <div className='grid gap-6'>
            <div className='grid md:grid-cols-3'>
              <div className='overflow-hidden md:col-span-2'>
                <Image
                  src='/un-duo.webp'
                  alt='unnamed duo photo'
                  width='1500'
                  height='1000'
                />
              </div>
            </div>
            <div
              data-rellax-speed='1'
              data-rellax-xs-speed='0'
              data-rellax-mobile-speed='0'
              data-rellax-tablet-speed='0.5'
              className='rellax ml-auto md:w-3/5 lg:w-2/5 transform:translate3d(0px, 0px, 0px)'
            >
              <p className='mt-12 text-2xl font-light text-white'>
                Minima iure saepe necessitatibus ipsa voluptatibus, minus
                voluptatem in facere maxime quae repellendus nisi inventore
                libero impedit eligendi, accusantium consequuntur consectetur
                quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
