
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold">
          Mohd Ali Tours and Travels
        </h3>
        <p className="text-sm text-gray-300 mt-2">
          Your Trusted Travel Partner
        </p>
        <p className="text-xs text-gray-400 mt-3">
          © {new Date().getFullYear()} Mohd Ali Tours and Travels. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
