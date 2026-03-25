import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const WHATSAPP_NUMBER = '919173547509' // Replace with actual number
const PHONE_NUMBER = '+91 9173547509' // Replace with actual number
const EMAIL = 'ppr1807@gmail.com' // Replace with actual email
const INSTAGRAM_HANDLE = 'rkenterprise1510' // Replace with actual handle

const PRODUCTS = [
  {
    id: 'fire-extinguishers',
    icon: '🧯',
    name: 'Fire Extinguishers',
    desc: 'ABC, CO₂, Water, Foam & Dry Powder extinguishers for all fire classes. ISI marked, BIS certified.',
  },
  {
    id: 'sprinkler-systems',
    icon: '💧',
    name: 'Fire Sprinkler Systems',
    desc: 'Automatic sprinkler systems for commercial and industrial buildings. Design, supply & installation.',
  },
  {
    id: 'hydrant-valves',
    icon: '🔧',
    name: 'Fire Hydrant Valves',
    desc: 'Landing valves, gate valves, hose reels & hydrant accessories for robust fire hydrant networks.',
  },
  {
    id: 'alarm-systems',
    icon: '🔔',
    name: 'Fire Alarm Systems',
    desc: 'Conventional & addressable fire alarm panels, detectors, hooters and complete alarm solutions.',
  },
  {
    id: 'pipes-fittings',
    icon: '⚙️',
    name: 'Safety Pipes & Fittings',
    desc: 'ERW/GI pipes, M.S. pipes, flanges, couplings and all fire-line fittings for complete installations.',
  },
  {
    id: 'refilling-maintenance',
    icon: '🔄',
    name: 'Refilling & Maintenance',
    desc: 'Periodic refilling, hydrostatic testing, AMC contracts and annual maintenance for all systems.',
  },
]

function whatsappLink(message: string) {
  return `https://wa.me/${9173547509}?text=${encodeURIComponent(message)}`
}

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ── HEADER ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-navy-900/95 backdrop-blur border-b border-navy-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="R.K Enterprise Logo" className="w-10 h-10 rounded-lg object-contain" />
            <div>
              <div className="text-white font-bold text-lg leading-tight">R.K Enterprise</div>
              <div className="text-flame-400 text-xs leading-tight">Safety & Fire Systems</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-navy-200">
            <a href="#about" className="hover:text-flame-400 transition-colors">About</a>
            <a href="#products" className="hover:text-flame-400 transition-colors">Products</a>
            <a href="#contact" className="hover:text-flame-400 transition-colors">Contact</a>
          </nav>
          <a
            href={whatsappLink('Hello, I am interested in your fire protection products.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fire-500 hover:bg-fire-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get Quote
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          background: 'linear-gradient(135deg, #0a1120 0%, #1b2a4a 40%, #111c33 100%)',
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #cc2229 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #f26522 0%, transparent 40%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-fire-500/20 border border-fire-500/40 text-flame-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>🏭</span> Ahmedabad, Gujarat • Trusted Since Establishment
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Reliable Fire Safety{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-500 to-flame-500">Solutions</span>{' '}
            for Every Space
          </h1>

          <p className="text-lg md:text-xl text-navy-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Supply, Installation, Refilling and Maintenance of Fire Protection Systems
            for Residential, Commercial &amp; Industrial clients in Ahmedabad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink('Hello! I would like to enquire about your fire protection services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-green-900/30"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
              Call Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-navy-300">
            {['ISI Certified Products', 'BIS Approved', 'Pan-Ahmedabad Service', 'AMC Available'].map((b) => (
              <div key={b} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-flame-500" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6 bg-navy-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 text-navy-800">
                Ahmedabad's Trusted Fire Protection Partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                R.K Enterprise is a leading fire protection equipment supplier based in Ahmedabad, Gujarat.
                We provide end-to-end fire safety solutions — from supply and installation to annual maintenance
                contracts — for residential complexes, commercial establishments, factories, and industrial facilities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of certified professionals ensures every installation meets national fire safety
                standards and local fire department norms. With a deep product catalog covering extinguishers,
                sprinklers, hydrant systems, and alarm solutions, we are a single-stop destination for all
                fire protection needs in Ahmedabad and surrounding areas.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '500+', label: 'Projects Completed' },
                { num: '10+', label: 'Years of Experience' },
                { num: '1000+', label: 'Happy Clients' },
                { num: '24/7', label: 'Emergency Support' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-navy-100">
                  <div className="text-3xl font-extrabold text-fire-500">{stat.num}</div>
                  <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">Our Products & Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-navy-800">
              Complete Fire Protection Range
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Quality products and professional services for comprehensive fire safety compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-fire-200 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-fire-50 transition-colors">
                  {product.icon}
                </div>
                <h3 className="font-bold text-lg text-navy-800 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.desc}</p>
                <a
                  href={whatsappLink(`Hello! I would like to enquire about: ${product.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section className="py-16 px-6 bg-navy-900 text-white text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-flame-500 text-3xl">
            📸
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Follow Us on Instagram</h2>
          <p className="text-navy-300 mb-6">
            Get fire safety tips, product updates, and installation highlights on our Instagram page.
          </p>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-flame-500 hover:opacity-90 text-white font-bold px-8 py-3 rounded-xl transition-opacity"
          >
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-navy-800">Get In Touch</h2>
            <p className="text-gray-500 mt-3">
              Reach us for quotes, enquiries or emergency fire safety support.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Location */}
            <div className="bg-navy-50 rounded-2xl p-6 text-center border border-navy-100">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-navy-800 mb-1">Location</h3>
              <p className="text-gray-500 text-sm">Ahmedabad, Gujarat, India</p>
            </div>

            {/* Phone */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="bg-fire-500 hover:bg-fire-600 text-white rounded-2xl p-6 text-center transition-colors block"
            >
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold mb-1">Call Now</h3>
              <p className="text-fire-100 text-sm">{PHONE_NUMBER}</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="bg-navy-800 hover:bg-navy-700 text-white rounded-2xl p-6 text-center transition-colors block"
            >
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold mb-1">Email Us</h3>
              <p className="text-navy-300 text-sm">{EMAIL}</p>
            </a>
          </div>

          {/* Full-width WhatsApp CTA */}
          <a
            href={whatsappLink('Hello! I would like to get a quote for fire protection services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-colors w-full"
          >
            <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-950 text-navy-400 text-sm text-center py-6 px-4">
        <p>© {new Date().getFullYear()} R.K Enterprise – Safety & Fire Systems. Ahmedabad, Gujarat.</p>
        <p className="mt-1 text-navy-600">Supply • Installation • Refilling • Maintenance</p>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={whatsappLink('Hello! I would like to enquire about fire protection services.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 transition-colors"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

    </div>
  )
}
