import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  fetch('https://googleapis.com')

  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
