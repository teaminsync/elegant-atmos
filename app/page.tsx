"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Droplets,
  Wind,
  Zap,
  Leaf,
  Heart,
  Award,
  TreePine,
  Car,
  Shield,
  Star,
  Play,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function ElegantAtmosWireframe() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Simulate scroll-triggered animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "positives",
        "highlights",
        "location",
        "about",
        "awards",
        "amenities",
        "units",
        "specs",
        "gallery",
      ]
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fivePositives = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Water Positive",
      subtitle: "Building a better tomorrow, one drop at a time",
      features: [
        "Rainwater Harvesting - 970mm annual rainfall utilization",
        "Smart Water Management - 60% usage reduction",
        "Efficient Irrigation - Drip systems with mulch",
        "Drainable Pavers - Groundwater recharge",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Air Positive",
      subtitle: "Breathing life into every moment",
      features: [
        "Proximity to GKVK Campus - 100,000+ trees",
        "Oxygenated Clubhouse - Siemens air purification",
        "Environmental Benefits - Natural tree canopy",
        "AQI Monitoring - Real-time air quality",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Electricity Positive",
      subtitle: "Empowering a greener future",
      features: [
        "Renewable Energy - 25kW solar power generation",
        "Efficient Appliances - BEE 4-5 star rated motors",
        "Smart Power Management - Centralized optimization",
        "EV Infrastructure - 20% parking with charging points",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Environment Positive",
      subtitle: "Living in harmony with the earth",
      features: [
        "IGBC Certification - Eco-friendly practices",
        "30% Green Spaces - Terrace & vertical gardens",
        "Carbon Healing - EV stations & bicycle parking",
        "Zero Waste - Organic waste converter",
      ],
      color: "from-green-600 to-lime-500",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Health Positive",
      subtitle: "A community that cares for all",
      features: [
        "Inclusive Design - Wheelchair-friendly access",
        "Wellness Amenities - Yoga, meditation zones",
        "Healthy Living Spaces - Low-VOC paints",
        "Child-Centric Areas - Safe play zones",
      ],
      color: "from-pink-500 to-rose-500",
    },
  ]

  const amenityCategories = [
    {
      title: "General Amenities",
      items: [
        "Grand Entrance Boulevard",
        "Tranquil Pavilion",
        "Aroma Haven Gardens",
        "Celestial Amphitheatre",
        "Regal Chess Arena",
        "Enchanted Swing Park",
      ],
    },
    {
      title: "Sports & Recreation",
      items: [
        "Elite Futsal Turf",
        "Vitality Jogging Trail",
        "Summit Wall Climb",
        "Basketball Court",
        "Badminton Court",
        "Swimming Pool",
      ],
    },
    {
      title: "Terrace Amenities",
      items: [
        "Sky Library",
        "Infinity View Deck",
        "Star Gazing",
        "Elevate Fitness Club",
        "Sky Work Hub",
        "Barbeque Area",
      ],
    },
    {
      title: "Sustainable Features",
      items: [
        "EV Charging Station",
        "Solar Panels",
        "AQI Monitoring",
        "Organic Waste Converter",
        "Efficient Irrigation",
        "Bicycle Facility",
      ],
    },
    {
      title: "Oxy Club House",
      items: ["Grand Party Hall", "World-class Fitness Centre", "Spa", "Lounge Café", "Snooker", "Meeting Spaces"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#EDE7DD] text-[#3A3A3A] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#B8B2A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#C4A266] to-[#2D4030] rounded-lg"></div>
              <span className="text-xl font-bold text-[#2D4030]">Elegant Atmos</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-sm font-medium hover:text-[#C4A266] transition-colors">
                Home
              </a>
              <a href="#positives" className="text-sm font-medium hover:text-[#C4A266] transition-colors">
                Sustainability
              </a>
              <a href="#amenities" className="text-sm font-medium hover:text-[#C4A266] transition-colors">
                Amenities
              </a>
              <a href="#units" className="text-sm font-medium hover:text-[#C4A266] transition-colors">
                Units
              </a>
              <a href="#gallery" className="text-sm font-medium hover:text-[#C4A266] transition-colors">
                Gallery
              </a>
              <Button className="bg-[#C4A266] hover:bg-[#2D4030] text-white">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#B8B2A7]/20">
            <div className="px-4 py-2 space-y-2">
              <a href="#hero" className="block py-2 text-sm font-medium">
                Home
              </a>
              <a href="#positives" className="block py-2 text-sm font-medium">
                Sustainability
              </a>
              <a href="#amenities" className="block py-2 text-sm font-medium">
                Amenities
              </a>
              <a href="#units" className="block py-2 text-sm font-medium">
                Units
              </a>
              <a href="#gallery" className="block py-2 text-sm font-medium">
                Gallery
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-10">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EDE7DD] via-white to-[#B8B2A7]/30"></div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#C4A266]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#2D4030]/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Certifications */}
            <div className="flex justify-center space-x-4 mb-8">
              <Badge className="bg-[#2D4030] text-white px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                CREDAI Certified
              </Badge>
              <Badge className="bg-[#C4A266] text-white px-4 py-2">
                <Leaf className="w-4 h-4 mr-2" />
                Net Zero
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-[#2D4030] leading-tight">
                Elegant
                <span className="block text-[#C4A266]">Atmos</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-[#3A3A3A] mb-6">Live better, every day</p>
            </div>

            {/* Philosophy */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-[#3A3A3A]/80 mb-8 leading-relaxed">
                Inspired by nature. Designed for timeless luxury.
              </p>
              <p className="text-base md:text-lg text-[#3A3A3A]/70 mb-12 leading-relaxed">
                Where luxury transcends indulgence and becomes a celebration of conscious living. Nestled in Yelahanka,
                North Bengaluru, this eco-conscious haven seamlessly integrates sustainability and luxury.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#C4A266] hover:bg-[#2D4030] text-white px-8 py-4 text-lg">
                Explore Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2D4030] text-[#2D4030] hover:bg-[#2D4030] hover:text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-sm text-[#3A3A3A]/70">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#C4A266]" />
                +91 96068 65959
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#C4A266]" />
                contact@elegantatmos.com
              </div>
            </div>
          </div>
        </div>

        {/* 3D Building Mockup */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-96 hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Elegant Atmos Building"
              width={300}
              height={400}
              className="object-cover rounded-l-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#EDE7DD] rounded-l-3xl"></div>
          </div>
        </div>
      </section>

      {/* The Five Positives */}
      <section id="positives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030] mb-6">Enrich life with the five positives</h2>
            <p className="text-xl text-[#3A3A3A]/70 max-w-3xl mx-auto">
              At Elegant Atmos, every element is thoughtfully crafted to enrich your life with the five positives:
              Water, Air, Electricity, Environment, and Health.
            </p>
          </div>

          <div className="space-y-32">
            {fivePositives.map((positive, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${positive.color} text-white`}>
                    {positive.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#2D4030]">{positive.title}</h3>
                  <p className="text-xl text-[#3A3A3A]/70 italic">{positive.subtitle}</p>
                  <div className="space-y-3">
                    {positive.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${positive.color} mt-2 flex-shrink-0`}
                        ></div>
                        <p className="text-[#3A3A3A]">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt={positive.title}
                      width={500}
                      height={400}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${positive.color} opacity-20 rounded-2xl`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section id="highlights" className="py-20 bg-[#EDE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030] mb-6">A Greener Tomorrow</h2>
            <p className="text-xl text-[#3A3A3A]/70 max-w-3xl mx-auto">
              Where sustainability meets luxury in perfect harmony
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Solar Power Generation",
                description: "25kW renewable energy system",
                icon: <Zap className="w-8 h-8" />,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Smart Water Systems",
                description: "60% reduction in water usage",
                icon: <Droplets className="w-8 h-8" />,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Green Spaces",
                description: "30% of site covered with greenery",
                icon: <TreePine className="w-8 h-8" />,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "EV Infrastructure",
                description: "20% parking with charging points",
                icon: <Car className="w-8 h-8" />,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Air Quality Monitoring",
                description: "Real-time AQI tracking",
                icon: <Wind className="w-8 h-8" />,
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Zero Waste Management",
                description: "Organic waste converter on-site",
                icon: <Leaf className="w-8 h-8" />,
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((highlight, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={highlight.image || "/placeholder.svg"}
                      alt={highlight.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-full text-[#C4A266]">
                      {highlight.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2D4030] mb-2">{highlight.title}</h3>
                    <p className="text-[#3A3A3A]/70">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030]">The perpetual embrace of nature</h2>
              <p className="text-xl text-[#3A3A3A]/70 leading-relaxed">
                Set against the tranquil backdrop of GKVK College - the green lungs of Yelahanka, Elegant Atmos brings
                together modern amenities and cutting-edge design.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <TreePine className="w-6 h-6" />, text: "Surrounded by 100,000+ trees at GKVK Campus" },
                  { icon: <MapPin className="w-6 h-6" />, text: "Prime location in Yelahanka, North Bengaluru" },
                  { icon: <Wind className="w-6 h-6" />, text: "Natural air purification from green cover" },
                  { icon: <Shield className="w-6 h-6" />, text: "Peaceful environment away from city noise" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-2 bg-[#C4A266]/10 rounded-lg text-[#C4A266]">{item.icon}</div>
                    <p className="text-[#3A3A3A]">{item.text}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-[#C4A266] hover:bg-[#2D4030] text-white">
                View Location Map
                <MapPin className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="GKVK Campus Location"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D4030]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Elegant Builders */}
      <section id="about" className="py-20 bg-[#EDE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030] mb-6">
              About Elegant Builders and Developers
            </h2>
            <p className="text-xl text-[#3A3A3A]/70 max-w-4xl mx-auto leading-relaxed">
              Elegant Group is committed to creating spaces that seamlessly integrate sustainability and luxury. Our
              second project, Elegant Atmos, represents our unwavering dedication to conscious living without
              compromising on the finer things in life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Innovation",
                description: "Leading the way in eco-conscious development with cutting-edge green technologies",
                icon: <Leaf className="w-12 h-12" />,
              },
              {
                title: "Luxury Standards",
                description: "Uncompromising quality in design, materials, and craftsmanship",
                icon: <Star className="w-12 h-12" />,
              },
              {
                title: "Community Focus",
                description: "Creating inclusive spaces that nurture both people and the environment",
                icon: <Heart className="w-12 h-12" />,
              },
            ].map((value, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white shadow-lg">
                <CardContent className="space-y-4">
                  <div className="inline-flex p-4 bg-[#C4A266]/10 rounded-2xl text-[#C4A266]">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-[#2D4030]">{value.title}</h3>
                  <p className="text-[#3A3A3A]/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section id="awards" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030] mb-6">Awards & Recognitions</h2>
            <p className="text-xl text-[#3A3A3A]/70">Recognized for excellence in sustainable development</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "CREDAI", description: "Certified Member" },
              { name: "NET ZERO", description: "Carbon Neutral" },
              { name: "IGBC", description: "Green Building" },
              { name: "BEE", description: "Energy Efficient" },
            ].map((award, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#C4A266] to-[#2D4030] rounded-full flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2D4030]">{award.name}</h3>
                  <p className="text-sm text-[#3A3A3A]/70">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section id="amenities" className="py-20 bg-[#EDE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030] mb-6">Amenities that cater to every need</h2>
            <p className="text-xl text-[#3A3A3A]/70">World-class facilities designed for modern luxury living</p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12 bg-white">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="terrace">Terrace</TabsTrigger>
              <TabsTrigger value="sustainable">Sustainable</TabsTrigger>
              <TabsTrigger value="clubhouse">Club House</TabsTrigger>
            </TabsList>

            {amenityCategories.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={category.title.toLowerCase().split(" ")[0]} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((amenity, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#C4A266]/10 rounded-lg flex items-center justify-center text-[#C4A266]">
                            <Star className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#2D4030] group-hover:text-[#C4A266] transition-colors">
                              {amenity}
                            </h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Master Plan & Units */}
      <section id="units" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030] mb-6">Master Plan & Units</h2>
            <p className="text-xl text-[#3A3A3A]/70">Thoughtfully designed spaces for modern living</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Stats */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#2D4030]">Project Overview</h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Total Units", value: "136" },
                  { label: "Floors", value: "G+14" },
                  { label: "Units per Wing", value: "68" },
                  { label: "Units per Floor", value: "5" },
                ].map((stat, index) => (
                  <Card key={index} className="text-center p-6 border-0 bg-[#EDE7DD]">
                    <CardContent className="space-y-2">
                      <p className="text-3xl font-bold text-[#C4A266]">{stat.value}</p>
                      <p className="text-sm text-[#3A3A3A]/70">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#2D4030]">Available Configurations</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-[#EDE7DD] rounded-lg">
                    <span className="font-medium text-[#2D4030]">3 BHK</span>
                    <Button variant="outline" size="sm" className="border-[#C4A266] text-[#C4A266]">
                      View Floor Plan
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#EDE7DD] rounded-lg">
                    <span className="font-medium text-[#2D4030]">3.5 BHK</span>
                    <Button variant="outline" size="sm" className="border-[#C4A266] text-[#C4A266]">
                      View Floor Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Master Plan Visual */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#2D4030]">Master Plan</h3>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Master Plan"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4030]/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="py-20 bg-[#EDE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030] mb-6">Premium Specifications</h2>
            <p className="text-xl text-[#3A3A3A]/70">Quality materials and finishes throughout</p>
          </div>

          <Tabs defaultValue="structure" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white">
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="interiors">Interiors</TabsTrigger>
              <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
              <TabsTrigger value="electrical">Electrical</TabsTrigger>
            </TabsList>

            <TabsContent value="structure" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Structure", detail: "RCC framed structure (designed for seismic zone 2)" },
                  { title: "Flooring", detail: "Vitrified tiles (AGL or Equivalent)" },
                  { title: "Doors", detail: "Pre-hung door with shutter (Sumai Doors)" },
                  { title: "Windows", detail: "PVC windows (Eureka or Equivalent)" },
                ].map((spec, index) => (
                  <Card key={index} className="p-6 border-0 bg-white">
                    <CardContent className="space-y-2">
                      <h4 className="font-semibold text-[#2D4030]">{spec.title}</h4>
                      <p className="text-[#3A3A3A]/70">{spec.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="interiors" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Wall Finishes", detail: "Emulsion paint for walls, distemper for ceiling" },
                  { title: "Painting", detail: "Exterior texture paint, Enamel paint for metal surfaces" },
                  { title: "Railing", detail: "MS Railing and Glass Railing systems" },
                  { title: "Ceiling", detail: "Grid ceiling and false ceiling in selected areas" },
                ].map((spec, index) => (
                  <Card key={index} className="p-6 border-0 bg-white">
                    <CardContent className="space-y-2">
                      <h4 className="font-semibold text-[#2D4030]">{spec.title}</h4>
                      <p className="text-[#3A3A3A]/70">{spec.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="kitchen" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Counter", detail: "Granite Counter and Stainless-steel sink" },
                  { title: "Fittings", detail: "Hot & Cold water CP mixer (Grohe or Equivalent)" },
                  { title: "Appliances", detail: "Provision for washing machine in utility" },
                  { title: "Tiles", detail: "Ceramic tiles for 2' above platform" },
                ].map((spec, index) => (
                  <Card key={index} className="p-6 border-0 bg-white">
                    <CardContent className="space-y-2">
                      <h4 className="font-semibold text-[#2D4030]">{spec.title}</h4>
                      <p className="text-[#3A3A3A]/70">{spec.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="electrical" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Power", detail: "1 kW/unit (Light, Fan and 5amps sockets)" },
                  { title: "Switches", detail: "Modular switches (Schneider or equivalent)" },
                  { title: "Provisions", detail: "Exhaust fan in all toilets & kitchen" },
                  { title: "Safety", detail: "Smoke Detector in all indoor common areas" },
                ].map((spec, index) => (
                  <Card key={index} className="p-6 border-0 bg-white">
                    <CardContent className="space-y-2">
                      <h4 className="font-semibold text-[#2D4030]">{spec.title}</h4>
                      <p className="text-[#3A3A3A]/70">{spec.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D4030] mb-6">Image Gallery</h2>
            <p className="text-xl text-[#3A3A3A]/70">Experience the beauty of Elegant Atmos</p>
          </div>

          <Tabs defaultValue="exterior" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-[#EDE7DD]">
              <TabsTrigger value="exterior">Exterior</TabsTrigger>
              <TabsTrigger value="clubhouse">Clubhouse</TabsTrigger>
              <TabsTrigger value="rooftop">Rooftop</TabsTrigger>
              <TabsTrigger value="interiors">Interiors</TabsTrigger>
            </TabsList>

            {["exterior", "clubhouse", "rooftop", "interiors"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={`/placeholder.svg?height=300&width=400`}
                        alt={`${category} ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D4030]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D4030] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#C4A266] to-white rounded-lg"></div>
                <span className="text-xl font-bold">Elegant Atmos</span>
              </div>
              <p className="text-white/70">Live better, every day. Inspired by nature, designed for timeless luxury.</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a href="#hero" className="block text-white/70 hover:text-[#C4A266] transition-colors">
                  Home
                </a>
                <a href="#positives" className="block text-white/70 hover:text-[#C4A266] transition-colors">
                  Sustainability
                </a>
                <a href="#amenities" className="block text-white/70 hover:text-[#C4A266] transition-colors">
                  Amenities
                </a>
                <a href="#units" className="block text-white/70 hover:text-[#C4A266] transition-colors">
                  Units
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#C4A266]" />
                  <span className="text-white/70">+91 96068 65959</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#C4A266]" />
                  <span className="text-white/70">contact@elegantatmos.com</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Certifications</h4>
              <div className="flex space-x-4">
                <Badge className="bg-[#C4A266] text-white">CREDAI</Badge>
                <Badge className="bg-[#C4A266] text-white">NET ZERO</Badge>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/70">
              © 2024 Elegant Atmos. All rights reserved. | Designed for sustainable luxury living.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
