import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Bookmark, Calendar, User, Clock } from "lucide-react"
import RelatedPosts from "@/components/related-posts"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get 3 related posts (excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 3)

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-emerald-600 hover:text-emerald-700 p-0">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Post header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Featured image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
          </div>

          {/* Post content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-medium mb-6">{post.excerpt}</p>

            {post.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="my-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <RelatedPosts posts={relatedPosts} />
          </div>
        </div>
      </div>
    </main>
  )
}
