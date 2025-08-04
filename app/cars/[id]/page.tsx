"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Star,
  Users,
  Fuel,
  Settings,
  MapPin,
  CalendarIcon,
  Shield,
  Wifi,
  Snowflake,
  Music,
  Navigation,
} from "lucide-react"
import Image from "next/image"
import { format } from "date-fns"
import { useState } from "react"

// Mock car data - in real app this would come from API
const car = {
  id: 1,
  name: "Tesla Model 3",
  category: "Electric",
  price: 89,
  rating: 4.8,
  reviews: 124,
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  features: ["4 Seats", "Electric", "Auto"],
  location: "Downtown",
  description:
    "Experience the future of driving with the Tesla Model 3. This premium electric sedan combines cutting-edge technology with exceptional performance and zero emissions.",
  specifications: {
    year: "2024",
    transmission: "Automatic",
    fuelType: "Electric",
    seats: 4,
    doors: 4,
    range: "358 miles",
  },
  amenities: [
    { icon: Wifi, name: "WiFi" },
    { icon: Snowflake, name: "AC" },
    { icon: Music, name: "Bluetooth" },
    { icon: Navigation, name: "GPS" },
    { icon: Shield, name: "Insurance" },
  ],
}

export default function CarDetailPage() {
  const [pickupDate, setPickupDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Car Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={car.images[selectedImage] || "/placeholder.svg"}
                    alt={car.name}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4">{car.category}</Badge>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {car.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative rounded-lg overflow-hidden ${
                          selectedImage === index ? "ring-2 ring-blue-500" : ""
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${car.name} ${index + 1}`}
                          width={150}
                          height={100}
                          className="w-full h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Car Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 font-medium">{car.rating}</span>
                        <span className="ml-1 text-gray-500">({car.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {car.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">${car.price}</div>
                    <div className="text-gray-500">per day</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{car.description}</p>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      {index === 0 && <Users className="w-5 h-5 text-blue-600" />}
                      {index === 1 && <Fuel className="w-5 h-5 text-green-600" />}
                      {index === 2 && <Settings className="w-5 h-5 text-purple-600" />}
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Specifications */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year:</span>
                      <span className="font-medium">{car.specifications.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transmission:</span>
                      <span className="font-medium">{car.specifications.transmission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fuel Type:</span>
                      <span className="font-medium">{car.specifications.fuelType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Seats:</span>
                      <span className="font-medium">{car.specifications.seats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Doors:</span>
                      <span className="font-medium">{car.specifications.doors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Range:</span>
                      <span className="font-medium">{car.specifications.range}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {car.amenities.map((amenity, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                        <amenity.icon className="w-6 h-6 text-blue-600 mb-2" />
                        <span className="text-sm font-medium">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Book This Car</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pickup-date">Pickup Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="return-date">Return Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div>
                  <Label htmlFor="pickup-time">Pickup Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="pickup-location">Pickup Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown Office</SelectItem>
                      <SelectItem value="airport">Airport Terminal</SelectItem>
                      <SelectItem value="city-center">City Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="driver-age">Driver Age</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="21-25">21-25 years</SelectItem>
                      <SelectItem value="26-35">26-35 years</SelectItem>
                      <SelectItem value="36-50">36-50 years</SelectItem>
                      <SelectItem value="50+">50+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="special-requests">Special Requests</Label>
                  <Textarea id="special-requests" placeholder="Any special requirements..." className="resize-none" />
                </div>

                {/* Price Breakdown */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Daily rate</span>
                    <span>${car.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3 days</span>
                    <span>${car.price * 3}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance</span>
                    <span>$45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>$32</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${car.price * 3 + 45 + 32}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Book Now
                </Button>

                <p className="text-xs text-gray-500 text-center">Free cancellation up to 24 hours before pickup</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
