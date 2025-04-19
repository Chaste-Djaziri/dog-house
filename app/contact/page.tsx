"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Instagram, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const dogParam = searchParams.get("dog")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: dogParam ? `I'm interested in ${dogParam}. Please provide more information.` : "",
  })

  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log(formData)

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Dog House Rwanda. We'll get back to you soon.",
    })

    // Reset form (except for dog inquiry message)
    setFormData((prev) => ({
      name: "",
      email: "",
      phone: "",
      message: dogParam ? `I'm interested in ${dogParam}. Please provide more information.` : "",
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-center text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        Have questions about our dogs or interested in adoption? Get in touch with us!
      </p>

      <div className="grid gap-12 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-amber-600" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+250 787 272 038</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-amber-600" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">traymccall1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="mt-1 h-5 w-5 text-amber-600" />
                  <div>
                    <h3 className="font-medium">Instagram</h3>
                    <p className="text-muted-foreground">@doghouse_rw</p>
                    <p className="text-muted-foreground">TikTok: traymccall1</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-amber-600" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Our Location</h2>
            <div className="h-[400px] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d282.9691236672883!2d29.958487673817395!3d-1.941381402627953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1744830556866!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
