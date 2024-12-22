import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Zap, Package, Paintbrush, Code2, CheckCircle, GitBranch } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Lightning Fast Setup",
    description: "Get your Vite project up and running in minutes, not hours."
  },
  {
    icon: <Package className="h-10 w-10" />,
    title: "Multiple Package Managers",
    description: "Choose between Bun, NPM, or Yarn for your project."
  },
  {
    icon: <Paintbrush className="h-10 w-10" />,
    title: "Pre-configured Styling",
    description: "Tailwind CSS and ShadCN UI components ready to use."
  },
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "TypeScript Support",
    description: "Option to use TypeScript for enhanced developer experience."
  },
  {
    icon: <CheckCircle className="h-10 w-10" />,
    title: "Linting & Formatting",
    description: "ESLint and Prettier configurations included."
  },
  {
    icon: <GitBranch className="h-10 w-10" />,
    title: "Git Integration",
    description: "Automatically initialize a Git repository for your project."
  }
];

export default function Features() {
  return (
    <section id="features" className="container py-20 mx-auto">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Features</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to kickstart your Vite project, all in one script.
        </p>
      </div>
      <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1024px] mt-16">
        {features.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

