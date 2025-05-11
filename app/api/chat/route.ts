import { NextRequest, NextResponse } from 'next/server';

// Define the types for request and response
type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type ChatPayload = {
  messages: ChatMessage[];
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body as ChatPayload;
    
    // Add system prompt to messages if not present
    if (!messages.some(message => message.role === 'system')) {
      messages.unshift({
        role: 'system',
        content: `You are SoftSell's AI assistant. SoftSell is a software license resale platform that helps businesses sell their unused software licenses.

Key information about SoftSell:
- We accept all major software licenses including enterprise software, cloud services, desktop applications, and mobile applications.
- Our process: Upload License -> Get Valuation -> Get Paid.
- Payment is processed within 24-48 hours after accepting an offer.
- We offer the best market rates due to our extensive buyer network.
- All transactions are secure with bank-level encryption.
- We have a team of software licensing experts to assist with any questions.

Be helpful, concise, and friendly. If you don't know the answer to a question, suggest that the user contact our support team at support@softsell.com.`
      });
    }

    // Call OpenRouter API
    const response = await fetch('https://api.aimlapi.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AIML_API_KEY}`,
        'HTTP-Referer': process.env.NEXT_PUBLIC_BASE_URL || 'https://softsell-ojas.netlify.app/', // Replace with your domain
        'X-Title': 'SoftSell Assistant' // Replace with your app name
      },
      body: JSON.stringify({
        model: 'gpt-4o', // You can change this to any model supported by OpenRouter
        messages: messages,
        temperature: 0.7,
        max_tokens: 512
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenRouter API error:', error);
      return NextResponse.json(
        { error: 'Failed to communicate with AI service' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}