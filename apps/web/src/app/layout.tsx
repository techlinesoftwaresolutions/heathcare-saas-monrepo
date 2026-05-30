import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Healthcare Platform',
  description: 'Healthcare SaaS application',
  keywords: ['healthcare', 'platform', 'saas'],
  authors: [{ name: 'Healthcare Team' }],
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
