import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-light" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-4">
            Ready to Grow Together?
          </p>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
            Let's Build Something{" "}
            <span className="text-gradient-gold">Extraordinary</span>
          </h2>

          {/* Description */}
          <p className="text-cream/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're exploring partnership opportunities, seeking business development 
            collaboration, or interested in our portfolio companies, we'd love to hear from you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="group">
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-gold" size="lg">
              Explore Partnerships
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
