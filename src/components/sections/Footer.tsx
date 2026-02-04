const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-wide mb-2">
              SAAD QADIR<span className="text-accent">.</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Software Architect & CEO
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm tracking-brutal">
            <a 
              href="https://alphabrackets.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutalist-underline text-muted-foreground hover:text-foreground transition-colors"
            >
              ALPHA BRACKETS
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutalist-underline text-muted-foreground hover:text-foreground transition-colors"
            >
              LINKEDIN
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutalist-underline text-muted-foreground hover:text-foreground transition-colors"
            >
              GITHUB
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {currentYear} SAAD QADIR. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-muted-foreground tracking-wider">
            ENGINEERED FOR <span className="text-accent">SCALE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
