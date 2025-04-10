import { NextResponse } from 'next/server';
import { generatePost } from '../shared';
import fs from 'fs';

export async function GET() {
  const content = await generatePost();

  const postsPath = process.cwd() + '/data/posts.json';
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
  const newPost = {
    id: Date.now(),
    content,
    status: 'pending',
    published: false
  };
  posts.push(newPost);
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));

  return NextResponse.json({ message: 'Yeni içerik üretildi.', post: newPost });
}