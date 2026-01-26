import { motion } from "framer-motion";
import { TrendingUp, Settings, Handshake } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Strategic market expansion and revenue optimization. We identify growth opportunities and execute with precision.",
    features: ["Market Analysis", "Revenue Strategy", "Growth Planning"],
  },
  {
    icon: Settings,
    title: "Operations",
    description: "Operational excellence and efficiency optimization. Streamlined processes that drive performance and reduce costs.",
    features: ["Process Optimization", "Quality Control", "Resource Management"],
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Strategic alliances and collaborative ventures. Building relationships that create lasting value for all stakeholders.",
    features: ["Joint Ventures", "Strategic Alliances", "Investor Relations"],
  },
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-light" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="container relative z-10 px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-4">
              Our Approach
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
              The Three{" "}
              <span className="text-gradient-gold">Pillars</span>
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-8">
              Our methodology is built on three foundational pillars that guide every decision 
              and drive success across our portfolio companies.
            </p>
            <p className="text-cream/50 leading-relaxed">
              Each pillar represents a commitment to excellence—whether we're developing new 
              markets, optimizing operations, or forging strategic partnerships that create 
              lasting value.
            </p>
          </motion.div>

          {/* Right - Pillars Cards */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative glass rounded-xl p-6 border border-border hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <pillar.icon className="w-6 h-6 text-gold" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-cream/60 text-sm leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold/80"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
