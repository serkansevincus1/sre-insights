import './globals.css';
import ThemeToggle from './components/ThemeToggle';

export const metadata = {
  title: 'SRE Insights',
  description: 'SRE, Monitoring ve DevOps üzerine içerikler.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white p-4">
        <header className="mb-8">
          <nav className="flex gap-4 text-lg items-center">
            <a href="/" className="hover:underline hover:text-blue-600">Anasayfa</a>
            <a href="/blog" className="hover:underline hover:text-blue-600">Blog</a>
            <a href="/dashboards" className="hover:underline hover:text-blue-600">Dashboards</a>
            <a href="/notes" className="hover:underline hover:text-blue-600">Notlar</a>
            <a href="/posts" className="hover:underline hover:text-blue-600">LinkedIn</a>
            <a href="/about" className="hover:underline hover:text-blue-600">Hakkımda</a>
            <ThemeToggle /> {/* <-- Buton burada */}
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
