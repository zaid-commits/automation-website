interface Step {
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

export function Steps({ steps }: StepsProps) {
  return (
    <div className="space-y-8 mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-primary">
              {index + 1}
            </div>
            {index !== steps.length - 1 && (
              <div className="h-full w-px bg-border" />
            )}
          </div>
          <div className="flex flex-col pb-8">
            <h3 className="font-medium">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

