import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { AboutMe } from '@/components/sections/AboutMe'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutMe />
      <Contact />
    </>
  )
}
