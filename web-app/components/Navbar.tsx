"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Cpu, Menu, Globe, ChevronDown, UserCircle } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState("EN");

  // FIX: Added ALL new dark pages here so text turns WHITE
  const isDarkHeader = [
    "/", 
    "/work", 
    "/services", 
    "/contact", 
    "/careers", 
    "/payment-methods",
    "/industries",
    "/publications",
    "/tenders",
    "/gallery",
    "/agent-login"
  ].includes(pathname);
  
  const textColor = isDarkHeader ? "text-white" : "text-slate-900";
  const hoverColor = isDarkHeader ? "hover:text-teal-400" : "hover:text-teal-600";
  const logoColor = isDarkHeader ? "text-white" : "text-slate-900";
  const mobileBtnColor = isDarkHeader ? "text-white" : "text-slate-900";

  const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" }, // Points to Home Section
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Work", path: "/work" },
    { name: "Publications", path: "/publications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/10 border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className={`flex items-center gap-2 font-bold text-2xl tracking-tighter ${logoColor}`}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg">
            <Cpu size={20} />
          </div>
          AztroSys
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-6">
          {NAV_ITEMS.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`text-sm font-semibold transition-colors ${textColor} ${hoverColor} ${pathname === link.path ? "text-teal-400 underline decoration-2 underline-offset-4" : ""}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language */}
          <div className="relative group h-full flex items-center cursor-pointer">
             <div className={`flex items-center gap-1 text-xs font-bold ${textColor}`}>
                <Globe size={14}/> {lang} <ChevronDown size={12}/>
             </div>
             <div className="absolute top-full right-0 pt-6 w-32 hidden group-hover:block">
                <div className="bg-white rounded-lg shadow-xl p-2 border border-slate-100 text-slate-800">
                  {["EN", "UR", "AR", "ZH", "PS", "FR", "ES"].map(l => (
                      <div key={l} onClick={() => setLang(l)} className="px-3 py-2 hover:bg-slate-50 rounded cursor-pointer text-xs font-bold transition-colors">{l}</div>
                  ))}
                </div>
             </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild className={`hidden 2xl:flex ${textColor} hover:bg-white/10`}>
                <Link href="/agent-login"><UserCircle size={18} className="mr-2"/> Agent Login</Link>
            </Button>
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-5 font-bold shadow-lg">
                <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </nav>

        {/* MOBILE NAV */}
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={mobileBtnColor}><Menu /></Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {NAV_ITEMS.map(item => (
                    <Link key={item.path} href={item.path} className="text-lg font-bold text-slate-800">{item.name}</Link>
                ))}
                <div className="h-px bg-slate-200 my-2"></div>
                <Link href="/agent-login" className="text-lg font-bold text-slate-600">Agent Login</Link>
                <Link href="/contact" className="text-lg font-bold text-teal-600">Request Quote</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}