
import React, { createContext, useContext, useState } from 'react';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatContextType {
  messages: ChatMessage[];
  addMessage: (text: string, sender: 'user' | 'bot') => void;
  clearChat: () => void;
  isTyping: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

// Mock responses from the chatbot
const mockResponses = [
  "Hola, soy Luvi. ¿En qué puedo ayudarte hoy?",
  "¿Qué tipo de lugar estás buscando? ¿Para trabajar, una cita, salir con amigos...?",
  "Te recomendaría el Café del Jardín. Es tranquilo, tiene buen WiFi y es perfecto para trabajar.",
  "La Terraza Azul tiene unas vistas increíbles y es ideal para citas románticas.",
  "¿Te gustaría buscar lugares con algún requisito específico?",
  "El Bistro Familiar es perfecto para ir con niños, tienen una zona de juegos.",
  "Para vegetarianos recomiendo El Rincón Veggie, tienen opciones muy deliciosas.",
  "¿Prefieres un lugar tranquilo o con ambiente más animado?"
];

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: '¡Hola! Soy Luvi, tu asistente para encontrar el lugar perfecto. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);

    // If user sent a message, simulate bot typing and response
    if (sender === 'user') {
      setIsTyping(true);
      
      // Simulate typing delay (1-2 seconds)
      setTimeout(() => {
        // Select a random response
        const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
        
        addMessage(randomResponse, 'bot');
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: '¡Hola! Soy Luvi, tu asistente para encontrar el lugar perfecto. ¿En qué puedo ayudarte hoy?',
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      addMessage,
      clearChat,
      isTyping,
    }}>
      {children}
    </ChatContext.Provider>
  );
};
