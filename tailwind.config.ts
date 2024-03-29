import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-philosopher)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-kurale)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
export default config;
