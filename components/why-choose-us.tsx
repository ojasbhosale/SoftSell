"use client"

import { motion } from "framer-motion"
import { Shield, Clock, DollarSign, Award } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "Best Market Rates",
    description:
      "Our extensive network of buyers ensures you get the highest possible value for your software licenses.",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Quick Turnaround",
    description: "From valuation to payment, our streamlined process takes just 24-48 hours in most cases.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Secure Transactions",
    description: "Bank-level encryption and secure escrow services protect both your data and your payment.",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Expert Guidance",
    description: "Our team of software licensing experts provides personalized support throughout the process.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-2">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Offer Unmatched Benefits for Software License Reselling
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              SoftSell has helped thousands of businesses and individuals maximize the value of their unused software
              licenses. Our platform combines cutting-edge technology with industry expertise to deliver the best
              possible experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-0">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&h=600"
                alt="Why Choose SoftSell"
                width={600}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full filter blur-3xl -z-10"></div>

            <div className="absolute top-10 -right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-medium">$10M+</p>
                  <p className="text-sm text-foreground/70">Paid to customers in 2023</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">100% Secure</p>
                  <p className="text-sm text-foreground/70">Bank-level encryption</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
