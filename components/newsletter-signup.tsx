"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-lg mb-6 text-emerald-100">
        Get the latest digital marketing insights, strategies, and trends delivered straight to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-grow">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 ${
                error ? "border-red-400" : ""
              }`}
            />
          </div>
          <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black h-12" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>

        {error && (
          <div className="mt-2 text-red-300 text-sm flex items-center justify-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </div>
        )}

        {isSuccess && (
          <div className="mt-2 text-green-300 text-sm flex items-center justify-center">
            <CheckCircle className="h-4 w-4 mr-1" />
            Thank you for subscribing!
          </div>
        )}
      </form>
    </div>
  )
}
