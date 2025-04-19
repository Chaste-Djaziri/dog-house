"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  likes: number
  timestamp: string
}

// This is a mock function since we can't actually fetch Instagram data without authentication
const mockInstagramPosts = [
]

export default function InstagramFeed({ username }: { username: string }) {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setPosts(mockInstagramPosts)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {loading
          ? // Loading skeletons
            Array(5)
              .fill(0)
              .map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <Skeleton className="aspect-square w-full" />
                  <CardContent className="p-4">
                    <Skeleton className="mb-2 h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))
          : // Actual posts
            posts.map((post) => (
              <Card key={post.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.caption}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="line-clamp-2 text-sm text-muted-foreground">{post.caption}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.likes} likes</span>
                    <span>{post.timestamp}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  )
}
