import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Our Dogs - Dog House Rwanda",
  description:
    "Browse our available dogs for adoption. Dog House Rwanda offers a variety of breeds for families in Rwanda and worldwide.",
}

const dogs = [
  {
    id: 1,
    name: "Max",
    breed: "Maltese",
    age: "1 month",
    image: "/images/hero.jpg",
    category: "adult",
  },
  {
    id: 2,
    name: "Bella",
    breed: "German Shepherd Cross Malnois",
    age: "1 years",
    gender: "Female",
    image: "/images/hero3.jpg",
    category: "adult",
  },
  {
    id: 3,
    name: "Charlie",
    breed: "Maltese",
    age: "2 months",
    image: "/images/hero2.jpg",
    category: "adult",
  },
  // Removed dog5 from the list
  {
    id: 5,
    name: "Puppies",
    breed: "BoarBoel",
    age: "2 months",
    image: "/images/hero4.jpg",
    category: "adult",
  },
  {
    id: 6,
    name: "Daisy",
    breed: "German Shepherd",
    age: "8 months",
    gender: "Female",
    image: "/images/hero5.jpg",
    category: "adult",
  },
  {
    id: 7,
    name: "Kat",
    breed: "American Bully",
    age: "1 years",
    gender: "Female",
    image: "/images/hero7.jpg",
    category: "adult",
  },
  {
    id: 8,
    name: "Bob",
    breed: "Maltese",
    age: "1 years",
    gender: "Male",
    image: "/images/hero8.jpg",
    category: "adult",
  },
  {
    id: 9,
    name: "Bob",
    breed: "Maltese",
    age: "1 month",
    gender: "Female",
    image: "/images/hero9.jpg",
    category: "adult",
  },
  {
    id: 10,
    name: "BobBoel",
    breed: "BobBoel",
    age: "2 years",
    gender: "Male",
    image: "/images/hero10.jpg",
    category: "adult",
  },
  {
    id: 11,
    name: "Puppies",
    breed: "BobBoel",
    age: "1 month",
    image: "/images/hero11.jpg",
    category: "adult",
  },
  {
    id: 12,
    name: "Bob",
    breed: "Small Munstar",
    age: "1 years",
    gender: "Male",
    image: "/images/hero12.jpg",
    category: "adult",
  },
  {
    id: 13,
    name: "Bob",
    breed: "BoarBoel cross cane corso",
    age: "1 years",
    gender: "Male",
    image: "/images/hero13.jpg",
    category: "adult",
  },
  {
    id: 14,
    name: "Travis",
    breed: "Maltese",
    age: "1 years",
    gender: "Male",
    image: "/images/hero14.jpg",
    category: "adult",
  },
  {
    id: 15,
    name: "Bob",
    breed: "Golden Retriver",
    age: "1 years",
    gender: "Male/Female",
    image: "/images/hero15.jpg",
    category: "adult",
  },
  {
    id: 16,
    name: "Bob",
    breed: "Maltese",
    age: "2 months",
    gender: "Male",
    image: "/images/hero16.jpg",
    category: "adult",
  },
  {
    id: 17,
    name: "Bob",
    breed: "Maltese",
    age: "1 month",
    gender: "Female",
    image: "/images/hero17.jpg",
    category: "adult",
  },
  {
    id: 18,
    name: "Bob",
    breed: "Maltese",
    age: "1 month",
    gender: "Females",
    image: "/images/hero18.jpg",
    category: "adult",
  },
  {
    id: 19,
    name: "Bob",
    breed: "German Shepherd Cross Golden Retriver",
    age: "7 months",
    gender: "Female",
    image: "/images/hero19.jpg",
    category: "adult",
  },
  {
    id: 20,
    name: "Bob",
    breed: "German Shepherd",
    age: "1 month",
    gender: "Male",
    image: "/images/hero20.jpg",
    category: "adult",
  },
  {
    id: 21,
    name: "Bob",
    breed: "German Shepherd",
    age: "7 months",
    gender: "Male",
    image: "/images/hero21.jpg",
    category: "adult",
  },
  {
    id: 23,
    name: "Bob",
    breed: "BoarBoel",
    age: "2 months",
    gender: "Male",
    image: "/images/hero23.jpg",
    category: "adult",
  },
  {
    id: 25,
    name: "Puppies",
    breed: "German Shepherd Puppies",
    age: "2 months",
    gender: "Male",
    image: "/images/hero25.jpg",
    category: "adult",
  },
]

export default function DogsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-center text-4xl font-bold tracking-tight sm:text-5xl">Our Dogs</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        Meet our adorable dogs looking for their forever homes. We have puppies and adult dogs of various breeds.
      </p>

      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="all">All Dogs</TabsTrigger>
            <TabsTrigger value="puppy">Puppies</TabsTrigger>
            <TabsTrigger value="adult">Adult Dogs</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="puppy" className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dogs
              .filter((dog) => dog.category === "puppy")
              .map((dog) => (
                <DogCard key={dog.id} dog={dog} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="adult" className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dogs
              .filter((dog) => dog.category === "adult")
              .map((dog) => (
                <DogCard key={dog.id} dog={dog} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-xl bg-amber-50 p-8">
        <h2 className="mb-4 text-center text-2xl font-semibold">Looking for a Specific Breed?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">
          Don&apos;t see what you&apos;re looking for? Contact us with your preferences and we&apos;ll help you find the
          perfect match.
        </p>
        <div className="flex justify-center">
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function DogCard({ dog }: { dog: (typeof dogs)[0] }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={dog.image || "/placeholder.svg"}
          alt={dog.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{dog.name}</h3>
        <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium">Breed:</span> {dog.breed}
          </div>
          <div>
            <span className="font-medium">Age:</span> {dog.age}
          </div>
          <div>
            <span className="font-medium">Gender:</span> {dog.gender}
          </div>
        </div>
        <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
          <Link href={`/contact?dog=${dog.name}`}>Inquire About {dog.name}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
