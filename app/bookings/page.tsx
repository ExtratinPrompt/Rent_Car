import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Phone, Mail } from "lucide-react"
import Image from "next/image"

const bookings = [
  {
    id: "BK001",
    car: {
      name: "Tesla Model 3",
      image: "/placeholder.svg?height=100&width=150",
    },
    status: "Active",
    pickupDate: "Dec 15, 2024",
    returnDate: "Dec 18, 2024",
    location: "Downtown Office",
    total: "$267",
    bookingDate: "Dec 10, 2024",
  },
  {
    id: "BK002",
    car: {
      name: "BMW X5",
      image: "/placeholder.svg?height=100&width=150",
    },
    status: "Completed",
    pickupDate: "Nov 20, 2024",
    returnDate: "Nov 25, 2024",
    location: "Airport Terminal",
    total: "$600",
    bookingDate: "Nov 15, 2024",
  },
  {
    id: "BK003",
    car: {
      name: "Mercedes C-Class",
      image: "/placeholder.svg?height=100&width=150",
    },
    status: "Upcoming",
    pickupDate: "Dec 25, 2024",
    returnDate: "Dec 30, 2024",
    location: "City Center",
    total: "$475",
    bookingDate: "Dec 12, 2024",
  },
]

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">My Bookings</h1>
          <p className="text-gray-600">Manage your car rental bookings</p>
        </div>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  {/* Car Image & Info */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={booking.car.image || "/placeholder.svg"}
                      alt={booking.car.name}
                      width={150}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{booking.car.name}</h3>
                      <p className="text-sm text-gray-500">Booking #{booking.id}</p>
                      <Badge
                        variant={
                          booking.status === "Active"
                            ? "default"
                            : booking.status === "Completed"
                              ? "secondary"
                              : "outline"
                        }
                        className="mt-2"
                      >
                        {booking.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      <span>
                        {booking.pickupDate} - {booking.returnDate}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{booking.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span>Booked on {booking.bookingDate}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="text-center">
                    <div className="text-2xl font-bold">{booking.total}</div>
                    <div className="text-sm text-gray-500">Total Amount</div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-2">
                    {booking.status === "Active" && (
                      <>
                        <Button size="sm">View Details</Button>
                        <Button variant="outline" size="sm">
                          Contact Support
                        </Button>
                      </>
                    )}
                    {booking.status === "Upcoming" && (
                      <>
                        <Button size="sm">Modify Booking</Button>
                        <Button variant="outline" size="sm">
                          Cancel Booking
                        </Button>
                      </>
                    )}
                    {booking.status === "Completed" && (
                      <>
                        <Button size="sm">Download Receipt</Button>
                        <Button variant="outline" size="sm">
                          Book Again
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Card */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-sm text-gray-600">support@rentcar.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
