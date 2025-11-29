🌐 AyuNet – Rural Telemedicine & AI Healthcare Platform

AyuNet is a modern telemedicine platform designed to bridge the healthcare gap in rural and underserved regions. It provides AI-driven symptom analysis, real-time doctor consultations, pharmacist integration, emergency support, and role-based dashboards — creating a complete healthcare ecosystem accessible from anywhere.


█████╗ ██╗   ██╗██╗   ██╗███╗   ██╗███████╗████████╗
██╔══██╗██║   ██║██║   ██║████╗  ██║██╔════╝╚══██╔══╝
███████║██║   ██║██║   ██║██╔██╗ ██║█████╗     ██║   
██╔══██║██║   ██║██║   ██║██║╚██╗██║██╔══╝     ██║   
██║  ██║╚██████╔╝╚██████╔╝██║ ╚████║███████╗   ██║   
╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   
Rural Telemedicine | AI Symptom Checker | 3-Role Access
📚 Table of Contents

Overview

Features

Folder Structure

Installation

Usage

Workflows

License

Contact

🚀 Overview

AyuNet simplifies healthcare for remote communities by offering:

Fast access to medical help

AI-guided symptom analysis

Doctor–Patient–Pharmacist connectivity

Emergency response support

Education and preventive care

Built with modern web technologies and scalable backend logic.

⭐ Features
🔹 AI Symptom Checker

Predicts potential illnesses using user-input symptoms and guides the patient toward next steps.

🔹 Role-Based System

Each role has a dedicated dashboard:

Patient: Consult doctors, check reports, use symptom checker

Doctor: View/prescribe patients, manage appointments

Pharmacist: View digital prescriptions & manage delivery

🔹 Live Teleconsultation

Real-time medical help for rural users.

🔹 Digital Prescriptions

Doctors can issue prescriptions that pharmacists immediately receive.

🔹 Emergency Response

One-tap emergency support and guidance.

🔹 Rural Health Education

General awareness and home-remedy guidance for common health issues.

📁 Folder Structure
AyuNet_telemedicine/
│
├── app/
│   ├── api/
│   │   ├── login/
│   │   │   ├── doctor/route.ts
│   │   │   ├── patient/route.ts
│   │   │   └── pharmacist/route.ts
│   │   ├── registration/
│   │   │   ├── doctor/route.ts
│   │   │   ├── patient/route.ts
│   │   │   └── pharmacist/route.ts
│   │   └── ...other APIs
│   ├── doctor/
│   ├── patient/
│   ├── pharmacist/
│   └── ...UI pages
│
├── components/
│   ├── ai-symptom-checker.tsx
│   ├── emergency-system.tsx
│   ├── teleconsultation.tsx
│   └── ui/
│
├── lib/
│   └── db.ts     ← MySQL/Database connection file
│
├── public/
└── package.json

🛠️ Installation
1. Clone the repository
git clone https://github.com/PriyamGupta/AyuNet_telemedicine.git
cd AyuNet_telemedicine

2. Install dependencies
npm install

3. Create environment variables

Create a .env file:

DATABASE_URL="mysql://username:password@localhost:3306/ayunetDB"
SECRET_KEY="your-secret"

4. Start development server
npm run dev

5. Access the app
http://localhost:3000

🔄 Workflows
1. Patient → Doctor Consultation Flow
Patient Login
     ↓
AI Symptom Checker (optional)
     ↓
Select doctor
     ↓
Doctor accepts request
     ↓
Teleconsultation
     ↓
Doctor provides digital prescription

2. Doctor Workflow
Login → View Patients → Approve Consultation → Diagnose → Upload Prescription

3. Pharmacist Workflow
Login → View Digital Prescription → Mark as Available → Provide Medicine / Deliver

4. Emergency System Flow
Patient clicks Emergency Button
         ↓
Immediate emergency instructions displayed
         ↓
Contact nearest facility or connect doctor

📜 License

This project is licensed under MIT License.

👤 Contact

Developer: Priyam Gupta
Project: AyuNet Telemedicine
Email: (priyamgupta183@gmail.com)
