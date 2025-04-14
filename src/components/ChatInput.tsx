
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useChat } from '@/context/ChatContext';

const ChatInput: React.FC = () => {
  const { addMessage, isTyping } = useChat();
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isTyping) {
      addMessage(message, 'user');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isTyping}
        className="flex-1"
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={!message.trim() || isTyping}
      >
        <Send size={18} />
      </Button>
    </form>
  );
};

export default ChatInput;
