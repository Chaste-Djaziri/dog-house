import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Dog House Rwanda",
  description:
    "Learn about Dog House Rwanda, our mission, and our commitment to finding loving homes for dogs in Rwanda and worldwide.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl">About Dog House Rwanda</h1>

      <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image src="/images/hero2.jpg" alt="Dog from Dog House Rwanda" fill className="object-cover" />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
          <p className="mb-4 text-lg text-muted-foreground">
            Dog House Rwanda was founded by Tray McCall with a simple mission: to connect loving dogs with caring
            families across Rwanda and beyond. What started as a passion project has grown into a trusted name in dog
            adoption and rehoming.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe every dog deserves a loving home, which is why we not only help find homes for our dogs but also
            take in unwanted dogs to ensure they have a second chance at a happy life.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">Our Mission</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Find Loving Homes",
              description:
                "We work tirelessly to match our dogs with families who will provide them with love, care, and attention.",
            },
            {
              title: "Rescue & Rehome",
              description:
                "We take in unwanted dogs and give them a second chance by finding them new, loving forever homes.",
            },
            {
              title: "Global Reach",
              description:
                "We connect dogs from Rwanda with families worldwide, ensuring our dogs find the perfect match regardless of location.",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">Meet The Owner</h2>
        <div className="mx-auto max-w-3xl rounded-xl bg-amber-50 p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-amber-600">
              <Image src="/images/tray.jpg" alt="Tray McCall" fill className="object-cover" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-semibold">Tray McCall</h3>
              <p className="mb-4 text-muted-foreground">
                Tray is the founder and owner of Dog House Rwanda. With a lifelong passion for dogs and animal welfare,
                Tray has dedicated his life to ensuring dogs in Rwanda find loving homes.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <span>+250 787 272 038</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span>traymccall1@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-center text-3xl font-semibold">Our Location</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-amber-600" />
              <h3 className="text-xl font-semibold">Find Us In Rwanda</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Dog House Rwanda is located in Kigali, Rwanda. We welcome visitors by appointment to meet our available
              dogs.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-600" />
                <span>+250 787 272 038</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-600" />
                <span>contact@doghouserwanda.com</span>
              </div>
            </div>
          </div>
          <div className="h-[400px] overflow-hidden rounded-xl bg-gray-200">
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
        </div>
      </div>
    </div>
  )
}
