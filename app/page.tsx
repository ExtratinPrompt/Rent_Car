import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Fuel, Settings, MapPin, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Find Your Perfect Ride</h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover amazing deals on premium cars. Book now and drive away with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/cars">Browse Cars</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hero Car"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pickup Location</label>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Downtown</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pickup Date</label>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Dec 15, 2024</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Return Date</label>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Dec 18, 2024</span>
                  </div>
                </div>
                <div className="flex items-end">
                  <Button asChild className="w-full">
                    <Link href="/cars">Search Cars</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our premium selection of vehicles, perfect for any occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3">{car.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${car.price}</div>
                      <div className="text-sm text-gray-500">per day</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{car.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({car.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-1">
                        {index === 0 && <Users className="w-4 h-4" />}
                        {index === 1 && <Fuel className="w-4 h-4" />}
                        {index === 2 && <Settings className="w-4 h-4" />}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {car.location}
                    </div>
                    <Button asChild>
                      <Link href={`/cars/${car.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/cars">View All Cars</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">Experience the best car rental service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
              <p className="text-gray-600">Pick up and drop off at convenient locations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Well-maintained vehicles with the latest features</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
