import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 pb-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Dog House Rwanda</h3>
            <p className="mb-4 text-muted-foreground">
              Premium dogs from Rwanda to the whole world. We also take those you don&apos;t want anymore!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/doghouse_rw/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-amber-600 p-2 text-white transition-colors hover:bg-amber-700"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@traymccall1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-amber-600 p-2 text-white transition-colors hover:bg-amber-700"
              >
                <span className="text-sm font-bold">TT</span>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-amber-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-amber-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/dogs" className="text-muted-foreground transition-colors hover:text-amber-600">
                  Our Dogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-amber-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-amber-600" />
                <span className="text-muted-foreground">+250 787 272 038</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-amber-600" />
                <span className="text-muted-foreground">traymccall1@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-amber-600" />
                <span className="text-muted-foreground">Kigali, Rwanda (29.958487, -1.941381)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday:</span>
                <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Saturday:</span>
                <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sunday:</span>
                <span className="text-muted-foreground">By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dog House Rwanda. All rights reserved.</p>
          <p className="mt-2">
            Website designed and developed by{" "}
            <a
              href="https://chastedjaziri.micorp.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-600 hover:underline"
            >
              Chaste Djaziri
            </a>
            {" | "}
            <a
              href="https://www.instagram.com/chaste_djaziri/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-600 hover:underline"
            >
              @chaste_djaziri
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
