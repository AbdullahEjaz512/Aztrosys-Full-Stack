"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import ChatWidget from "@/components/ChatWidget";
import InteractiveMesh from "@/components/InteractiveMesh";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Code2, Server, Megaphone, ShieldCheck, Cloud, Database, 
  CheckCircle2, User, History, ChevronDown, ArrowRight, Globe, 
  Building2, FileText, Image as ImageIcon, Zap, Award, Briefcase, GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";

// --- TRANSLATIONS ---
const TRANSLATIONS = {
  en: {
    heroTitle: "Building the Future of Tech",
    heroSub: "From Custom Software to Hardware Infrastructure & Digital Marketing.",
    cta: "Explore Services",
    workBtn: "View Our Work"
  }
};

// --- SERVICES DATA [cite: 50-58] ---
const SERVICES_LIST = [
  { id: 1, title: "Cloud & Edge Computing", icon: Cloud, desc: "Migration & Cloud-Native Apps." },
  { id: 2, title: "Cybersecurity", icon: ShieldCheck, desc: "Zero Trust & Compliance." },
  { id: 3, title: "Data Center Infra", icon: Server, desc: "Design, Cooling & Power." },
  { id: 4, title: "Software Dev", icon: Code2, desc: "Web, Mobile & Custom Apps." },
  { id: 5, title: "IoT & AI Solutions", icon: Database, desc: "Smart Analytics & Automation." },
  { id: 6, title: "Managed Services", icon: Zap, desc: "Outsourcing & Support." },
];

// --- WHY CHOOSE US [cite: 60-75] ---
const WHY_CHOOSE_US = [
  { title: "Expertise", desc: "Seasoned professionals in IT & Cyber." },
  { title: "Tailored Solutions", desc: "Strategies designed for your unique challenges." },
  { title: "Innovation", desc: "R&D investment in cutting-edge tech." },
  { title: "Proven Results", desc: "Measurable improvements in efficiency." }
];

// --- PROJECTS [cite: 211-212] ---
const PROJECTS_PREVIEW = [
  { name: "Med-X Pharmacy", tag: "Healthcare", bg: "bg-teal-900" },
  { name: "Hi-Tech Bikes", tag: "E-Commerce", bg: "bg-blue-900" },
  { name: "Citi Lab Portal", tag: "Management", bg: "bg-purple-900" },
  { name: "Govt Infrastructure", tag: "Public Sector", bg: "bg-slate-800" },
];

