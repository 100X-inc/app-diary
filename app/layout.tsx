import { ThemeProvider } from '@/components/theme-provider';
import { RootLayout } from '@/components/layout/root-layout';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Diary - Your Personal Journal Assistant',
  description: 'An AI-powered diary application that helps you reflect and grow',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootLayout>{children}</RootLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}