import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Services from '../components/Services'
import VisaServices from '../components/VisaServices'
import Destinations from '../components/Destinations'
import TourPackages from '../components/TourPackages'
import Gallery from '../components/Gallery'
import Stats from '../components/Stats'
import JobOpportunities from '../components/JobOpportunities'
import Contact from '../components/Contact'
import ThankYou from '../components/ThankYou'

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
