"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, Cloud, ShieldCheck, Megaphone, Server, Printer, 
  Briefcase, Users, Layers, AppWindow, Settings
} from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Cloud & Edge Computing",
    desc: "Take your business to the next level. We help you migrate to the cloud, develop cloud-native applications, and leverage edge technologies to accelerate operations.", 
    icon: Cloud,
    tags: ["Migration", "Cloud-Native", "Edge Tech"],
    colSpan: "md:col-span-2",
    gradient: "from-teal-500/20 to-emerald-500/20",
    border: "group-hover:border-teal-500/50"
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Secure your future. We provide advanced security assessments and tailored protection for your IT environment, safeguarding your business from threats.", 
    icon: ShieldCheck,
    tags: ["Zero Trust", "Audits", "Compliance"],
    colSpan: "md:col-span-1",
    gradient: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "Data Center & Infrastructure",
    desc: "Optimize your IT backbone. From planning and design to deployment and documentation, we ensure your datacenter is resilient, scalable, and easy to manage.", 
    icon: Server,
    tags: ["Planning", "Power Systems", "Cooling"],
    colSpan: "md:col-span-1",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Software Development",
    desc: "We create tailored software solutions that meet your unique needs, whether for web, mobile, or desktop. Includes Custom Dev, Web Dev, and Mobile Apps.", 
    icon: Code2,
    tags: ["Custom Apps", "Web", "Mobile"],
    colSpan: "md:col-span-2",
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "group-hover:border-indigo-500/50"
  },
  {
    title: "Microsoft Services",
    desc: "Comprehensive solutions including System Center, Exchange Server, Windows Server, SQL Server, and Azure Cloud services to build and manage applications at scale.", 
    icon: AppWindow,
    tags: ["Azure", "SQL Server", "Exchange"],
    colSpan: "md:col-span-1",
    gradient: "from-sky-500/20 to-blue-600/20",
    border: "group-hover:border-sky-500/50"
  },
  {
    title: "Printing Solutions",
    desc: "Tailored printing solutions combining quality and efficiency. We offer Managed Print Services (MPS), Digital Printing, Large Format, and Eco-Friendly options.", 
    icon: Printer,
    tags: ["MPS", "Large Format", "Eco-Friendly"],
    colSpan: "md:col-span-1",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50"
  },
  {
    title: "Digital Marketing",
    desc: "Enhance brand visibility and generate qualified leads. Includes SEO, Social Media Management, Google & Meta Ads, and Email Marketing campaigns.", 
    icon: Megaphone,
    tags: ["SEO", "PPC", "Branding"],
    colSpan: "md:col-span-1",
    gradient: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50"
  },
  {
    title: "Virtualization",
    desc: "Empower your team with Desktop, Server, and Application virtualization. Centralize management, reduce costs, and simplify IT administration.", 
    icon: Layers,
    tags: ["Desktop", "Server", "App Virtualization"],
    colSpan: "md:col-span-2",
    gradient: "from-cyan-500/20 to-teal-500/20",
    border: "group-hover:border-cyan-500/50"
  },
  {
    title: "Consulting & Services",
    desc: "Our architects provide advisory services for IT Assessments, Project Management, Disaster Recovery, and Site Infrastructure Documentation.", 
    icon: Briefcase,
    tags: ["Strategy", "Project Mgmt", "Disaster Recovery"],
    colSpan: "md:col-span-1",
    gradient: "from-yellow-500/20 to-amber-500/20",
    border: "group-hover:border-yellow-500/50"
  },
  {
    title: "Outsourcing",
    desc: "Cost-efficient outsourcing with access to expert professionals, scalability, and operational flexibility. Focus on your core business while we handle the tech.", 
    icon: Users,
    tags: ["Staff Augmentation", "Tech Support"],
    colSpan: "md:col-span-1",
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Deployment & Integration",
    desc: "Expert deployment ensuring smooth installation, cloud integration, data migration, and continuous support for peak performance.", 
    icon: Settings,
    tags: ["Migration", "Integration", "Support"],
    colSpan: "md:col-span-1", // Fixed layout balance
    gradient: "from-slate-500/20 to-gray-500/20",
    border: "group-hover:border-slate-500/50"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-teal-500 selection:text-white flex flex-col">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Badge variant="outline" className="mb-6 border-teal-500/30 text-teal-300 px-4 py-1 uppercase tracking-widest backdrop-blur-md">
                    End-to-End Capabilities
                </Badge>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                    We Build. We Scale. We Secure.
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    AztroSys delivers comprehensive IT services designed to help organizations thrive in the digital age. From Cloud Computing to Managed Printing, we have you covered.
                </p>
            </motion.div>
        </div>
      </section>

      {/* BENTO GRID CONTENT */}
      <section className="container mx-auto px-6 pb-32 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
                <motion.div 
                    key={i} 
                    className={`${s.colSpan}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} // Ensures items stay visible once loaded
                    transition={{ delay: i * 0.05 }}
                >
                    <Card className={`group relative h-full border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 overflow-hidden ${s.border}`}>
                        {/* Gradient Background on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        <CardHeader className="relative z-10">
                            <div className="h-12 w-12 bg-slate-800 rounded-xl flex items-center justify-center shadow-lg mb-4 border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                                <s.icon className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-white">{s.title}</CardTitle>
                        </CardHeader>
                        
                        <CardContent className="relative z-10">
                            <p className="text-slate-400 mb-6 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                                {s.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {s.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
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