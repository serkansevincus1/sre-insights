import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
  const postsPath = process.cwd() + '/data/posts.json';
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

  const newPost = {
    id: Date.now(),
    content: 'SRE üzerine örnek içerik. #SRE #DevOps #Monitoring',
    status: 'pending',
    published: false
  };

  posts.push(newPost);
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));

  return NextResponse.json({ message: 'Yeni sahte içerik eklendi.', post: newPost });
}