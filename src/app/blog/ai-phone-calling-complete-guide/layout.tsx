import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Guide to AI Phone Calling: Setup, Benefits & Best Practices | Duvox',
  description: 'Everything you need to know about AI phone calling. Learn how to set up AI calling systems, the benefits for sales teams, and best practices for maximizing results.',
  keywords: 'ai phone calling, ai calling setup, ai phone calls, automated phone calling, ai outbound calling, voice ai calling, ai calling software',
  authors: [{ name: 'Duvox AI' }],
  openGraph: {
    title: 'Complete Guide to AI Phone Calling: Setup, Benefits & Best Practices',
    description: 'Everything you need to know about AI phone calling. Learn how to set up AI calling systems, the benefits for sales teams, and best practices for maximizing results.',
    url: 'https://aicoldcallingsoftware.com/blog/ai-phone-calling-complete-guide',
    type: 'article',
    publishedTime: '2026-02-13T18:00:00.000Z',
    authors: ['Duvox AI'],
    tags: ['AI Phone Calling', 'Guide', 'Sales Automation', 'Voice AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to AI Phone Calling: Setup, Benefits & Best Practices',
    description: 'Everything you need to know about AI phone calling. Setup guides, ROI analysis, and best practices for sales teams.',
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/ai-phone-calling-complete-guide',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AiPhoneCallingGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
