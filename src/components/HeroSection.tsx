import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "8", label: "Portfolio Companies" },
  { value: "50+", label: "Team Members" },
  { value: "6", label: "Industries" },
  { value: "FL", label: "Headquarters" },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-navy/60" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-6"
          >
            Premier Multi-Industry Holding Company
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-cream mb-8 leading-[1.1]"
          >
            Heavenly{" "}
            <span className="text-gradient-gold">Pros</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Driving Operational Excellence Across Eight Dynamic Portfolio Companies
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button variant="gold" size="lg">
              Explore Portfolio
            </Button>
            <Button variant="outline-gold" size="lg">
              Partner With Us
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative glass-gold rounded-xl p-6 md:p-8"
              >
                <div className="font-serif text-4xl md:text-5xl font-semibold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-cream/60 text-xs md:text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#portfolio"
            className="flex flex-col items-center gap-2 text-cream/40 hover:text-gold transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Discover</span>
            <ChevronDown className="animate-bounce" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
