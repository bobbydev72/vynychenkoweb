import type { Metadata } from 'next';
import './globals.css';
import { kurale, philosopher } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Студія декору "Я Можу ВСЕ"',
  description: 'Студія декору "Я Можу ВСЕ"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${philosopher.variable} ${kurale.variable}`}>{children}</body>
    </html>
  );
}
