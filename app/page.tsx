"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone } from "lucide-react"
import InstagramFeed from "@/components/instagram-feed"
export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Beautiful dog from Dog House Rwanda"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">Dog House Rwanda</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
              Premium dogs from Rwanda to the whole world. We also take those you don&apos;t want anymore!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/dogs">View Our Dogs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center gap-4 rounded-full bg-white/20 px-6 py-3 backdrop-blur-md"
          >
            <Phone className="h-5 w-5 text-white" />
            <span className="text-white">+250 787 272 038</span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4" data-aos="fade-up">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">About Dog House Rwanda</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              At Dog House Rwanda, we specialize in connecting loving families with their perfect canine companions.
              Based in Rwanda, we offer a variety of breeds and work with clients worldwide.
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you&apos;re looking for a new furry friend or need to rehome your dog, we provide compassionate
              and professional service to ensure every dog finds their forever home.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image
              src="/images/hero3.jpg"
              alt="Dogs from Dog House Rwanda"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Featured Dogs */}
      <section className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Featured Dogs</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Meet some of our adorable dogs looking for their forever homes
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { img: "/images/hero4.jpg", name: "Pack", breed: "BoerBoel" },
            { img: "/images/hero5.jpg", name: "Bella", breed: "GermanShapherd" },
            { img: "/images/hero8.jpg", name: "Charlie", breed: "Maltes" },
          ].map((dog, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              data-aos="zoom-in"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={dog.img || "/placeholder.svg"}
                  alt={dog.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{dog.name}</h3>
                <p className="text-muted-foreground">{dog.breed}</p>
                <Button asChild className="mt-4 w-full bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact">Inquire About {dog.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/dogs">View All Dogs</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-900 py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            We offer a range of services to help you find or rehome your perfect companion
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dog Adoption",
                description: "Find your perfect canine companion from our selection of loving dogs.",
                icon: "🐕",
              },
              {
                title: "Rehoming Services",
                description: "We help find new homes for dogs that can no longer stay with their current owners.",
                icon: "🏠",
              },
              {
                title: "International Shipping",
                description: "We can arrange safe transportation of your new pet to locations worldwide.",
                icon: "✈️",
              },
            ].map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="container mx-auto px-4" data-aos="fade-up">
        <div className="mb-10 flex items-center justify-center gap-2">
          <Instagram className="h-6 w-6 text-amber-600" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Follow Us on Instagram</h2>
        </div>
        <InstagramFeed username="doghouse_rw" />
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="gap-2">
            <a href="https://www.instagram.com/doghouse_rw/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span>@doghouse_rw</span>
            </a>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-amber-600 py-16 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Find Your New Best Friend?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Contact us today to learn more about our available dogs or to discuss rehoming your pet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-white/90">
              <a href="tel:+250787272038">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
