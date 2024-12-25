import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center space-y-10 py-10 md:py-20 text-center mx-auto">
      <div className="flex items-center gap-2 rounded-2xl bg-muted px-4 py-1 text-sm font-medium">
        <Sparkles className="h-4 w-4" />
        <span>Your project setup, automated</span>
      </div>
      <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl ">
          Supercharge your project setup with our npm package.
        </h1>
        <p className="max-w-[44rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We will setup your project in under 2 minutes with ShadCN, Tailwind, Radix UI, and other dependencies. So you can focus on <span className='font-medium text-purple-800'>building</span> great apps.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" asChild>
          <a href="#installation" className="flex items-center gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#demo">Try Demo</a>
        </Button>
      </div>
    </section>
  );
}
