"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-pattern flex flex-col justify-center overflow-hidden">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-6">
              #1 Software License Resale Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Maximize the Value of Your <span className="gradient-text">Software Licenses</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-xl">
              Turn unused software licenses into cash. Fast, secure, and at the best market rates. Join thousands of
              satisfied customers today.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Best Market Rates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>24-48 Hour Payment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>Secure Transactions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 h-14">
                Sell My Licenses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Get a Quote
              </Button>
            </div>

            <div className="mt-12">
              <p className="text-sm text-foreground/60 mb-3">Trusted by companies worldwide</p>
              <div className="flex flex-wrap gap-8 items-center">
                <Image 
                src="https://resources.groww.in/web-assets/img/website-logo/groww-logo-light.svg" 
                alt="Groww" 
                width={120} 
                height={30} 
                />
                <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" 
                alt="Infosys" 
                width={120} 
                height={30} 
                />
                <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" 
                alt="Oracle" 
                width={120} 
                height={30} 
                />
                <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                alt="IBM" 
                width={120} 
                height={30} 
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-0">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=600"
                alt="Software License Management"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>

            <div className="absolute top-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-medium">Instant Valuation</p>
                  <p className="text-sm text-foreground/70">Get a quote in seconds</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">Secure Process</p>
                  <p className="text-sm text-foreground/70">Bank-level encryption</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-value">$50M+</div>
            <div className="stat-label">Licenses Sold</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">5,000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">24-48h</div>
            <div className="stat-label">Average Payout Time</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100%</div>
            <div className="stat-label">Secure Transactions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
