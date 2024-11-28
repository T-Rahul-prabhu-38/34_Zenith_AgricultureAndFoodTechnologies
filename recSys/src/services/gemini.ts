import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyC1Ft_Vk3oEOqEF6n1Xv5rBxjl2o1soss0");

export async function getCropRecommendation(
  weather: string,
  soil: string,
  season: string,
  crop: string
): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `As an agricultural expert, provide detailed recommendations for growing ${crop} 
    given the following conditions:
    - Weather: ${weather}
    - Soil Type: ${soil}
    - Season: ${season}
    
    Please include:
    1. Suitability analysis
    2. Best practices for cultivation
    3. Potential challenges and solutions
    4. Expected yield conditions`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting crop recommendation:', error);
    throw new Error('Failed to get crop recommendation');
  }
}