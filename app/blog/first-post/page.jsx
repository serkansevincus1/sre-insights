'use client';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQvho7BbfLOg_JsZlM11FIZzuEYZHxDdIwiTAXqxz90D-FM-fEfLlINb-k8eAy3CDZpBHQYoNBrK4JN/pub?output=csv')
      .then(res => res.text())
      .then(csv => {
        const lines = csv.split('\n').slice(1); // skip header
        const data = lines.map(line => {
          const [id, title, date, url, content] = line.split(',');
          return { id, title, date, url, content };
        });
        setPosts(data.filter(post => post.title)); // filtrele, boş başlıklara izin verme
      });
  }, []);

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">LinkedIn Postları (Blog)</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="p-4 border rounded hover:shadow transition">
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <p>{post.content}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
