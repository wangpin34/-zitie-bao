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
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },
  },
  plugins: [],
}
export default config
