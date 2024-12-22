import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 mx-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/zaid-commits"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              zaid-commits
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername/vite-setup-script"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium underline underline-offset-4"
          >
            <Github className="h-4 w-4" />
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}

