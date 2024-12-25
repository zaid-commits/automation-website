import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Terminal } from 'lucide-react';

export default function Demo() {
  const [projectName, setProjectName] = useState('');
  const [packageManager, setPackageManager] = useState('npm');
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState('');

  const runDemo = async () => {
    setIsLoading(true);
    setOutput('');

    const steps = [
      `Creating project: ${projectName}...`,
      `Using package manager: ${packageManager}`,
      'Installing dependencies...',
      'Setting up Tailwind CSS...',
      'Configuring ShadCN...',
      'Project setup complete!',
      '',
      'To get started, run:',
      `cd ${projectName}`,
      `${packageManager} run dev`
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setOutput(prev => prev + steps[i] + '\n');
    }

    setIsLoading(false);
  };

  return (
    <section id="demo" className="container py-20 mx-auto">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Interactive Demo</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Try out the script setup process
        </p>
      </div>
      <div className="mx-auto max-w-3xl mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Configure Your Project</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="project-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Project Name
                </label>
                <Input
                  id="project-name"
                  placeholder="my-vite-app"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="package-manager" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Package Manager
                </label>
                <Select value={packageManager} onValueChange={setPackageManager}>
                  <SelectTrigger id="package-manager">
                    <SelectValue placeholder="Select package manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="npm">npm</SelectItem>
                    <SelectItem value="bun">bun</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button 
              onClick={runDemo} 
              disabled={!projectName || isLoading}
              className="w-full sm:w-auto"
            >
              {isLoading ? (
                <>
                  <Terminal className="mr-2 h-4 w-4 animate-spin" />
                  Setting up...
                </>
              ) : (
                <>
                  <Terminal className="mr-2 h-4 w-4" />
                  Run Setup
                </>
              )}
            </Button>
            {output && (
              <pre className="bg-muted p-4 rounded-lg whitespace-pre-wrap font-mono text-sm">
                {output}
              </pre>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

