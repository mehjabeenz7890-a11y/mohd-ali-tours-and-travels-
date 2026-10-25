import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import Home from './pages/Home'
import { EnquiryProvider } from './context/EnquiryContext'

export default function App() {
  return (
    <EnquiryProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add further routes here if the site grows beyond one page */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </EnquiryProvider>
  )
}
