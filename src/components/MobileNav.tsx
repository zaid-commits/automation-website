import { Sheet, SheetContent,} from './ui/sheet';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Github } from 'lucide-react';

export default function MobileNav() {
  return (
    <Sheet>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 mx-auto">
          <div className="flex flex-col space-y-4">
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
            <Button variant="outline" size="icon" asChild className="w-10">
              <a
                href="https://github.com/yourusername/vite-setup-script"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

