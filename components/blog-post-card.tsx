import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/types"

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-emerald-900 dark:text-emerald-300">
              {post.category}
            </span>
          </div>
          <h3 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium">{post.author.charAt(0)}</span>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-medium">{post.author}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
