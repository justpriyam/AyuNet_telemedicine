"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pill,
  Package,
  ShoppingCart,
  AlertTriangle,
  TrendingUp,
  Search,
  Plus,
  Minus,
  CheckCircle,
  Clock,
  ArrowLeft,
  BarChart3,
  Settings,
  Store,
  Bell,
  Shield,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function PharmacistPortal() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMedicine, setSelectedMedicine] = useState<number | null>(null)
  const [pharmacistData, setPharmacistData] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem("pharmacistData")
    if (data) {
      setPharmacistData(JSON.parse(data))
    }
  }, [])

  const languages = {
    en: {
      title: "Pharmacist Portal",
      welcome: pharmacistData ? `Welcome, ${pharmacistData.pharmacyName || pharmacistData.name}` : "Welcome to AyuNet",
      dashboard: "Dashboard",
      inventory: "Inventory",
      orders: "Orders",
      analytics: "Analytics",
      profile: "Profile",
      totalMedicines: "Total Medicines",
      lowStock: "Low Stock Items",
      pendingOrders: "Pending Orders",
      todaysSales: "Today's Sales",
      searchMedicine: "Search medicines...",
      addStock: "Add Stock",
      updateStock: "Update Stock",
      outOfStock: "Out of Stock",
      lowStockAlert: "Low Stock Alert",
      inStock: "In Stock",
      orderDetails: "Order Details",
      patientName: "Patient Name",
      prescribedBy: "Prescribed By",
      quantity: "Quantity",
      status: "Status",
      fulfill: "Fulfill Order",
      pending: "Pending",
      completed: "Completed",
      rejected: "Rejected",
      back: "Back to Home",
      medicineName: "Medicine Name",
      category: "Category",
      price: "Price",
      stock: "Stock",
      supplier: "Supplier",
      expiryDate: "Expiry Date",
      batchNumber: "Batch Number",
      recentOrders: "Recent Orders",
      medicineInventory: "Medicine Inventory",
      prescriptionOrders: "Prescription Orders",
      addMedicine: "Add Medicine",
      viewDetails: "View Details",
      notifications: "Notifications",
      quickActions: "Quick Actions",
      inventoryOverview: "Inventory Overview",
      orderManagement: "Order Management",
      stockReplenishment: "Stock Replenishment",
    },
    hi: {
      title: "फार्मासिस्ट पोर्टल",
      welcome: pharmacistData
        ? `स्वागत है, ${pharmacistData.pharmacyName || pharmacistData.name}`
        : "AyuNet में आपका स्वागत है",
      dashboard: "डैशबोर्ड",
      inventory: "इन्वेंटरी",
      orders: "ऑर्डर",
      analytics: "विश्लेषण",
      profile: "प्रोफाइल",
      totalMedicines: "कुल दवाएं",
      lowStock: "कम स्टॉक आइटम",
      pendingOrders: "लंबित ऑर्डर",
      todaysSales: "आज की बिक्री",
      searchMedicine: "दवाएं खोजें...",
      addStock: "स्टॉक जोड़ें",
      updateStock: "स्टॉक अपडेट करें",
      outOfStock: "स्टॉक समाप्त",
      lowStockAlert: "कम स्टॉक अलर्ट",
      inStock: "स्टॉक में",
      orderDetails: "ऑर्डर विवरण",
      patientName: "मरीज़ का नाम",
      prescribedBy: "द्वारा निर्धारित",
      quantity: "मात्रा",
      status: "स्थिति",
      fulfill: "ऑर्डर पूरा करें",
      pending: "लंबित",
      completed: "पूर्ण",
      rejected: "अस्वीकृत",
      back: "होम पर वापस",
      medicineName: "दवा का नाम",
      category: "श्रेणी",
      price: "कीमत",
      stock: "स्टॉक",
      supplier: "आपूर्तिकर्ता",
      expiryDate: "समाप्ति तिथि",
      batchNumber: "बैच नंबर",
      recentOrders: "हाल के ऑर्डर",
      medicineInventory: "दवा इन्वेंटरी",
      prescriptionOrders: "प्रिस्क्रिप्शन ऑर्डर",
      addMedicine: "दवा जोड़ें",
      viewDetails: "विवरण देखें",
      notifications: "सूचनाएँ",
      quickActions: "त्वरित कार्य",
      inventoryOverview: "इन्वेंटरी सारांश",
      orderManagement: "ऑर्डर प्रबंधन",
      stockReplenishment: "स्टॉक भरपाई",
    },
    pa: {
      title: "ਫਾਰਮਾਸਿਸਟ ਪੋਰਟਲ",
      welcome: pharmacistData
        ? `ਜੀ ਆਇਆਂ ਨੂੰ, ${pharmacistData.pharmacyName || pharmacistData.name}`
        : "AyuNet ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
      dashboard: "ਡੈਸ਼ਬੋਰਡ",
      inventory: "ਇਨਵੈਂਟਰੀ",
      orders: "ਆਰਡਰ",
      analytics: "ਵਿਸ਼ਲੇਸ਼ਣ",
      profile: "ਪ੍ਰੋਫਾਈਲ",
      totalMedicines: "ਕੁੱਲ ਦਵਾਈਆਂ",
      lowStock: "ਘੱਟ ਸਟਾਕ ਆਈਟਮ",
      pendingOrders: "ਬਾਕੀ ਆਰਡਰ",
      todaysSales: "ਅੱਜ ਦੀ ਵਿਕਰੀ",
      searchMedicine: "ਦਵਾਈਆਂ ਖੋਜੋ...",
      addStock: "ਸਟਾਕ ਜੋੜੋ",
      updateStock: "ਸਟਾਕ ਅਪਡੇਟ ਕਰੋ",
      outOfStock: "ਸਟਾਕ ਖਤਮ",
      lowStockAlert: "ਘੱਟ ਸਟਾਕ ਅਲਰਟ",
      inStock: "ਸਟਾਕ ਵਿੱਚ",
      orderDetails: "ਆਰਡਰ ਵੇਰਵੇ",
      patientName: "ਮਰੀਜ਼ ਦਾ ਨਾਮ",
      prescribedBy: "ਦੁਆਰਾ ਨਿਰਧਾਰਿਤ",
      quantity: "ਮਾਤਰਾ",
      status: "ਸਥਿਤੀ",
      fulfill: "ਆਰਡਰ ਪੂਰਾ ਕਰੋ",
      pending: "ਬਾਕੀ",
      completed: "ਪੂਰਾ",
      rejected: "ਰੱਦ",
      back: "ਘਰ ਵਾਪਸ",
      medicineName: "ਦਵਾਈ ਦਾ ਨਾਮ",
      category: "ਸ਼੍ਰੇਣੀ",
      price: "ਕੀਮਤ",
      stock: "ਸਟਾਕ",
      supplier: "ਸਪਲਾਇਰ",
      expiryDate: "ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਤਾਰੀਖ",
      batchNumber: "ਬੈਚ ਨੰਬਰ",
      recentOrders: "ਹਾਲ ਦੇ ਆਰਡਰ",
      medicineInventory: "ਦਵਾਈ ਇਨਵੈਂਟਰੀ",
      prescriptionOrders: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਆਰਡਰ",
      addMedicine: "ਦਵਾਈ ਜੋੜੋ",
      viewDetails: "ਵੇਰਵੇ ਦੇਖੋ",
      notifications: "ਸੂਚਨਾਵਾਂ",
      quickActions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
      inventoryOverview: "ਇਨਵੈਂਟਰੀ ਸਾਰਾਂਸ਼",
      orderManagement: "ਆਰਡਰ ਪ੍ਰਬੰਧਨ",
      stockReplenishment: "ਸਟਾਕ ਭਰਪਾਈ",
    },
  }

  const t = languages[selectedLanguage as keyof typeof languages]

  const mockMedicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      price: 25,
      stock: 150,
      minStock: 50,
      supplier: "ABC Pharma",
      expiryDate: "2025-06-15",
      batchNumber: "PAR001",
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      category: "Antibiotic",
      price: 85,
      stock: 12,
      minStock: 20,
      supplier: "XYZ Medical",
      expiryDate: "2024-12-30",
      batchNumber: "AMX002",
    },
    {
      id: 3,
      name: "Cough Syrup",
      category: "Cold & Flu",
      price: 45,
      stock: 0,
      minStock: 15,
      supplier: "DEF Healthcare",
      expiryDate: "2024-08-20",
      batchNumber: "CS003",
    },
    {
      id: 4,
      name: "Vitamin D3",
      category: "Supplements",
      price: 120,
      stock: 75,
      minStock: 30,
      supplier: "GHI Nutrition",
      expiryDate: "2025-03-10",
      batchNumber: "VD004",
    },
  ]

  const mockOrders = [
    {
      id: 1,
      patientName: "Rajesh Kumar",
      prescribedBy: "Dr. Priya Sharma",
      medicines: [
        { name: "Paracetamol 500mg", quantity: 10, price: 25 },
        { name: "Cough Syrup", quantity: 1, price: 45 },
      ],
      status: "pending",
      orderDate: "2024-01-15",
      total: 295,
    },
    {
      id: 2,
      patientName: "Sunita Devi",
      prescribedBy: "Dr. Amit Singh",
      medicines: [{ name: "Amoxicillin 250mg", quantity: 21, price: 85 }],
      status: "completed",
      orderDate: "2024-01-14",
      total: 1785,
    },
    {
      id: 3,
      patientName: "Harpreet Singh",
      prescribedBy: "Dr. Priya Sharma",
      medicines: [
        { name: "Vitamin D3", quantity: 1, price: 120 },
        { name: "Paracetamol 500mg", quantity: 5, price: 25 },
      ],
      status: "pending",
      orderDate: "2024-01-15",
      total: 245,
    },
  ]

  const getStockStatus = (stock: number, minStock: number) => {
    if (stock === 0) return "out"
    if (stock <= minStock) return "low"
    return "good"
  }

  const getStockBadge = (status: string) => {
    switch (status) {
      case "out":
        return <Badge variant="destructive">{t.outOfStock}</Badge>
      case "low":
        return <Badge variant="secondary">{t.lowStockAlert}</Badge>
      default:
        return <Badge variant="default">{t.inStock}</Badge>
    }
  }

  const handleUpdateStock = (medicineId: number, change: number) => {
    alert(`Stock updated for medicine ${medicineId} by ${change}`)
  }

  const handleFulfillOrder = (orderId: number) => {
    alert(`Order ${orderId} fulfilled`)
  }

  const filteredMedicines = mockMedicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const lowStockCount = mockMedicines.filter((m) => getStockStatus(m.stock, m.minStock) !== "good").length
  const pendingOrdersCount = mockOrders.filter((o) => o.status === "pending").length
  const todaysSales = mockOrders
    .filter((o) => o.orderDate === "2024-01-15" && o.status === "completed")
    .reduce((sum, o) => sum + o.total, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/5">
      <div
        className="absolute inset-0 opacity-3 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pharmacy-medicine-bottles-pills-background.png')`,
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
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Store className="w-7 h-7 text-white" />
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

      {lowStockCount > 0 && (
        <div className="relative bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
                <div>
                  <span className="font-semibold text-lg">{lowStockCount} medicines are running low on stock</span>
                  <p className="text-sm opacity-90">Immediate restocking required</p>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="bg-white text-secondary hover:bg-white/90">
                {t.viewDetails}
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
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">{t.dashboard}</span>
            </TabsTrigger>
            <TabsTrigger
              value="inventory"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">{t.inventory}</span>
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">{t.orders}</span>
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">{t.analytics}</span>
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">{t.profile}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.totalMedicines}</CardTitle>
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Pill className="h-5 w-5 text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent">{mockMedicines.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">Active inventory items</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.lowStock}</CardTitle>
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-destructive">{lowStockCount}</div>
                  <p className="text-xs text-muted-foreground mt-1">Need restocking</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.pendingOrders}</CardTitle>
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary">{pendingOrdersCount}</div>
                  <p className="text-xs text-muted-foreground mt-1">Awaiting fulfillment</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    {t.todaysSales}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">₹{todaysSales}</div>
                  <p className="text-xs text-muted-foreground mt-1">Revenue today</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-accent" />
                  {t.quickActions}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Button
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg"
                    size="lg"
                  >
                    <Package className="w-8 h-8" />
                    <span className="font-medium">{t.inventoryOverview}</span>
                  </Button>
                  <Button
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white shadow-lg"
                    size="lg"
                  >
                    <ShoppingCart className="w-8 h-8" />
                    <span className="font-medium">{t.orderManagement}</span>
                  </Button>
                  <Button
                    className="h-24 flex flex-col gap-3 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg"
                    size="lg"
                  >
                    <Plus className="w-8 h-8" />
                    <span className="font-medium">{t.stockReplenishment}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-secondary" />
                  {t.recentOrders}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.slice(0, 3).map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-6 border border-border/50 rounded-xl bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center">
                          <ShoppingCart className="w-7 h-7 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{order.patientName}</p>
                          <p className="text-sm text-muted-foreground">
                            {t.prescribedBy}: {order.prescribedBy}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {order.medicines.length} items - ₹{order.total}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={order.status === "completed" ? "default" : "secondary"} className="px-3 py-1">
                          {order.status === "completed" ? t.completed : t.pending}
                        </Badge>
                        {order.status === "pending" && (
                          <Button
                            size="sm"
                            onClick={() => handleFulfillOrder(order.id)}
                            className="bg-accent hover:bg-accent/90"
                          >
                            {t.fulfill}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  {t.lowStockAlert}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockMedicines
                    .filter((m) => getStockStatus(m.stock, m.minStock) !== "good")
                    .map((medicine) => (
                      <div
                        key={medicine.id}
                        className="flex items-center justify-between p-6 border border-border/50 rounded-xl bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-destructive/20 rounded-xl flex items-center justify-center">
                            <Pill className="w-7 h-7 text-destructive" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">{medicine.name}</p>
                            <p className="text-sm text-muted-foreground">{medicine.category}</p>
                            <p className="text-sm text-muted-foreground">
                              Current: {medicine.stock} | Min: {medicine.minStock}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStockBadge(getStockStatus(medicine.stock, medicine.minStock))}
                          <Button size="sm" variant="outline" className="bg-white/80">
                            <Plus className="w-4 h-4 mr-2" />
                            {t.addStock}
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            {/* Search Bar */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder={t.searchMedicine}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    {t.addMedicine}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Medicine List */}
            <Card>
              <CardHeader>
                <CardTitle>{t.medicineInventory}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredMedicines.map((medicine) => (
                    <div key={medicine.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Pill className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{medicine.name}</p>
                          <p className="text-sm text-muted-foreground">{medicine.category}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>₹{medicine.price}</span>
                            <span>
                              {t.stock}: {medicine.stock}
                            </span>
                            <span>
                              {t.supplier}: {medicine.supplier}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStockBadge(getStockStatus(medicine.stock, medicine.minStock))}
                        <div className="flex items-center gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUpdateStock(medicine.id, -1)}
                            disabled={medicine.stock === 0}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="mx-2 min-w-8 text-center">{medicine.stock}</span>
                          <Button size="sm" variant="outline" onClick={() => handleUpdateStock(medicine.id, 1)}>
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.prescriptionOrders}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-medium">Order #{order.id}</p>
                          <p className="text-sm text-muted-foreground">
                            {t.patientName}: {order.patientName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {t.prescribedBy}: {order.prescribedBy}
                          </p>
                          <p className="text-sm text-muted-foreground">Date: {order.orderDate}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={order.status === "completed" ? "default" : "secondary"}>
                            {order.status === "completed" ? t.completed : t.pending}
                          </Badge>
                          {order.status === "pending" && (
                            <Button size="sm" onClick={() => handleFulfillOrder(order.id)}>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {t.fulfill}
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {order.medicines.map((medicine, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span>{medicine.name}</span>
                            <span>
                              {medicine.quantity} × ₹{medicine.price} = ₹{medicine.quantity * medicine.price}
                            </span>
                          </div>
                        ))}
                        <div className="border-t pt-2 font-medium">Total: ₹{order.total}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>{t.analytics}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytics and insights will be implemented in the next phase.</p>
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
