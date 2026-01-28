"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, Coffee, Globe, ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900 flex flex-col">
      <Navbar />
      
      {/* HERO SECTION (Dark Premium) */}
      <section className="pt-32 pb-20 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-900/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Badge variant="outline" className="mb-6 text-teal-400 border-teal-500/50 px-4 py-1 uppercase tracking-widest">
                    We are Hiring
                </Badge>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                    Join AztroSys
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Build the future with us. We are looking for passionate innovators to join our team of 50+ experts serving 500+ global clients.
                </p>
            </motion.div>
        </div>
      </section>

      {/* BENEFITS GRID (Bento Style) */}
      <section className="container mx-auto px-6 -mt-10 relative z-20">
          <div className="grid md:grid-cols-4 gap-6">
              {[
                  { icon: Zap, title: "Innovation", desc: "Work on cutting-edge AI & IoT projects.", color: "text-yellow-500" },
                  { icon: Users, title: "Growth", desc: "Mentorship from industry leaders.", color: "text-blue-500" },
                  { icon: Globe, title: "Global Impact", desc: "Clients across 35 countries.", color: "text-green-500" },
                  { icon: Coffee, title: "Culture", desc: "Flexible hours & fun environment.", color: "text-purple-500" }
              ].map((b, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="text-center p-8 bg-white rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                        <div className={`h-12 w-12 mx-auto mb-4 bg-slate-50 rounded-full flex items-center justify-center ${b.color}`}>
                            <b.icon size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">{b.title}</h3>
                        <p className="text-slate-500 text-sm">{b.desc}</p>
                    </Card>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* 1. JOBS SECTION [cite: 249-250] */}
      <section className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-3 mb-10">
            <Briefcase className="text-teal-600" />
            <h2 className="text-3xl font-bold text-slate-900">Open Positions</h2>
        </div>
        
        <div className="grid gap-6 max-w-5xl mx-auto">
          {[
            { role: "Senior Full Stack Developer", loc: "Islamabad (On-site)", type: "Full-time", tags: ["React", "Python", "PostgreSQL"] },
            { role: "AI/ML Engineer", loc: "Remote / Hybrid", type: "Full-time", tags: ["PyTorch", "TensorFlow", "RAG"] },
            { role: "Business Development Manager", loc: "Islamabad", type: "Full-time", tags: ["Sales", "B2B", "Communication"] },
          ].map((job, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ delay: i * 0.1 }}
            >
                <Card className="flex flex-col md:flex-row items-center justify-between p-8 hover:shadow-lg transition-all border border-slate-200 bg-white group cursor-pointer hover:border-teal-500/30">
                <div className="mb-4 md:mb-0 w-full">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl mb-2 font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                                {job.role}
                            </CardTitle>
                            <div className="flex gap-4 text-sm text-slate-500 mb-4 font-medium">
                                <span className="flex items-center gap-1"><Globe size={14}/> {job.loc}</span> 
                                <span className="text-slate-300">|</span> 
                                <span className="text-teal-600 bg-teal-50 px-2 py-0.5 rounded text-xs uppercase tracking-wide">{job.type}</span>
                            </div>
                        </div>
                        <Button variant="outline" className="hidden md:flex rounded-full group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all">
                            View Details <ArrowRight size={16} className="ml-2"/>
                        </Button>
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                        {job.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
                <Button className="w-full md:hidden mt-6 bg-teal-600">Apply Now</Button>
                </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. INTERNSHIPS SECTION [cite: 251-252] */}
      <section className="container mx-auto px-4 pb-24">
        <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Internship Programs</h2>
        </div>
        
        <div className="grid gap-6 max-w-5xl mx-auto">
          {[
            { role: "Frontend Development Intern", loc: "Remote", type: "Internship", duration: "3 Months", tags: ["React", "Tailwind"] },
            { role: "UI/UX Design Intern", loc: "Islamabad", type: "Internship", duration: "3 Months", tags: ["Figma", "Adobe XD"] },
          ].map((job, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ delay: i * 0.1 }}
            >
                <Card className="flex flex-col md:flex-row items-center justify-between p-6 hover:shadow-md transition-all border border-blue-100 bg-blue-50/50 group cursor-pointer">
                <div className="mb-4 md:mb-0 w-full">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-xl mb-2 font-bold text-slate-800">
                                {job.role}
                            </CardTitle>
                            <div className="flex gap-4 text-sm text-slate-500 mb-2 font-medium">
                                <span className="flex items-center gap-1"><Globe size={14}/> {job.loc}</span> 
                                <span className="text-slate-300">|</span> 
                                <span className="text-blue-600 bg-blue-100 px-2 py-0.5 rounded text-xs uppercase tracking-wide">{job.type}</span>
                                <span className="text-slate-300">|</span> 
                                <span>{job.duration}</span>
                            </div>
                        </div>
                        <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hidden md:flex">
                            Apply <ArrowRight size={16} className="ml-2"/>
                        </Button>
                    </div>
                </div>
                <Button className="w-full md:hidden mt-4 bg-blue-600">Apply Now</Button>
                </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}