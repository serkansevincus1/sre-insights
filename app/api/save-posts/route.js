import { writeFileSync } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();

    // posts.json dosyasının yolu
    const filePath = path.join(process.cwd(), 'public', 'data', 'posts.json');

    // Dosyaya yaz
    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    console.log('✅ posts.json başarıyla güncellendi.');
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.error('🛑 Dosyaya yazarken hata:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// GET metodu tanımlı değilse, 405 döndürülür
export function GET() {
  return new Response('Method Not AllowedSSSSSS', { status: 405 });
}
