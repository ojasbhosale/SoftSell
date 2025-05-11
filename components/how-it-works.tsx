"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-white" />,
    title: "Upload License",
    description: "Simply upload your software license details through our secure portal.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=300&h=300",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-white" />,
    title: "Get Valuation",
    description: "Our AI-powered system provides an instant market-based valuation.",
    image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=300&h=300",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-white" />,
    title: "Get Paid",
    description: "Accept our offer and receive payment within 24-48 hours.",
    image: "https://images.unsplash.com/photo-1648091854674-59abf26bbf39?q=80&w=300&h=300",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            SIMPLE PROCESS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our streamlined process makes selling software licenses quick and hassle-free
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full">
                <div className="step-number">{index + 1}</div>
                <div className="bg-primary rounded-lg w-14 h-14 flex items-center justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-foreground/70 mb-6">{step.description}</p>
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-primary rounded-2xl p-10 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to convert your unused software licenses into cash?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who have successfully sold their unused software licenses through
            SoftSell.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg transition-colors hover:bg-gray-100"
          >
            Start Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
