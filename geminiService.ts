
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateCourseDescription(title: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `为名为"${title}"的儿童科学课程生成一段高端、精致且富有启发性的中文课程描述。重点放在探索和好奇心上。`,
      config: {
        maxOutputTokens: 300,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini 错误:", error);
    return "生成描述失败。";
  }
}

export async function generateNewsHeadline(topic: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `写一个关于"${topic}"的庄重而精美的中文新闻标题。`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini 错误:", error);
    return "学院新闻动态";
  }
}
