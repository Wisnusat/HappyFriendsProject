"use client"

import type React from "react"

import { useState, useEffect } from "react"

// Import new components
import { Header } from "@/components/view/Header"
import { MobileMenu } from "@/components/view/MobileMenu"
import { HeroSection } from "@/components/view/HeroSection"
import { ServicesSection } from "@/components/view/ServicesSection"
import { PortfolioSection } from "@/components/view/PortfolioSection"
import { ClientSection } from "@/components/view/ClientSection"
import { AboutSection } from "@/components/view/AboutSection"
import { ContactSection } from "@/components/view/ContactSection"
import { Footer } from "@/components/view/Footer"
import { ModalManager } from "@/components/view/ModalManager"
import { BackgroundElements } from "@/components/view/BackgroundElements"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Modal states for yearbook-style popups
  const [yearbookModalOpen, setYearbookModalOpen] = useState(false)
  const [photographyModalOpen, setPhotographyModalOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [fullVideoModalOpen, setFullVideoModalOpen] = useState(false)
  const [modalVideoSrc, setModalVideoSrc] = useState("")

  // Portfolio modal states
  const [portfolioLeftTopModalOpen, setPortfolioLeftTopModalOpen] = useState(false)
  const [portfolioLeftBottomModalOpen, setPortfolioLeftBottomModalOpen] = useState(false)
  const [portfolioCenterModalOpen, setPortfolioCenterModalOpen] = useState(false)
  const [portfolioRightTopModalOpen, setPortfolioRightTopModalOpen] = useState(false)
  const [portfolioRightBottomModalOpen, setPortfolioRightBottomModalOpen] = useState(false)

  // Add state for modal indices
  const [yearbookModalIndex, setYearbookModalIndex] = useState(0)
  const [photographyModalIndex, setPhotographyModalIndex] = useState(0)
  const [portfolioLeftTopModalIndex, setPortfolioLeftTopModalIndex] = useState(0)
  const [portfolioLeftBottomModalIndex, setPortfolioLeftBottomModalIndex] = useState(0)
  const [portfolioCenterModalIndex, setPortfolioCenterModalIndex] = useState(0)
  const [portfolioRightTopModalIndex, setPortfolioRightTopModalIndex] = useState(0)
  const [portfolioRightBottomModalIndex, setPortfolioRightBottomModalIndex] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Detect active section based on scroll position
      const sections = ["home", "services", "portfolio", "client", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  // WhatsApp function
  const openWhatsApp = () => {
    const phoneNumber = "628111224478"
    const message = "Mau nanya-nanya min soal Happy Friends Project"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Real yearbook images
  const yearbookImages = [
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/yearbook1.jpg", // Wanderlust theme
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/yearbook2.jpg", // Luxerra theme
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/yearbook3.jpg", // Actala theme
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/yearbook4.jpg", // The Musical theme
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/yearbook5.jpg", // Antevorta theme
  ]

  // Real photography images - Updated with actual images
  const photographyImages = [
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/photography1.jpg", // Student profiles with orange background
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/photography2.jpg", // Class of 2023 Group 8
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/photography3.jpg", // Money Heist themed
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/photography4.jpg", // Our Profile with golden frames
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/photography5.jpg", // Money Heist graduation theme
  ]

  const videoImages = ["https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/v1.mp4", "/placeholder.mp4", "/placeholder.mp4"]

  // Portfolio images for different sections
  const portfolioLeftTopImages = ["https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kia1.JPG", "  https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kia2.JPG", "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kia3.JPG"]

  const portfolioLeftBottomImages = ["https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kib1.JPG", "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kib2.JPG", "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kib3.JPG"]

  const portfolioRightBottomImages = ["https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kb1.JPG", "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kb2.JPG", "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/kb3.JPG"]
  const portfolioRightTopImages = ["https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/ka1.JPG", "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/ka2.JPG", "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/ka3.JPG"]

  // Updated center portfolio images with the 4 real photos provided by user
  const portfolioCenterImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nara%20Olivia%20Lahutna.JPG-bMW6GO9wjJYhTAJzufxiO0I0XT61uo.jpeg", // Nara Olivia Lahutna - vintage aesthetic portrait
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rana%20Hazimah.JPG-YUVuiQ8ffnsxH5bE6azcenLlSgp6f2.jpeg", // Rana Hazimah - professional portrait with hijab
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabio%20Alfath%20Setiawan.JPG-BjjQB4wc5ztGG4dHPOzypwXkJ5LquM.jpeg", // Fabio Alfath Setiawan - modern futuristic portrait
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Djimi%20Rizqi%20Darmawan.JPG-V7KRZK8GMBl0ksIPOUiuu0wfQ8es4I.jpeg", // Djimi Rizqi Darmawan - creative shopping cart portrait
  ]

  const stats = [
    { number: "8", label: "Years", subtitle: "& still going strong" },
    { number: "85+", label: "Schools", subtitle: "across Indonesia" },
    { number: "150+", label: "Yearbooks", subtitle: "created with love" },
    { number: "12", label: "Cities", subtitle: "we've reached" },
    { number: "1K+", label: "Designs", subtitle: "unique & creative" },
    { number: "15K+", label: "Photos", subtitle: "captured memories" },
  ]

  const faqs = [
    {
      question: "Dimana Kantor Pusat Happy Friends Project?",
      answer:
        "Kantor pusat kami berada di Bandar Lampung dan kami melayani seluruh Indonesia dengan tim kreatif yang berpengalaman dalam pembuatan yearbook.",
    },
    {
      question: "Apakah Memiliki Legalitas?",
      answer:
        "Ya, Happy Friends Project adalah perusahaan yang terdaftar resmi dengan semua dokumen legalitas yang lengkap.",
    },
    {
      question: "Apakah Ada Garansi?",
      answer: "Kami memberikan garansi kepuasan 100% untuk setiap project yearbook yang kami kerjakan.",
    },
    {
      question: "Apakah Happy Friends Project Bisa Menerima Project di Luar Jawa?",
      answer:
        "Tentu saja! Kami melayani seluruh Indonesia dan siap membantu sekolah di manapun untuk membuat yearbook yang memorable.",
    },
    {
      question: "Bagaimana Sistem Pembayaran Projectnya?",
      answer:
        "Kami menyediakan sistem pembayaran yang fleksibel dengan berbagai metode pembayaran yang aman dan terpercaya.",
    },
  ]

  const videoFiles = [
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/v1.mp4",
    // "/videos/video2.mp4",
  ]

  const clientLogos = [
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_1metro.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_alazharbogor.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_yakobus.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_cendekia.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_darma.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_global.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_globalprestasi.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_iclampung.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_icm.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_kebangsaan.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_madani.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_man1.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_pelitabangsa.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_penabur.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_santo.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_sanur.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_tunasmekar.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_yp.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_theresia.png",
    "https://ytsotxeekfpfibulsxnd.supabase.co/storage/v1/object/public/happy-friend-asset/client_avicenna.png",
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <BackgroundElements mousePosition={mousePosition} />

      {/* Header */}
      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Services Section */}
      <ServicesSection
        yearbookImages={yearbookImages}
        photographyImages={photographyImages}
        videoFiles={videoFiles}
        setYearbookModalIndex={setYearbookModalIndex}
        setYearbookModalOpen={setYearbookModalOpen}
        setPhotographyModalIndex={setPhotographyModalIndex}
        setPhotographyModalOpen={setPhotographyModalOpen}
        setVideoModalOpen={setVideoModalOpen}
      />

      {/* Portfolio Section */}
      <PortfolioSection
        portfolioLeftTopImages={portfolioLeftTopImages}
        portfolioLeftBottomImages={portfolioLeftBottomImages}
        portfolioCenterImages={portfolioCenterImages}
        portfolioRightTopImages={portfolioRightTopImages}
        portfolioRightBottomImages={portfolioRightBottomImages}
        setPortfolioLeftTopModalIndex={setPortfolioLeftTopModalIndex}
        setPortfolioLeftTopModalOpen={setPortfolioLeftTopModalOpen}
        setPortfolioLeftBottomModalIndex={setPortfolioLeftBottomModalIndex}
        setPortfolioLeftBottomModalOpen={setPortfolioLeftBottomModalOpen}
        setPortfolioCenterModalIndex={setPortfolioCenterModalIndex}
        setPortfolioCenterModalOpen={setPortfolioCenterModalOpen}
        setPortfolioRightTopModalIndex={setPortfolioRightTopModalIndex}
        setPortfolioRightTopModalOpen={setPortfolioRightTopModalOpen}
        setPortfolioRightBottomModalIndex={setPortfolioRightBottomModalIndex}
        setPortfolioRightBottomModalOpen={setPortfolioRightBottomModalOpen}
      />

      {/* Client Section */}
      <ClientSection clientLogos={clientLogos} />
      
      {/* About Section */}
      <AboutSection stats={stats} />

      {/* Contact Section */}
      <ContactSection
        faqs={faqs}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
        openWhatsApp={openWhatsApp}
      />

      {/* Footer */}
      <Footer />

      {/* Modal Manager */}
      <ModalManager
        // Yearbook modals
        yearbookModalOpen={yearbookModalOpen}
        setYearbookModalOpen={setYearbookModalOpen}
        yearbookImages={yearbookImages}
        yearbookModalIndex={yearbookModalIndex}
        
        photographyModalOpen={photographyModalOpen}
        setPhotographyModalOpen={setPhotographyModalOpen}
        photographyImages={photographyImages}
        photographyModalIndex={photographyModalIndex}
        
        videoModalOpen={videoModalOpen}
        setVideoModalOpen={setVideoModalOpen}
        videoFiles={videoFiles}
        
        // Portfolio modals
        portfolioLeftTopModalOpen={portfolioLeftTopModalOpen}
        setPortfolioLeftTopModalOpen={setPortfolioLeftTopModalOpen}
        portfolioLeftTopImages={portfolioLeftTopImages}
        portfolioLeftTopModalIndex={portfolioLeftTopModalIndex}
        
        portfolioLeftBottomModalOpen={portfolioLeftBottomModalOpen}
        setPortfolioLeftBottomModalOpen={setPortfolioLeftBottomModalOpen}
        portfolioLeftBottomImages={portfolioLeftBottomImages}
        portfolioLeftBottomModalIndex={portfolioLeftBottomModalIndex}
        
        portfolioCenterModalOpen={portfolioCenterModalOpen}
        setPortfolioCenterModalOpen={setPortfolioCenterModalOpen}
        portfolioCenterImages={portfolioCenterImages}
        portfolioCenterModalIndex={portfolioCenterModalIndex}
        
        portfolioRightTopModalOpen={portfolioRightTopModalOpen}
        setPortfolioRightTopModalOpen={setPortfolioRightTopModalOpen}
        portfolioRightTopImages={portfolioRightTopImages}
        portfolioRightTopModalIndex={portfolioRightTopModalIndex}
        
        portfolioRightBottomModalOpen={portfolioRightBottomModalOpen}
        setPortfolioRightBottomModalOpen={setPortfolioRightBottomModalOpen}
        portfolioRightBottomImages={portfolioRightBottomImages}
        portfolioRightBottomModalIndex={portfolioRightBottomModalIndex}
        
        // Video modal
        fullVideoModalOpen={fullVideoModalOpen}
        setFullVideoModalOpen={setFullVideoModalOpen}
        modalVideoSrc={modalVideoSrc}
      />
    </div>
  )
}
