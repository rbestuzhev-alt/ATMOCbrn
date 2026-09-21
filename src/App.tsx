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

const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const IconTelegram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

/* ─── Lidar reveal animation ─── */
function LidarReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex justify-center lg:justify-end"
      style={{ perspective: '1000px' }}
    >
      <div
        style={{
          transform: visible ? 'scale(1.3)' : 'scale(3)',
          opacity: visible ? 1 : 0,
          transition: 'transform 2.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease-out',
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  )
}

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

/* ─── Modal Component ─── */
function LidarModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-[720px] max-h-[85vh] rounded-3xl overflow-hidden transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #202020 100%)',
          border: '1px solid rgba(237, 230, 216, 0.12)',
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #EDE6D8 1px, transparent 1px),
                             radial-gradient(circle at 60% 70%, #9AA389 1px, transparent 1px)`,
            backgroundSize: '80px 80px, 120px 120px',
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Закрыть"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EDE6D8" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="relative overflow-y-auto max-h-[85vh] p-8 sm:p-12 custom-scrollbar">
          {/* Title */}
          <h2
            id="modal-title"
            className="text-3xl sm:text-4xl text-[#EDE6D8] mb-8 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Дистанционный дизайн по LiDAR-скану помещения
          </h2>

          {/* Что это */}
          <div className="mb-10">
            <h3 className="text-[#9AA389] text-sm tracking-[0.2em] uppercase mb-4">Что это</h3>
            <p className="text-[#EDE6D8] text-sm sm:text-base leading-relaxed mb-4">
              Полноценный дизайн-проект интерьера без выезда на объект. Вы самостоятельно сканируете помещение iPhone или iPad Pro с модулем LiDAR (устройства с 2020 года: iPhone 12 Pro и новее, iPad Pro), присылаете нам готовую 3D-модель — а мы дистанционно выполняем весь остальной цикл: от планировочных решений до рабочей документации.
            </p>
            <p className="text-[#B7A99A] text-sm sm:text-base leading-relaxed">
              LiDAR (Light Detection and Ranging) измеряет пространство лазерными импульсами и строит точное облако точек помещения. Точность скана — 1–2 см: этого достаточно и для планировок, и для рабочих чертежей без «сюрпризов» на ремонте.
            </p>
          </div>

          {/* Как это работает */}
          <div className="mb-10">
            <h3 className="text-[#9AA389] text-sm tracking-[0.2em] uppercase mb-6">Как это работает — 4 шага</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span
                  className="text-[#9AA389] text-3xl flex-shrink-0"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  01
                </span>
                <div>
                  <p className="text-[#EDE6D8] font-medium mb-2">Сканирование, 15–20 минут</p>
                  <p className="text-[#B7A99A] text-sm leading-relaxed">
                    Мы присылаем короткую видеоинструкцию. Вы проходите по комнате со смартфоном по простым правилам: дневной свет, открытые двери, плавное движение. Сканирование идёт в бесплатном приложении (Polycam или Scaniverse) — оно само собирает 3D-модель.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span
                  className="text-[#9AA389] text-3xl flex-shrink-0"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  02
                </span>
                <div>
                  <p className="text-[#EDE6D8] font-medium mb-2">Отправка скана</p>
                  <p className="text-[#B7A99A] text-sm leading-relaxed">
                    Экспорт модели — в один клик: присылаете файл в мессенджер или облако. Без визитов, замерщиков и ожидания выезда специалиста.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span
                  className="text-[#9AA389] text-3xl flex-shrink-0"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  03
                </span>
                <div>
                  <p className="text-[#EDE6D8] font-medium mb-2">Работа над проектом</p>
                  <p className="text-[#B7A99A] text-sm leading-relaxed">
                    На основе 3D-модели мы создаём варианты планировочных решений, фотореалистичные визуализации и полный комплект рабочей документации: планы демонтажа/монтажа, электрики и сантехники, полов и потолков, развёртки стен и узлы.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span
                  className="text-[#9AA389] text-3xl flex-shrink-0"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  04
                </span>
                <div>
                  <p className="text-[#EDE6D8] font-medium mb-2">Готовый дизайн у вас</p>
                  <p className="text-[#B7A99A] text-sm leading-relaxed">
                    Все материалы — в цифровом виде, плюс дистанционный авторский надзор: остаёмся на связи с вами и бригадой весь период ремонта.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Что входит в услугу */}
          <div className="mb-10">
            <h3 className="text-[#9AA389] text-sm tracking-[0.2em] uppercase mb-4">Что входит в услугу</h3>
            <ul className="space-y-2 text-[#EDE6D8] text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-[#9AA389] flex-shrink-0">•</span>
                <span>2–3 варианта планировочного решения;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#9AA389] flex-shrink-0">•</span>
                <span>3D-визуализации всех помещений проекта;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#9AA389] flex-shrink-0">•</span>
                <span>комплект рабочей документации, достаточный для строительной бригады;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#9AA389] flex-shrink-0">•</span>
                <span>ведомости материалов, мебели и света (опция);</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#9AA389] flex-shrink-0">•</span>
                <span>дистанционный авторский надзор (опция).</span>
              </li>
            </ul>
          </div>

          {/* Кому подходит */}
          <div className="mb-10">
            <h3 className="text-[#9AA389] text-sm tracking-[0.2em] uppercase mb-4">Кому подходит</h3>
            <ul className="space-y-2 text-[#EDE6D8] text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-[#9AA389] flex-shrink-0">•</span>
                <span>Вы живёте в другом городе или стране, но хотите работать с нашей студией;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#9AA389] flex-shrink-0">•</span>
                <span>Объект далеко, и тратить дни на выезды и замеры не хочется;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#9AA389] flex-shrink-0">•</span>
                <span>Хотите начать быстро: старт работы — через 1–2 дня после получения скана.</span>
              </li>
            </ul>
          </div>

          {/* Если нет iPhone */}
          <div className="mb-10">
            <h3 className="text-[#9AA389] text-sm tracking-[0.2em] uppercase mb-4">Если у вас нет iPhone с LiDAR</h3>
            <p className="text-[#EDE6D8] text-sm sm:text-base leading-relaxed">
              Не проблема. Предложим альтернативу: сканирование по видеосвязи обычным смартфоном, фотограмметрия по нашему гайду или классический выезд замерщика, если мы работаем в вашем городе.
            </p>
          </div>

          {/* Сроки и стоимость */}
          <div className="mb-10">
            <h3 className="text-[#9AA389] text-sm tracking-[0.2em] uppercase mb-4">Сроки и стоимость</h3>
            <p className="text-[#EDE6D8] text-sm sm:text-base leading-relaxed">
              Старт — через 1–2 дня после получения скана. Срок и стоимость рассчитываются индивидуально по площади и составу пакета и фиксируются в договоре до начала работ.
            </p>
          </div>

          {/* Как начать */}
          <div className="mb-8">
            <h3 className="text-[#9AA389] text-sm tracking-[0.2em] uppercase mb-4">Как начать</h3>
            <p className="text-[#EDE6D8] text-sm sm:text-base leading-relaxed mb-6">
              Позвоните или напишите нам — пришлём инструкцию по сканированию и ответим на вопросы:
            </p>
            <div className="space-y-3">
              <a
                href="tel:+79236433850"
                className="flex items-center gap-3 text-[#EDE6D8] hover:text-[#9AA389] transition-colors"
              >
                <span className="font-medium">+7 (923) 643-38-50</span>
                <span className="text-[#B7A99A] text-sm">— Андрей</span>
              </a>
              <a
                href="tel:+79216669066"
                className="flex items-center gap-3 text-[#EDE6D8] hover:text-[#9AA389] transition-colors"
              >
                <span className="font-medium">+7 (921) 666-90-66</span>
                <span className="text-[#B7A99A] text-sm">— Роман</span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <a
              href="tel:+79236433850"
              className="inline-block px-10 py-4 border border-[#EDE6D8]/60 text-[#EDE6D8] text-sm tracking-[0.15em] uppercase hover:bg-[#EDE6D8] hover:text-[#1A1A1A] transition-all duration-300 rounded-full"
            >
              Позвонить
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(237, 230, 216, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(154, 163, 137, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(154, 163, 137, 0.5);
        }
        @media (max-width: 640px) {
          .fixed.inset-0 {
            align-items: flex-end;
          }
          .fixed.inset-0 > div:last-child {
            max-height: 92vh;
            border-radius: 24px 24px 0 0;
            width: 95vw;
          }
        }
      `}</style>
    </div>
  )
}

/* ─── Main App ─── */
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const heroImg = 'https://image.qwenlm.ai/generated-images/39381a5b-d7be-4ad6-9cd8-43dbac68d3cf/_result.png'

  return (
    <div className="min-h-screen bg-[#EDE6D8] overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">

        {/* ── Text side ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20 lg:py-0 lg:px-12 xl:px-20 lg:items-start lg:min-h-screen order-2 lg:order-1">
          <div className="text-center lg:text-left">
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
          </div>
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

      {/* ═══════════════ LIDAR SERVICE ═══════════════ */}
      <section 
        className="relative py-20 sm:py-28 px-6 overflow-hidden"
        style={{ 
          background: '#0f0f0f',
        }}
      >
        {/* Верхняя дуга — внутри секции, непрерывна с фоном */}
        <svg 
          className="absolute top-0 left-0 w-full block" 
          style={{ height: 'clamp(4rem, 6vw, 6rem)' }}
          preserveAspectRatio="none" 
          viewBox="0 0 1440 96"
        >
          <path d="M0 0 L1440 0 L1440 96 C1080 0 360 0 0 96 Z" fill="#EFE9DF" />
        </svg>

        {/* Нижняя дуга — внутри секции, непрерывна с фоном */}
        <svg 
          className="absolute bottom-0 left-0 w-full block" 
          style={{ height: 'clamp(4rem, 6vw, 6rem)' }}
          preserveAspectRatio="none" 
          viewBox="0 0 1440 96"
        >
          <path d="M0 96 L1440 96 L1440 0 C1080 96 360 96 0 0 Z" fill="#EDE6D8" />
        </svg>
        {/* Паттерн облака точек */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #f5f5f5 1px, transparent 1px),
                             radial-gradient(circle at 60% 70%, #9AA389 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, #f5f5f5 1px, transparent 1px),
                             radial-gradient(circle at 40% 80%, #9AA389 1px, transparent 1px)`,
            backgroundSize: '80px 80px, 120px 120px, 100px 100px, 90px 90px',
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Текстовый контент */}
            <FadeSection>
        {/* Оверлайн */}
        <p className="text-[#9AA389] text-xs tracking-[0.35em] uppercase mb-6">
          Новая услуга
        </p>

        {/* Заголовок */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl text-[#f5f5f5] tracking-wide mb-6 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Дистанционный дизайн по LiDAR-скану вашего помещения
        </h2>

        {/* Подзаголовок */}
        <p className="text-[#a0a0a0] text-sm sm:text-base leading-relaxed mb-10">
          Вы сканируете комнату LiDAR-ом на iPhone и присылаете нам точную 3D-модель — мы дистанционно создаём планировочные решения, визуализации и полную рабочую документацию, без визитов и замерщиков.
        </p>
              {/* Шаги */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mb-10">
          {/* Шаг 1 */}
          <div className="flex flex-col sm:border-r border-[#9AA389]/20 sm:pr-4">
            <span 
              className="text-[#9AA389] text-3xl mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              01
            </span>
            <p className="text-[#e0e0e0] text-sm tracking-wide leading-relaxed">
              Отсканируйте помещение LiDAR на iPhone
            </p>
          </div>

          {/* Шаг 2 */}
          <div className="flex flex-col sm:border-r border-[#9AA389]/20 sm:pr-4">
            <span 
              className="text-[#9AA389] text-3xl mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              02
            </span>
            <p className="text-[#e0e0e0] text-sm tracking-wide leading-relaxed">
              Пришлите нам 3D-скан
            </p>
          </div>

          {/* Шаг 3 */}
          <div className="flex flex-col">
            <span 
              className="text-[#9AA389] text-3xl mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              03
            </span>
            <p className="text-[#e0e0e0] text-sm tracking-wide leading-relaxed">
              Получите готовый дизайн дистанционно
            </p>
          </div>              </div>

        {/* CTA кнопка */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block px-8 py-3.5 border border-[#f5f5f5]/60 text-[#f5f5f5] text-sm tracking-[0.15em] uppercase hover:bg-[#f5f5f5] hover:text-[#0f0f0f] transition-all duration-300 rounded-full"
        >
          Узнать об услуге
        </button>            </FadeSection>

      {/* Визуал LiDAR с эффектным появлением */}
      <LidarReveal>
        <div className="relative w-full max-w-xl lg:max-w-2xl">
          <svg 
            viewBox="60 50 380 450" 
            className="w-full h-auto lg:w-[clamp(289px,30.6vw,476px)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* iPhone силуэт */}
            <rect 
              x="200" 
              y="350" 
              width="100" 
              height="150" 
              rx="15"
              fill="none" 
              stroke="#f5f5f5" 
              strokeWidth="2"
              opacity="0.7"
            />
            <circle 
              cx="250" 
              cy="375" 
              r="5" 
              fill="#9AA389"
              opacity="0.9"
            >
              <animate 
                attributeName="r" 
                values="5;7;5" 
                dur="2s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="opacity" 
                values="0.9;1;0.9" 
                dur="2s" 
                repeatCount="indefinite"
              />
            </circle>
            

            {/* Сканирующая сетка с анимацией */}
            <g opacity="0.5">
              {/* Горизонтальные линии с движением */}
              <line x1="100" y1="100" x2="400" y2="100" stroke="#9AA389" strokeWidth="0.8" strokeDasharray="3,5">
                <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="80" y1="160" x2="420" y2="160" stroke="#9AA389" strokeWidth="0.8" strokeDasharray="3,5">
                <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2.5s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="220" x2="440" y2="220" stroke="#9AA389" strokeWidth="0.8" strokeDasharray="3,5">
                <animate attributeName="stroke-dashoffset" from="0" to="16" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="80" y1="280" x2="420" y2="280" stroke="#9AA389" strokeWidth="0.8" strokeDasharray="3,5">
                <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2.2s" repeatCount="indefinite" />
              </line>
              
              {/* Вертикальные линии с движением */}
              <line x1="100" y1="50" x2="100" y2="350" stroke="#9AA389" strokeWidth="0.8" strokeDasharray="3,5">
                <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2.3s" repeatCount="indefinite" />
              </line>
              <line x1="250" y1="50" x2="250" y2="350" stroke="#9AA389" strokeWidth="0.8" strokeDasharray="3,5">
                <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2.8s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="50" x2="400" y2="350" stroke="#9AA389" strokeWidth="0.8" strokeDasharray="3,5">
                <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2.6s" repeatCount="indefinite" />
              </line>
            </g>

            {/* Контурные линии комнаты с эффектом рисования */}
            <g opacity="0.4" fill="none" stroke="#f5f5f5" strokeWidth="1">
              {/* Левая стена */}
              <path d="M 80 120 L 80 300" strokeDasharray="200" strokeDashoffset="200">
                <animate attributeName="stroke-dashoffset" values="200;0;200" dur="6s" repeatCount="indefinite" />
              </path>
              {/* Правая стена */}
              <path d="M 420 120 L 420 300" strokeDasharray="200" strokeDashoffset="200">
                <animate attributeName="stroke-dashoffset" values="200;0;200" dur="6s" begin="1s" repeatCount="indefinite" />
              </path>
              {/* Пол */}
              <path d="M 80 300 L 420 300" strokeDasharray="340" strokeDashoffset="340">
                <animate attributeName="stroke-dashoffset" values="340;0;340" dur="6s" begin="2s" repeatCount="indefinite" />
              </path>
              {/* Диван */}
              <path d="M 160 260 L 280 260 L 280 280 L 160 280 Z" strokeDasharray="280" strokeDashoffset="280">
                <animate attributeName="stroke-dashoffset" values="280;0;280" dur="6s" begin="3s" repeatCount="indefinite" />
              </path>
            </g>

            {/* Вращающаяся спираль сканирования */}
            <g opacity="0.3">
              <circle cx="250" cy="200" r="80" fill="none" stroke="#9AA389" strokeWidth="0.5" strokeDasharray="5,10">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 250 200"
                  to="360 250 200"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="250" cy="200" r="120" fill="none" stroke="#9AA389" strokeWidth="0.5" strokeDasharray="8,15">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 250 200"
                  to="0 250 200"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            {/* Облако точек - контур комнаты с анимацией проявления и пульсацией */}
            <g opacity="0.7">
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.02;1"
                dur="4s"
                repeatCount="indefinite"
                additive="sum"
              />
              {/* Стена левая */}
              <circle cx="80" cy="120" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="85" cy="150" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="82" cy="180" r="3" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="88" cy="210" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="84" cy="240" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="86" cy="270" r="2.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="83" cy="300" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.2s" repeatCount="indefinite" />
              </circle>

              {/* Стена правая */}
              <circle cx="420" cy="120" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="415" cy="150" r="2.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="418" cy="180" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="412" cy="210" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="416" cy="240" r="3" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="414" cy="270" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="417" cy="300" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.3s" repeatCount="indefinite" />
              </circle>

              {/* Пол */}
              <circle cx="120" cy="320" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="180" cy="325" r="3" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="250" cy="322" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="320" cy="328" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="380" cy="323" r="2.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2.3s" repeatCount="indefinite" />
              </circle>

              {/* Диван (силуэт) */}
              <circle cx="160" cy="260" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="190" cy="258" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="220" cy="262" r="3" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="250" cy="260" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="280" cy="259" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="160" cy="280" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="190" cy="282" r="3" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="220" cy="279" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="250" cy="283" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="280" cy="281" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2.3s" repeatCount="indefinite" />
              </circle>

              {/* Проём/дверь */}
              <circle cx="340" cy="200" r="3" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="345" cy="230" r="2.5" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="342" cy="260" r="3" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="348" cy="290" r="2.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.4s" repeatCount="indefinite" />
              </circle>

              {/* Окно */}
              <circle cx="150" cy="140" r="2.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="170" cy="140" r="2.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="170" r="2.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="170" cy="170" r="2.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.2s" repeatCount="indefinite" />
              </circle>

              {/* Стол */}
              <circle cx="300" cy="240" r="2" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="320" cy="240" r="2" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="310" cy="250" r="2" fill="#f5f5f5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.8s" repeatCount="indefinite" />
              </circle>

              {/* Растение */}
              <circle cx="380" cy="220" r="2" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="385" cy="210" r="1.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="375" cy="215" r="1.5" fill="#9AA389">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.6s" repeatCount="indefinite" />
              </circle>
            </g>
            {/* Сканирующие лучи от iPhone с градиентом */}
            <defs>
              <linearGradient id="scanBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#9AA389', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#9AA389', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            <g opacity="0.5">
              <line x1="250" y1="360" x2="100" y2="100" stroke="url(#scanBeam)" strokeWidth="1.5">
                <animate 
                  attributeName="opacity" 
                  values="0.3;0.9;0.3" 
                  dur="2.5s" 
                  repeatCount="indefinite"
                />
              </line>
              <line x1="250" y1="360" x2="180" y2="80" stroke="url(#scanBeam)" strokeWidth="1.5">
                <animate 
                  attributeName="opacity" 
                  values="0.3;0.9;0.3" 
                  dur="2.5s" 
                  begin="0.3s"
                  repeatCount="indefinite"
                />
              </line>
              <line x1="250" y1="360" x2="250" y2="60" stroke="url(#scanBeam)" strokeWidth="1.5">
                <animate 
                  attributeName="opacity" 
                  values="0.3;0.9;0.3" 
                  dur="2.5s" 
                  begin="0.6s"
                  repeatCount="indefinite"
                />
              </line>
              <line x1="250" y1="360" x2="320" y2="80" stroke="url(#scanBeam)" strokeWidth="1.5">
                <animate 
                  attributeName="opacity" 
                  values="0.3;0.9;0.3" 
                  dur="2.5s" 
                  begin="0.9s"
                  repeatCount="indefinite"
                />
              </line>
              <line x1="250" y1="360" x2="400" y2="100" stroke="url(#scanBeam)" strokeWidth="1.5">
                <animate 
                  attributeName="opacity" 
                  values="0.3;0.9;0.3" 
                  dur="2.5s" 
                  begin="1.2s"
                  repeatCount="indefinite"
                />
              </line>
            </g>



                </svg>
              </div>
            </LidarReveal>
          </div>
        </div>
      </section>



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
            <div className="flex flex-col items-center gap-0">
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
              <div className="flex justify-center mt-10">
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
              <div className="flex justify-center mt-3">
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

              {/* Наш сайт */}
              <div className="flex justify-center mt-3">
                <a
                  href="https://maeccqwbld.github.io/atmos-site/#services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full border border-[#A89B8C]/40 text-[#4A3A2E] text-sm tracking-[0.1em] hover:bg-[#9AA389]/10 hover:border-[#9AA389]/60 transition-all duration-300 min-w-[240px]"
                >
                  <IconGlobe />
                  <span>Наш сайт</span>
                </a>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-[#EDE6D8] pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeSection>
            {/* Логотип */}
            <h3
              className="text-3xl sm:text-4xl text-[#4A3A2E] tracking-[0.08em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              АТМОС
            </h3>
            <p className="text-[#A89B8C] text-[10px] sm:text-xs tracking-[0.35em] uppercase mt-2">
              дизайн интерьеров
            </p>

            {/* Разделительная линия */}
            <div className="w-full h-px bg-[#A89B8C]/35 mt-8 mb-5" />

            {/* Реквизиты */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 text-[#A89B8C] text-xs tracking-wide">
              <span>ИП Бурняков Андрей Сергеевич</span>
              <span>ОГРН 3262202000098542</span>
              <span>ИНН 222213652926</span>
            </div>

            {/* Копирайт */}
            <p className="text-[#A89B8C] text-xs tracking-wide mt-4">
              © 2026 АТМОС
            </p>
          </FadeSection>
        </div>
      </footer>

      {/* LiDAR Modal */}
      <LidarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
