import { useEffect, useRef, useState } from 'react'

/* ─── SVG Icons (outline, 1.2px) ─── */
const IconChairLamp = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chair */}
    <path d="M12 38 C12 30 14 26 20 26 C26 26 28 30 28 38" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <path d="M10 38 L30 38" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M14 38 L14 44" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M26 38 L26 44" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M12 26 C12 20 14 16 20 16 C26 16 28 20 28 26" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    {/* Floor lamp */}
    <path d="M40 44 L40 20" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M34 20 C34 14 37 11 40 11 C43 11 46 14 46 20" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <path d="M36 44 L44 44" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const IconFloorPlan = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="12" width="36" height="32" rx="1" stroke="#A89B8C" strokeWidth="1.2" fill="none"/>
    <path d="M10 28 L28 28 L28 12" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M28 28 L28 44" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M38 28 L38 44" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Door arc */}
    <path d="M28 34 A6 6 0 0 1 34 28" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    {/* Dimension lines */}
    <path d="M14 18 L24 18" stroke="#A89B8C" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M32 36 L36 36" stroke="#A89B8C" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
)

const IconMaterials = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* House outline */}
    <path d="M10 26 L28 12 L46 26" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M14 24 L14 44 L42 44 L42 24" stroke="#A89B8C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Material samples inside */}
    <rect x="19" y="30" width="7" height="7" rx="0.5" stroke="#A89B8C" strokeWidth="1" fill="none"/>
    <rect x="30" y="30" width="7" height="7" rx="0.5" stroke="#A89B8C" strokeWidth="1" fill="none"/>
    <circle cx="23" cy="41" r="2" stroke="#A89B8C" strokeWidth="1" fill="none"/>
    <circle cx="33" cy="41" r="2" stroke="#A89B8C" strokeWidth="1" fill="none"/>
  </svg>
)

const IconVK = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
)

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const IconTelegram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

