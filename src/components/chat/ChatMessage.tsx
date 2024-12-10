import React from 'react';
import { Bot, User, AlertCircle } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  error?: boolean;
}

export function ChatMessage({ message, isBot, error }: ChatMessageProps) {
  return (
    <div className={`flex items-start space-x-3 ${isBot ? 'bg-gray-50' : ''} p-4 rounded-lg`}>
      <div className={`p-2 rounded-full ${
        isBot 
          ? error 
            ? 'bg-red-100' 
            : 'bg-teal-100'
          : 'bg-blue-100'
      }`}>
        {isBot ? (
          error ? (
            <AlertCircle className="w-5 h-5 text-red-600" />
          ) : (
            <Bot className="w-5 h-5 text-teal-600" />
          )
        ) : (
          <User className="w-5 h-5 text-blue-600" />
        )}
      </div>
      <div className="flex-1">
        <p className={`leading-relaxed ${error ? 'text-red-600' : 'text-gray-800'}`}>
          {message}
        </p>
      </div>
    </div>
  );
}