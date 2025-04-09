'use client';
import dynamic from 'next/dynamic';

const Post = dynamic(() => import('first-post.mdx'), {
  ssr: false,
});

export default function BlogPostPage() {
  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-10">
      <Post />
    </main>
  );
}
