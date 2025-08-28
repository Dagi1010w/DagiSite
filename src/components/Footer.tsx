import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
              <span>© 2024 Dagim Worku. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm font-medium">Back to top</span>
            </button>
          </div>

          {/* Additional info */}
          <div className="mt-8 pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              This portfolio was built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;