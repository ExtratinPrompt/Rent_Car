"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Fuel, Settings, MapPin, Calendar, Clock, ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParallax } from "@/hooks/use-parallax"

const featuredCars = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Electric",
    price: 89,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=300",
    features: ["4 Seats", "Electric", "Auto"],
    location: "Downtown",
  },
  {
    id: 2,
    name: "BMW X5",
    category: "SUV",
    price: 120,
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=300",
    features: ["7 Seats", "Hybrid", "Auto"],
    location: "Airport",
  },
  {
    id: 3,
    name: "Mercedes C-Class",
    category: "Luxury",
    price: 95,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=300",
    features: ["4 Seats", "Petrol", "Auto"],
    location: "City Center",
  },
]

export default function HomePage() {
  const scrollY = useParallax()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="parallax-section relative h-screen overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Parallax Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="parallax-overlay" />

        <div className="parallax-content relative z-10 flex flex-col items-center justify-center h-full text-white">
          <div
            className="fade-in-up"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
              DRIVE
              <span className="block text-gray-300">PREMIUM</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience luxury in black and white. Premium vehicles for the discerning driver.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/cars">Explore Fleet</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent px-8 py-4 text-lg font-semibold"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            style={{
              transform: `translateX(-50%) translateY(${scrollY * -0.1}px)`,
            }}
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Quick Search with Parallax */}
      <section
        className="py-20 bg-white relative"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8 text-black">Find Your Perfect Ride</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-black uppercase tracking-wide">Pickup Location</label>
                  <div className="flex items-center space-x-3 p-4 border-2 border-black rounded-none bg-gray-50">
                    <MapPin className="w-5 h-5 text-black" />
                    <span className="text-sm font-medium">Downtown</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-black uppercase tracking-wide">Pickup Date</label>
                  <div className="flex items-center space-x-3 p-4 border-2 border-black rounded-none bg-gray-50">
                    <Calendar className="w-5 h-5 text-black" />
                    <span className="text-sm font-medium">Dec 15, 2024</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-black uppercase tracking-wide">Return Date</label>
                  <div className="flex items-center space-x-3 p-4 border-2 border-black rounded-none bg-gray-50">
                    <Calendar className="w-5 h-5 text-black" />
                    <span className="text-sm font-medium">Dec 18, 2024</span>
                  </div>
                </div>
                <div className="flex items-end">
                  <Button
                    asChild
                    className="w-full bg-black text-white hover:bg-gray-800 py-4 rounded-none font-bold uppercase tracking-wide"
                  >
                    <Link href="/cars">Search</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Cars with Parallax */}
      <section
        className="py-20 bg-black text-white relative overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            backgroundImage: `linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight fade-in-up"
              style={{
                transform: `translateY(${scrollY * -0.05}px)`,
              }}
            >
              PREMIUM COLLECTION
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Handpicked vehicles that define luxury and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <Card
                key={car.id}
                className="overflow-hidden bg-white text-black border-2 border-gray-300 hover:border-black transition-all duration-300 transform hover:scale-105 fade-in-up"
                style={{
                  transform: `translateY(${scrollY * -0.02 * (index + 1)}px)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover bw-filter"
                  />
                  <Badge className="absolute top-4 left-4 bg-black text-white border-0 rounded-none px-3 py-1 font-bold uppercase tracking-wide">
                    {car.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold tracking-tight">{car.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${car.price}</div>
                      <div className="text-sm text-gray-600 uppercase tracking-wide">per day</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-black text-black" />
                      <span className="ml-1 text-sm font-bold">{car.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">({car.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-700">
                    {car.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1">
                        {featureIndex === 0 && <Users className="w-4 h-4" />}
                        {featureIndex === 1 && <Fuel className="w-4 h-4" />}
                        {featureIndex === 2 && <Settings className="w-4 h-4" />}
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-medium">{car.location}</span>
                    </div>
                    <Button
                      asChild
                      className="bg-black text-white hover:bg-gray-800 rounded-none font-bold uppercase tracking-wide px-6"
                    >
                      <Link href={`/cars/${car.id}`}>Reserve</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent rounded-none px-8 py-4 font-bold uppercase tracking-wide"
            >
              <Link href="/cars">View Complete Fleet</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Parallax */}
      <section
        className="py-20 bg-white relative overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.03}px)`,
        }}
      >
        {/* Diagonal Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"
          style={{
            transform: `translateY(${scrollY * -0.05}px) skewY(-2deg)`,
            transformOrigin: "top left",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6 text-black tracking-tight"
              style={{
                transform: `translateY(${scrollY * -0.03}px)`,
              }}
            >
              WHY CHOOSE US
            </h2>
            <p className="text-gray-700 text-lg">Excellence in every detail</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Clock,
                title: "24/7 CONCIERGE",
                description: "Round-the-clock premium service for discerning clients",
                delay: 0.1,
              },
              {
                icon: MapPin,
                title: "PRIME LOCATIONS",
                description: "Exclusive pickup points in the city's finest districts",
                delay: 0.2,
              },
              {
                icon: Star,
                title: "LUXURY STANDARD",
                description: "Meticulously maintained vehicles with premium amenities",
                delay: 0.3,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center fade-in-up"
                style={{
                  transform: `translateY(${scrollY * -0.02 * (index + 1)}px)`,
                  animationDelay: `${feature.delay}s`,
                }}
              >
                <div className="w-20 h-20 bg-black rounded-none flex items-center justify-center mx-auto mb-6 transform rotate-45">
                  <feature.icon className="w-10 h-10 text-white transform -rotate-45" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Parallax */}
      <section className="parallax-section relative h-96 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        <div className="parallax-content relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-center"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          >
            READY TO DRIVE LUXURY?
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-bold uppercase tracking-wide rounded-none"
          >
            <Link href="/cars">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
