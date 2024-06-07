import About from '@/components/About'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Work from '@/components/Work'

const Homepage = () => {
  return (
    <main className='background relative'>
      <Home />
      <Work />
      <Services />
      <About />
      <Contact />
    </main>
  )
}

export default Homepage
