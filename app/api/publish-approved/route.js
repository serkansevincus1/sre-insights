import { NextResponse } from 'next/server';
import { publishToLinkedIn } from '../../shared';
import fs from 'fs';

export async function GET() {
  const postsPath = process.cwd() + '/data/posts.json';
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

  const approvedPosts = posts.filter(p => p.status === 'approved' && !p.published);

  for (const post of approvedPosts) {
    const result = await publishToLinkedIn(post.content);
    post.published = true;
    post.status = 'done';
    post.linkedinResponse = result;
  }

  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));

  return NextResponse.json({ message: 'Paylaşılan içerik(ler):', posts: approvedPosts });
}