import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <section id='home' className='relative flex min-h-screen items-center'>
      <div className='absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black'></div>
      <Image
        src='/woman-in-dark.webp'
        className='fixed inset-0 h-full w-full object-cover'
        alt='woman in dark'
        width='4160'
        height='6240'
      />
      <div className='relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0'>
        <div className='pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12'>
          <h1
            data-rellax-speed='-3'
            data-rellax-xs-speed='0'
            data-rellax-mobile-speed='0'
            className='rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight transform:translate3d(0px, 0px, 0px)'
          >
            Creative Duo
          </h1>
        </div>
        <div>
          <div className='ml-auto md:w-2/3 md:pt-12 lg:w-1/2'>
            <p className='mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal'>
              On an endless journey to create experiences that inspire others.
              Always motived by design thats honest, aesthetic and natural.
              Probably the only designer you’ll ever need.
            </p>
            <Link
              data-rellax-speed='1'
              data-rellax-xs-speed='0'
              data-rellax-mobile-speed='0'
              href='#work'
              className='rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 transform:translate3d(0px, 0px, 0px)'
            >
              <span className='relative'>See our work</span>
            </Link>
          </div>
        </div>
        <div
          data-rellax-speed='-5'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          className='rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16 transform:translate3d(0px, 0px, 0px)'
        >
          <span className='text-xs font-light uppercase tracking-widest text-white'>
            Follow us
          </span>
          <ul className='relative z-20 mt-4 space-y-2 text-sm font-light text-white'>
            <li>
              <a href='#' target='_blank'>
                001 ------ Instagram
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                002 ------ Behance
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                003 ------ Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home
