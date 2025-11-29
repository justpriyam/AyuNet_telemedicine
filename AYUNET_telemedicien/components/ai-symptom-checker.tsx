"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Mic, MicOff, AlertTriangle, Phone, Stethoscope, Brain, Clock, CheckCircle, User } from "lucide-react"

interface SymptomAnalysis {
  severity: "low" | "medium" | "high" | "emergency"
  possibleConditions: string[]
  recommendedSpecialist: string
  urgency: string
  nextSteps: string[]
  confidence: number
}

interface AISymptomCheckerProps {
  language: string
  onEmergencyDetected: () => void
}

export default function AISymptomChecker({ language, onEmergencyDetected }: AISymptomCheckerProps) {
  const [symptoms, setSymptoms] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<SymptomAnalysis | null>(null)
  const [showEmergency, setShowEmergency] = useState(false)

  const languages = {
    en: {
      title: "AI Symptom Checker",
      description: "Describe your symptoms and get AI-powered health insights",
      symptomsLabel: "Describe your symptoms",
      symptomsPlaceholder: "Tell us what you're experiencing... (e.g., headache, fever, chest pain)",
      voiceInput: "Voice Input",
      stopListening: "Stop Listening",
      analyzeSymptoms: "Analyze Symptoms",
      analyzing: "Analyzing your symptoms...",
      severity: "Severity",
      possibleConditions: "Possible Conditions",
      recommendedSpecialist: "Recommended Specialist",
      nextSteps: "Next Steps",
      confidence: "Confidence",
      emergency: "EMERGENCY DETECTED",
      emergencyMessage: "Your symptoms may indicate a medical emergency. Please seek immediate medical attention.",
      callAmbulance: "Call Ambulance",
      contactDoctor: "Contact Doctor",
      bookAppointment: "Book Appointment",
      low: "Low",
      medium: "Medium",
      high: "High",
      emergencyLevel: "Emergency",
      generalPhysician: "General Physician",
      cardiologist: "Cardiologist",
      neurologist: "Neurologist",
      pulmonologist: "Pulmonologist",
      gastroenterologist: "Gastroenterologist",
      dermatologist: "Dermatologist",
      orthopedist: "Orthopedist",
      disclaimer:
        "This AI analysis is for informational purposes only and should not replace professional medical advice.",
    },
    hi: {
      title: "AI लक्षण जांचकर्ता",
      description: "अपने लक्षणों का वर्णन करें और AI-संचालित स्वास्थ्य अंतर्दृष्टि प्राप्त करें",
      symptomsLabel: "अपने लक्षणों का वर्णन करें",
      symptomsPlaceholder: "बताएं कि आप क्या महसूस कर रहे हैं... (जैसे सिरदर्द, बुखार, सीने में दर्द)",
      voiceInput: "आवाज़ इनपुट",
      stopListening: "सुनना बंद करें",
      analyzeSymptoms: "लक्षणों का विश्लेषण करें",
      analyzing: "आपके लक्षणों का विश्लेषण कर रहे हैं...",
      severity: "गंभीरता",
      possibleConditions: "संभावित स्थितियां",
      recommendedSpecialist: "अनुशंसित विशेषज्ञ",
      nextSteps: "अगले कदम",
      confidence: "विश्वास",
      emergency: "आपातकाल का पता चला",
      emergencyMessage: "आपके लक्षण चिकित्सा आपातकाल का संकेत दे सकते हैं। कृपया तुरंत चिकित्सा सहायता लें।",
      callAmbulance: "एम्बुलेंस बुलाएं",
      contactDoctor: "डॉक्टर से संपर्क करें",
      bookAppointment: "अपॉइंटमेंट बुक करें",
      low: "कम",
      medium: "मध्यम",
      high: "उच्च",
      emergencyLevel: "आपातकाल",
      generalPhysician: "सामान्य चिकित्सक",
      cardiologist: "हृदय रोग विशेषज्ञ",
      neurologist: "न्यूरोलॉजिस्ट",
      pulmonologist: "फेफड़े के विशेषज्ञ",
      gastroenterologist: "गैस्ट्रोएंटेरोलॉजिस्ट",
      dermatologist: "त्वचा विशेषज्ञ",
      orthopedist: "हड्डी रोग विशेषज्ञ",
      disclaimer: "यह AI विश्लेषण केवल सूचनात्मक उद्देश्यों के लिए है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है।",
    },
    pa: {
      title: "AI ਲੱਛਣ ਜਾਂਚਕਰਤਾ",
      description: "ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਰਣਨ ਕਰੋ ਅਤੇ AI-ਸੰਚਾਲਿਤ ਸਿਹਤ ਸੂਝ ਪ੍ਰਾਪਤ ਕਰੋ",
      symptomsLabel: "ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਰਣਨ ਕਰੋ",
      symptomsPlaceholder: "ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ... (ਜਿਵੇਂ ਸਿਰ ਦਰਦ, ਬੁਖਾਰ, ਛਾਤੀ ਵਿੱਚ ਦਰਦ)",
      voiceInput: "ਆਵਾਜ਼ ਇਨਪੁਟ",
      stopListening: "ਸੁਣਨਾ ਬੰਦ ਕਰੋ",
      analyzeSymptoms: "ਲੱਛਣਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",
      analyzing: "ਤੁਹਾਡੇ ਲੱਛਣਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਹੇ ਹਾਂ...",
      severity: "ਗੰਭੀਰਤਾ",
      possibleConditions: "ਸੰਭਾਵਿਤ ਸਥਿਤੀਆਂ",
      recommendedSpecialist: "ਸਿਫਾਰਸ਼ੀ ਮਾਹਿਰ",
      nextSteps: "ਅਗਲੇ ਕਦਮ",
      confidence: "ਭਰੋਸਾ",
      emergency: "ਐਮਰਜੈਂਸੀ ਦਾ ਪਤਾ ਲਗਾਇਆ",
      emergencyMessage: "ਤੁਹਾਡੇ ਲੱਛਣ ਮੈਡੀਕਲ ਐਮਰਜੈਂਸੀ ਦਾ ਸੰਕੇਤ ਦੇ ਸਕਦੇ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਤੁਰੰਤ ਮੈਡੀਕਲ ਸਹਾਇਤਾ ਲਓ।",
      callAmbulance: "ਐਂਬੂਲੈਂਸ ਬੁਲਾਓ",
      contactDoctor: "ਡਾਕਟਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
      bookAppointment: "ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ",
      low: "ਘੱਟ",
      medium: "ਮੱਧਮ",
      high: "ਉੱਚ",
      emergencyLevel: "ਐਮਰਜੈਂਸੀ",
      generalPhysician: "ਜਨਰਲ ਫਿਜ਼ੀਸ਼ਿਅਨ",
      cardiologist: "ਦਿਲ ਦੇ ਮਾਹਿਰ",
      neurologist: "ਨਿਊਰੋਲੋਜਿਸਟ",
      pulmonologist: "ਫੇਫੜਿਆਂ ਦੇ ਮਾਹਿਰ",
      gastroenterologist: "ਪੇਟ ਦੇ ਮਾਹਿਰ",
      dermatologist: "ਚਮੜੀ ਦੇ ਮਾਹਿਰ",
      orthopedist: "ਹੱਡੀਆਂ ਦੇ ਮਾਹਿਰ",
      disclaimer: "ਇਹ AI ਵਿਸ਼ਲੇਸ਼ਣ ਸਿਰਫ਼ ਜਾਣਕਾਰੀ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਹੈ ਅਤੇ ਪੇਸ਼ੇਵਰ ਮੈਡੀਕਲ ਸਲਾਹ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ।",
    },
  }

  const t = languages[language as keyof typeof languages] || languages.en

  // Mock AI analysis function - in real implementation, this would call an AI service
  const analyzeSymptoms = async (symptomText: string): Promise<SymptomAnalysis> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const lowerSymptoms = symptomText.toLowerCase()

    // Emergency keywords detection
    const emergencyKeywords = [
      "chest pain",
      "difficulty breathing",
      "severe headache",
      "unconscious",
      "heart attack",
      "stroke",
      "severe bleeding",
      "can't breathe",
      "choking",
    ]

    const isEmergency = emergencyKeywords.some((keyword) => lowerSymptoms.includes(keyword))

    if (isEmergency) {
      return {
        severity: "emergency",
        possibleConditions: ["Cardiac Emergency", "Respiratory Distress", "Neurological Emergency"],
        recommendedSpecialist: t.cardiologist,
        urgency: "Immediate medical attention required",
        nextSteps: ["Call emergency services", "Go to nearest hospital", "Do not delay treatment"],
        confidence: 95,
      }
    }

    // High severity conditions
    const highSeverityKeywords = ["severe pain", "high fever", "vomiting blood", "severe nausea"]
    const isHighSeverity = highSeverityKeywords.some((keyword) => lowerSymptoms.includes(keyword))

    if (isHighSeverity) {
      return {
        severity: "high",
        possibleConditions: ["Acute Infection", "Gastroenteritis", "Migraine"],
        recommendedSpecialist: t.generalPhysician,
        urgency: "Seek medical attention within 24 hours",
        nextSteps: ["Book urgent appointment", "Monitor symptoms", "Stay hydrated"],
        confidence: 80,
      }
    }

    // Medium severity conditions
    const mediumSeverityKeywords = ["fever", "headache", "stomach pain", "nausea", "dizziness"]
    const isMediumSeverity = mediumSeverityKeywords.some((keyword) => lowerSymptoms.includes(keyword))

    if (isMediumSeverity) {
      return {
        severity: "medium",
        possibleConditions: ["Common Cold", "Tension Headache", "Indigestion"],
        recommendedSpecialist: t.generalPhysician,
        urgency: "Consider medical consultation within 2-3 days",
        nextSteps: ["Rest and monitor", "Stay hydrated", "Over-the-counter medication if needed"],
        confidence: 70,
      }
    }

    // Low severity (default)
    return {
      severity: "low",
      possibleConditions: ["Minor Cold", "Fatigue", "Stress-related symptoms"],
      recommendedSpecialist: t.generalPhysician,
      urgency: "Monitor symptoms, seek care if worsening",
      nextSteps: ["Rest", "Stay hydrated", "Monitor for changes"],
      confidence: 60,
    }
  }

  const handleVoiceInput = () => {
    if (!isListening) {
      // Start voice recognition
      setIsListening(true)
      // In a real implementation, you would use Web Speech API
      setTimeout(() => {
        setSymptoms(symptoms + " [Voice input would be processed here]")
        setIsListening(false)
      }, 3000)
    } else {
      setIsListening(false)
    }
  }

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return

    setIsAnalyzing(true)
    setAnalysis(null)

    try {
      const result = await analyzeSymptoms(symptoms)
      setAnalysis(result)

      if (result.severity === "emergency") {
        setShowEmergency(true)
        onEmergencyDetected()
      }
    } catch (error) {
      console.error("Analysis failed:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "emergency":
        return "destructive"
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      default:
        return "default"
    }
  }

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case "emergency":
        return t.emergencyLevel
      case "high":
        return t.high
      case "medium":
        return t.medium
      default:
        return t.low
    }
  }

  return (
    <div className="space-y-6">
      {/* Emergency Alert */}
      {showEmergency && (
        <Alert className="border-destructive bg-destructive/10">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive font-medium">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{t.emergency}</p>
                <p className="text-sm">{t.emergencyMessage}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="destructive">
                  <Phone className="w-4 h-4 mr-2" />
                  {t.callAmbulance}
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Symptom Input */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            {t.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{t.description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="symptoms">{t.symptomsLabel}</Label>
            <Textarea
              id="symptoms"
              placeholder={t.symptomsPlaceholder}
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="min-h-32 mt-2"
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={handleVoiceInput} variant="outline" className="flex-1 bg-transparent">
              {isListening ? (
                <>
                  <MicOff className="w-4 h-4 mr-2" />
                  {t.stopListening}
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4 mr-2" />
                  {t.voiceInput}
                </>
              )}
            </Button>
            <Button onClick={handleAnalyze} disabled={!symptoms.trim() || isAnalyzing} className="flex-1">
              {isAnalyzing ? (
                <>
                  <Clock className="w-4 h-4 mr-2 animate-spin" />
                  {t.analyzing}
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 mr-2" />
                  {t.analyzeSymptoms}
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysis && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Analysis Results</span>
              <Badge variant={getSeverityColor(analysis.severity) as any}>{getSeverityText(analysis.severity)}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Confidence Score */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.confidence}</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-muted rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${analysis.confidence}%` }} />
                </div>
                <span className="text-sm">{analysis.confidence}%</span>
              </div>
            </div>

            {/* Possible Conditions */}
            <div>
              <h4 className="font-medium mb-2">{t.possibleConditions}</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.possibleConditions.map((condition, index) => (
                  <Badge key={index} variant="outline">
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recommended Specialist */}
            <div>
              <h4 className="font-medium mb-2">{t.recommendedSpecialist}</h4>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-primary" />
                <span>{analysis.recommendedSpecialist}</span>
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h4 className="font-medium mb-2">{t.nextSteps}</h4>
              <ul className="space-y-1">
                {analysis.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              <Button className="flex-1">
                <User className="w-4 h-4 mr-2" />
                {t.contactDoctor}
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Clock className="w-4 h-4 mr-2" />
                {t.bookAppointment}
              </Button>
            </div>

            {/* Disclaimer */}
            <Alert>
              <AlertDescription className="text-xs text-muted-foreground">{t.disclaimer}</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
