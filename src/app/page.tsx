"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Neon Cyber Headphones",
    price: "$299.00",
    description: "Immersive sound with a futuristic aesthetic and active noise cancellation. Experience the vibe.",
    image: "/products/headphones-v2.png",
  },
  {
    id: 2,
    name: "Glassmorphic Smartwatch",
    price: "$499.00",
    description: "Seamless connectivity with a transparent OLED display. The future on your wrist.",
    image: "/products/watch-v2.png",
  },
  {
    id: 3,
    name: "Holographic Keyboard",
    price: "$199.00",
    description: "Type on light with this portable laser projection keyboard. Workspace evolved.",
    image: "/products/keyboard-v2.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-tighter cursor-pointer">
              NEON<span className="font-light text-white">TECH</span>
            </h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25">Get Started</Button>
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                Future Tech,
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Designed for You.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Step into the next generation of personal electronics.
              Sleek, powerful, and undeniably futuristic.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-gray-200 text-lg font-semibold">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-gray-700 text-gray-300 hover:bg-white/10 hover:text-white text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <main className="container mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent flex-1" />
          <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Latest Arrivals</span>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent flex-1" />
        </div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; 2026 NeonTech Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
