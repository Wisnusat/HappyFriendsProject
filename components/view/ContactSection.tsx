"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface ContactSectionProps {
  faqs: FAQ[]
  openFaq: number | null
  setOpenFaq: (index: number | null) => void
  openWhatsApp: () => void
}

export function ContactSection({ faqs, openFaq, setOpenFaq, openWhatsApp }: ContactSectionProps) {
  return (
    <>
      {/* FAQ Section */}
      <section className="relative z-10 px-4 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
            Any Questions?
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-4 border-purple-500">
                <button
                  className="w-full py-6 flex justify-between items-center text-left hover:text-purple-600 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-xl md:text-2xl font-black text-gray-800">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="pb-6 text-gray-700 text-lg leading-relaxed font-medium">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Address
          </h2>

          <div className="space-y-12">
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-black text-purple-600 mb-6">Lampung Office</h3>
              <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed font-medium">
                Jl. H. Agus Salim No. 122, Bandar Lampung
                <br />
                Lampung 35114
              </p>
              
              <h3 className="text-2xl md:text-3xl font-black mb-8 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Representative Marketing
              </h3>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Jambi</h4>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Padang</h4>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Palembang</h4>
                </div>
                <div>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Jakarta</h4>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Tangerang</h4>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Bandung</h4>
                </div>
                <div>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Malang</h4>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Pasuruan</h4>
                  <h4 className="font-black mb-2 text-purple-600 text-lg">Samarinda</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated to match the design exactly */}
      <section id="contact" className="relative z-10 px-4 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Contact Our Admin
            </h2>
            <p className="text-xl text-gray-600 font-medium">Ready to help you from our office</p>
          </div>

          {/* Main Contact Card */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
              Udah siap buat yearbook impianmu?
            </h3>
            <p className="text-xl md:text-2xl text-white font-bold mb-8 drop-shadow-lg">Segera hubungi tim kami!</p>

            <Button
              onClick={openWhatsApp}
              className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-4 text-lg md:text-xl font-black shadow-xl rounded-full transform hover:scale-105 transition-all border-2 border-white"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.085" />
              </svg>
              Hubungi kami
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
