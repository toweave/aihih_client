import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '哎嗨 (aihih)',
    short_name: '哎嗨',
    description: '哎嗨 (aihih) 是一个简单易用的 Web 应用程序框架。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo/icon-400x400.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}