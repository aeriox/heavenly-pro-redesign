import { motion } from "framer-motion";
import { 
  Factory, 
  Building2, 
  Globe, 
  Home, 
  Heart, 
  Printer, 
  Building, 
  Leaf 
} from "lucide-react";

const portfolioCompanies = [
  {
    category: "Manufacturing",
    name: "Palm Beach Fabricators",
    tagline: "A Different Kind of Millwork Company",
    description: "Hybrid millwork built on luxury craftsmanship and commercial discipline.",
    icon: Factory,
  },
  {
    category: "Construction",
    name: "Xact Construction",
    tagline: "Building Tomorrow's Landmarks",
    description: "Full-service construction company delivering exceptional commercial and residential projects since 1998.",
    icon: Building2,
  },
  {
    category: "Venture & Investments",
    name: "Salt Life Global",
    tagline: "Connecting Opportunities Worldwide",
    description: "Capital venture company housing global projects, connecting people, resources, and land.",
    icon: Globe,
  },
  {
    category: "Real Estate",
    name: "Chosen Real Estate Advisors",
    tagline: "Chosen for Excellence. Called to Serve.",
    description: "Faith-driven integrity and world-class expertise in Palm Beach & Orlando real estate.",
    icon: Home,
  },
  {
    category: "Ministry",
    name: "Heavenly Hands",
    tagline: "A Weekday Ministry",
    description: "Non-profit ministry ending leadership isolation through daily prayer and accountability.",
    icon: Heart,
  },
  {
    category: "Marketing & Print",
    name: "Print Dynamix",
    tagline: "Your Vision, Printed Perfectly",
    description: "Full-spectrum printing and marketing solutions for businesses of all sizes.",
    icon: Printer,
  },
  {
    category: "Development",
    name: "Brickell Development Partners",
    tagline: "Building the Future of Urban Living",
    description: "Premier real estate development specializing in luxury residential and mixed-use projects.",
    icon: Building,
  },
  {
    category: "Clean Technology",
    name: "Elemental Eco Holdings",
    tagline: "Building the Future Without Fossil Fuels",
    description: "Fossil-fuel-free solutions across clean energy, sustainable marine tech, and carbon-neutral manufacturing.",
    icon: Leaf,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gradient-navy relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
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
            Our Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Eight Companies,{" "}
            <span className="text-gradient-gold">One Vision</span>
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed">
            Our diverse portfolio spans multiple industries, each company united by our 
            commitment to operational excellence and strategic growth.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {portfolioCompanies.map((company) => (
            <motion.div
              key={company.name}
              variants={item}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-gold cursor-pointer"
            >
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 mb-4">
                <company.icon className="w-4 h-4 text-gold" />
                <span className="text-gold/80 text-xs uppercase tracking-wider">
                  {company.category}
                </span>
              </div>

              {/* Company Name */}
              <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors">
                {company.name}
              </h3>

              {/* Tagline */}
              <p className="text-cream/80 text-sm font-medium mb-3">
                {company.tagline}
              </p>

              {/* Description */}
              <p className="text-cream/50 text-sm leading-relaxed">
                {company.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gold text-xs uppercase tracking-wider">
                  View Details →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
