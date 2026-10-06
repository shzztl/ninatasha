import { createFileRoute } from '@tanstack/react-router'
import { Background } from '@/components/Background'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Expertise } from '@/components/Expertise'
import { About } from '@/components/About'
import { Journey } from '@/components/Journey'
import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-white px-4 py-2 font-medium focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Expertise />
        <About />
        <Journey />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
