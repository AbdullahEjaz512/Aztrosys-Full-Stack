"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900 font-sans flex flex-col">
      <Navbar />
      
      {/* HEADER SECTION */}
      <div className="bg-slate-950 text-white pt-32 pb-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/30 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Let's Build Together</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Reach out for inquiries, project proposals, or support. We are available 24/7 to assist you.
            </p>
         </div>
      </div>
      
      {/* MAIN CONTENT (Overlapping Cards) */}
      <div className="container mx-auto px-6 -mt-20 pb-20 relative z-20 flex-1">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* LEFT: INFO CARDS */}
          <div className="space-y-6">
            
            {/* 1. Addresses [cite: 274] */}
            <Card className="p-8 border-none shadow-xl bg-white/95 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                  <Globe className="text-teal-600"/> Our Locations
                </h3>
                <div className="space-y-6">
                    <div className="flex gap-4 group">
                        <div className="h-12 w-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                          <MapPin size={20}/>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Head Office</h4>
                            <p className="text-slate-500 text-sm">Office #5, 1st Floor, Opp High Courts, G-10 Markaz, Islamabad</p>
                        </div>
                    </div>
                    <div className="flex gap-4 group">
                        <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <MapPin size={20}/>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Sub Office</h4>
                            <p className="text-slate-500 text-sm">Office #2, 1st Floor, MB City Mall, I-8 Markaz, Islamabad</p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* 2. Contact Details [cite: 275-284] */}
            <Card className="p-8 border-none shadow-xl bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-6">
                    {/* Phones */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <Phone className="text-teal-400 shrink-0" size={20} /> 
                            <span className="text-lg">+92-308-5608886</span>
                        </div>
                        <div className="flex items-center gap-4 pl-9 text-slate-400 text-sm">
                            <span>+92-308-5494369</span>
                        </div>
                        <div className="flex items-center gap-4 pl-9 text-slate-400 text-sm">
                            <span>+92-51-5922191 (Tel)</span>
                        </div>
                    </div>

                    <hr className="border-slate-800" />

                    {/* Emails */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <Mail className="text-teal-400 shrink-0" size={20} /> 
                            <span className="text-lg">info@aztrosys.com</span>
                        </div>
                        <div className="flex items-center gap-4 pl-9 text-slate-400 text-sm">
                            <span>projects@aztrosys.com</span>
                        </div>
                        <div className="flex items-center gap-4 pl-9 text-slate-400 text-sm">
                            <span>ceo@aztrosys.com</span>
                        </div>
                    </div>
                </div>
            </Card>
          </div>

          {/* RIGHT: CONTACT FORM [cite: 273] */}
          <Card className="p-8 md:p-10 shadow-2xl border-none h-full bg-white">
            {submitted ? (
              <div className="text-center py-20 h-full flex flex-col justify-center items-center">
                <div className="h-24 w-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 mt-2 text-lg">We will get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 rounded-full border-slate-300">Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <Input placeholder="John" className="h-12 bg-slate-50 border-slate-200 focus:border-teal-500 transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <Input placeholder="Doe" className="h-12 bg-slate-50 border-slate-200 focus:border-teal-500 transition-colors" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <Input type="email" placeholder="john@company.com" className="h-12 bg-slate-50 border-slate-200 focus:border-teal-500 transition-colors" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Project Type</label>
                  <Input placeholder="e.g. AI, Web Dev, Hardware..." className="h-12 bg-slate-50 border-slate-200 focus:border-teal-500 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Project Details</label>
                  <Textarea placeholder="Tell us about your goals..." className="h-40 bg-slate-50 border-slate-200 resize-none p-4 focus:border-teal-500 transition-colors" required />
                </div>
                
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white h-14 text-lg font-bold rounded-xl shadow-lg shadow-teal-500/20 transition-all hover:scale-[1.01]">
                  Send Message
                </Button>
              </form>
            )}
          </Card>

        </div>
      </div>

      {/* GOOGLE MAP INTEGRATION  */}
      <section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.462377286696!2d73.0232593152063!3d33.69348888070505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe5d65555555%3A0x6555555555555555!2sG-10%20Markaz%20Islamabad!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          className="absolute inset-0"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}