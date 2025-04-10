import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generatePost() {
  const chat = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'user',
        content: 'SRE, Monitoring ya da DevOps konularında 300 karakteri geçmeyecek şekilde teknik bir LinkedIn postu üret. #SRE #DevOps #Monitoring etiketi olsun.'
      }
    ]
  });
  return chat.choices[0].message.content;
}
