
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Mohd Ali Tours and Travels
        </Link>

        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Home
        </Link>
      </div>
    </nav>
  )
}
