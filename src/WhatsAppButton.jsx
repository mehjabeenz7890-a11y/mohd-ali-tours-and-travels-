
export default function WhatsAppButton() {
  const phoneNumber = '6305616909'

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 z-50"
    >
      WhatsApp Us
    </a>
  )
}
