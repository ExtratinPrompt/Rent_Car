import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Users, Fuel, Settings, MapPin, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const cars = [
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
  {
    id: 4,
    name: "Toyota Camry",
    category: "Sedan",
    price: 65,
    rating: 4.5,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 Seats", "Petrol", "Auto"],
    location: "Downtown",
  },
  {
    id: 5,
    name: "Ford Mustang",
    category: "Sports",
    price: 110,
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg?height=200&width=300",
    features: ["4 Seats", "Petrol", "Manual"],
    location: "Airport",
  },
  {
    id: 6,
    name: "Honda CR-V",
    category: "SUV",
    price: 85,
    rating: 4.4,
    reviews: 167,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 Seats", "Hybrid", "Auto"],
    location: "City Center",
  },
]

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Available Cars</h1>
          <p className="text-gray-600">Find the perfect vehicle for your journey</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input placeholder="Search cars..." className="pl-10" />
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">$0 - $50</SelectItem>
                      <SelectItem value="50-100">$50 - $100</SelectItem>
                      <SelectItem value="100-150">$100 - $150</SelectItem>
                      <SelectItem value="150+">$150+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Car Type */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Car Type</label>
                  <div className="space-y-3">
                    {["Sedan", "SUV", "Electric", "Luxury", "Sports"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <label htmlFor={type} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown</SelectItem>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="city-center">City Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Cars Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{cars.length} cars available</p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cars.map((car) => (
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
                        <Link href={`/cars/${car.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
