"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, Phone, MapPin, Clock, User, Stethoscope, Ambulance, Shield, Navigation, X } from "lucide-react"

interface EmergencyContact {
  id: number
  name: string
  phone: string
  type: "ambulance" | "hospital" | "doctor" | "family"
  location: string
  distance?: string
}

interface EmergencyAlert {
  id: number
  patientName: string
  symptoms: string
  severity: "critical" | "high" | "medium"
  location: string
  timestamp: string
  status: "active" | "responded" | "resolved"
  assignedDoctor?: string
  estimatedArrival?: string
}

interface EmergencySystemProps {
  userType: "patient" | "doctor" | "pharmacist"
  language: string
  patientName?: string
  location?: string
  onEmergencyTriggered?: (alert: EmergencyAlert) => void
}

export default function EmergencySystem({
  userType,
  language,
  patientName = "Rajesh Kumar",
  location = "Village Nabha, Punjab",
  onEmergencyTriggered,
}: EmergencySystemProps) {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false)
  const [emergencyType, setEmergencyType] = useState<"medical" | "ambulance" | "doctor">("medical")
  const [emergencyDescription, setEmergencyDescription] = useState("")
  const [currentLocation, setCurrentLocation] = useState(location)
  const [isLocationSharing, setIsLocationSharing] = useState(false)
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([
    {
      id: 1,
      name: "Nabha Civil Hospital",
      phone: "+91-1765-222-333",
      type: "hospital",
      location: "Nabha, Punjab",
      distance: "2.5 km",
    },
    {
      id: 2,
      name: "Emergency Ambulance",
      phone: "108",
      type: "ambulance",
      location: "Nabha Emergency Services",
      distance: "1.2 km",
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      phone: "+91-98765-43210",
      type: "doctor",
      location: "Nabha Medical Center",
      distance: "3.1 km",
    },
    {
      id: 4,
      name: "Family Contact",
      phone: "+91-98765-12345",
      type: "family",
      location: "Emergency Contact",
    },
  ])
  const [activeAlerts, setActiveAlerts] = useState<EmergencyAlert[]>([
    {
      id: 1,
      patientName: "Rajesh Kumar",
      symptoms: "Severe chest pain, difficulty breathing",
      severity: "critical",
      location: "Village Nabha",
      timestamp: "2 minutes ago",
      status: "active",
      assignedDoctor: "Dr. Priya Sharma",
      estimatedArrival: "8 minutes",
    },
  ])

  const languages = {
    en: {
      emergencySystem: "Emergency System",
      callEmergency: "Call Emergency",
      emergencyActive: "EMERGENCY ACTIVE",
      emergencyTriggered: "Emergency has been triggered",
      ambulanceDispatched: "Ambulance dispatched to your location",
      doctorNotified: "Doctor has been notified",
      emergencyContacts: "Emergency Contacts",
      activeEmergencies: "Active Emergencies",
      emergencyType: "Emergency Type",
      medical: "Medical Emergency",
      ambulance: "Call Ambulance",
      doctor: "Contact Doctor",
      description: "Emergency Description",
      descriptionPlaceholder: "Describe the emergency situation...",
      location: "Current Location",
      shareLocation: "Share Location",
      callNow: "Call Now",
      cancel: "Cancel Emergency",
      confirm: "Confirm Emergency",
      critical: "Critical",
      high: "High Priority",
      medium: "Medium Priority",
      active: "Active",
      responded: "Responded",
      resolved: "Resolved",
      hospital: "Hospital",
      emergencyServices: "Emergency Services",
      familyContact: "Family Contact",
      estimatedArrival: "Estimated Arrival",
      assignedDoctor: "Assigned Doctor",
      emergencyInstructions: "Emergency Instructions",
      stayCalm: "Stay calm and follow these instructions:",
      instruction1: "Do not move the patient unless necessary",
      instruction2: "Keep airways clear and monitor breathing",
      instruction3: "Apply pressure to any bleeding wounds",
      instruction4: "Stay on the line with emergency services",
      locationShared: "Location shared with emergency services",
      emergencyNumber: "Emergency Number: 108",
    },
    hi: {
      emergencySystem: "आपातकालीन प्रणाली",
      callEmergency: "आपातकाल कॉल करें",
      emergencyActive: "आपातकाल सक्रिय",
      emergencyTriggered: "आपातकाल शुरू किया गया है",
      ambulanceDispatched: "एम्बुलेंस आपके स्थान पर भेजी गई है",
      doctorNotified: "डॉक्टर को सूचित किया गया है",
      emergencyContacts: "आपातकालीन संपर्क",
      activeEmergencies: "सक्रिय आपातकाल",
      emergencyType: "आपातकाल का प्रकार",
      medical: "चिकित्सा आपातकाल",
      ambulance: "एम्बुलेंस बुलाएं",
      doctor: "डॉक्टर से संपर्क करें",
      description: "आपातकाल का विवरण",
      descriptionPlaceholder: "आपातकालीन स्थिति का वर्णन करें...",
      location: "वर्तमान स्थान",
      shareLocation: "स्थान साझा करें",
      callNow: "अभी कॉल करें",
      cancel: "आपातकाल रद्द करें",
      confirm: "आपातकाल की पुष्टि करें",
      critical: "गंभीर",
      high: "उच्च प्राथमिकता",
      medium: "मध्यम प्राथमिकता",
      active: "सक्रिय",
      responded: "जवाब दिया",
      resolved: "हल किया गया",
      hospital: "अस्पताल",
      emergencyServices: "आपातकालीन सेवाएं",
      familyContact: "पारिवारिक संपर्क",
      estimatedArrival: "अनुमानित आगमन",
      assignedDoctor: "नियुक्त डॉक्टर",
      emergencyInstructions: "आपातकालीन निर्देश",
      stayCalm: "शांत रहें और इन निर्देशों का पालन करें:",
      instruction1: "जब तक आवश्यक न हो मरीज़ को न हिलाएं",
      instruction2: "वायुमार्ग साफ रखें और सांस की निगरानी करें",
      instruction3: "किसी भी खून बहने वाले घाव पर दबाव डालें",
      instruction4: "आपातकालीन सेवाओं के साथ लाइन पर रहें",
      locationShared: "आपातकालीन सेवाओं के साथ स्थान साझा किया गया",
      emergencyNumber: "आपातकालीन नंबर: 108",
    },
    pa: {
      emergencySystem: "ਐਮਰਜੈਂਸੀ ਸਿਸਟਮ",
      callEmergency: "ਐਮਰਜੈਂਸੀ ਕਾਲ ਕਰੋ",
      emergencyActive: "ਐਮਰਜੈਂਸੀ ਸਰਗਰਮ",
      emergencyTriggered: "ਐਮਰਜੈਂਸੀ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ ਹੈ",
      ambulanceDispatched: "ਐਂਬੂਲੈਂਸ ਤੁਹਾਡੇ ਸਥਾਨ 'ਤੇ ਭੇਜੀ ਗਈ ਹੈ",
      doctorNotified: "ਡਾਕਟਰ ਨੂੰ ਸੂਚਿਤ ਕੀਤਾ ਗਿਆ ਹੈ",
      emergencyContacts: "ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ",
      activeEmergencies: "ਸਰਗਰਮ ਐਮਰਜੈਂਸੀਆਂ",
      emergencyType: "ਐਮਰਜੈਂਸੀ ਦੀ ਕਿਸਮ",
      medical: "ਮੈਡੀਕਲ ਐਮਰਜੈਂਸੀ",
      ambulance: "ਐਂਬੂਲੈਂਸ ਬੁਲਾਓ",
      doctor: "ਡਾਕਟਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
      description: "ਐਮਰਜੈਂਸੀ ਦਾ ਵਰਣਨ",
      descriptionPlaceholder: "ਐਮਰਜੈਂਸੀ ਸਥਿਤੀ ਦਾ ਵਰਣਨ ਕਰੋ...",
      location: "ਮੌਜੂਦਾ ਸਥਾਨ",
      shareLocation: "ਸਥਾਨ ਸਾਂਝਾ ਕਰੋ",
      callNow: "ਹੁਣੇ ਕਾਲ ਕਰੋ",
      cancel: "ਐਮਰਜੈਂਸੀ ਰੱਦ ਕਰੋ",
      confirm: "ਐਮਰਜੈਂਸੀ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
      critical: "ਗੰਭੀਰ",
      high: "ਉੱਚ ਤਰਜੀਹ",
      medium: "ਮੱਧਮ ਤਰਜੀਹ",
      active: "ਸਰਗਰਮ",
      responded: "ਜਵਾਬ ਦਿੱਤਾ",
      resolved: "ਹੱਲ ਕੀਤਾ",
      hospital: "ਹਸਪਤਾਲ",
      emergencyServices: "ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ",
      familyContact: "ਪਰਿਵਾਰਕ ਸੰਪਰਕ",
      estimatedArrival: "ਅਨੁਮਾਨਿਤ ਆਮਦ",
      assignedDoctor: "ਨਿਯੁਕਤ ਡਾਕਟਰ",
      emergencyInstructions: "ਐਮਰਜੈਂਸੀ ਹਦਾਇਤਾਂ",
      stayCalm: "ਸ਼ਾਂਤ ਰਹੋ ਅਤੇ ਇਨ੍ਹਾਂ ਹਦਾਇਤਾਂ ਦਾ ਪਾਲਣ ਕਰੋ:",
      instruction1: "ਜਦੋਂ ਤੱਕ ਜ਼ਰੂਰੀ ਨਾ ਹੋਵੇ ਮਰੀਜ਼ ਨੂੰ ਨਾ ਹਿਲਾਓ",
      instruction2: "ਸਾਹ ਦੀ ਨਾਲੀ ਸਾਫ਼ ਰੱਖੋ ਅਤੇ ਸਾਹ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ",
      instruction3: "ਕਿਸੇ ਵੀ ਖੂਨ ਵਗਦੇ ਜ਼ਖ਼ਮ 'ਤੇ ਦਬਾਅ ਪਾਓ",
      instruction4: "ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ ਨਾਲ ਲਾਈਨ 'ਤੇ ਰਹੋ",
      locationShared: "ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ ਨਾਲ ਸਥਾਨ ਸਾਂਝਾ ਕੀਤਾ ਗਿਆ",
      emergencyNumber: "ਐਮਰਜੈਂਸੀ ਨੰਬਰ: 108",
    },
  }

  const t = languages[language as keyof typeof languages] || languages.en

  // Simulate location sharing
  useEffect(() => {
    if (isLocationSharing) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          setCurrentLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
        },
        () => {
          setCurrentLocation(location)
        },
      )
    }
  }, [isLocationSharing, location])

  const handleEmergencyTrigger = (type: "medical" | "ambulance" | "doctor") => {
    setEmergencyType(type)
    setIsEmergencyActive(true)
    setIsLocationSharing(true)

    // Create emergency alert
    const newAlert: EmergencyAlert = {
      id: Date.now(),
      patientName,
      symptoms: emergencyDescription || "Emergency situation reported",
      severity: "critical",
      location: currentLocation,
      timestamp: "Just now",
      status: "active",
      assignedDoctor: type === "doctor" ? "Dr. Priya Sharma" : undefined,
      estimatedArrival: type === "ambulance" ? "5-8 minutes" : undefined,
    }

    setActiveAlerts([newAlert, ...activeAlerts])
    onEmergencyTriggered?.(newAlert)

    // Simulate emergency response
    setTimeout(() => {
      setActiveAlerts((prev) =>
        prev.map((alert) => (alert.id === newAlert.id ? { ...alert, status: "responded" as const } : alert)),
      )
    }, 30000) // 30 seconds
  }

  const handleCallEmergency = (contact: EmergencyContact) => {
    // In a real app, this would initiate a phone call
    window.open(`tel:${contact.phone}`)
  }

  const handleCancelEmergency = () => {
    setIsEmergencyActive(false)
    setIsLocationSharing(false)
    setEmergencyDescription("")
    setActiveAlerts((prev) => prev.map((alert) => ({ ...alert, status: "resolved" as const })))
  }

  const getSeverityBadge = (severity: string) => {
    const variants = {
      critical: "destructive",
      high: "destructive",
      medium: "secondary",
    } as const

    const labels = {
      critical: t.critical,
      high: t.high,
      medium: t.medium,
    }

    return (
      <Badge variant={variants[severity as keyof typeof variants]}>{labels[severity as keyof typeof labels]}</Badge>
    )
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "destructive",
      responded: "secondary",
      resolved: "default",
    } as const

    const labels = {
      active: t.active,
      responded: t.responded,
      resolved: t.resolved,
    }

    return <Badge variant={variants[status as keyof typeof variants]}>{labels[status as keyof typeof labels]}</Badge>
  }

  const getContactIcon = (type: string) => {
    switch (type) {
      case "hospital":
        return <Shield className="w-5 h-5" />
      case "ambulance":
        return <Ambulance className="w-5 h-5" />
      case "doctor":
        return <Stethoscope className="w-5 h-5" />
      default:
        return <User className="w-5 h-5" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Emergency Active Alert */}
      {isEmergencyActive && (
        <Alert className="border-destructive bg-destructive/10 animate-pulse">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-destructive text-lg">{t.emergencyActive}</p>
                <p className="text-sm">{t.emergencyTriggered}</p>
                <div className="mt-2 space-y-1">
                  {emergencyType === "ambulance" && (
                    <p className="text-sm flex items-center gap-2">
                      <Ambulance className="w-4 h-4" />
                      {t.ambulanceDispatched}
                    </p>
                  )}
                  {emergencyType === "doctor" && (
                    <p className="text-sm flex items-center gap-2">
                      <Stethoscope className="w-4 h-4" />
                      {t.doctorNotified}
                    </p>
                  )}
                  {isLocationSharing && (
                    <p className="text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {t.locationShared}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="destructive" onClick={() => handleCallEmergency(emergencyContacts[1])}>
                  <Phone className="w-4 h-4 mr-2" />
                  {t.callNow}
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancelEmergency}>
                  <X className="w-4 h-4 mr-2" />
                  {t.cancel}
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Emergency Trigger Buttons */}
      {!isEmergencyActive && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-6 h-6" />
              {t.emergencySystem}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Button
                variant="destructive"
                className="h-20 flex flex-col gap-2"
                onClick={() => handleEmergencyTrigger("medical")}
              >
                <AlertTriangle className="w-8 h-8" />
                {t.medical}
              </Button>
              <Button
                variant="destructive"
                className="h-20 flex flex-col gap-2"
                onClick={() => handleEmergencyTrigger("ambulance")}
              >
                <Ambulance className="w-8 h-8" />
                {t.ambulance}
              </Button>
              <Button
                variant="destructive"
                className="h-20 flex flex-col gap-2"
                onClick={() => handleEmergencyTrigger("doctor")}
              >
                <Stethoscope className="w-8 h-8" />
                {t.doctor}
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="emergency-description">{t.description}</Label>
                <Textarea
                  id="emergency-description"
                  placeholder={t.descriptionPlaceholder}
                  value={emergencyDescription}
                  onChange={(e) => setEmergencyDescription(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="location">{t.location}</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="location"
                    value={currentLocation}
                    onChange={(e) => setCurrentLocation(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={() => setIsLocationSharing(!isLocationSharing)}>
                    <Navigation className="w-4 h-4 mr-2" />
                    {t.shareLocation}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle>{t.emergencyContacts}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                    {getContactIcon(contact.type)}
                  </div>
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.phone}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {contact.location}
                      </span>
                      {contact.distance && (
                        <span className="flex items-center gap-1">
                          <Navigation className="w-4 h-4" />
                          {contact.distance}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  variant={contact.type === "ambulance" ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => handleCallEmergency(contact)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t.callNow}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Emergencies (for doctors/admin) */}
      {userType === "doctor" && activeAlerts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-6 h-6" />
              {t.activeEmergencies}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeAlerts.map((alert) => (
                <div key={alert.id} className="p-4 border-2 border-destructive/20 rounded-lg bg-destructive/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{alert.patientName}</p>
                      {getSeverityBadge(alert.severity)}
                      {getStatusBadge(alert.status)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {alert.timestamp}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Symptoms:</strong> {alert.symptoms}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <strong>Location:</strong> {alert.location}
                    </p>
                    {alert.assignedDoctor && (
                      <p className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4" />
                        <strong>{t.assignedDoctor}:</strong> {alert.assignedDoctor}
                      </p>
                    )}
                    {alert.estimatedArrival && (
                      <p className="flex items-center gap-2">
                        <Ambulance className="w-4 h-4" />
                        <strong>{t.estimatedArrival}:</strong> {alert.estimatedArrival}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="destructive">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Patient
                    </Button>
                    <Button size="sm" variant="outline">
                      <MapPin className="w-4 h-4 mr-2" />
                      View Location
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Emergency Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>{t.emergencyInstructions}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="font-medium">{t.stayCalm}</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                {t.instruction1}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                {t.instruction2}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                {t.instruction3}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                {t.instruction4}
              </li>
            </ul>
            <Alert>
              <Phone className="h-4 w-4" />
              <AlertDescription className="font-medium">{t.emergencyNumber}</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
