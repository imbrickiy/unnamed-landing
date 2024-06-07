import Image from 'next/image'
import Link from 'next/link'

const Work = () => {
  return (
    <section className='relative z-10 bg-black pb-20 lg:pt-0'>
      <div className='mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0'>
        <div
          data-rellax-speed='-3'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          className='rellax flex flex-wrap items-center gap-6 transform:translate3d(0px, 0px, 0px)'
        >
          <h2 className='text-7xl font-bold text-white xl:text-8xl'>
            Our work
          </h2>
          <span className='h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white'>
            12 Projects
          </span>
        </div>
      </div>
      <div className='relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-60'>
        <a
          href='/project'
          data-rellax-speed='-2'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          data-rellax-tablet-speed='0'
          className='rellax group col-span-2 lg:col-span-1 transform-[translate3d(0px, 0px, 0px)]'
        >
          <div className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0'>
            <Image
              className='transition duration-500'
              src='/gild-cover.webp'
              alt='gild cover'
              width='2000'
              height='1333'
            />
          </div>
          <div className='flex items-center justify-between p-4'>
            <h3 className='text-2xl font-normal text-white'>Gild Sport</h3>
            <span className='h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white'>
              01 / 2023
            </span>
          </div>
        </a>
        <Link
          href='/project'
          data-rellax-speed='1'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          data-rellax-tablet-speed='0'
          className='rellax group block transform-[translate3d(0px, 0px, 0px)]'
        >
          <div className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0'>
            <Image
              className='transition duration-500'
              src='/project2.webp'
              alt='project description'
              width='1380'
              height='920'
            />
          </div>
          <div className='flex items-center justify-between p-4'>
            <h3 className='text-2xl font-normal text-white'>Project Name</h3>
            <span className='h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white'>
              01 / 2023
            </span>
          </div>
        </Link>
        <Link
          href='/project'
          data-rellax-speed='-2'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          data-rellax-tablet-speed='0'
          className='rellax group block transform-[translate3d(0px, 0px, 0px)]'
        >
          <div className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0'>
            <Image
              className='transition duration-500'
              src='/project3.webp'
              alt='project description'
              width='826'
              height='826'
            />
          </div>
          <div className='flex items-center justify-between p-4'>
            <h3 className='text-2xl font-normal text-white'>Project Name</h3>
            <span className='h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white'>
              01 / 2023
            </span>
          </div>
        </Link>
        <Link
          href='/project'
          data-rellax-speed='0'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          data-rellax-tablet-speed='0'
          className='rellax group col-span-2 block lg:col-span-1 transform-[translate3d(0px, 0px, 0px)]'
        >
          <div className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0'>
            <Image
              className='transition duration-500'
              src='/project4.webp'
              alt='project description'
              width='1380'
              height='1380'
            />
          </div>
          <div className='flex items-center justify-between p-4'>
            <h3 className='text-2xl font-normal text-white'>Project Name</h3>
            <span className='h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white'>
              01 / 2023
            </span>
          </div>
        </Link>
        <Link
          href='/project'
          data-rellax-speed='-3'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          data-rellax-tablet-speed='0'
          className='rellax group block transform:translate3d(0px, 0px, 0px)'
        >
          <div className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0'>
            <Image
              className='transition duration-500'
              src='/project5.webp'
              alt='project description'
              width='740'
              height='1112'
            />
          </div>
          <div className='flex items-center justify-between p-4'>
            <h3 className='text-2xl font-normal text-white'>Project Name</h3>
            <span className='h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white'>
              01 / 2023
            </span>
          </div>
        </Link>
        <Link
          href='/project'
          data-rellax-speed='0'
          data-rellax-xs-speed='0'
          data-rellax-mobile-speed='0'
          data-rellax-tablet-speed='0'
          className='rellax group block transform:translate3d(0px, 0px, 0px)'
        >
          <div className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0'>
            <Image
              className='transition duration-500'
              src='/project6.webp'
              alt='project description'
              width='740'
              height='1110'
            />
          </div>
          <div className='flex items-center justify-between p-4'>
            <h3 className='text-2xl font-normal text-white'>Project Name</h3>
            <span className='h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white'>
              01 / 2023
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Work
