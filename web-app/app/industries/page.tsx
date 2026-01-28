"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Landmark, Signal, Stethoscope, GraduationCap, Building2, Factory, Briefcase, ShoppingCart, Globe } from "lucide-react";
import { motion } from "framer-motion";

const INDUSTRIES = [
    { name: "Banking & Finance", icon: Landmark, desc: "Secure transaction systems, fintech infrastructure, and high-frequency trading networks." },
    { name: "Telecommunications", icon: Signal, desc: "5G network optimization, fiber optics deployment, and large-scale connectivity solutions." },
    { name: "Healthcare", icon: Stethoscope, desc: "HIPAA-compliant hospital management systems, patient data security, and telemedicine." },
    { name: "Education", icon: GraduationCap, desc: "E-learning platforms, campus digitization, and smart classroom technologies." },
    { name: "Government", icon: Building2, desc: "Public sector digitization, secure data archives, and e-governance portals." },
    { name: "Manufacturing", icon: Factory, desc: "Industrial IoT (IIoT), supply chain automation, and smart factory integration." },
    { name: "Private Institutions", icon: Briefcase, desc: "Corporate IT strategies, workspace solutions, and enterprise resource planning (ERP)." },
    { name: "Multinationals", icon: Globe, desc: "Global compliance, cross-border IT management, and unified communication systems." },
    { name: "Retail", icon: ShoppingCart, desc: "POS systems, e-commerce platforms, and real-time inventory management." },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-teal-500 selection:text-white flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Industries Served</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Delivering specialized, high-impact IT solutions across 35+ diverse sectors globally.
            </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32 flex-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                >
                    <Card className="h-full bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="h-14 w-14 rounded-xl flex items-center justify-center bg-slate-800 border border-slate-700 text-slate-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-500 transition-colors duration-300 shadow-lg">
                                <ind.icon size={28} />
                            </div>
                            <CardTitle className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                                {ind.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                {ind.desc}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}