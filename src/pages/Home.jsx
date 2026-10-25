
import Hero from '../data/components/Hero'
import About from '../data/components/About'
import Team from '../data/components/Team'
import Services from '../data/components/Services'
import VisaServices from '../data/components/VisaServices'
import Destinations from '../data/components/Destinations'
import TourPackages from '../data/components/TourPackages'
import Gallery from '../data/components/Gallery'
import Stats from '../data/components/Stats'
import JobOpportunities from '../data/components/JobOpportunities'
import Contact from '../data/components/Contact'
import ThankYou from '../data/components/ThankYou'


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Stats />
      <Services />
      <VisaServices />
      <Destinations />
      <TourPackages />
      <Gallery />
      <JobOpportunities />
      <Contact />
      <ThankYou />
    </>
  )
}
