"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Calendar, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-teal-500 selection:text-white flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10 px-4">
            <Badge variant="outline" className="mb-6 border-purple-500/50 text-purple-400 px-4 py-1 uppercase tracking-widest">
                Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Publications & News</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Stay ahead with our latest newsletters, industry insights, and company announcements.
            </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32 flex-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Card className="flex flex-col h-full bg-slate-900 border border-slate-800 overflow-hidden hover:border-purple-500/50 hover:shadow-2xl transition-all duration-300 group">
                        {/* Image Placeholder */}
                        <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-4 left-4">
                                <Badge className="bg-purple-600 hover:bg-purple-500 text-white border-none">
                                    Report
                                </Badge>
                            </div>
                        </div>
                        
                        <CardHeader>
                            <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-2 uppercase tracking-wide">
                                <Zap size={12} /> Technology Trend
                            </div>
                            <CardTitle className="text-xl text-slate-100 group-hover:text-white transition-colors line-clamp-2">
                                The Future of Enterprise AI: Q{item} 2026 Strategic Report
                            </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="flex-1">
                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                An in-depth look at how artificial intelligence and machine learning are reshaping the corporate landscape, focusing on automation and data security in 2026.
                            </p>
                        </CardContent>
                        
                        <CardFooter className="border-t border-slate-800 pt-4 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                <Calendar size={14}/> <span>Jan {item + 10}, 2026</span>
                            </div>
                            <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto font-bold text-sm group/btn">
                                Read Article <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform"/>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}