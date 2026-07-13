import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { ingredients } = await request.json();

    const response = await ai.models.generateContent({
     model: "gemini-3.5-flash",
      contents: `
You are a professional chef.

Create one delicious recipe using ONLY these ingredients:

${ingredients}

Return your answer in EXACTLY this format.

🍽️ Recipe Name:
...

⏱️ Cooking Time:
...

🥕 Ingredients:
- ...
- ...

👨‍🍳 Instructions:
1. ...
2. ...
3. ...

💡 Chef Tips:
...
`,
    });

    return Response.json({
      recipe: response.text,
    });
  } catch (error) {
    console.error(error);
finally {
  setLoading(false);
}
    return Response.json(
      { error: "Failed to generate recipe." },
      { status: 500 }
    );
  }
}