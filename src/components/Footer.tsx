import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" },
      { name: "Sale", href: "#" },
      { name: "Gift Cards", href: "#" }
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Sustainability", href: "#" }
    ],
    Support: [
      { name: "Contact Us", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "Shipping & Returns", href: "#" },
      { name: "FAQ", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="section-padding">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gradient mb-4">FASHION</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Premium streetwear and contemporary fashion for the modern lifestyle. 
                Crafted with attention to detail and designed for everyday wear.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-subtle hover:glow-primary"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-foreground mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Fashion Store. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;