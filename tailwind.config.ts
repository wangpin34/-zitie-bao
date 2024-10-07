import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        ['kg-primary-dots']: ['var(--font-en-zt-kg-primary-dots)'],
        ['permanent-marker']: ['var(--font-en-permanent-marker)'],
      },
    },
  },
  plugins: [],
}
export default config
