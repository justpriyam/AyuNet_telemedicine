"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Users, Pill, Phone, Shield, Globe, Stethoscope, Activity } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  const languages = {
    en: {
      title: "AyuNet",
      subtitle: "Connecting Rural Healthcare",
      description: "Access quality healthcare from anywhere in rural communities",
      tagline: "Bridging the gap between rural communities and quality healthcare",
      selectRole: "Choose Your Portal",
      doctor: "Doctor Portal",
      doctorDesc: "Manage consultations and patient care",
      patient: "Patient Portal",
      patientDesc: "Book appointments and access health records",
      pharmacist: "Pharmacist Portal",
      pharmacistDesc: "Manage medicine inventory and orders",
      emergency: "Emergency Services",
      emergencyDesc: "24/7 emergency medical support",
      features: "Platform Features",
      feature1: "AI Symptom Checker",
      feature2: "Video Consultations",
      feature3: "Digital Health Records",
      feature4: "Medicine Availability",
      feature5: "Emergency Support",
      feature6: "Multilingual Support",
      getStarted: "Get Started",
      loginToPortal: "Login to Portal",
    },
    hi: {
      title: "आयुनेट",
      subtitle: "ग्रामीण स्वास्थ्य सेवा को जोड़ना",
      description: "ग्रामीण समुदायों में कहीं से भी गुणवत्तापूर्ण स्वास्थ्य सेवा प्राप्त करें",
      tagline: "ग्रामीण समुदायों और गुणवत्तापूर्ण स्वास्थ्य सेवा के बीच की खाई को पाटना",
      selectRole: "अपना पोर्टल चुनें",
      doctor: "डॉक्टर पोर्टल",
      doctorDesc: "परामर्श और रोगी देखभाल का प्रबंधन करें",
      patient: "मरीज़ पोर्टल",
      patientDesc: "अपॉइंटमेंट बुक करें और स्वास्थ्य रिकॉर्ड एक्सेस करें",
      pharmacist: "फार्मासिस्ट पोर्टल",
      pharmacistDesc: "दवा इन्वेंटरी और ऑर्डर का प्रबंधन करें",
      emergency: "आपातकालीन सेवाएं",
      emergencyDesc: "24/7 आपातकालीन चिकित्सा सहायता",
      features: "प्लेटफॉर्म सुविधाएं",
      feature1: "AI लक्षण जांचकर्ता",
      feature2: "वीडियो परामर्श",
      feature3: "डिजिटल स्वास्थ्य रिकॉर्ड",
      feature4: "दवा उपलब्धता",
      feature5: "आपातकालीन सहायता",
      feature6: "बहुभाषी समर्थन",
      getStarted: "शुरू करें",
      loginToPortal: "पोर्टल में लॉगिन करें",
    },
    pa: {
      title: "ਆਯੁਨੈੱਟ",
      subtitle: "ਪੇਂਡੂ ਸਿਹਤ ਸੇਵਾ ਨੂੰ ਜੋੜਨਾ",
      description: "ਪੇਂਡੂ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਕਿਤੇ ਵੀ ਗੁਣਵੱਤਾ ਵਾਲੀ ਸਿਹਤ ਸੇਵਾ ਪ੍ਰਾਪਤ ਕਰੋ",
      tagline: "ਪੇਂਡੂ ਭਾਈਚਾਰਿਆਂ ਅਤੇ ਗੁਣਵੱਤਾ ਵਾਲੀ ਸਿਹਤ ਸੇਵਾ ਵਿਚਕਾਰ ਪੁਲ ਬਣਾਉਣਾ",
      selectRole: "ਆਪਣਾ ਪੋਰਟਲ ਚੁਣੋ",
      doctor: "ਡਾਕਟਰ ਪੋਰਟਲ",
      doctorDesc: "ਸਲਾਹ ਅਤੇ ਮਰੀਜ਼ ਦੀ ਦੇਖਭਾਲ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
      patient: "ਮਰੀਜ਼ ਪੋਰਟਲ",
      patientDesc: "ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ ਅਤੇ ਸਿਹਤ ਰਿਕਾਰਡ ਤੱਕ ਪਹੁੰਚ ਕਰੋ",
      pharmacist: "ਫਾਰਮਾਸਿਸਟ ਪੋਰਟਲ",
      pharmacistDesc: "ਦਵਾਈ ਇਨਵੈਂਟਰੀ ਅਤੇ ਆਰਡਰ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
      emergency: "ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ",
      emergencyDesc: "24/7 ਐਮਰਜੈਂਸੀ ਮੈਡੀਕਲ ਸਹਾਇਤਾ",
      features: "ਪਲੇਟਫਾਰਮ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
      feature1: "AI ਲੱਛਣ ਜਾਂਚਕਰਤਾ",
      feature2: "ਵੀਡੀਓ ਸਲਾਹ",
      feature3: "ਡਿਜੀਟਲ ਸਿਹਤ ਰਿਕਾਰਡ",
      feature4: "ਦਵਾਈ ਉਪਲਬਧਤਾ",
      feature5: "ਐਮਰਜੈਂਸੀ ਸਹਾਇਤਾ",
      feature6: "ਬਹੁਭਾਸ਼ੀ ਸਹਾਇਤਾ",
      getStarted: "ਸ਼ੁਰੂ ਕਰੋ",
      loginToPortal: "ਪੋਰਟਲ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ",
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/medical-stethoscope-heartbeat-rural-healthcare-bac.png')`,
        }}
      />

      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-sm shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Stethoscope className="h-10 w-10 text-primary" />
                <Activity className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">{currentLang.title}</h1>
                <p className="text-sm text-muted-foreground">{currentLang.subtitle}</p>
              </div>
            </div>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-32 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="pa">ਪੰਜਾਬੀ</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {currentLang.description}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{currentLang.tagline}</p>
          </div>

          {/* Emergency Button */}
          <Link href="/emergency">
            <Button
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground mb-16 text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="mr-3 h-6 w-6" />
              {currentLang.emergency}
            </Button>
          </Link>

          {/* Role Selection */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold text-foreground mb-12">{currentLang.selectRole}</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link href="/doctor/login">
                <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-border hover:border-primary/50 bg-card/80 backdrop-blur-sm h-full">
                  <CardHeader className="text-center p-8">
                    <div className="mb-6 p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground mb-3">{currentLang.doctor}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">{currentLang.doctorDesc}</CardDescription>
                    <Button
                      variant="outline"
                      className="mt-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      {currentLang.loginToPortal}
                    </Button>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/patient/login">
                <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-border hover:border-secondary/50 bg-card/80 backdrop-blur-sm h-full">
                  <CardHeader className="text-center p-8">
                    <div className="mb-6 p-4 bg-secondary/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Heart className="h-10 w-10 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground mb-3">{currentLang.patient}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">{currentLang.patientDesc}</CardDescription>
                    <Button
                      variant="outline"
                      className="mt-2 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                    >
                      {currentLang.loginToPortal}
                    </Button>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/pharmacist/login">
                <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-border hover:border-accent/50 bg-card/80 backdrop-blur-sm h-full">
                  <CardHeader className="text-center p-8">
                    <div className="mb-6 p-4 bg-accent/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Pill className="h-10 w-10 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground mb-3">{currentLang.pharmacist}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">
                      {currentLang.pharmacistDesc}
                    </CardDescription>
                    <Button
                      variant="outline"
                      className="mt-2 group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                    >
                      {currentLang.loginToPortal}
                    </Button>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-border shadow-xl">
            <h3 className="text-3xl font-semibold text-foreground mb-12">{currentLang.features}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{currentLang.feature1}</h4>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-secondary/10 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{currentLang.feature2}</h4>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-accent/10 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{currentLang.feature3}</h4>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Pill className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{currentLang.feature4}</h4>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-destructive/10 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-destructive" />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{currentLang.feature5}</h4>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-secondary/10 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{currentLang.feature6}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
