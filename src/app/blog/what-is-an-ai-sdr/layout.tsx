import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is an AI SDR? How AI Sales Development Reps Work in 2026 | Duvox',
  description: 'AI SDRs are replacing traditional sales development reps for outbound prospecting. Learn what an AI SDR is, how it works, when to use one, and how it compares to human SDRs.',
  keywords: 'ai sdr, what is an ai sdr, ai sales development representative, ai sales rep, automated sdr, ai outbound sales, ai prospecting',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'What Is an AI SDR? How AI Sales Development Reps Work in 2026',
    description: 'AI SDRs are replacing traditional sales development reps for outbound prospecting. Learn what an AI SDR is, how it works, and how it compares to human SDRs.',
    url: 'https://aicoldcallingsoftware.com/blog/what-is-an-ai-sdr',
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
    title: 'What Is an AI SDR? How AI Sales Development Reps Work in 2026',
    description: 'AI SDRs are replacing traditional sales development reps for outbound prospecting. Learn what an AI SDR is, how it works, and how it compares to human SDRs.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/what-is-an-ai-sdr',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
