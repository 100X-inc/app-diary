import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { type PropsWithChildren } from 'react';

interface RootLayoutProps extends PropsWithChildren {
  className?: string;
}

export function RootLayout({ children, className }: RootLayoutProps) {
  return (
    <main className={cn('min-h-screen bg-background', className)}>
      {children}
      <Toaster />
    </main>
  );
}