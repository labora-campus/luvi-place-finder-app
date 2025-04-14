
import React, { useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import MobileMenu from '@/components/MobileMenu';
import { useChat } from '@/context/ChatContext';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const Chat = () => {
  const { messages, isTyping } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-md max-w-3xl mx-auto overflow-hidden">
            <div className="bg-luvi-primary text-white p-4">
              <h1 className="text-xl font-semibold">Habla con Luvi</h1>
              <p className="text-sm opacity-80">
                Cuéntame qué estás buscando y te ayudaré a encontrar el lugar perfecto
              </p>
            </div>
            
            <div className="p-4 h-[500px] overflow-y-auto">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && (
                <div className="flex items-center ml-10 mb-4">
                  <div className="w-8 h-8 rounded-full bg-luvi-primary text-white flex items-center justify-center mr-2">
                    L
                  </div>
                  <div className="chat-bubble bot flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span>Escribiendo</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <div className="border-t p-4">
              <ChatInput />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
