import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-black mb-2">English for Humans</h3>
            <p className="text-background/80 text-lg">
              Making language work for everyone
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-background/70 mb-6">
            <span>Built with</span>
            <Heart className="w-4 h-4 fill-current text-accent" />
            <span>for calmunity⁵</span>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-sm text-background/60">
              Join the conversation. Challenge the status quo. Spell for humans.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
