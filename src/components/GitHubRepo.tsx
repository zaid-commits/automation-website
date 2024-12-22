import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Github } from 'lucide-react';

const GitHubRepo: React.FC = () => {
  return (
    <section id="github" className="container py-12 space-y-6 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">GitHub Repository</h2>
      <Card>
        <CardHeader>
          <CardTitle>Contribute to the Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Check out the source code and contribute to the project on GitHub. We welcome your feedback, bug reports, and pull requests!
          </p>
          <Button asChild>
            <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default GitHubRepo;

