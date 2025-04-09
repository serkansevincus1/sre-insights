import dynamic from 'next/dynamic';

// Dinamik olarak MDX içeriği yükle
const Post = dynamic(() => import('../content/first-post.mdx'));

export default function BlogPostPage() {
  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-10">
      <Post />
    </main>
  );
}
