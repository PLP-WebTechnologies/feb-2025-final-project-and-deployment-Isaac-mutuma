import { blogPosts } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import BlogPostCard from "@/components/blog-post-card"

export default function BlogPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Our <span className="text-emerald-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-600">
            Explore the latest insights, strategies, and trends in digital marketing
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input type="search" placeholder="Search articles..." className="pl-10 pr-4 py-6 rounded-lg" />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Filter className="mr-2 h-5 w-5" />
              Filter
            </Button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
