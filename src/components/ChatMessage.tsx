
import React from 'react';
import { ChatMessage as ChatMessageType } from '@/context/ChatContext';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div 
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      {message.sender === 'bot' && (
        <div className="w-8 h-8 rounded-full bg-luvi-primary text-white flex items-center justify-center mr-2">
          L
        </div>
      )}
      <div className={`chat-bubble ${message.sender}`}>
        {message.text}
      </div>
      {message.sender === 'user' && (
        <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center ml-2">
          U
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
