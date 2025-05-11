import Link from "next/link"
import type { BlogPost } from "@/lib/types"

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 overflow-hidden">
              <img
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-emerald-600 text-sm font-medium mb-1">{post.category}</p>
              <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{post.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
