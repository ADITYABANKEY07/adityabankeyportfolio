import React from "react";

function Footer() {
  return (
    <div className="py-12 px-6 border-t border-border/20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 glow-effect float-effect">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-2xl font-bold font-space-grotesk gradient-text">
                AB
              </span>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2025 Portfolio. Designed & Built with ❤️
        </p>
      </div>
    </div>
  );
}

export default Footer;
