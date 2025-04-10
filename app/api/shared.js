import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generatePost() {
  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'SRE, Monitoring ya da DevOps konularında 300 karakteri geçmeyecek şekilde teknik bir LinkedIn postu üret. #SRE #DevOps #Monitoring etiketi olsun.'
      }
    ]
  });
  return chat.choices[0].message.content;
}

export async function publishToLinkedIn(text) {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const urn = process.env.LINKEDIN_PROFILE_URN;

  const body = {
    author: urn,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text },
        shareMediaCategory: 'NONE'
      }
    },
    visibility: {
      'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
    }
  };

  const response = await fetch('https://api.linkedin.com/v2/ugcPosts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0'
    },
    body: JSON.stringify(body)
  });

  const result = await response.json();
  return result;
}