export default function LandingPage() {
  const t = TRANSLATIONS.en; 

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-slate-950 font-sans selection:bg-teal-500 selection:text-white scroll-smooth">
      
      <Navbar />

      {/* 1. HERO SECTION (Required: Tagline & CTAs) [cite: 42] */}
      <section className="relative h-screen w-full snap-start flex items-center justify-center bg-slate-950 overflow-hidden">
        <InteractiveMesh />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="outline" className="mb-8 border-teal-500/30 text-teal-300 px-6 py-2 text-sm uppercase tracking-[0.2em] backdrop-blur-md">
              Established 2010
            </Badge>
            <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Button size="lg" onClick={() => scrollTo('services')} className="h-16 px-10 text-lg bg-teal-600 hover:bg-teal-500 rounded-full shadow-[0_0_40px_-10px_rgba(20,184,166,0.6)] hover:scale-105 transition-all text-white border-none">
                {t.cta}
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg border-slate-700 text-slate-300 bg-transparent hover:bg-white/5 rounded-full hover:border-white transition-all">
                <Link href="/work">{t.workBtn}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce cursor-pointer" onClick={() => scrollTo('stats')}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2. STATS & WHY CHOOSE US (Required: Stats & Section 6) [cite: 43-49, 59-75] */}
      <section id="stats" className="h-screen w-full snap-start flex items-center bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Why Choose Us Text */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="secondary" className="bg-blue-900/30 text-blue-300 border border-blue-800 mb-6 px-4 py-1">Why AztroSys?</Badge>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Your Trusted Tech Partner</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We are dedicated to unlocking your business potential. With over <span className="text-white font-bold">14 years</span> of experience and <span className="text-white font-bold">500+ successful projects</span>, we deliver innovation that drives real results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-teal-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid [cite: 44-49] */}
          <div className="grid grid-cols-2 gap-4">
             {[
               { title: "Clients Served", val: "5000+", icon: User },
               { title: "Industries", val: "35+", icon: Globe },
               { title: "Experience", val: "14+ Yrs", icon: History },
               { title: "Experts", val: "50+", icon: Award },
             ].map((stat, i) => (
               <Card key={i} className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-colors backdrop-blur-sm text-center py-8">
                    <stat.icon className="h-8 w-8 text-teal-500 mx-auto mb-4" />
                    <h3 className="text-4xl font-bold text-white mb-1">{stat.val}</h3>
                    <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.title}</p>
               </Card>
             ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (Required: Core Services) [cite: 50-58] */}
      <section id="services" className="h-screen w-full snap-start flex items-center bg-slate-950 relative border-t border-slate-900">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Our Ecosystem</h2>
            <p className="text-slate-400 text-xl">Comprehensive IT solutions tailored for growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            {SERVICES_LIST.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href="/services">
                  <Card className="group h-full border border-slate-800 bg-slate-900 hover:bg-slate-800 transition-all duration-300 cursor-pointer hover:-translate-y-2">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="h-12 w-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-500 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 border border-slate-700">
                        <service.icon size={22} />
                      </div>
                      <CardTitle className="text-lg font-bold text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm">{service.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="link" className="text-teal-400 text-lg">
                <Link href="/services">View All Services <ArrowRight className="ml-2" size={18}/></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES (Required: 79) */}
      <section className="h-screen w-full snap-start flex flex-col justify-center bg-slate-950 relative border-t border-slate-900">
        <div className="container mx-auto px-4 mb-8 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
              <p className="text-slate-400">Delivering excellence across 35+ industries.</p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
              <Link href="/work">{t.workBtn} <ArrowRight size={16} className="ml-2"/></Link>
            </Button>
        </div>

        <div className="w-full overflow-x-auto pb-10 px-4 scrollbar-hide snap-x snap-mandatory flex gap-6 container mx-auto">
          {PROJECTS_PREVIEW.map((proj, i) => (
            <motion.div 
              key={i} 
              className="min-w-[85vw] md:min-w-[400px] h-[400px] snap-center relative rounded-3xl overflow-hidden group cursor-pointer shadow-xl border border-slate-800"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`absolute inset-0 ${proj.bg} opacity-90 transition-opacity`}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-6xl rotate-[-10deg]">PROJECT</div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <Badge className="w-fit mb-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border-none text-white">
                  {proj.tag}
                </Badge>
                <h3 className="text-3xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">{proj.name}</h3>
                <div className="mt-6 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-all delay-100">
                  VIEW CASE STUDY <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. EXPLORE RESOURCES (Industries, Tenders, Pubs, Careers) [cite: 78, 80, 81, 82] */}
      <section className="h-screen w-full snap-start flex flex-col justify-center bg-slate-950 relative border-t border-slate-900">
        <div className="container mx-auto px-4 text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Explore AztroSys</h2>
            <p className="text-slate-400">Discover our reach and opportunities.</p>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
                
                {/* 1. Industries */}
                <Link href="/industries">
                    <Card className="bg-slate-900/50 border border-slate-800 p-6 hover:border-blue-500/50 transition-colors group cursor-pointer h-full flex flex-col items-start hover:bg-slate-900">
                        <div className="mb-4 bg-blue-900/20 w-fit p-3 rounded-lg text-blue-400"><Building2 size={28}/></div>
                        <h3 className="text-2xl font-bold text-white mb-2">Industries Served</h3>
                        <p className="text-slate-400 text-sm">Specialized solutions across 35+ sectors including Govt, Finance, and Healthcare.</p>
                        <span className="mt-4 text-blue-400 text-sm font-bold flex items-center">Explore Industries <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform"/></span>
                    </Card>
                </Link>

                {/* 2. Tenders */}
                <Link href="/tenders">
                    <Card className="bg-slate-900/50 border border-slate-800 p-6 hover:border-teal-500/50 transition-colors group cursor-pointer h-full flex flex-col items-start hover:bg-slate-900">
                        <div className="mb-4 bg-teal-900/20 w-fit p-3 rounded-lg text-teal-400"><FileText size={28}/></div>
                        <h3 className="text-2xl font-bold text-white mb-2">Active Tenders</h3>
                        <p className="text-slate-400 text-sm">Current procurement notices. Status: <span className="text-green-400 font-bold">Active</span>.</p>
                        <span className="mt-4 text-teal-400 text-sm font-bold flex items-center">View Tenders <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform"/></span>
                    </Card>
                </Link>

                {/* 3. Publications */}
                <Link href="/publications">
                    <Card className="bg-slate-900/50 border border-slate-800 p-6 hover:border-purple-500/50 transition-colors group cursor-pointer h-full flex flex-col items-start hover:bg-slate-900">
                        <div className="mb-4 bg-purple-900/20 w-fit p-3 rounded-lg text-purple-400"><Megaphone size={28}/></div>
                        <h3 className="text-2xl font-bold text-white mb-2">Publications</h3>
                        <p className="text-slate-400 text-sm">Newsletters, insights, and company announcements.</p>
                        <span className="mt-4 text-purple-400 text-sm font-bold flex items-center">Read News <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform"/></span>
                    </Card>
                </Link>

                {/* 4. Careers Highlight (ADDED as per Doc) */}
                <Link href="/careers">
                    <Card className="bg-slate-900/50 border border-slate-800 p-6 hover:border-orange-500/50 transition-colors group cursor-pointer h-full flex flex-col items-start hover:bg-slate-900">
                        <div className="mb-4 bg-orange-900/20 w-fit p-3 rounded-lg text-orange-400"><Briefcase size={28}/></div>
                        <h3 className="text-2xl font-bold text-white mb-2">Join Our Team</h3>
                        <p className="text-slate-400 text-sm">Explore open positions and internship programs. We are hiring.</p>
                        <span className="mt-4 text-orange-400 text-sm font-bold flex items-center">View Careers <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform"/></span>
                    </Card>
                </Link>

            </div>
        </div>
      </section>

      {/* 6. GALLERY, CTA & FOOTER (Required: 83, 84, 85) */}
      <section className="min-h-screen w-full snap-start flex flex-col justify-between bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="py-20 container mx-auto px-4 flex-1 flex flex-col justify-center">
            {/* Gallery Strip [cite: 83] */}
            <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-bold text-white">Life at AztroSys</h2>
                <Link href="/gallery" className="text-teal-400 hover:text-teal-300 flex items-center">View Full Gallery <ArrowRight size={16} className="ml-2"/></Link>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-20">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="aspect-square bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-slate-600 hover:border-teal-500/30 transition-colors">
                        <ImageIcon size={32} opacity={0.5}/>
                    </div>
                ))}
            </div>

            {/* Final CTA [cite: 84] */}
            <div className="text-center">
              <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 mb-6 tracking-tighter">
                Ready to Scale?
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
                Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button asChild size="lg" className="h-16 px-12 text-xl bg-white text-slate-950 hover:bg-teal-50 rounded-full shadow-2xl font-bold">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 px-12 text-xl border-slate-700 text-slate-300 bg-transparent hover:bg-slate-900 rounded-full hover:text-white">
                  <Link href="/careers">Join Team</Link>
                </Button>
              </div>
            </div>
        </div>
        
        {/* Footer [cite: 85] */}
        <div className="w-full relative z-20 bg-white">
           <Footer />
        </div>
      </section>

      <ChatWidget />
    </div>
  );
}