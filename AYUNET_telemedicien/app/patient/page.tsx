"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AISymptomChecker from "@/components/ai-symptom-checker"
import {
  Heart,
  Calendar,
  FileText,
  User,
  MessageSquare,
  Phone,
  AlertTriangle,
  Clock,
  Pill,
  Activity,
  ArrowLeft,
  Stethoscope,
  TrendingUp,
  Shield,
  Bell,
} from "lucide-react"
import Link from "next/link"

export default function PatientPortal() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [symptoms, setSymptoms] = useState("")
  const [isEmergency, setIsEmergency] = useState(false)
  const [patientData, setPatientData] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem("patientData")
    if (data) {
      setPatientData(JSON.parse(data))
    }
  }, [])

  const languages = {
    en: {
      title: "Patient Portal",
      welcome: patientData ? `Welcome back, ${patientData.name}` : "Welcome to AyuNet",
      dashboard: "Dashboard",
      symptoms: "Symptom Checker",
      appointments: "Appointments",
      records: "Health Records",
      profile: "Profile",
      describeSymptoms: "Describe your symptoms",
      symptomsPlaceholder: "Tell us what you're experiencing...",
      checkSymptoms: "Check Symptoms",
      emergency: "Emergency",
      callAmbulance: "Call Ambulance",
      upcomingAppointments: "Upcoming Appointments",
      recentRecords: "Recent Health Records",
      bookAppointment: "Book New Appointment",
      viewAllRecords: "View All Records",
      quickActions: "Quick Actions",
      consultDoctor: "Consult Doctor",
      findMedicine: "Find Medicine",
      emergencyHelp: "Emergency Help",
      back: "Back to Home",
      healthOverview: "Health Overview",
      vitals: "Recent Vitals",
      notifications: "Notifications",
      joinCall: "Join Call",
      reschedule: "Reschedule",
      viewDetails: "View Details",
    },
    hi: {
      title: "मरीज़ पोर्टल",
      welcome: patientData ? `वापस स्वागत है, ${patientData.name}` : "AyuNet में आपका स्वागत है",
      dashboard: "डैशबोर्ड",
      symptoms: "लक्षण जांचकर्ता",
      appointments: "अपॉइंटमेंट",
      records: "स्वास्थ्य रिकॉर्ड",
      profile: "प्रोफाइल",
      describeSymptoms: "अपने लक्षणों का वर्णन करें",
      symptomsPlaceholder: "बताएं कि आप क्या महसूस कर रहे हैं...",
      checkSymptoms: "लक्षण जांचें",
      emergency: "आपातकाल",
      callAmbulance: "एम्बुलेंस बुलाएं",
      upcomingAppointments: "आगामी अपॉइंटमेंट",
      recentRecords: "हाल के स्वास्थ्य रिकॉर्ड",
      bookAppointment: "नई अपॉइंटमेंट बुक करें",
      viewAllRecords: "सभी रिकॉर्ड देखें",
      quickActions: "त्वरित कार्य",
      consultDoctor: "डॉक्टर से सलाह लें",
      findMedicine: "दवा खोजें",
      emergencyHelp: "आपातकालीन सहायता",
      back: "होम पर वापस",
      healthOverview: "स्वास्थ्य सारांश",
      vitals: "हाल के विटल्स",
      notifications: "सूचनाएँ",
      joinCall: "कॉल मिलाएं",
      reschedule: "रिस्केजल करें",
      viewDetails: "विवरण देखें",
    },
    pa: {
      title: "ਮਰੀਜ਼ ਪੋਰਟਲ",
      welcome: patientData ? `ਵਾਪਸ ਜੀ ਆਇਆਂ ਨੂੰ, ${patientData.name}` : "AyuNet ਵਿੱਚ ਆਉਣ ਵਾਲੀ ਸੂਚਨਾ",
      dashboard: "ਡੈਸ਼ਬੋਰਡ",
      symptoms: "ਲੱਛਣ ਜਾਂਚਕਰਤਾ",
      appointments: "ਮੁਲਾਕਾਤਾਂ",
      records: "ਸਿਹਤ ਰਿਕਾਰਡ",
      profile: "ਪ੍ਰੋਫਾਈਲ",
      describeSymptoms: "ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਰਣਨ ਕਰੋ",
      symptomsPlaceholder: "ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ...",
      checkSymptoms: "ਲੱਛਣ ਜਾਂਚੋ",
      emergency: "ਐਮਰਜੈਂਸੀ",
      callAmbulance: "ਐਂਬੂਲੈਂਸ ਬੁਲਾਓ",
      upcomingAppointments: "ਆਉਣ ਵਾੀਆਂ ਮੁਲਾਕਾਤਾਂ",
      recentRecords: "ਹਾਲ ਦੇ ਸਿਹਤ ਰਿਕਾਰਡ",
      bookAppointment: "ਨਵੀਂ ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ",
      viewAllRecords: "ਸਾਰੇ ਰਿਕਾਰਡ ਦੇਖੋ",
      quickActions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
      consultDoctor: "ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ",
      findMedicine: "ਦਵਾਈ ਲੱਭੋ",
      emergencyHelp: "ਐਮਰਜੈਂਸੀ ਸਹਾਇਤਾ",
      back: "ਘਰ ਵਾਪਸ",
      healthOverview: "ਸਵਾਸਥਿ ਸੌਹਾਈ",
      vitals: "ਹਾਲ ਦੇ ਵਿਟਲਾਂ",
      notifications: "ਸੂਚਨਾਵਾਂ",
      joinCall: "ਕ੉ਲ ਜੋੜੋ",
      reschedule: "ਰਿਸਕੇਜਲ ਕਰੋ",
      viewDetails: "ਵੀਵਰਣ ਦੇਖੋ",
    },
  }

  const t = languages[selectedLanguage as keyof typeof languages]

  const handleSymptomCheck = () => {
    if (
      symptoms.toLowerCase().includes("chest pain") ||
      symptoms.toLowerCase().includes("difficulty breathing") ||
      symptoms.toLowerCase().includes("severe headache")
    ) {
      setIsEmergency(true)
    } else {
      // Normal symptom processing
      alert("AI analysis will be implemented in the next phase")
    }
  }

  const mockAppointments = [
    {
      id: 1,
      doctor: "Dr. Priya Sharma",
      specialty: "General Physician",
      date: "2024-01-15",
      time: "10:00 AM",
      type: "Video Consultation",
    },
    {
      id: 2,
      doctor: "Dr. Amit Singh",
      specialty: "Cardiologist",
      date: "2024-01-18",
      time: "2:30 PM",
      type: "In-person",
    },
  ]

  const mockRecords = [
    {
      id: 1,
      date: "2024-01-10",
      type: "Consultation",
      doctor: "Dr. Priya Sharma",
      diagnosis: "Common Cold",
      prescription: "Rest, fluids, paracetamol",
    },
    {
      id: 2,
      date: "2024-01-05",
      type: "Lab Report",
      test: "Blood Test",
      status: "Normal",
      notes: "All parameters within normal range",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/5">
      <div
        className="absolute inset-0 opacity-3 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/patient-healthcare-wellness-background.png')`,
        }}
      />

      <header className="relative border-b bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.back}
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
                  <p className="text-sm text-muted-foreground">{t.welcome}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
              </Button>

              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-32 bg-white/90 backdrop-blur-sm">
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
        </div>
      </header>

      {/* Emergency Alert */}
      {isEmergency && (
        <div className="relative bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground p-4 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
              <div>
                <p className="font-semibold">{t.emergency}</p>
                <p className="text-sm opacity-90">Your symptoms may require immediate attention</p>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="bg-white text-destructive hover:bg-white/90">
              <Phone className="w-4 h-4 mr-2" />
              {t.callAmbulance}
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
            <TabsTrigger
              value="dashboard"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              <Activity className="w-4 h-4" />
              <span className="hidden sm:inline">{t.dashboard}</span>
            </TabsTrigger>
            <TabsTrigger
              value="symptoms"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">{t.symptoms}</span>
            </TabsTrigger>
            <TabsTrigger
              value="appointments"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">{t.appointments}</span>
            </TabsTrigger>
            <TabsTrigger
              value="records"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">{t.records}</span>
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{t.profile}</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                    {t.healthOverview}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-secondary/10 rounded-xl">
                      <div className="text-2xl font-bold text-secondary">120/80</div>
                      <div className="text-sm text-muted-foreground">Blood Pressure</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-xl">
                      <div className="text-2xl font-bold text-primary">72</div>
                      <div className="text-sm text-muted-foreground">Heart Rate</div>
                    </div>
                    <div className="text-center p-4 bg-accent/10 rounded-xl">
                      <div className="text-2xl font-bold text-accent">98.6°F</div>
                      <div className="text-sm text-muted-foreground">Temperature</div>
                    </div>
                    <div className="text-center p-4 bg-chart-1/10 rounded-xl">
                      <div className="text-2xl font-bold text-chart-1">98%</div>
                      <div className="text-sm text-muted-foreground">Oxygen</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    {t.notifications}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="text-sm">
                      <p className="font-medium">Appointment Reminder</p>
                      <p className="text-muted-foreground">Tomorrow at 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="text-sm">
                      <p className="font-medium">Lab Results Ready</p>
                      <p className="text-muted-foreground">Blood test completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  {t.quickActions}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Button
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white shadow-lg"
                    size="lg"
                  >
                    <MessageSquare className="w-8 h-8" />
                    <span className="font-medium">{t.consultDoctor}</span>
                  </Button>
                  <Button
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg"
                    size="lg"
                  >
                    <Pill className="w-8 h-8" />
                    <span className="font-medium">{t.findMedicine}</span>
                  </Button>
                  <Button
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-destructive to-destructive/80 hover:from-destructive/90 hover:to-destructive/70 text-white shadow-lg"
                    size="lg"
                  >
                    <AlertTriangle className="w-8 h-8" />
                    <span className="font-medium">{t.emergencyHelp}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-secondary" />
                  {t.upcomingAppointments}
                </CardTitle>
                <Button variant="outline" size="sm" className="bg-white/80">
                  {t.bookAppointment}
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-6 border border-border/50 rounded-xl bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                          <Stethoscope className="w-7 h-7 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{appointment.doctor}</p>
                          <p className="text-muted-foreground">{appointment.specialty}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {appointment.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {appointment.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={appointment.type === "Video Consultation" ? "default" : "secondary"}
                          className="px-3 py-1"
                        >
                          {appointment.type}
                        </Badge>
                        <Link href={`/consultation/${appointment.id}`}>
                          <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            {t.joinCall}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  {t.recentRecords}
                </CardTitle>
                <Button variant="outline" size="sm" className="bg-white/80">
                  {t.viewAllRecords}
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecords.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between p-6 border border-border/50 rounded-xl bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                          <FileText className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{record.type}</p>
                          <p className="text-muted-foreground">
                            {record.doctor || record.test} - {record.date}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{record.diagnosis || record.status}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-white/80">
                        {t.viewDetails}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Symptom Checker Tab */}
          <TabsContent value="symptoms" className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
              <AISymptomChecker language={selectedLanguage} onEmergencyDetected={() => setIsEmergency(true)} />
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.appointments}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{appointment.doctor}</p>
                          <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {appointment.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {appointment.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={appointment.type === "Video Consultation" ? "default" : "secondary"}>
                          {appointment.type}
                        </Badge>
                        <Link href={`/consultation/${appointment.id}`}>
                          <Button size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            {t.joinCall}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Records Tab */}
          <TabsContent value="records">
            <Card>
              <CardHeader>
                <CardTitle>{t.records}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Health records management will be implemented in the next phase.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>{t.profile}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Profile management will be implemented in the next phase.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
