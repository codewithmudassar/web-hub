"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Testimonial from './Testimonial'

const About = () => {
  return (
    <div>
    <motion.h1 initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{  duration: 0.9 }}
         viewport={{ once: true }}  className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center">
      <span className="text-bllue">A</span>bout us
    </motion.h1>

    <div className=" text-dark dark:text-light">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: -40 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{  duration: 0.9 }}
         viewport={{ once: true }} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-bllue">Our Vision</h2>
            <div className="space-y-6  leading-relaxed">
              <p className="text-base md:text-lg">
                At <b>Your Web Hub</b>, our vision is to be a global leader in delivering innovative IT solutions that empower
                businesses to thrive in the digital age. We aim to help our clients unlock their full potential by
                providing customized, cutting-edge services that drive growth, efficiency, and success.
              </p>
              <p className="text-base md:text-lg">
                By staying ahead of industry trends and embracing new technologies, we are committed to helping
                businesses navigate the digital landscape and turn challenges into opportunities. Our goal is to be the
                trusted partner that businesses rely on for transformative solutions and lasting results.
              </p>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div initial={{ opacity: 0, x: 40 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{  duration: 0.9 }}
         viewport={{ once: true }} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px]">
              <img
                src="/vission.png"
                alt="Vision and Mission illustration"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <div>
    <h2 className="text-4xl md:text-5xl font-bold text-bllue text-center my-6">Client Feedback </h2>
    <Testimonial/>
    </div>
  </div>
  )
}

export default About
