import OpenAI from 'openai';
import { OPENAI_CONFIG } from '../config/openai';
import { ApiError, handleApiError } from './api';

function createOpenAIClient() {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new ApiError(
      'OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your environment variables.',
      401,
      'MISSING_API_KEY'
    );
  }

  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  });
}

export async function getChatResponse(message: string): Promise<string> {
  try {
    const openai = createOpenAIClient();
    
    const completion = await openai.chat.completions.create({
      model: OPENAI_CONFIG.model,
      messages: [
        {
          role: "system",
          content: OPENAI_CONFIG.systemPrompt
        },
        {
          role: "user",
          content: message.trim()
        }
      ],
      temperature: OPENAI_CONFIG.temperature,
      max_tokens: OPENAI_CONFIG.max_tokens
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new ApiError('No response generated');
    }

    return response;
  } catch (error) {
    return handleApiError(error);
  }
}