import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 py-4">
          <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-zinc-300">
              <span className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center text-[10px]">F</span>
              Charles Dev
            </div>
            <div className="flex gap-6 text-sm font-medium text-zinc-400">
              <a href="#" className="text-accent border-b border-accent">About</a>
              <a href="#" className="hover:text-white transition">Blog</a>
              <a href="#" className="hover:text-white transition">Projects</a>
              <a href="#" className="hover:text-white transition">Uses</a>
            </div>
          </div>
        </nav>
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          {children}
        </main>
      </body>
    </html>
  )
}