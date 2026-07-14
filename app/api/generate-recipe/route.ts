import axios from "axios";

export async function POST(request: Request) {
  try {
    const { ingredients } = await request.json();

    const prompt = `
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
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return Response.json({
      recipe:
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ??
        "No recipe generated.",
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Gemini API Error:", error.response?.data);
    } else {
      console.error(error);
    }

    return Response.json(
      { error: "Failed to generate recipe." },
      { status: 500 }
    );
  }
}