import { Kurale, Philosopher } from 'next/font/google';

export const philosopher = Philosopher({
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  weight: ['400', '700'],
  variable: '--font-philosopher',
});

export const kurale = Kurale({
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  weight: ['400'],
  variable: '--font-kurale',
});
