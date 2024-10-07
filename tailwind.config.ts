import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'font-kg-primary-dots',
    'font-default',
    'font-delius',
    'font-patrick-hand',
    'font-schoolbell',
    'font-caveat',
    'font-kalam',
    'font-gloria-hallelujah',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        default: ['Comic Sans MS'],
        delius: ['var(--font-delius)'],
        'patrick-hand': ['var(--font-patrick-hand)'],
        'kg-primary-dots': ['var(--font-en-zt-kg-primary-dots)'],
        ['permanent-marker']: ['var(--font-en-permanent-marker)'],
        schoolbell: ['var(--font-schoolbell)'],
        caveat: ['var(--font-caveat)'],
        kalam: ['var(--font-kalam)'],
        'gloria-hallelujah': ['var(--font-gloria-hallelujah)'],
      },
    },
  },
  plugins: [],
}
export default config