/* ─── Fade-in on scroll hook ─── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, visible }
}

function FadeSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useFadeIn()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Main App ─── */
export default function App() {
  const heroImg = 'https://image.qwenlm.ai/generated-images/39381a5b-d7be-4ad6-9cd8-43dbac68d3cf/_result.png'

  return (
    <div className="min-h-screen bg-[#EDE6D8] overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">

        {/* ── Text side ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20 lg:py-0 lg:px-12 xl:px-20 lg:items-start lg:min-h-screen order-2 lg:order-1">
          <FadeSection className="text-center lg:text-left">
            {/* Logo */}
            <h1
              className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-none tracking-[0.08em] text-[#4A3A2E]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              АТМОС
            </h1>

            {/* Divider */}
            <div className="w-12 h-px bg-[#A89B8C]/50 mx-auto lg:mx-0 my-5" />

            {/* Subtitle */}
            <p
              className="text-[#A89B8C] text-xs sm:text-sm tracking-[0.35em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              студия дизайна в Барнауле
            </p>
          </FadeSection>
        </div>

        {/* ── Image side with arc clip ── */}
        <div className="relative flex-1 order-1 lg:order-2 lg:min-h-screen">
          {/* Desktop: arc on left side */}
          <div
            className="hidden lg:block absolute inset-0 overflow-hidden"
            style={{
              borderRadius: '200px 0 0 200px / 50% 0 0 50%',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4C9B8] via-[#C7BBA8] to-[#9AA389]/30" />
            <img
              src={heroImg}
              alt="Минималистичный интерьер в стиле japandi"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>

          {/* Mobile: arc on bottom */}
          <div
            className="lg:hidden relative h-[55vh] sm:h-[60vh] overflow-hidden"
            style={{
              borderRadius: '0 0 50% 50% / 0 0 20% 20%',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4C9B8] via-[#C7BBA8] to-[#EDE6D8]" />
            <img
              src={heroImg}
              alt="Минималистичный интерьер в стиле japandi"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ ARC DIVIDER ═══════════════ */}
      <div className="relative h-16 sm:h-24 -mt-1">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96">
          <path d="M0 96 C360 0 1080 0 1440 96 L1440 96 L0 96 Z" fill="#EFE9DF" />
        </svg>
      </div>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="bg-[#EFE9DF] py-20 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeSection className="text-center mb-16">
            <h2
              className="text-2xl sm:text-3xl text-[#4A3A2E] tracking-[0.12em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Услуги
            </h2>
            <div className="w-10 h-px bg-[#A89B8C]/40 mx-auto mt-4" />
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
            {/* Card 1 */}
            <FadeSection delay={0} className="flex flex-col items-center text-center px-6 py-10 md:py-12 md:border-r border-[#A89B8C]/20">
              <div className="mb-6">
                <IconChairLamp />
              </div>
              <h3 className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#4A3A2E] font-medium leading-relaxed">
                Дизайн интерьера<br />под ключ
              </h3>
            </FadeSection>

            {/* Card 2 */}
            <FadeSection delay={0.15} className="flex flex-col items-center text-center px-6 py-10 md:py-12 md:border-r border-[#A89B8C]/20">
              <div className="mb-6">
                <IconFloorPlan />
              </div>
              <h3 className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#4A3A2E] font-medium leading-relaxed">
                Планировочные<br />решения
              </h3>
            </FadeSection>

            {/* Card 3 */}
            <FadeSection delay={0.3} className="flex flex-col items-center text-center px-6 py-10 md:py-12">
              <div className="mb-6">
                <IconMaterials />
              </div>
              <h3 className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#4A3A2E] font-medium leading-relaxed">
                Подбор материалов<br />и мебели
              </h3>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ ARC DIVIDER 2 ═══════════════ */}
      <div className="relative h-16 sm:h-24 bg-[#EDE6D8]">
        <svg className="absolute top-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96">
          <path d="M0 0 L1440 0 C1080 96 360 96 0 0 Z" fill="#EFE9DF" />
        </svg>
      </div>

      {/* ═══════════════ CONTACTS ═══════════════ */}
      <section className="bg-[#EDE6D8] py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeSection className="text-center mb-14">
            <h2
              className="text-2xl sm:text-3xl text-[#4A3A2E] tracking-[0.12em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Контакты
            </h2>
            <div className="w-10 h-px bg-[#A89B8C]/40 mx-auto mt-4" />
          </FadeSection>

          <FadeSection delay={0.1}>
            <div className="flex flex-col items-center gap-10">
              {/* Phones */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
                <div className="flex flex-col items-center gap-1">
                  <a
                    href="tel:+79236433850"
                    className="group flex flex-col items-center gap-1"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#4A3A2E] tracking-wide group-hover:text-[#9AA389] transition-colors duration-300">
                      +7 (923) 643-38-50
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase text-[#A89B8C]">
                      Андрей
                    </span>
                  </a>
                  <a
                    href="https://t.me/CloudCSO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9AA389]/15 text-[#4A3A2E] text-[11px] tracking-wide hover:bg-[#9AA389]/25 transition-colors duration-300"
                    title="Написать в Telegram"
                  >
                    <IconTelegram />
                    <span>Telegram</span>
                  </a>
                </div>

                <div className="hidden sm:block w-px h-10 bg-[#A89B8C]/25" />

                <div className="flex flex-col items-center gap-1">
                  <a
                    href="tel:+79216669066"
                    className="group flex flex-col items-center gap-1"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#4A3A2E] tracking-wide group-hover:text-[#9AA389] transition-colors duration-300">
                      +7 (921) 666-90-66
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase text-[#A89B8C]">
                      Роман
                    </span>
                  </a>
                  <a
                    href="https://t.me/rbestuzhev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9AA389]/15 text-[#4A3A2E] text-[11px] tracking-wide hover:bg-[#9AA389]/25 transition-colors duration-300"
                    title="Написать в Telegram"
                  >
                    <IconTelegram />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>

              {/* VK */}
              <div className="flex justify-center mt-4">
                <a
                  href="https://vk.ru/atmos.barnaul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full border border-[#A89B8C]/40 text-[#4A3A2E] text-sm tracking-[0.1em] hover:bg-[#9AA389]/10 hover:border-[#9AA389]/60 transition-all duration-300 min-w-[240px]"
                >
                  <IconVK />
                  <span>Мы во ВКонтакте</span>
                </a>
              </div>

              {/* Instagram */}
              <div className="flex justify-center mt-0.5">
                <a
                  href="https://www.instagram.com/atmosdizain.brn?stkn=MW92ZG0zdDJvNGE1cg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full border border-[#A89B8C]/40 text-[#4A3A2E] text-sm tracking-[0.1em] hover:bg-[#9AA389]/10 hover:border-[#9AA389]/60 transition-all duration-300 min-w-[240px]"
                >
                  <IconInstagram />
                  <span>Мы в Instagram</span>
                </a>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-[#F5F0E6] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeSection>
            <h3
              className="text-3xl sm:text-4xl text-[#4A3A2E] tracking-[0.08em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              АТМОС
            </h3>
            <div className="w-8 h-px bg-[#A89B8C]/40 mx-auto my-3" />
            <p className="text-[#A89B8C] text-[10px] sm:text-xs tracking-[0.35em] uppercase">
              дизайн интерьеров
            </p>
          </FadeSection>
        </div>
      </footer>
    </div>
  )
}
