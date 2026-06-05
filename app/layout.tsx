import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord VC Attendance Tracker — Track Who Shows Up',
  description: 'Analytics for Discord voice channels showing attendance patterns, punctuality, and engagement metrics for community managers and remote team leads.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="528f1afe-632b-42b9-8fcc-5f38036254b3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
