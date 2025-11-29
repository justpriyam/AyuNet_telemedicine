"use client"

import { useState } from "react"
import Teleconsultation from "@/components/teleconsultation"
import { useRouter } from "next/navigation"

interface ConsultationPageProps {
  params: {
    id: string
  }
}

export default function ConsultationPage({ params }: ConsultationPageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const router = useRouter()

  // Mock data - in real app, this would come from API based on consultation ID
  const consultationData = {
    id: params.id,
    patientName: "Rajesh Kumar",
    doctorName: "Dr. Priya Sharma",
    userType: "patient" as const, // This would be determined by authentication
  }

  const handleEndCall = () => {
    // Navigate back to appropriate portal
    router.push("/patient")
  }

  return (
    <div className="h-screen">
      <Teleconsultation
        userType={consultationData.userType}
        patientName={consultationData.patientName}
        doctorName={consultationData.doctorName}
        language={selectedLanguage}
        onEndCall={handleEndCall}
      />
    </div>
  )
}
