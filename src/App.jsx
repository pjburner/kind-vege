import { useState, useEffect } from 'react'
import minJooImg from './assets/minjoo_final.png'
import BlobButton from './components/BlobButton'
import AnimatedText from './components/AnimatedText'
import FloatingElements from './components/FloatingElements'
import AsciiFlowTrail from './components/AsciiFlowTrail'
import { Instagram, Globe, Plus, ArrowRight, Youtube, MessageCircle, Facebook, ArrowUpRight, Mail, MapPin, Search } from 'lucide-react'

// Scraped Data
const BOOK_INFO = {
  title: "초등학생 환경 궁금증 100",
  subtitle: "100 Environmental Questions",
  description: "Environment stories that children were really curious about.",
  link: "https://product.kyobobook.co.kr/detail/S000216144538",
  coverUrl: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788927748144.jpg"
}

const SOCIAL_LINKS = {
  instagram: "https://instagram.com/min.joo_dodam.dodam",
  linktree: "https://linktr.ee/kindvege",
}

const LINK_STACK = [
  {
    name: "Instagram",
    label: "Kind Vege Instagram",
    url: "https://www.instagram.com/kind_vege",
    icon: (props) => <Instagram {...props} />,
  },
  {
    name: "YouTube",
    label: "YouTube Channel",
    url: "https://www.youtube.com/channel/UClF7Kar11ZsTKx9bGezC5-A", // Official Channel ID
    icon: (props) => <Youtube {...props} />,
  },
  {
    name: "TikTok",
    label: "TikTok",
    url: "https://www.tiktok.com/@kindvege",
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12v8a4 4 0 1 0 4-4H9" />
        <path d="M15 8a4 4 0 1 0 0-8" />
        <path d="M15 2v20" />
      </svg>
    ),
  },
  {
    name: "Naver",
    label: "Naver Recipe Blog",
    url: "https://blog.naver.com/dodam1027",
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18V6l12 12V6" />
      </svg>
    ),
  },
  {
    name: "Kakao",
    label: "Kakao Open Chat",
    url: "https://open.kakao.com/o/gu635lTd",
    icon: (props) => <MessageCircle {...props} />,
  },
  {
    name: "Facebook",
    label: "Facebook Profile",
    url: "https://www.facebook.com",
    icon: (props) => <Facebook {...props} />,
  },
  {
    name: "KindEdu",
    label: "Kind Education",
    url: "https://www.instagram.com/minjoo_kindedu",
    icon: (props) => <Instagram {...props} />,
  },
  {
    name: "Email",
    label: "Work with Me",
    url: "mailto:kindvege@gmail.com",
    icon: (props) => <Mail {...props} />,
  }
];

