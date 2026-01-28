"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Loader2, Minimize2, Cpu, AlertCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  role: "user" | "bot";
  text: string;
  isError?: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm the AztroSys AI. Ask me about our services, pricing, or company history." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Generate a random session ID for this user
  const [userId] = useState(() => "web-user-" + Math.random().toString(36).substr(2, 9));

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      // FIX: Sending the full payload required by your models.py
      const payload = {
        user_id: userId,        // Required by your model
        message: userMsg,       // Required by your model
        platform: "website",    // Required by your model
        chat_history: []        // Optional
      };

      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Validation Error:", errorData);
        throw new Error("Server rejected request");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.response_text }]);
    } catch (error) {
      setMessages((prev) => [...prev, { 
        role: "bot", 
        text: "⚠️ Connection Error. Ensure Backend is running and models.py matches.",
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {isOpen && (
        <Card className="w-[350px] sm:w-[380px] h-[500px] shadow-2xl border-slate-200 flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300 bg-white">
          <CardHeader className="bg-slate-900 text-white p-4 rounded-t-xl flex flex-row items-center justify-between space-y-0 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-slate-900"></span>
                <Avatar>
                  <AvatarImage src="/bot-avatar.png" />
                  <AvatarFallback className="bg-teal-600 text-white"><Cpu size={18} /></AvatarFallback>
                </Avatar>
              </div>
              <div>
                <CardTitle className="text-base">AztroSys Agent</CardTitle>
                <p className="text-xs text-slate-300">Online | AI Powered</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800 h-8 w-8" onClick={() => setIsOpen(false)}>
              <Minimize2 size={18} />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 p-0 overflow-hidden bg-slate-50 relative">
            <ScrollArea className="h-full p-4" ref={scrollRef}>
              <div className="space-y-4 pb-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                        msg.role === "user"
                          ? "bg-teal-600 text-white rounded-br-none"
                          : msg.isError 
                            ? "bg-red-50 text-red-600 border border-red-200 rounded-bl-none"
                            : "bg-white text-slate-700 border border-slate-200 rounded-bl-none"
                      }`}>
                      {msg.isError && <AlertCircle className="w-4 h-4 inline mr-2 -mt-0.5"/>}
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                     <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-2 text-xs text-slate-500">
                        <Loader2 className="h-3 w-3 animate-spin text-teal-600" /> Thinking...
                     </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-3 bg-white border-t shrink-0">
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
              className="flex w-full items-center gap-2"
            >
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-slate-50 border-slate-200 focus-visible:ring-teal-500"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-teal-600 hover:bg-teal-700 shrink-0">
                <Send size={18} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}

      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-900/20 transition-all hover:scale-110 flex items-center justify-center"
        >
          <MessageSquare className="h-7 w-7 text-white" />
        </Button>
      )}
    </div>
  );
}