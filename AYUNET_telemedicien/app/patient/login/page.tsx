"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, User, Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PatientLoginRegister() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [showPassword, setShowPassword] = useState(false)
  // NEW STATE: Toggles between Login (false) and Register (true)
  const [isRegistering, setIsRegistering] = useState(false) 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  })
  const router = useRouter()

  const languages = {
    en: {
      title: "Patient Portal",
      subtitleLogin: "Access your health records and appointments",
      subtitleRegister: "Register a new patient account",
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      phone: "Phone Number",
      age: "Age",
      login: "Login to Portal",
      register: "Register Account",
      backToHome: "Back to Home",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      haveAccount: "Already have an account?",
      switchRegister: "Register Here",
      switchLogin: "Log in",
    },
    hi: {
      title: "मरीज़ पोर्टल",
      subtitleLogin: "अपने स्वास्थ्य रिकॉर्ड और अपॉइंटमेंट तक पहुंचें",
      subtitleRegister: "एक नया मरीज़ खाता रजिस्टर करें",
      name: "पूरा नाम",
      email: "ईमेल पता",
      password: "पासवर्ड",
      phone: "फोन नंबर",
      age: "उम्र",
      login: "पोर्टल में लॉगिन करें",
      register: "खाता रजिस्टर करें",
      backToHome: "होम पर वापस",
      forgotPassword: "पासवर्ड भूल गए?",
      noAccount: "खाता नहीं है?",
      haveAccount: "पहले से खाता है?",
      switchRegister: "यहाँ रजिस्टर करें",
      switchLogin: "लॉग इन करें",
    },
    pa: {
      title: "ਮਰੀਜ਼ ਪੋਰਟਲ",
      subtitleLogin: "ਆਪਣੇ ਸਿਹਤ ਰਿਕਾਰਡ ਅਤੇ ਮੁਲਾਕਾਤਾਂ ਤੱਕ ਪਹੁੰਚ ਕਰੋ",
      subtitleRegister: "ਇੱਕ ਨਵਾਂ ਮਰੀਜ਼ ਖਾਤਾ ਰਜਿਸਟਰ ਕਰੋ",
      name: "ਪੂਰਾ ਨਾਮ",
      email: "ਈਮੇਲ ਪਤਾ",
      password: "ਪਾਸਵਰਡ",
      phone: "ਫੋਨ ਨੰਬਰ",
      age: "ਉਮਰ",
      login: "ਪੋਰਟਲ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ",
      register: "ਖਾਤਾ ਰਜਿਸਟਰ ਕਰੋ",
      backToHome: "ਘਰ ਵਾਪਸ",
      forgotPassword: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
      noAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
      haveAccount: "ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ?",
      switchRegister: "ਇੱਥੇ ਰਜਿਸਟਰ ਕਰੋ",
      switchLogin: "ਲਾਗਇਨ ਕਰੋ",
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  // UPDATED: Handles both /api/login/patient and /api/register/patient routes
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Determine API path
    const apiPath = isRegistering ? '/api/registration/patient' : '/api/login/patient'
    
    // Minimal validation check
    if (!formData.email || !formData.password) {
      alert("Email and password are required.")
      return
    }

    // Additional validation for registration
    if (isRegistering && (!formData.name || !formData.phone || !formData.age)) {
        alert("All fields are required for registration.")
        return
    }

    try {
      // Send all form data for registration, but only email/password for login
      const payload = isRegistering ? formData : { email: formData.email, password: formData.password };

      const response = await fetch(apiPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok) {
        if (isRegistering) {
            console.log('Registration Success:', data.message)
            alert(data.message || "Registration successful! Please log in now.")
            // Switch to login view after successful registration
            setIsRegistering(false) 
        } else {
            // Login Success
            console.log('Login Success:', data.message)
            // Redirect to the patient dashboard
            router.push("/patient") 
        }
      } else {
        // Handle failure (400, 401, 409, 500 etc.)
        console.error(`${isRegistering ? 'Registration' : 'Login'} Failed:`, data.message)
        alert(data.message || `${isRegistering ? 'Registration' : 'Login'} failed. Please check your details or try again.`)
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
        phone: "",
        age: "",
    })
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/5 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/patient-healthcare-wellness-background.png')`,
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
            <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            {/* Dynamic Title */}
            <CardTitle className="text-2xl font-bold text-foreground">{currentLang.title} {isRegistering ? currentLang.register : currentLang.login}</CardTitle>
            <CardDescription className="text-muted-foreground">
                {isRegistering ? currentLang.subtitleRegister : currentLang.subtitleLogin}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Registration Fields (Conditionally rendered) */}
              {isRegistering && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      {currentLang.name}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border-border focus:border-secondary"
                      required // Required for registration
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        {currentLang.phone}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white border-border focus:border-secondary"
                        required // Required for registration
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-sm font-medium text-foreground">
                        {currentLang.age}
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="25"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="bg-white border-border focus:border-secondary"
                        required // Required for registration
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Shared Fields (Email and Password) */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  {currentLang.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="patient@ayunet.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-border focus:border-secondary"
                  required
                />
              </div>

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
                    className="bg-white border-border focus:border-secondary pr-10"
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
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-medium"
              >
                <User className="mr-2 h-5 w-5" />
                {isRegistering ? currentLang.register : currentLang.login}
              </Button>
            </form>

            <div className="text-center space-y-2">
              {/* Forgot Password Link - Only shows for Login mode */}
              {!isRegistering && (
                <Link href="#" className="text-sm text-secondary hover:text-secondary/80">
                  {currentLang.forgotPassword}
                </Link>
              )}
              
              {/* Switch Mode Link */}
              <p className="text-sm text-muted-foreground">
                {isRegistering ? currentLang.haveAccount : currentLang.noAccount}{" "}
                <button 
                    type="button"
                    onClick={toggleMode} 
                    className="text-secondary hover:text-secondary/80 font-medium underline-offset-4 hover:underline"
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