function App() {
  const [cityInput, setCityInput] = useState('');
  const [locatorLoading, setLocatorLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      window.open(`https://www.google.com/maps/search/vegan+restaurants+and+markets+near+${encodeURIComponent(cityInput)}`, '_blank');
    }
  };

  const handleFindNearMe = () => {
    setLocatorLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        window.open(`https://www.google.com/maps/search/vegan+restaurants+and+markets/@${latitude},${longitude},15z`, '_blank');
        setLocatorLoading(false);
      }, (error) => {
        console.error("Error getting location:", error);
        alert("Unable to retrieve your location. Please type your city instead.");
        setLocatorLoading(false);
      });
    } else {
      alert("Geolocation is not supported by your browser.");
      setLocatorLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2DB9A5] text-white overflow-x-hidden font-sans selection:bg-[#FFB8A5] selection:text-white">
      <FloatingElements />
      <AsciiFlowTrail />

      {/* 1. Header (Navbar) */}
      <nav className="fixed w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-plus-lighter pointer-events-none">
        <a href="#" className="flex items-center gap-2 pointer-events-auto">
          {/* Logo with Fredoka font and bubble style */}
          <div className="text-4xl font-bold logo-kind-vege text-[#FFB8A5]">Kind<span className="text-[#B2EDE0]">Vege</span></div>
        </a>

        <div className="hidden md:flex items-center gap-2 pointer-events-auto">
          {/* Keeping the menu button simple as it occupies small space */}
          <a href="#about" className="btn-new-transparent h-10 px-6 bg-white/20 backdrop-blur-md border-white/40 text-white hover:bg-white hover:text-[#2DB9A5]">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            Menu
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* 2. Promo Hero Section matching 'promo-hero-content' */}
        <section className="relative px-6 pt-32 pb-20 min-h-screen flex flex-col justify-between">

          {/* Center Content */}
          <div className="relative z-10 max-w-[90vw] mx-auto w-full">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-8xl font-bold heading-bubbly text-[#FFB8A5]">
                  Connect with<br />Kind Vege
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-medium">A zero-waste lifestyle, one link at a time.</p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#B2EDE0] uppercase tracking-[0.2em] text-[10px] md:text-xs">
                <div className="w-1.5 h-1.5 bg-[#B2EDE0] rounded-full animate-pulse"></div>
                Vegan Influencer
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col md:flex-row justify-between gap-8 text-white/90 text-center md:text-left">
              <div className="text-16-regular-caps max-w-xs mx-auto md:mx-0">
                Veganism, Reinvented.
              </div>
              <div className="text-16-regular-caps max-w-md md:text-right mx-auto md:mx-0 normal-case leading-relaxed">
                100% of the flavor you love, reimagined for a zero-waste lifestyle. Discover plant-based recipes that are as kind to the planet as they are to your palate.
              </div>
            </div>

            <div className="mt-12 relative w-full max-w-5xl mx-auto h-[50vh] md:h-[70vh] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-black/5 backdrop-blur-sm border border-white/10">
              <img
                src={minJooImg}
                className="w-full h-full object-contain transition-all duration-1000"
                alt="Minjoo"
              />
              {/* Badge */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:right-8 md:left-auto bg-white/90 backdrop-blur p-4 md:p-6 rounded-2xl md:max-w-xs border border-white/50 shadow-lg text-[#2DB9A5] text-center md:text-left">
                <div className="text-2xl md:text-3xl font-medium mb-1 md:mb-2 text-center md:text-left">For the Planet.</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-[#FFB8A5]">
                  <AnimatedText text="Minjoo Cho — Founder" />
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-12 flex flex-col gap-4 text-center md:text-left">
              <div className="text-3xl md:text-5xl font-medium leading-tight text-white">
                For Your Health. For the Earth.
              </div>
              <div className="text-16-regular-caps text-[#FFB8A5] md:max-w-xl mx-auto md:mx-0 font-medium">
                Plant-based recipes that nourish the soul without depleting our resources.
              </div>
              <div className="md:hidden flex justify-center mt-4">
                {/* Mobile Button centered */}
                <BlobButton
                  text="Join Us"
                  href={SOCIAL_LINKS.linktree}
                  colorClass="fill-[#FFB8A5]"
                  textColorClass="fill-[#ffffff]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Marquee Section - Adjusted colors */}
        <section className="py-24 overflow-hidden border-y border-white/20 bg-[#FB8B24]/10 backdrop-blur">
          <div className="relative flex whitespace-nowrap overflow-hidden">
            <div className="animate-marquee flex gap-12 items-center min-w-full">
              <div className="text-120-medium text-white/30 px-8">Better Food.</div>
              <div className="text-120-medium text-[#FFB8A5] px-8">Healthier Life.</div>
              <div className="text-120-medium text-white/30 px-8">Zero Waste.</div>
              <div className="text-120-medium text-white px-8">Kind Vege.</div>
              {/* Duplicate for loop */}
              <div className="text-120-medium text-white/30 px-8">Better Food.</div>
              <div className="text-120-medium text-[#0F4C5C] px-8">Healthier Life.</div>
              <div className="text-120-medium text-white/30 px-8">Zero Waste.</div>
            </div>
          </div>
        </section>

        {/* 4. Capsule Section (Features) */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-[90vw] mx-auto">
            {/* Heading */}
            <div className="grid lg:grid-cols-2 gap-16 mb-24">
              <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white text-center lg:text-left">
                Walking together<br />
                <span className="text-[#FFB8A5]">for Earth.</span>
              </h2>
              <div className="flex flex-col justify-end items-center lg:items-start gap-8 text-center lg:text-left">
                <p className="text-lg leading-relaxed max-w-md text-white/90 mx-auto lg:mx-0">
                  Meet Minjoo. Powered by a Master's in Environmental Education, she marks a new chapter in sustainable living.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <BlobButton
                    text="The Book"
                    href={BOOK_INFO.link}
                    colorClass="fill-[#B2EDE0]"
                    textColorClass="fill-[#0F4C5C]"
                  />
                </div>
              </div>
            </div>

            {/* Cards - Adjusted for Coral Background */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white/90 backdrop-blur p-10 rounded-[2rem] min-h-[300px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full flex justify-between items-start mb-12">
                  <Globe size={40} className="text-[#2DB9A5]" />
                  <div className="text-4xl font-light opacity-20 text-black">01</div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-[#2DB9A5]">Sustainability Author</h3>
                  <p className="text-sm uppercase tracking-widest text-[#FFB8A5]">
                    Storytelling that inspires the next generation.
                  </p>
                </div>
              </div>

              {/* Card 2 - Dark Teal Accent */}
              <div className="bg-[#B2EDE0] border border-[#B2EDE0] p-10 rounded-[2rem] min-h-[300px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full flex justify-between items-start mb-12">
                  <Instagram size={40} className="text-[#FFB8A5]" />
                  <div className="text-4xl font-light text-[#2DB9A5]/20">02</div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-[#2DB9A5]">Community Builder</h3>
                  <p className="text-sm uppercase tracking-widest text-[#2DB9A5]">
                    Potlucks, lectures, and zero-waste parties.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/90 backdrop-blur p-10 rounded-[2rem] min-h-[300px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full flex justify-between items-start mb-12">
                  <div className="w-10 h-10 rounded-full border border-[#2DB9A5] flex items-center justify-center text-[#2DB9A5]">
                    <Plus />
                  </div>
                  <div className="text-4xl font-light opacity-20 text-black">03</div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-[#2DB9A5]">Vegan Chef</h3>
                  <p className="text-sm uppercase tracking-widest text-[#FFB8A5]">
                    Flavor without compromise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Book / Stats Section */}
        <section id="book" className="py-32 px-6 bg-[#B2EDE0] text-[#0F4C5C] rounded-t-[3rem] mt-12 border-t border-white/10">
          <div className="max-w-[90vw] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              {/* Placeholder video or image since we don't have the Farm Minerals video */}
              <source src="" type="video/mp4" />
              {/* Fallback Image if video fails/empty */}
              <img src={BOOK_INFO.coverUrl} className="w-full rounded-[2rem] border-4 border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" alt="Book Cover" />
            </div>

            <div>
              <h2 className="text-4xl md:text-7xl font-medium mb-16 text-[#FFB8A5] text-center lg:text-left leading-tight">
                Kitchen-Tested &<br /> Reader-Approved
              </h2>

              <div className="space-y-12">
                <div className="border-b border-[#FFB8A5]/30 pb-12 text-center lg:text-left">
                  <div className="text-6xl md:text-80-regular font-light text-[#2DB9A5]">100</div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-[#FFB8A5] mt-2">Questions Answered</div>
                </div>
                <div className="border-b border-[#FFB8A5]/30 pb-12 text-center lg:text-left">
                  <div className="text-6xl md:text-80-regular font-light text-[#2DB9A5]">300+</div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-[#FFB8A5] mt-2">Pages of Illustrations</div>
                </div>
                <div className="border-b border-[#FFB8A5]/30 pb-12 text-center lg:text-left">
                  <div className="text-6xl md:text-80-regular font-light text-[#2DB9A5]">100%</div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-[#FFB8A5] mt-2">Impact</div>
                </div>
              </div>

              <div className="mt-12 flex justify-center lg:justify-start">
                <BlobButton
                  text="Buy Now"
                  href={BOOK_INFO.link}
                  colorClass="fill-[#FFB8A5]"
                  textColorClass="fill-[#ffffff]"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Video of the Week Section */}
      <section className="py-24 px-6 bg-[#B2EDE0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold heading-bubbly text-[#FFB8A5] mb-2">Video of the Week</h2>
            <p className="text-[#0F4C5C]/60 uppercase tracking-widest text-xs">Sustainability insights in action.</p>
          </div>
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/20">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/MGeOOlZzmko" // Final verified video
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Link Stack Section */}
      <section className="py-24 px-6 bg-[#2DB9A5]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold heading-bubbly text-[#FFB8A5] mb-2">Social Hub</h2>
            <p className="text-white/60 uppercase tracking-widest text-xs">Join the zero-waste movement.</p>
          </div>
          <div className="flex flex-col gap-4">
            {LINK_STACK.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-stack-btn group"
              >
                <div className="bg-white/20 text-white p-2 rounded-lg group-hover:bg-white group-hover:text-[#FFB8A5] transition-colors">
                  {link.icon({ size: 24 })}
                </div>
                <span className="text-lg">{link.label}</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vegan Locator Section */}
      <section className="py-24 px-6 bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold heading-bubbly text-[#FFB8A5] mb-4">Find Vegan Eats</h2>
          <p className="text-white/80 mb-12 max-w-lg mx-auto">Hungry? Find plant-based kindness wherever you are in the world.</p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <form onSubmit={handleSearch} className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Enter City"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                className="w-full md:w-80 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#FFB8A5] transition-colors"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#FFB8A5] transition-colors">
                <Search size={20} />
              </button>
            </form>

            <button
              onClick={handleFindNearMe}
              disabled={locatorLoading}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#FFB8A5] text-white font-bold shadow-lg hover:brightness-105 transition-all active:scale-95 disabled:opacity-50"
            >
              <MapPin size={20} />
              {locatorLoading ? 'Finding...' : 'Find Near Me'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="community" className="bg-[#0b3842] text-white py-20 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="uppercase tracking-widest text-xs">Based in Korea</div>
          <div className="uppercase tracking-widest text-xs">© 2026 Minjoo Cho</div>
        </div>
      </footer>

    </div >
  )
}

export default App
