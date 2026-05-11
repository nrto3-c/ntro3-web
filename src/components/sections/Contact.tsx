export function Contact() {
  const email = 'nrto3.c@gmail.com'

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-4">Let&apos;s Work Together</h2>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Have a project in mind? I&apos;d love to hear about it.
          Send me an email and let&apos;s talk.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-opacity shadow-lg"
        >
          {email}
        </a>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
