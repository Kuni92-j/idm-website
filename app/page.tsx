import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import Service1 from '@/components/sections/Service1'
import Service2 from '@/components/sections/Service2'
import Service3 from '@/components/sections/Service3'
import CtaMid from '@/components/sections/CtaMid'
import Cases from '@/components/sections/Cases'
import Representative from '@/components/sections/Representative'
import Faq from '@/components/sections/Faq'
import FooterCta from '@/components/sections/FooterCta'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Service1 />
      <Service2 />
      <Service3 />
      <CtaMid />
      <Cases />
      <Representative />
      <Faq />
      <FooterCta />
    </>
  )
}
