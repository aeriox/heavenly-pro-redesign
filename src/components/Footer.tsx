import { motion } from "framer-motion";

const footerLinks = {
  portfolio: [
    "Palm Beach Fabricators",
    "Xact Construction",
    "Salt Life Global",
    "Chosen Real Estate",
  ],
  company: ["About", "Leadership", "Careers", "Press"],
  connect: ["Contact", "Partnerships", "Investor Relations", "Newsletter"],
};

export const Footer = () => {
  return (
    <footer className="bg-navy border-t border-border">
      <div className="container px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-gradient-gold mb-4">
              Heavenly Pros
            </h3>
            <p className="text-cream/50 text-sm leading-relaxed mb-6 max-w-sm">
              Premier multi-industry holding company driving operational excellence 
              across eight dynamic portfolio companies.
            </p>
            <div className="text-cream/40 text-sm">
              Jupiter, Florida · Miami, Florida · The Bahamas · Global
            </div>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="text-cream font-medium mb-4 text-sm uppercase tracking-wider">
              Portfolio
            </h4>
            <ul className="space-y-3">
              {footerLinks.portfolio.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-cream/50 hover:text-gold text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-cream font-medium mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-cream/50 hover:text-gold text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-cream font-medium mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-cream/50 hover:text-gold text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Heavenly Pros. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/40 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/40 hover:text-gold text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
