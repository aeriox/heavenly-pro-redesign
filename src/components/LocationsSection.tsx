import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Jupiter",
    state: "Florida",
    description: "Headquarters & Primary Operations",
    highlight: true,
  },
  {
    city: "Miami",
    state: "Florida",
    description: "Development & Real Estate Hub",
    highlight: false,
  },
  {
    city: "Nassau",
    state: "The Bahamas",
    description: "Caribbean Investment Center",
    highlight: false,
  },
  {
    city: "Global",
    state: "Worldwide",
    description: "International Project Network",
    highlight: false,
  },
];

export const LocationsSection = () => {
  return (
    <section id="locations" className="py-24 lg:py-32 bg-gradient-navy relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-4">
            Our Presence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Strategic{" "}
            <span className="text-gradient-gold">Locations</span>
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed">
            From our Florida headquarters to global ventures, we maintain a strategic 
            presence in key markets around the world.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-xl p-8 text-center border transition-all duration-500 hover:shadow-gold cursor-pointer ${
                location.highlight
                  ? "bg-gold/10 border-gold/30"
                  : "bg-card border-border hover:border-gold/30"
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  location.highlight ? "bg-gold text-navy" : "bg-gold/10 text-gold"
                }`}
              >
                <MapPin className="w-5 h-5" />
              </div>

              {/* Location Name */}
              <h3 className="font-serif text-2xl text-cream mb-1">
                {location.city}
              </h3>
              <p className="text-gold text-sm font-medium mb-3">
                {location.state}
              </p>

              {/* Description */}
              <p className="text-cream/50 text-sm">
                {location.description}
              </p>

              {/* HQ Badge */}
              {location.highlight && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-gold text-navy text-[10px] uppercase tracking-wider rounded font-semibold">
                  HQ
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
