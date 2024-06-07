import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative bg-black pt-32 backdrop-opacity-0'>
      <div className='mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0'>
        <div>
          <div className='flex flex-wrap items-center gap-6'>
            <h2 className='text-3xl text-white xl:text-6xl'>Instagram</h2>
            <Link
              href='#'
              target='_blank'
              className='h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white'
            >
              @tailus
            </Link>
          </div>
          <div className='mt-12 grid grid-cols-3 md:mt-16 lg:mt-24'>
            <Link
              href='#'
              target='_blank'
              className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0'
            >
              <span className='sr-only'>Instagram feed</span>
              <Image
                className='transition duration-500'
                src='/gild-cover.webp'
                alt='insta feed cover'
                width='2000'
                height='1333'
              />
            </Link>
            <Link
              href='#'
              target='_blank'
              className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0'
            >
              <span className='sr-only'>Instagram feed</span>
              <Image
                className='transition duration-500'
                src='/gild-cover2.webp'
                alt='insta feed cover'
                width='2000'
                height='1334'
              />
            </Link>
            <Link
              href='#'
              target='_blank'
              className='relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0'
            >
              <span className='sr-only'>Instagram feed</span>
              <Image
                className='transition duration-500'
                src='/gild-cover3.webp'
                alt='insta feed cover'
                width='1800'
                height='1200'
              />
            </Link>
          </div>
        </div>
        <div className='mt-12 md:mt-16 lg:mt-24'>
          <div className='space-y-8 md:space-y-12'>
            <Link
              href='/'
              className='text-2xl font-light tracking-widest text-white'
            >
              <Image
                className='h-8 w-auto brightness-200'
                src='/favicon.svg'
                alt='logo mark'
                width='100'
                height='100'
              />
            </Link>
            <nav>
              <ul className='flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white'>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <Link href='#work'>Work</Link>
                </li>
                <li>
                  <Link href='#services'>Services</Link>
                </li>
                <li>
                  <Link className='block w-max' href='#about'>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href='#contact'>Contact</Link>
                </li>
              </ul>
            </nav>
            <div className='flex flex-wrap justify-between gap-3'>
              <span className='text-sm text-white/50'>
                © Radiant 2021 - Present
              </span>
              <span className='text-sm text-white/50'>
                Designed by{' '}
                <Link href='https://tailus.io/' className='text-white'>
                  Tailus
                </Link>{' '}
                in Lubumbashi{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
