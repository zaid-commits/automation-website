import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { Github, Menu } from 'lucide-react';
import { Sheet, SheetTrigger } from './ui/sheet';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block">Vite Setup Script</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a 
              href="#features" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              How It Works
            </a>
            <a 
              href="#installation" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Installation
            </a>
            <a 
              href="#demo" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Demo
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild className="hidden md:inline-flex">
            <a
              href="https://github.com/yourusername/vite-setup-script"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          </Sheet>
        </div>
      </div>
    </header>
  );
}