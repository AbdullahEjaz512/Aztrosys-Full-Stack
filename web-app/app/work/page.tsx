"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Code2, Server, Smartphone, ShieldCheck, Megaphone, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Categories based on "Core Services Overview" [cite: 50-55]
const CATEGORIES = ["All", "Software", "Hardware", "Marketing", "AI & IoT"];

// Projects utilizing Clients from PDF  and Services from Doc [cite: 89-194]
const PROJECTS = [
  { 
    id: 1, 
    title: "Med-X POS System", // Client: Med-X Pharmacy [cite: 656]
    cat: "Software", 
    tag: "Healthcare Retail", 
    // Service: Custom Software Development [cite: 150]
    desc: "A custom retail solution processing transactions daily with real-time inventory syncing, designed for pharmaceutical retail compliance.", 
    icon: Code2, 
    color: "from-teal-500 to-emerald-500" 
  },
  { 
    id: 2, 
    title: "Govt Data Center", // Industry: Government [cite: 201]
    cat: "Hardware", 
    tag: "Infrastructure", 
    // Service: Data Center & IT Infrastructure [cite: 96]
    desc: "End-to-end deployment of a Data Center including cooling systems, power backup (UPS/Generators), and military-grade firewalls.", 
    icon: Server, 
    color: "from-blue-600 to-indigo-600" 
  },
  { 
    id: 3, 
    title: "Hi-Tech E-Commerce", // Client: Hi-Tech Bikes [cite: 652]
    cat: "Software", 
    tag: "Retail", 
    // Service: Web Development & E-commerce [cite: 153]
    desc: "Next-gen e-commerce platform featuring responsive design and seamless user experience for the retail bicycle market.", 
    icon: Smartphone, 
    color: "from-purple-500 to-pink-500" 
  },
  { 
    id: 4, 
    title: "Corporate Digital Drive", // Service: Digital Marketing [cite: 224]
    cat: "Marketing", 
    tag: "Growth", 
    // Service: SEO & Social Media Management [cite: 231, 234]
    desc: "Omnichannel digital marketing campaign increasing lead generation through targeted SEO, Social Media Management, and PPC.", 
    icon: Megaphone, 
    color: "from-orange-500 to-red-500" 
  },
  { 
    id: 5, 
    title: "Bank Security Audit", // Industry: Banking & Finance [cite: 197]
    cat: "Hardware", 
    tag: "Cybersecurity", 
    // Service: Cybersecurity & Compliance [cite: 94]
    desc: "Comprehensive penetration testing and zero-trust architecture implementation to safeguard financial assets.", 
    icon: ShieldCheck, 
    color: "from-slate-600 to-slate-800" 
  },
  { 
    id: 6, 
    title: "Smart City Solutions", // Service: IoT & AI Solutions [cite: 55]
    cat: "AI & IoT", 
    tag: "Innovation", 
    // Service: IoT Solutions [cite: 430]
    desc: "Developing IoT sensors for real-time data management and operational efficiency in urban environments.", 
    icon: Cpu, 
    color: "from-cyan-400 to-blue-500" 
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-teal-500 selection:text-white flex flex-col">
      <Navbar />
      
      {/* HEADER SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-900/30 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                  Featured Case Studies
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  We don't just build software; we engineer digital transformations. Explore our portfolio spanning 35+ industries.
                </p>
            </motion.div>

            {/* FILTER TABS */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    filter === cat 
                      ? "bg-white text-slate-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                      : "bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
         </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="container mx-auto px-6 pb-32 flex-1">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors"
              >
                {/* Image Placeholder Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <div className="absolute top-6 right-6 h-12 w-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-all">
                    <project.icon className="text-white w-6 h-6" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <Badge variant="outline" className="w-fit mb-4 border-white/20 text-white/70 backdrop-blur-sm">
                        {project.tag}
                    </Badge>
                    
                    <h3 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                        {project.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors">
                        {project.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-teal-400 uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Case Study <ArrowUpRight size={16} />
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] group-hover:bg-teal-500/40 transition-all duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}