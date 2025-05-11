import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FeaturedPosts from "@/components/featured-posts"
import NewsletterSignup from "@/components/newsletter-signup"
import { blogPosts } from "@/lib/blog-data"

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3)
  const recentPosts = blogPosts.slice(3, 7)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing <span className="text-yellow-400">Insights</span>
            </h1>
            <p className="text-xl mb-8">Cutting-edge strategies and trends in the evolving digital landscape</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/blog">
                  Explore Blog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for marketing insights..."
                className="pl-10 pr-4 py-6 rounded-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured <span className="text-emerald-600">Insights</span>
          </h2>
          <FeaturedPosts posts={featuredPosts} />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Recent Articles</h2>
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 flex items-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-emerald-600 text-sm font-medium mb-2">{post.category}</p>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                    <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </main>
  )
}
