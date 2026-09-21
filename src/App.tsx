import { useState } from 'react'

function App() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setPhone('')
        setName('')
      }, 4000)
    }
  }

  const socials = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      link: 'https://instagram.com/interio_studio',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      link: 'https://t.me/interio_studio',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      link: 'https://wa.me/79001234567',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Pinterest',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/>
        </svg>
      ),
      link: 'https://pinterest.com/interio_studio',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'VK',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
        </svg>
      ),
      link: 'https://vk.com/interio_studio',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:hello@interio-studio.ru',
      color: 'from-amber-500 to-orange-600'
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B7355 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #8B7355 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-stone-300/30 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-48 h-48 border border-stone-300/20 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-amber-700/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-amber-700/20 rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-stone-800 mb-6">
              <span className="text-3xl font-light text-stone-800 tracking-wider">I</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight text-stone-800 tracking-[0.2em] uppercase mb-3">
              Interio
            </h1>
            <div className="w-16 h-px bg-stone-400 mx-auto mb-4"></div>
            <p className="text-sm md:text-base text-stone-500 tracking-[0.3em] uppercase">
              Студия дизайна интерьеров
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-12 max-w-lg mx-auto">
            Создаём пространства, в которых хочется жить. 
            Авторский дизайн от концепции до реализации.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-stone-800 text-white text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors duration-300"
          >
            Заказать дизайн-проект
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 text-center tracking-wider mb-4">
            Наши услуги
          </h2>
          <div className="w-12 h-px bg-stone-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Дизайн-проект', desc: 'Полный комплект документации для реализации вашего интерьера' },
              { title: 'Авторский надзор', desc: 'Контроль качества на всех этапах реализации проекта' },
              { title: 'Комплектация', desc: 'Подбор и закупка всех материалов, мебели и декора' }
            ].map((service, i) => (
              <div key={i} className="text-center p-6 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                <div className="text-3xl font-extralight text-stone-300 mb-4">0{i + 1}</div>
                <h3 className="text-lg font-medium text-stone-800 mb-3 tracking-wide">{service.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-stone-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 text-center tracking-wider mb-4">
            Заявка на дизайн-проект
          </h2>
          <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
          <p className="text-center text-stone-500 mb-10 text-sm leading-relaxed">
            Оставьте свой номер телефона и мы свяжемся с вами в течение 30 минут для обсуждения деталей
          </p>

          {submitted ? (
            <div className="text-center py-12 px-6 bg-white border border-green-200 rounded-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-2">Спасибо!</h3>
              <p className="text-stone-500 text-sm">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 bg-white border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors text-sm tracking-wide"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-5 py-4 bg-white border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors text-sm tracking-wide"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-stone-800 text-white text-sm tracking-widest uppercase hover:bg-stone-700 active:bg-stone-900 transition-colors duration-300"
              >
                Отправить заявку
              </button>
              <p className="text-xs text-stone-400 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 text-center tracking-wider mb-4">
            Мы в соцсетях
          </h2>
          <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
          <p className="text-center text-stone-500 mb-10 text-sm">
            Подписывайтесь, чтобы быть в курсе наших проектов
          </p>

          <div className="space-y-3">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-stone-50 border border-stone-200 hover:border-stone-400 hover:bg-stone-100 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  {social.icon}
                </div>
                <span className="text-stone-700 font-medium tracking-wide group-hover:text-stone-900 transition-colors">
                  {social.name}
                </span>
                <svg className="w-4 h-4 text-stone-400 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-stone-800 text-stone-400">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-2xl font-extralight text-white tracking-[0.2em] uppercase mb-2">
            Interio
          </h3>
          <p className="text-xs tracking-widest uppercase mb-6">Студия дизайна интерьеров</p>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a href="tel:+79001234567" className="text-sm hover:text-white transition-colors">
              +7 (900) 123-45-67
            </a>
            <span className="text-stone-600">|</span>
            <a href="mailto:hello@interio-studio.ru" className="text-sm hover:text-white transition-colors">
              hello@interio-studio.ru
            </a>
          </div>
          <p className="text-xs text-stone-500">
            © 2024 Interio Studio. Все права защищены.
          </p>
          <p className="text-xs text-stone-600 mt-2">
            Москва, Россия
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
