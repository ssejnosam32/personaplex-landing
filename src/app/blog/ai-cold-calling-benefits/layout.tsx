import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 Benefits of AI Cold Calling That Change Your Sales Pipeline | Duvox',
  description: 'Discover the 7 key benefits of AI cold calling: faster qualification, higher conversion rates, 24/7 operation, cost savings, zero fatigue, better data, and 10x scale. Real numbers from 2026 deployments.',
  keywords: 'benefits of ai cold calling, ai cold calling advantages, ai sales benefits, automated cold calling, ai sdr benefits, cold calling automation',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: '7 Benefits of AI Cold Calling That Change Your Sales Pipeline',
    description: 'How AI cold calling gives you a competitive edge in 2026.',
    url: 'https://aicoldcallingsoftware.com/blog/ai-cold-calling-benefits',
    siteName: 'Duvox - AI Cold Calling Software',
    images: [
      {
        url: 'https://aicoldcallingsoftware.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Benefits of AI Cold Calling That Change Your Sales Pipeline',
    description: 'Discover the 7 key benefits of AI cold calling: faster qualification, higher conversion rates, 24/7 operation, cost savings, zero fatigue, better data, and 10x scale.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/ai-cold-calling-benefits',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
