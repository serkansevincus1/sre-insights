import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/blog/first-post" className="text-blue-500 hover:underline">
            SLO ve SLA Nedir?
          </Link>
        </li>
      </ul>
    </main>
  );
}
