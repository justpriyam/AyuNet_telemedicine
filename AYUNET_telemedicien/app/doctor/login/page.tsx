"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Stethoscope, Eye, EyeOff, ArrowLeft, PlusCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DoctorLoginRegister() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [showPassword, setShowPassword] = useState(false)
  // NEW STATE: Toggles between Login (false) and Register (true)
  const [isRegistering, setIsRegistering] = useState(false) 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
  })
  const router = useRouter()

  const languages = {
    en: {
      title: "Doctor Portal",
      subtitleLogin: "Access your medical practice dashboard",
      subtitleRegister: "Register a new doctor account",
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      specialization: "Specialization",
      login: "Login to Portal",
      register: "Register Account",
      backToHome: "Back to Home",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      haveAccount: "Already have an account?",
      switchRegister: "Register Here",
      switchLogin: "Log in",
      selectSpecialization: "Select your specialization",
      generalPhysician: "General Physician",
      cardiologist: "Cardiologist",
      pediatrician: "Pediatrician",
      gynecologist: "Gynecologist",
      orthopedic: "Orthopedic",
      dermatologist: "Dermatologist",
    },
    hi: {
      title: "डॉक्टर पोर्टल",
      subtitleLogin: "अपने मेडिकल प्रैक्टिस डैशबोर्ड तक पहुंचें",
      subtitleRegister: "एक नया डॉक्टर खाता रजिस्टर करें",
      name: "पूरा नाम",
      email: "ईमेल पता",
      password: "पासवर्ड",
      specialization: "विशेषज्ञता",
      login: "पोर्टल में लॉगिन करें",
      register: "खाता रजिस्टर करें",
      backToHome: "होम पर वापस",
      forgotPassword: "पासवर्ड भूल गए?",
      noAccount: "खाता नहीं है?",
      haveAccount: "पहले से खाता है?",
      switchRegister: "यहाँ रजिस्टर करें",
      switchLogin: "लॉग इन करें",
      selectSpecialization: "अपनी विशेषज्ञता चुनें",
      generalPhysician: "सामान्य चिकित्सक",
      cardiologist: "हृदय रोग विशेषज्ञ",
      pediatrician: "बाल रोग विशेषज्ञ",
      gynecologist: "स्त्री रोग विशेषज्ञ",
      orthopedic: "हड्डी रोग विशेषज्ञ",
      dermatologist: "त्वचा रोग विशेषज्ञ",
    },
    pa: {
      title: "ਡਾਕਟਰ ਪੋਰਟਲ",
      subtitleLogin: "ਆਪਣੇ ਮੈਡੀਕਲ ਪ੍ਰੈਕਟਿਸ ਡੈਸ਼ਬੋਰਡ ਤੱਕ ਪਹੁੰਚ ਕਰੋ",
      subtitleRegister: "ਇੱਕ ਨਵਾਂ ਡਾਕਟਰ ਖਾਤਾ ਰਜਿਸਟਰ ਕਰੋ",
      name: "ਪੂਰਾ ਨਾਮ",
      email: "ਈਮੇਲ ਪਤਾ",
      password: "ਪਾਸਵਰਡ",
      specialization: "ਵਿਸ਼ੇਸ਼ਤਾ",
      login: "ਪੋਰਟਲ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ",
      register: "ਖਾਤਾ ਰਜਿਸਟਰ ਕਰੋ",
      backToHome: "ਘਰ ਵਾਪਸ",
      forgotPassword: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
      noAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
      haveAccount: "ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ?",
      switchRegister: "ਇੱਥੇ ਰਜਿਸਟਰ ਕਰੋ",
      switchLogin: "ਲਾਗਇਨ ਕਰੋ",
      selectSpecialization: "ਆਪਣੀ ਵਿਸ਼ੇਸ਼ਤਾ ਚੁਣੋ",
      generalPhysician: "ਜਨਰਲ ਡਾਕਟਰ",
      cardiologist: "ਦਿਲ ਦੇ ਡਾਕਟਰ",
      pediatrician: "ਬੱਚਿਆਂ ਦੇ ਡਾਕਟਰ",
      gynecologist: "ਔਰਤਾਂ ਦੇ ਡਾਕਟਰ",
      orthopedic: "ਹੱਡੀਆਂ ਦੇ ਡਾਕਟਰ",
      dermatologist: "ਚਮੜੀ ਦੇ ਡਾਕਟਰ",
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const apiPath = isRegistering ? '/api/registration/doctor' : '/api/login/doctor'
    
    // Minimal validation
    if (!formData.email || !formData.password) {
      alert("Email and password are required.")
      return
    }

    // Additional validation for registration
    if (isRegistering && (!formData.name || !formData.specialization)) {
        alert("Name and Specialization are required for registration.")
        return
    }

    try {
      // Send all form data for registration, but only email/password for login
      const payload = isRegistering 
        ? formData 
        : { email: formData.email, password: formData.password };

      const response = await fetch(apiPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      // Check if the response is valid JSON (to prevent the <!DOCTYPE error)
      if (response.headers.get('content-type')?.includes('text/html')) {
        alert("Server Error: Could not reach the API endpoint. Check your file path or server logs.")
        return
      }

      const data = await response.json()

      if (response.ok) {
        if (isRegistering) {
            console.log('Registration Success:', data.message)
            alert(data.message || "Registration successful! You may now log in.")
            // Switch to login view after successful registration
            setIsRegistering(false) 
        } else {
            // Login Success
            console.log('Login Success:', data.message)
            router.push("/doctor") // Redirect to doctor dashboard
        }
      } else {
        console.error(`${isRegistering ? 'Registration' : 'Login'} Failed:`, data.message)
        alert(data.message || `${isRegistering ? 'Registration' : 'Login'} failed. Please check your details.`)
      }

    } catch (error) {
      console.error('Network or Server Error:', error)
      alert('A network error occurred. Please try again.')
    }
  }

  // Toggle function to switch views
  const toggleMode = () => {
    setIsRegistering(prev => !prev)
    // Clear the form data when switching modes
    setFormData({
        name: "",
        email: "",
        password: "",
        specialization: "",
    })
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/doctor-consultation-medical-equipment-background.png')`,
        }}
      />

      <div className="w-full max-w-md relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {currentLang.backToHome}
            </Button>
          </Link>
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

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-border">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            {/* Dynamic Title */}
            <CardTitle className="text-2xl font-bold text-foreground">
                {currentLang.title} {isRegistering ? currentLang.register : currentLang.login}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
                {isRegistering ? currentLang.subtitleRegister : currentLang.subtitleLogin}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name (Required for Registration, Optional for Login) */}
              {(isRegistering || formData.name) && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    {currentLang.name}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Dr. John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-border focus:border-primary"
                    required={isRegistering}
                  />
                </div>
              )}

              {/* Specialization (Required for Registration) */}
              {(isRegistering || formData.specialization) && (
                <div className="space-y-2">
                  <Label htmlFor="specialization" className="text-sm font-medium text-foreground">
                    {currentLang.specialization}
                  </Label>
                  <Select
                    value={formData.specialization}
                    onValueChange={(value) => setFormData({ ...formData, specialization: value })}
                    required={isRegistering}
                  >
                    <SelectTrigger className="bg-white border-border focus:border-primary">
                      <SelectValue placeholder={currentLang.selectSpecialization} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{currentLang.generalPhysician}</SelectItem>
                      <SelectItem value="cardiology">{currentLang.cardiologist}</SelectItem>
                      <SelectItem value="pediatrics">{currentLang.pediatrician}</SelectItem>
                      <SelectItem value="gynecology">{currentLang.gynecologist}</SelectItem>
                      <SelectItem value="orthopedics">{currentLang.orthopedic}</SelectItem>
                      <SelectItem value="dermatology">{currentLang.dermatologist}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  {currentLang.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@ayunet.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-border focus:border-primary"
                  required 
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  {currentLang.password}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="bg-white border-border focus:border-primary pr-10"
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium"
              >
                {isRegistering ? (
                    <><PlusCircle className="mr-2 h-5 w-5" />{currentLang.register}</>
                ) : (
                    <><Stethoscope className="mr-2 h-5 w-5" />{currentLang.login}</>
                )}
              </Button>
            </form>

            <div className="text-center space-y-2">
              {/* Forgot Password Link - Only shows for Login mode */}
              {!isRegistering && (
                <Link href="#" className="text-sm text-primary hover:text-primary/80">
                  {currentLang.forgotPassword}
                </Link>
              )}
              
              {/* Switch Mode Link */}
              <p className="text-sm text-muted-foreground">
                {isRegistering ? currentLang.haveAccount : currentLang.noAccount}{" "}
                <button 
                    type="button"
                    onClick={toggleMode} 
                    className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline"
                >
                  {isRegistering ? currentLang.switchLogin : currentLang.switchRegister}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}