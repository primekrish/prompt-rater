import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-border mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
        <span>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/primekris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline transition-colors"
          >
            PrimeKris
          </a>
        </span>
        <a
          href="https://github.com/primekris/prompt-rater"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover-elevate active-elevate-2 p-2 rounded-md transition-colors"
          data-testid="link-github"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
