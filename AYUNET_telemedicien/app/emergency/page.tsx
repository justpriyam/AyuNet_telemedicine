"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import EmergencySystem from "@/components/emergency-system"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EmergencyPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  const languages = {
    en: {
      title: "Emergency Services",
      subtitle: "24/7 Emergency Medical Support",
      back: "Back to Home",
    },
    hi: {
      title: "आपातकालीन सेवाएं",
      subtitle: "24/7 आपातकालीन चिकित्सा सहायता",
      back: "होम पर वापस",
    },
    pa: {
      title: "ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ",
      subtitle: "24/7 ਐਮਰਜੈਂਸੀ ਮੈਡੀਕਲ ਸਹਾਇਤਾ",
      back: "ਘਰ ਵਾਪਸ",
    },
  }

  const t = languages[selectedLanguage as keyof typeof languages]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.back}
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">{t.title}</h1>
                <p className="text-sm text-muted-foreground">{t.subtitle}</p>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex gap-2">
              {Object.keys(languages).map((lang) => (
                <Button
                  key={lang}
                  variant={selectedLanguage === lang ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLanguage(lang)}
                  className="text-xs"
                >
                  {lang === "en" ? "EN" : lang === "hi" ? "हि" : "ਪਾ"}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <EmergencySystem
          userType="patient"
          language={selectedLanguage}
          patientName="Rajesh Kumar"
          location="Village Nabha, Punjab"
        />
      </div>
    </div>
  )
}
