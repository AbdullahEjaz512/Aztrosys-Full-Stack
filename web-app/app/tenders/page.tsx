"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const TENDERS = [
  { id: "AZ-2026-001", desc: "Procurement of Enterprise Server Racks & Cooling Units", date: "Feb 20, 2026", status: "Active", type: "Hardware" },
  { id: "AZ-2026-002", desc: "Software License Renewal (Microsoft & Adobe Ent)", date: "Mar 05, 2026", status: "Active", type: "Software" },
  { id: "AZ-2025-098", desc: "Office Networking Infrastructure Overhaul (Islamabad)", date: "Jan 10, 2026", status: "Closed", type: "Infrastructure" },
  { id: "AZ-2025-085", desc: "Supply of High-Performance Laptops for Dev Team", date: "Dec 15, 2025", status: "Closed", type: "Hardware" },
];

export default function TendersPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-teal-500 selection:text-white flex flex-col">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/30 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10 px-4">
            <Badge variant="outline" className="mb-6 border-teal-500/50 text-teal-400 px-4 py-1 uppercase tracking-widest">
                Procurement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Active Tenders</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Current opportunities, procurement notices, and archival records.
            </p>
        </div>
      </section>

      {/* TENDERS LIST */}
      <section className="container mx-auto px-6 pb-32 flex-1 max-w-5xl">
        <div className="space-y-4">
            {TENDERS.map((t, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col md:flex-row items-center justify-between p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-teal-500/50 hover:bg-slate-900 hover:shadow-2xl transition-all duration-300"
                >
                    <div className="flex items-start gap-6 w-full md:w-auto">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-700 bg-slate-800 group-hover:scale-110 transition-transform ${t.status === 'Active' ? 'text-teal-400' : 'text-slate-500'}`}>
                            <FileText size={24} />
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <span className="font-mono text-xs font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                                    {t.id}
                                </span>
                                <Badge variant="outline" className={`${t.status === "Active" ? "border-green-500/50 text-green-400 bg-green-500/10" : "border-slate-700 text-slate-500"}`}>
                                    {t.status}
                                </Badge>
                                <span className="text-xs text-slate-500 font-medium px-2 py-1 rounded bg-slate-800/50">{t.type}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                                {t.desc}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                                <Clock size={14} /> Deadline: {t.date}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-0 w-full md:w-auto flex justify-end">
                        {t.status === "Active" ? (
                            <Button className="bg-teal-600 hover:bg-teal-500 text-white gap-2 shadow-lg shadow-teal-900/20">
                                <Download size={16} /> Download Docs
                            </Button>
                        ) : (
                            <Button disabled variant="outline" className="border-slate-800 text-slate-600 bg-transparent">
                                Closed
                            </Button>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
        
        <div className="mt-12 p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl flex items-start gap-4">
            <AlertCircle className="text-blue-400 shrink-0 mt-1" />
            <div>
                <h4 className="text-blue-100 font-bold">Vendor Notice</h4>
                <p className="text-sm text-blue-200/70 mt-1">
                    All proposals must be submitted via the <span className="text-white font-semibold">Agent Portal</span> or physically at our Head Office before the deadline. Late submissions will be rejected.
                </p>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}