'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchPosts = async () => {
    const res = await fetch('/data/posts.json');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    if (isAuthenticated) fetchPosts();
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (username === 'admin' && password === 'sre123') {
      setIsAuthenticated(true);
    } else {
      alert('Geçersiz kullanıcı adı veya şifre');
    }
  };

  const approvePost = async (id) => {
    const updatedPosts = posts.map(post => post.id === id ? { ...post, status: 'approved' } : post);
    setPosts(updatedPosts);
    await savePosts(updatedPosts);
  };

  const savePosts = async (updated) => {
    await fetch('/api/save-posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-2 text-black dark:text-white">
        <h1 className="text-xl font-bold">Admin Girişi</h1>
        <input type="text" placeholder="Kullanıcı adı" className="border px-2 py-1 bg-white text-black dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Şifre" className="border px-2 py-1 bg-white text-black dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-1">Giriş Yap</button>
      </div>
    );
  }

  return (
    <div className="p-4 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Admin Paneli</h1>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id} className="border p-2">
            <p>{post.content}</p>
            <p className="text-sm">Durum: {post.status}</p>
            {!post.published && post.status !== 'approved' && (
              <button
                onClick={() => approvePost(post.id)}
                className="bg-green-500 text-white px-3 py-1 mt-2"
              >
                Onayla
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
