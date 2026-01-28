"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock, User } from "lucide-react";

export default function AgentLoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col selection:bg-teal-500 selection:text-white">
      <Navbar />
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex-1 flex items-center justify-center py-32 px-4 relative z-10">
        <Card className="w-full max-w-md shadow-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl">
            <CardHeader className="text-center space-y-2 border-b border-slate-800 pb-6">
                <div className="mx-auto w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-400 mb-2 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                    <Lock size={24} />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Agent Portal</CardTitle>
                <CardDescription className="text-slate-400">Authorized access for business partners only.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Agent ID / Email</label>
                        <div className="relative group">
                            <User className="absolute left-3 top-3 h-5 w-5 text-slate-500 group-focus-within:text-teal-400 transition-colors" />
                            <Input 
                                placeholder="Enter your ID" 
                                className="pl-10 bg-slate-950 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-500 group-focus-within:text-teal-400 transition-colors" />
                            <Input 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10 bg-slate-950 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" 
                            />
                        </div>
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-500 font-bold text-white h-11 shadow-lg shadow-teal-900/50 transition-all">
                        Secure Login
                    </Button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                        Forgot credentials? Contact <a href="mailto:support@aztrosys.com" className="text-teal-400 hover:underline">Support</a>.
                    </p>
                </form>
            </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}