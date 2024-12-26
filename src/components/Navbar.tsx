import { Button } from './ui/button';
import { Github, Menu } from 'lucide-react';
import { Sheet, SheetTrigger } from './ui/sheet';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-bold inline-block">Vite-Shadcn Setup</span>
        </a>
        <nav className="flex items-center gap-6 mr-10 pr-10">
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
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild className="hidden md:inline-flex">
            <a
              href="https://github.com/zaid-commits/vite-shadcn-setup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
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
