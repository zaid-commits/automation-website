import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Steps } from './steps';
const steps = [
  {
    title: "Enter project details",
    description: "Provide your project name and choose your preferred package manager (Bun, NPM, or Yarn)"
  },
  {
    title: "Select features",
    description: "Choose TypeScript support, Prettier, and ESLint configuration"
  },
  {
    title: "Automatic setup",
    description: "The script creates a new Vite project with your chosen configuration"
  },
  {
    title: "Dependencies installation",
    description: "Tailwind CSS, Radix UI, and ShadCN are automatically installed and configured"
  },
  {
    title: "Ready to code",
    description: "Start coding with a modern tech stack and best practices already set up"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-20 mx-auto">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">How It Works</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get your project up and running in five simple steps
        </p>
      </div>
      <div className="mx-auto max-w-3xl mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Process</CardTitle>
          </CardHeader>
          <CardContent>
            <Steps steps={steps} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

