"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Stethoscope,
  Calendar,
  Users,
  AlertTriangle,
  Video,
  Phone,
  Clock,
  FileText,
  Settings,
  ArrowLeft,
  CheckCircle,
  MessageSquare,
  Activity,
  TrendingUp,
  Bell,
  UserCheck,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function DoctorPortal() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [isAvailable, setIsAvailable] = useState(true)
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null)
  const [doctorData, setDoctorData] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem("doctorData")
    if (data) {
      setDoctorData(JSON.parse(data))
    }
  }, [])

  const languages = {
    en: {
      title: "Doctor Portal",
      welcome: doctorData ? `Welcome, Dr. ${doctorData.name}` : "Welcome to AyuNet",
      dashboard: "Dashboard",
      patients: "Patients",
      schedule: "Schedule",
      emergency: "Emergency",
      profile: "Profile",
      availability: "Available for Consultations",
      incomingCases: "Incoming Cases",
      emergencyAlerts: "Emergency Alerts",
      todaySchedule: "Today's Schedule",
      patientHistory: "Patient History",
      startConsultation: "Start Consultation",
      viewDetails: "View Details",
      prescribe: "Prescribe",
      markComplete: "Mark Complete",
      urgent: "Urgent",
      normal: "Normal",
      completed: "Completed",
      pending: "Pending",
      back: "Back to Home",
      videoCall: "Video Call",
      audioCall: "Audio Call",
      chat: "Chat",
      symptoms: "Symptoms",
      diagnosis: "Diagnosis",
      prescription: "Prescription",
      notes: "Notes",
      todaysPatients: "Today's Patients",
      pendingCases: "Pending Cases",
      completedToday: "Completed Today",
      notifications: "Notifications",
      patientOverview: "Patient Overview",
      quickActions: "Quick Actions",
      callNow: "Call Now",
      respondToEmergency: "Respond to Emergency",
      viewAllEmergencies: "View All Emergencies",
    },
    hi: {
      title: "डॉक्टर पोर्टल",
      welcome: doctorData ? `स्वागत है, डॉ. ${doctorData.name}` : "AyuNet में आपका स्वागत है",
      dashboard: "डैशबोर्ड",
      patients: "मरीज़",
      schedule: "कार्यक्रम",
      emergency: "आपातकाल",
      profile: "प्रोफाइल",
      availability: "परामर्श के लिए उपलब्ध",
      incomingCases: "आने वाले मामले",
      emergencyAlerts: "आपातकालीन अलर्ट",
      todaySchedule: "आज का कार्यक्रम",
      patientHistory: "मरीज़ का इतिहास",
      startConsultation: "परामर्श शुरू करें",
      viewDetails: "विवरण देखें",
      prescribe: "दवा लिखें",
      markComplete: "पूर्ण चिह्नित करें",
      urgent: "तत्काल",
      normal: "सामान्य",
      completed: "पूर्ण",
      pending: "लंबित",
      back: "होम पर वापस",
      videoCall: "वीडियो कॉल",
      audioCall: "ऑडियो कॉल",
      chat: "चैट",
      symptoms: "लक्षण",
      diagnosis: "निदान",
      prescription: "नुस्खा",
      notes: "नोट्स",
      todaysPatients: "आज के मरीज़",
      pendingCases: "लंबित मामले",
      completedToday: "आज पूर्ण",
      notifications: "सूचनाएँ",
      patientOverview: "मरीज़ सारांश",
      quickActions: "त्वरित कार्य",
      callNow: "अभी कॉल करें",
      respondToEmergency: "आपातकाल का जवाब दें",
      viewAllEmergencies: "सभी आपातकाल देखें",
    },
    pa: {
      title: "ਡਾਕਟਰ ਪੋਰਟਲ",
      welcome: doctorData ? `ਜੀ ਆਇਆਂ ਨੂੰ, ਡਾ. ${doctorData.name}` : "AyuNet ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
      dashboard: "ਡੈਸ਼ਬੋਰਡ",
      patients: "ਮਰੀਜ਼",
      schedule: "ਸਮਾਂ-ਸਾਰਣੀ",
      emergency: "ਐਮਰਜੈਂਸੀ",
      profile: "ਪ੍ਰੋਫਾਈਲ",
      availability: "ਸਲਾਹ ਲਈ ਉਪਲਬਧ",
      incomingCases: "ਆਉਣ ਵਾਲੇ ਕੇਸ",
      emergencyAlerts: "ਐਮਰਜੈਂਸੀ ਅਲਰਟ",
      todaySchedule: "ਅੱਜ ਦੀ ਸਮਾਂ-ਸਾਰਣੀ",
      patientHistory: "ਮਰੀਜ਼ ਦਾ ਇਤਿਹਾਸ",
      startConsultation: "ਸਲਾਹ ਸ਼ੁਰੂ ਕਰੋ",
      viewDetails: "ਵੇਰਵੇ ਦੇਖੋ",
      prescribe: "ਦਵਾਈ ਲਿਖੋ",
      markComplete: "ਪੂਰਾ ਮਾਰਕ ਕਰੋ",
      urgent: "ਤੁਰੰਤ",
      normal: "ਆਮ",
      completed: "ਪੂਰਾ",
      pending: "ਬਾਕੀ",
      back: "ਘਰ ਵਾਪਸ",
      videoCall: "ਵੀਡੀਓ ਕਾਲ",
      audioCall: "ਆਡੀਓ ਕਾਲ",
      chat: "ਚੈਟ",
      symptoms: "ਲੱਛਣ",
      diagnosis: "ਨਿਦਾਨ",
      prescription: "ਨੁਸਖਾ",
      notes: "ਨੋਟਸ",
      todaysPatients: "ਅੱਜ ਦੇ ਮਰੀਜ਼",
      pendingCases: "ਬਾਕੀ ਕੇਸ",
      completedToday: "ਅੱਜ ਪੂਰੇ",
      notifications: "ਸੂਚਨਾਵਾਂ",
      patientOverview: "ਮਰੀਜ਼ ਸਾਰਾਂਸ਼",
      quickActions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
      callNow: "ਹੁਣੇ ਕਾਲ ਕਰੋ",
      respondToEmergency: "ਐਮਰਜੈਂਸੀ ਦਾ ਜਵਾਬ ਦਿਓ",
      viewAllEmergencies: "ਸਾਰੀਆਂ ਐਮਰਜੈਂਸੀਆਂ ਦੇਖੋ",
    },
  }

  const t = languages[selectedLanguage as keyof typeof languages]

  const mockPatients = [
    {
      id: 1,
      name: "Rajesh Kumar",
      age: 45,
      symptoms: "Chest pain, difficulty breathing",
      priority: "urgent",
      time: "09:30 AM",
      status: "pending",
      lastVisit: "2024-01-10",
    },
    {
      id: 2,
      name: "Sunita Devi",
      age: 32,
      symptoms: "Fever, headache",
      priority: "normal",
      time: "10:15 AM",
      status: "pending",
      lastVisit: "2024-01-08",
    },
    {
      id: 3,
      name: "Harpreet Singh",
      age: 28,
      symptoms: "Stomach pain, nausea",
      priority: "normal",
      time: "11:00 AM",
      status: "completed",
      lastVisit: "2024-01-12",
    },
  ]

  const mockEmergencies = [
    {
      id: 1,
      patient: "Rajesh Kumar",
      symptoms: "Severe chest pain, shortness of breath",
      time: "5 minutes ago",
      location: "Village Nabha",
    },
    {
      id: 2,
      patient: "Kamala Devi",
      symptoms: "High fever, unconsciousness",
      time: "12 minutes ago",
      location: "Village Bhadson",
    },
  ]

  const mockSchedule = [
    { time: "09:00 AM", patient: "Rajesh Kumar", type: "Video Consultation" },
    { time: "10:00 AM", patient: "Sunita Devi", type: "Phone Consultation" },
    { time: "11:00 AM", patient: "Harpreet Singh", type: "Follow-up" },
    { time: "02:00 PM", patient: "Gurpreet Kaur", type: "Video Consultation" },
  ]

  const handleStartConsultation = (patientId: number, type: string) => {
    alert(`Starting ${type} consultation with patient ${patientId}`)
  }

  const handleEmergencyResponse = (emergencyId: number) => {
    alert(`Responding to emergency ${emergencyId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div
        className="absolute inset-0 opacity-3 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/doctor-consultation-medical-equipment-background.png')`,
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
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
                  <p className="text-sm text-muted-foreground">{t.welcome}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
              </Button>

              <div className="flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
                <Label className="text-sm font-medium">{t.availability}</Label>
                <div className={`w-2 h-2 rounded-full ${isAvailable ? "bg-secondary" : "bg-muted-foreground"}`}></div>
              </div>

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

      {mockEmergencies.length > 0 && (
        <div className="relative bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
                <div>
                  <span className="font-semibold text-lg">
                    {mockEmergencies.length} {t.emergencyAlerts}
                  </span>
                  <p className="text-sm opacity-90">Immediate attention required</p>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="bg-white text-destructive hover:bg-white/90">
                {t.viewAllEmergencies}
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="relative container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
            <TabsTrigger
              value="dashboard"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Activity className="w-4 h-4" />
              <span className="hidden sm:inline">{t.dashboard}</span>
            </TabsTrigger>
            <TabsTrigger
              value="patients"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">{t.patients}</span>
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">{t.schedule}</span>
            </TabsTrigger>
            <TabsTrigger
              value="emergency"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-destructive data-[state=active]:text-white"
            >
              <AlertTriangle className="w-4 h-4" />
              <span className="hidden sm:inline">{t.emergency}</span>
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">{t.profile}</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.todaysPatients}</CardTitle>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <p className="text-xs text-muted-foreground mt-1">+2 from yesterday</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.pendingCases}</CardTitle>
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary">4</div>
                  <p className="text-xs text-muted-foreground mt-1">2 urgent cases</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.completedToday}</CardTitle>
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent">8</div>
                  <p className="text-xs text-muted-foreground mt-1">67% completion rate</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-6 h-6 text-chart-1" />
                    {t.notifications}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-chart-1">3</div>
                  <p className="text-xs text-muted-foreground mt-1">New alerts</p>
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
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg"
                    size="lg"
                  >
                    <Video className="w-8 h-8" />
                    <span className="font-medium">Start Video Call</span>
                  </Button>
                  <Button
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white shadow-lg"
                    size="lg"
                  >
                    <UserCheck className="w-8 h-8" />
                    <span className="font-medium">Review Patients</span>
                  </Button>
                  <Button
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-destructive to-destructive/80 hover:from-destructive/90 hover:to-destructive/70 text-white shadow-lg"
                    size="lg"
                  >
                    <AlertTriangle className="w-8 h-8" />
                    <span className="font-medium">Emergency Response</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  {t.incomingCases}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPatients
                    .filter((p) => p.status === "pending")
                    .map((patient) => (
                      <div
                        key={patient.id}
                        className="flex items-center justify-between p-6 border border-border/50 rounded-xl bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                            <Users className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <p className="font-semibold text-lg">{patient.name}</p>
                              <Badge
                                variant={patient.priority === "urgent" ? "destructive" : "secondary"}
                                className="px-3 py-1"
                              >
                                {patient.priority === "urgent" ? t.urgent : t.normal}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Age: {patient.age}</p>
                            <p className="text-sm text-muted-foreground">
                              {t.symptoms}: {patient.symptoms}
                            </p>
                            <p className="text-sm text-muted-foreground">Scheduled: {patient.time}</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Link href={`/consultation/${patient.id}`}>
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              <Video className="w-4 h-4 mr-2" />
                              {t.videoCall}
                            </Button>
                          </Link>
                          <Link href={`/consultation/${patient.id}`}>
                            <Button variant="outline" size="sm" className="bg-white/80">
                              <Phone className="w-4 h-4 mr-2" />
                              {t.audioCall}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-secondary" />
                  {t.todaySchedule}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSchedule.map((appointment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border/50 rounded-xl bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div>
                          <p className="font-semibold text-lg">{appointment.time}</p>
                          <p className="text-muted-foreground">{appointment.patient}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="px-3 py-1">
                        {appointment.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.patients}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{patient.name}</p>
                            <Badge
                              variant={
                                patient.status === "completed"
                                  ? "default"
                                  : patient.priority === "urgent"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {patient.status === "completed" ? t.completed : patient.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Age: {patient.age}</p>
                          <p className="text-sm text-muted-foreground">Last visit: {patient.lastVisit}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          {t.viewDetails}
                        </Button>
                        {patient.status === "pending" && (
                          <Button size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            {t.startConsultation}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emergency Tab */}
          <TabsContent value="emergency" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                  {t.emergencyAlerts}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockEmergencies.map((emergency) => (
                    <div
                      key={emergency.id}
                      className="p-6 border-2 border-destructive/20 rounded-xl bg-gradient-to-r from-destructive/5 to-destructive/10 backdrop-blur-sm shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <AlertTriangle className="w-6 h-6 text-destructive animate-pulse" />
                            <p className="font-bold text-lg text-destructive">{emergency.patient}</p>
                            <Badge variant="destructive" className="px-3 py-1">
                              {t.urgent}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {t.symptoms}: {emergency.symptoms}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">Location: {emergency.location}</p>
                          <p className="text-xs text-muted-foreground">{emergency.time}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleEmergencyResponse(emergency.id)}
                            className="shadow-lg"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {t.callNow}
                          </Button>
                          <Button size="sm" variant="outline" className="bg-white/80">
                            <Video className="w-4 h-4 mr-2" />
                            {t.videoCall}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>{t.schedule}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Schedule management will be implemented in the next phase.</p>
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
