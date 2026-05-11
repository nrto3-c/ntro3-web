import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-black text-gray-900 hover:text-purple-600 transition-colors"
        >
          Nrto3-WEB
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/#projects"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
