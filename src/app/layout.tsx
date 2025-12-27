import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fördermittelfinder - KI-Antrags-Assistent',
  description: 'KI-gestützter Antrags-Assistent für deutsche und EU-Fördermittel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇪🇺</span>
                  <h1 className="text-2xl font-bold">Fördermittelfinder</h1>
                </div>
                <nav className="hidden md:flex gap-6">
                  <a href="/" className="hover:text-yellow-400 transition">Start</a>
                  <a href="/suche" className="hover:text-yellow-400 transition">Suche</a>
                  <a href="/dashboard" className="hover:text-yellow-400 transition">Dashboard</a>
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm text-gray-400">
                © 2024 Fördermittelfinder - Alle Rechte vorbehalten
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}