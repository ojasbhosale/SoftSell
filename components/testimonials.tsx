// components/testimonials.tsx

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IT Director",
    company: "Oracle Corporation",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    rating: 5,
    quote:
      "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth, and their valuation was higher than we expected. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CFO",
    company: "Innovate Solutions",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    rating: 5,
    quote:
      "As a growing startup, cash flow is critical. SoftSell allowed us to quickly liquidate excess software assets after downsizing. Their team was professional, and payment was processed within 24 hours.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from businesses that have successfully sold their software licenses through SoftSell
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 border-4 border-primary/20 mb-4">
                  <AvatarImage
                    src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                  />
                  <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-foreground/70 mb-2">{testimonials[activeIndex].role}</p>
                <p className="text-foreground/70 mb-4">{testimonials[activeIndex].company}</p>
                <Image
                  src={testimonials[activeIndex].logo || "/placeholder.svg"}
                  alt={testimonials[activeIndex].company}
                  width={120}
                  height={40}
                  className="mb-4"
                />
                <div className="flex">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="h-full flex flex-col justify-center">
                  <p className="text-xl md:text-2xl leading-relaxed mb-6 italic">
                    &quot;{testimonials[activeIndex].quote}&quot;
                  </p>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === activeIndex ? "bg-primary" : "bg-primary/30"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={prevTestimonial}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextTestimonial}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Trusted by Companies Worldwide</h3>
          <div className="brand-logos">
            <Image
              src="https://resources.groww.in/web-assets/img/website-logo/groww-logo-light.svg?height=50&width=150"
              alt="Groww"
              width={150}
              height={50}
              className="brand-logo"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg?height=50&width=150"
              alt="Infosys"
              width={150}
              height={50}
              className="brand-logo"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg?height=50&width=150"
              alt="Oracle"
              width={150}
              height={50}
              className="brand-logo"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg?height=50&width=150"
              alt="IBM"
              width={150}
              height={50}
              className="brand-logo"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/330px-SAP_2011_logo.svg.png?height=50&width=150"
              alt="SAP"
              width={150}
              height={50}
              className="brand-logo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
