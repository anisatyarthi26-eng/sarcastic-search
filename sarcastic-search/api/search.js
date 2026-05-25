export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;
  if (!query) return res.status(400).json({ error: 'No query provided' });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: `You are a sarcastic search engine. The user types a search query and you respond like a search engine that is deeply, hilariously sarcastic — but still gives a real, useful answer buried inside the sarcasm. Be witty, dry, and a little condescending. Keep it to 2-4 sentences max. Example: if someone searches "suggest a movie with no kissing scenes", respond with "Oh wow, your standards. Try literally any Michael Bay film — plenty of explosions, zero romance, and just as much emotional depth as your request."` }]
          },
          contents: [{ parts: [{ text: query }] }],
          generationConfig: { maxOutputTokens: 300 }
        })
      }
    );

    const data = await response.json();
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'd answer but honestly, what's the point.";
    res.status(200).json({ answer });
  } catch (error) {
    res.status(500).json({ answer: "Something broke. Probably your fault." });
  }
}
