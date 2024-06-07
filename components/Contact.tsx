
const Contact = () => {
  return (
    <section
      id='contact'
      className='relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0'>
        <div className='flex flex-wrap items-center gap-6'>
          <h2 className='text-7xl font-bold text-white xl:text-8xl'>
            Lets work together
          </h2>
          <span className='h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white'>
            __
          </span>
        </div>
        <div className='mt-24'>
          <div className='grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24'>
            <div className='lg:col-span-2'>
              <form action='' className='mx-auto space-y-8 md:w-3/4'>
                <div className='grid gap-8 sm:grid-cols-2 sm:gap-4'>
                  <div>
                    <label
                      htmlFor='firstname'
                      className='tracking-wide text-white'
                    >
                      Fistname
                    </label>
                    <input
                      type='text'
                      id='fistname'
                      name='fistname'
                      placeholder='Your fistname'
                      className='mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastname'
                      className='tracking-wide text-white'
                    >
                      Last name
                    </label>
                    <input
                      type='text'
                      id='lastname'
                      name='lastname'
                      placeholder='Your last name'
                      className='mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary'
                    />
                  </div>
                </div>
                <div className='temp-mail-smart-button-wrapper relative'>
                  <label htmlFor='email' className='tracking-wide text-white'>
                    Mail address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your mail address'
                    className='mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary'
                  />
                  <div data-v-d654fd91=''></div>
                </div>
                <div>
                  <label htmlFor='message' className='tracking-wide text-white'>
                    Your message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    rows={6}
                    cols={30}
                    placeholder='Your message'
                    className='mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary'
                >
                  <span className='relative uppercase tracking-wide text-black group-hover:text-white'>
                    {' '}
                    Send message{' '}
                  </span>
                </button>
              </form>
            </div>
            <div className='mt-8 border border-white/30 p-8 sm:p-12'>
              <div>
                <h3 className='text-xs font-light uppercase tracking-widest text-white'>
                  Address
                </h3>
                <p className='mt-4 text-white'>
                  Riverside 25, San Francisco, California
                </p>
              </div>
              <div className='mt-16'>
                <h3 className='text-xs font-light uppercase tracking-widest text-white'>
                  Contact Info
                </h3>
                <ul className='relative z-20 mt-4 space-y-2 font-light text-white'>
                  <li>
                    <a href='tel:+243000000000'>
                      Phone ------ +243 000 000 000
                    </a>
                  </li>
                  <li>
                    <a href='mailto:hello@tailus.io'>
                      E-mail ------- hello@tailus.io
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-16'>
                <h3 className='text-xs font-light uppercase tracking-widest text-white'>
                  Follow us
                </h3>
                <ul className='relative z-20 mt-4 space-y-2 font-light text-white'>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
