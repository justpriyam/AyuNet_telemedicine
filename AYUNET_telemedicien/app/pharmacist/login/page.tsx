"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pill, Store, UserPlus, Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PharmacistAuth() {
  const [isLogin, setIsLogin] = useState(true) // Toggle between login and register
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    pharmacyName: "",
    licenseNumber: "",
  })
  const router = useRouter()

  const languages = {
    en: {
      loginTitle: "Pharmacist Portal Login",
      registerTitle: "Pharmacist Registration",
      loginSubtitle: "Manage your pharmacy inventory and orders",
      registerSubtitle: "Create your pharmacy portal account",
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      pharmacyName: "Pharmacy Name",
      licenseNumber: "License Number",
      login: "Login to Portal",
      register: "Create Account",
      backToHome: "Back to Home",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      registerHere: "Register Here",
      alreadyHaveAccount: "Already have an account?",
      loginHere: "Login Here",
    },
    hi: {
      loginTitle: "फार्मासिस्ट पोर्टल लॉगिन",
      registerTitle: "फार्मासिस्ट पंजीकरण",
      loginSubtitle: "अपनी फार्मेसी इन्वेंटरी और ऑर्डर का प्रबंधन करें",
      registerSubtitle: "अपना फार्मेसी पोर्टल खाता बनाएं",
      name: "पूरा नाम",
      email: "ईमेल पता",
      password: "पासवर्ड",
      pharmacyName: "फार्मेसी का नाम",
      licenseNumber: "लाइसेंस नंबर",
      login: "पोर्टल में लॉगिन करें",
      register: "खाता बनाएं",
      backToHome: "होम पर वापस",
      forgotPassword: "पासवर्ड भूल गए?",
      noAccount: "खाता नहीं है?",
      registerHere: "यहां रजिस्टर करें",
      alreadyHaveAccount: "पहले से खाता है?",
      loginHere: "यहां लॉगिन करें",
    },
    pa: {
      loginTitle: "ਫਾਰਮਾਸਿਸਟ ਪੋਰਟਲ ਲਾਗਇਨ",
      registerTitle: "ਫਾਰਮਾਸਿਸਟ ਰਜਿਸਟਰੇਸ਼ਨ",
      loginSubtitle: "ਆਪਣੀ ਫਾਰਮੇਸੀ ਇਨਵੈਂਟਰੀ ਅਤੇ ਆਰਡਰ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
      registerSubtitle: "ਆਪਣਾ ਫਾਰਮੇਸੀ ਪੋਰਟਲ ਖਾਤਾ ਬਣਾਓ",
      name: "ਪੂਰਾ ਨਾਮ",
      email: "ਈਮੇਲ ਪਤਾ",
      password: "ਪਾਸਵਰਡ",
      pharmacyName: "ਫਾਰਮੇਸੀ ਦਾ ਨਾਮ",
      licenseNumber: "ਲਾਇਸੈਂਸ ਨੰਬਰ",
      login: "ਪੋਰਟਲ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ",
      register: "ਖਾਤਾ ਬਣਾਓ",
      backToHome: "ਘਰ ਵਾਪਸ",
      forgotPassword: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
      noAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
      registerHere: "ਇੱਥੇ ਰਜਿਸਟਰ ਕਰੋ",
      alreadyHaveAccount: "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?",
      loginHere: "ਇੱਥੇ ਲਾਗਇਨ ਕਰੋ",
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isLogin) {
      // LOGIN LOGIC
      if (!formData.email || !formData.password) {
        alert("Please enter your email and password.")
        return
      }

      try {
        const response = await fetch('/api/login/pharmacist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        })

        const data = await response.json()

        if (response.ok) {
          console.log('Login Success:', data.message)
          router.push("/pharmacist")
        } else {
          alert(data.message || 'Login failed. Please check your credentials.')
        }
      } catch (error) {
        alert('A network error occurred. Please try again.')
      }
    } else {
      // REGISTRATION LOGIC
      if (!formData.name || !formData.email || !formData.password || !formData.pharmacyName || !formData.licenseNumber) {
        alert("Please fill in all fields.")
        return
      }

      if (formData.password.length < 6) {
        alert("Password must be at least 6 characters long.")
        return
      }

      try {
        const response = await fetch('/api/registration/pharmacist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (response.ok) {
          alert('Registration successful! You can now login.')
          setIsLogin(true) // Switch to login view
          setFormData({ ...formData, password: "" }) // Clear password for security
        } else {
          alert(data.message || 'Registration failed. Please try again.')
        }
      } catch (error) {
        alert('A network error occurred. Please try again.')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/5 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pharmacy-medicine-bottles-pills-background.png')`,
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
            <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Pill className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {isLogin ? currentLang.loginTitle : currentLang.registerTitle}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {isLogin ? currentLang.loginSubtitle : currentLang.registerSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {/* Show name field only for registration */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    {currentLang.name}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-border focus:border-accent"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  {currentLang.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="pharmacist@ayunet.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-border focus:border-accent"
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
                    className="bg-white border-border focus:border-accent pr-10"
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

              {/* Show pharmacy fields only for registration */}
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="pharmacyName" className="text-sm font-medium text-foreground">
                      {currentLang.pharmacyName}
                    </Label>
                    <Input
                      id="pharmacyName"
                      type="text"
                      placeholder="Kumar Medical Store"
                      value={formData.pharmacyName}
                      onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                      className="bg-white border-border focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber" className="text-sm font-medium text-foreground">
                      {currentLang.licenseNumber}
                    </Label>
                    <Input
                      id="licenseNumber"
                      type="text"
                      placeholder="PB/12345/2024"
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                      className="bg-white border-border focus:border-accent"
                    />
                  </div>
                </>
              )}

              <Button
                onClick={handleSubmit}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-medium"
              >
                {isLogin ? (
                  <>
                    <Store className="mr-2 h-5 w-5" />
                    {currentLang.login}
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 h-5 w-5" />
                    {currentLang.register}
                  </>
                )}
              </Button>
            </div>

            <div className="text-center space-y-2">
              {isLogin && (
                <Link href="#" className="text-sm text-accent hover:text-accent/80 block">
                  {currentLang.forgotPassword}
                </Link>
              )}
              <p className="text-sm text-muted-foreground">
                {isLogin ? currentLang.noAccount : currentLang.alreadyHaveAccount}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-accent hover:text-accent/80 font-medium"
                >
                  {isLogin ? currentLang.registerHere : currentLang.loginHere}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}