import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '英文字帖',
    description: '制作和打印英文字帖',
    short_name: '英文字帖',
    start_url: '/',
    display: 'standalone',
    background_color: '#1999F1',
    theme_color: '#fccece',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}