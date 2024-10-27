import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}