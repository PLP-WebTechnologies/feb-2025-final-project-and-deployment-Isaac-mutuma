"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import type { BlogPost } from "@/lib/types"

interface FeaturedPostsProps {
  posts: BlogPost[]
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMobile()
  const sliderRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
  }

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Scroll to current slide
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth
      sliderRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {!isMobile && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-white/80 shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-white/80 shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}

      {/* Slider */}
      <div ref={sliderRef} className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ width: `${posts.length * 100}%` }}>
          {posts.map((post, index) => (
            <div key={post.slug} className="relative w-full" style={{ width: `${100 / posts.length}%` }}>
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <img
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="mb-2">
                      <span className="inline-block bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <p className="text-sm">{post.author}</p>
                        <p className="text-xs text-gray-300">{post.date}</p>
                      </div>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Read More</Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {posts.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-emerald-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
