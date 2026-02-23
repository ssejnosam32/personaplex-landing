import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How AI Cold Calling Works: A Technical Breakdown | Duvox',
  description: 'A deep dive into the technology behind AI cold calling. From speech recognition to natural language processing, here is how AI voice agents make outbound calls.',
  keywords: 'how ai cold calling works, ai cold calling technology, voice ai, speech recognition, natural language processing, ai voice agents, automated calling, ai sdr',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'How AI Cold Calling Works: A Technical Breakdown',
    description: 'A deep dive into the technology behind AI cold calling. From speech recognition to natural language processing, here is how AI voice agents make outbound calls.',
    url: 'https://aicoldcallingsoftware.com/blog/how-ai-cold-calling-works',
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
    title: 'How AI Cold Calling Works: A Technical Breakdown',
    description: 'A deep dive into the technology behind AI cold calling. From speech recognition to natural language processing, here is how AI voice agents make outbound calls.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/how-ai-cold-calling-works',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}