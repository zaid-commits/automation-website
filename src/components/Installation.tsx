import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Copy } from 'lucide-react';

export default function Installation() {
  const copyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setTimeout(() => {}, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="installation" className="container py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Installation</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get started in seconds with our simple installation process
        </p>
      </div>
      <div className="mx-auto max-w-3xl mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Choose Your Installation Method</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="curl">curl</TabsTrigger>
                <TabsTrigger value="wget">wget</TabsTrigger>
              </TabsList>
              <TabsContent value="curl" className="space-y-4">
                <div className="relative">
                  <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <code>curl -O https://raw.githubusercontent.com/yourusername/vite-setup-script/main/setup.sh</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2"
                    onClick={() => copyCommand('curl -O https://raw.githubusercontent.com/yourusername/vite-setup-script/main/setup.sh')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="wget" className="space-y-4">
                <div className="relative">
                  <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <code>wget https://raw.githubusercontent.com/yourusername/vite-setup-script/main/setup.sh</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2"
                    onClick={() => copyCommand('wget https://raw.githubusercontent.com/yourusername/vite-setup-script/main/setup.sh')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-6 space-y-4">
              <h3 className="font-medium">Then run:</h3>
              <div className="relative">
                <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                  <code>chmod +x setup.sh && ./setup.sh</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                  onClick={() => copyCommand('chmod +x setup.sh && ./setup.sh')}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}