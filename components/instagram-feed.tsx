"use client"

import Script from "next/script"

const posts = [
  "https://www.instagram.com/reel/DORFf-tDBRc/",
  "https://www.instagram.com/reel/DOMJQjyDDGG/",
  "https://www.instagram.com/reel/DOJxc-tDCZ8/",
  "https://www.instagram.com/p/DN94wRHDCOq/",
  "https://www.instagram.com/p/DNMCqDMsMcZ/",
  "https://www.instagram.com/p/DJYuzNsNqfL/",
]

export default function InstagramFeed() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((url, i) => (
        <blockquote
          key={i}
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
          data-instgrm-version="14"
        ></blockquote>
      ))}
      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  )
}
