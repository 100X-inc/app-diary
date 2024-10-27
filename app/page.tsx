import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/home/feature-card';
import { BookOpenText, Brain, Calendar, Sparkles } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Smart Journaling',
    description: 'Write your thoughts naturally with our intuitive editor designed for personal reflection.',
    icon: BookOpenText,
  },
  {
    title: 'AI Insights',
    description: 'Receive thoughtful feedback and analysis from our AI to help you gain new perspectives.',
    icon: Brain,
  },
  {
    title: 'Organized History',
    description: 'Keep your entries organized with automatic syncing to Google Sheets.',
    icon: Calendar,
  },
  {
    title: 'Personal Growth',
    description: 'Track your emotional journey and personal development over time.',
    icon: Sparkles,
  },
] as const;

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI-Powered Personal Journal
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform your daily reflections with intelligent insights. Write, reflect, and grow with
          our AI-enhanced journaling experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/login">Start Writing Now</Link>
        </Button>
      </div>
    </div>
  );
}