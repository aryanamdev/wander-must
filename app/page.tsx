"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { routes } from "./constants/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#f9f9f9] text-neutral-900">
      {/* Background Image with soft overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-6xl sm:text-7xl font-semibold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-transparent">
            Wander Must
          </span>
        </h1>

        <p className="text-lg text-neutral-500 mb-12 max-w-lg mx-auto font-light leading-relaxed">
          A calm space to capture your travels, thoughts, and moments, wherever the journey takes you.
        </p>

        <Button
          onClick={() => router.push(routes.SIGN_UP)}
          className="px-8 py-3 rounded-full text-base font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition-all"
        >
          Get Started
        </Button>
      </motion.div>

      {/* Subtle floating wordmark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 text-sm tracking-widest text-neutral-400 uppercase"
      >
        wander • write • relive
      </motion.div>
    </main>
  );
}
