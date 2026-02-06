import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { profile, navigation } from "@/data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        {/* Top section */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="text-2xl tracking-brutal font-bold inline-block mb-4">
              <span className="text-foreground">SQ</span>
              <span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Software Architect & CEO building enterprise-grade systems for founders who demand performance and scale.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-brutal text-muted-foreground mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-brutal text-muted-foreground mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-foreground hover:text-accent transition-colors"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
                >
                  Request Audit
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-brutal text-muted-foreground mb-4">
              CONNECT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">
              CEO at{" "}
              <a
                href={profile.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                {profile.company.name}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
