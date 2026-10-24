import { buildWhatsAppUrl } from '../data/siteConfig'

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg motion-safe:animate-pulse-soft transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.107 3 3.5 8.607 3.5 15.5c0 2.42.68 4.68 1.86 6.6L3 29l7.1-2.32a12.42 12.42 0 0 0 5.9 1.5h.004c6.893 0 12.5-5.607 12.5-12.5S22.893 3 16.001 3Zm0 22.7h-.003a10.2 10.2 0 0 1-5.2-1.43l-.373-.22-4.21 1.38 1.41-4.1-.24-.42a10.18 10.18 0 0 1-1.56-5.41c0-5.63 4.58-10.21 10.2-10.21 2.72 0 5.28 1.06 7.2 2.99a10.13 10.13 0 0 1 2.99 7.22c0 5.63-4.58 10.2-10.21 10.2Zm5.6-7.64c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.69.15-.2.31-.79 1-.97 1.2-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.47-1.53-.91-.81-1.53-1.82-1.71-2.13-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.39-.02-.54-.08-.15-.69-1.67-.95-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.57s1.1 2.98 1.26 3.19c.15.2 2.17 3.32 5.27 4.65.74.32 1.31.51 1.76.65.74.24 1.41.2 1.94.12.59-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36Z" />
      </svg>
    </a>
  )
}
