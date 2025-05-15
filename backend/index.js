import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
app.get("/", (req, res) => {
  res.send("Chef Claude backend is running!");
});
app.post("/api/recipes", async (req, res) => {
  try {
    const { ingredients } = req.body;
    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({ error: "No ingredients provided" });
    }

    const prompt = `Suggest some recipes using these ingredients: ${ingredients.join(
      ", "
    )}. Give each recipe on a new line.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // use "gpt-4" if you want (and have access)
      messages: [
        { role: "system", content: "You are a helpful chef assistant." },
        { role: "user", content: prompt },
      ],
      max_tokens: 150,
    });

    const responseText = completion.choices[0].message.content;
    const recipes = responseText
      .split("\n")
      .filter((line) => line.trim() !== "");

    res.json({ recipes });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
