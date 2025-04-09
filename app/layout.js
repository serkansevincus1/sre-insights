export const metadata = {
  title: 'SRE Insights',
  description: 'SRE, Monitoring ve DevOps üzerine içerikler.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
