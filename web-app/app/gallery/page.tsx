"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col selection:bg-teal-500 selection:text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10 px-4">
            <Badge variant="outline" className="mb-6 border-indigo-500/50 text-indigo-400 px-4 py-1 uppercase tracking-widest">
                Our Culture
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Gallery & Events</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                A glimpse into our events, office culture, and successful projects.
            </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32 flex-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Generating placeholders for gallery */}
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-square bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer relative group">
                    {/* Placeholder Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                        <ImageIcon size={48} opacity={0.2} />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                        <ZoomIn size={24} className="mb-2 text-teal-400"/>
                        <span className="font-bold text-sm">Event Name {i+1}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}