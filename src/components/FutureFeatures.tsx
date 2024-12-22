import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Rocket } from 'lucide-react';
import React from 'react';

const FutureFeatures: React.FC = () => {
  return (
    <section id="future-features" className="container py-12 space-y-6 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Future Features</h2>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Rocket className="h-6 w-6" />
            <span>Coming Soon</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We're excited to announce that support for Aceternity UI is currently under development and will be added in a future update. Stay tuned for even more powerful and beautiful UI components!
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default FutureFeatures;

