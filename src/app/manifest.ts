import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '字帖宝',
    description: '制作英文字帖',
    short_name: '字帖宝',
    start_url: '/',
    display: 'standalone',
    background_color: '#1999F1',
    theme_color: '#fccece',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}