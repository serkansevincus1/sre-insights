export const metadata = {
  title: 'SRE Insights',
  description: 'SRE, Monitoring ve DevOps üzerine içerikler.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: "1rem", fontFamily: "sans-serif" }}>
        <header style={{ marginBottom: "2rem" }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="/">Anasayfa</a>
            <a href="/blog">Blog</a>
            <a href="/dashboards">Dashboards</a>
            <a href="/notes">Notlar</a>
            <a href="/posts">LinkedIn</a>
            <a href="/about">Hakkımda</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
