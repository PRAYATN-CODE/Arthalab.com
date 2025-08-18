"use client"

import { motion } from "framer-motion";
import { BookOpen, Cpu, Lightbulb, PlayCircle } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Blogs() {
  const contentItems = [
    {
      type: "blog",
      title: "What is Algo Trading?",
      description: "A comprehensive guide for beginners to understand the basics of algorithmic trading with zero coding.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      link: "#",
      image: "/images/blog-1.jpg",
      span: "col-span-1 row-span-2",
    },
    {
      type: "video",
      title: "Build a Bot in 2 Minutes",
      description: "Watch a live demo of how our AI builder creates a functional bot from a simple prompt.",
      icon: <PlayCircle className="w-8 h-8 text-secondary" />,
      link: "#",
      image: "/images/video-1.jpg",
      span: "col-span-1 row-span-1",
    },
    {
      type: "feature",
      title: "AI-Powered Backtesting",
      description: "Test your strategy against years of historical data with our advanced engine.",
      icon: <Cpu className="w-8 h-8 text-accent" />,
      link: "#",
      span: "col-span-1 row-span-1",
    },
    {
      type: "blog",
      title: "API Trading for Retailers",
      description: "Unlock precision and speed with API trading. Learn how to connect your broker and go live.",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      link: "#",
      image: "/images/blog-2.jpg",
      span: "col-span-1 row-span-1",
    },
    {
      type: "video",
      title: "Understanding Options Spreads",
      description: "A quick explainer video on options strategies and how to automate them for profit.",
      icon: <PlayCircle className="w-8 h-8 text-secondary" />,
      link: "#",
      image: "/images/video-2.jpg",
      span: "col-span-1 row-span-2",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground dark:text-dark-foreground mb-16">
          Explore Our <span className="text-primary dark:text-dark-primary">Knowledge & Products</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative group bg-card dark:bg-dark-card rounded-xl overflow-hidden shadow-lg border border-border dark:border-dark-border transition-all duration-300 ease-out hover:shadow-2xl ${item.span}`}
              variants={itemVariants}
            >
              <a href={item.link} className="block w-full h-full">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-left text-white">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}