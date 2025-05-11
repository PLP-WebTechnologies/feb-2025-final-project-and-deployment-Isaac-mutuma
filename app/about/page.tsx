import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Isaac Mutuma",
      role: "Founder & Chief Editor",
      bio: "Digital marketing expert with over 10 years of experience in the industry.",
      image: "/Isaac.png?height=300&width=300",
    },
    {
      name: "Susan Wanjiku",
      role: "Content Strategist",
      bio: "Specializes in content marketing and SEO optimization strategies.",
      image: "/Suzan.jpg?height=300&width=300",
    },
    {
      name: "Daniel Mutethia",
      role: "Tech Analyst",
      bio: "Focuses on emerging technologies and their impact on digital marketing.",
      image: "/Daniel.jpg?height=300&width=300",
    },
  ]

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* About Hero */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-emerald-600">Digital Marketing Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're dedicated to providing cutting-edge insights and strategies for the evolving digital marketing
            landscape.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </section>

        {/* Our Mission */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg mb-4">
              At Digital Marketing Insights, we believe in the power of knowledge sharing and continuous learning in the
              fast-paced world of digital marketing.
            </p>
            <p className="text-lg mb-4">
              Our mission is to demystify complex digital marketing concepts and provide actionable strategies that
              businesses of all sizes can implement to achieve their goals.
            </p>
            <p className="text-lg">
              We're committed to staying at the forefront of industry trends and technological advancements to bring you
              the most relevant and effective marketing insights.
            </p>
          </div>
        </section>

        {/* Our Team */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and approaches to stay ahead in the digital marketing landscape.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We provide honest, ethical advice and strategies that prioritize long-term success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We make complex marketing concepts understandable and actionable for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-emerald-800 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to elevate your digital marketing strategy?</h2>
            <p className="text-lg mb-6">
              Explore our blog for the latest insights or get in touch with our team for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/blog">
                  Explore Blog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
