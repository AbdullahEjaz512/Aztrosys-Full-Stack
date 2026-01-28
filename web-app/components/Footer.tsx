"use client";

import Link from "next/link";
import { Cpu, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-slate-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-2xl text-slate-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
                <Cpu size={18} />
              </div>
              AztroSys
            </div>
            <p className="text-sm leading-relaxed">
              Harnessing Technology for a Smarter World. Established in 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-teal-600">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-teal-600">Careers</Link></li>
              <li><Link href="/gallery" className="hover:text-teal-600">Gallery</Link></li>
              <li><Link href="/publications" className="hover:text-teal-600">Publications</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tenders" className="hover:text-teal-600">Tenders</Link></li>
              <li><Link href="/payment-methods" className="hover:text-teal-600">Payment Methods</Link></li>
              <li><Link href="/agent-login" className="hover:text-teal-600">Agents Access</Link></li>
              <li><Link href="/contact" className="hover:text-teal-600">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Official Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Mail size={16} className="text-teal-600"/> info@aztrosys.com</li>
              <li className="flex gap-2"><Mail size={16} className="text-teal-600"/> projects@aztrosys.com</li>
              <li className="flex gap-2"><Phone size={16} className="text-teal-600"/> +92-308-5608886</li>
              <li className="flex gap-2"><MapPin size={16} className="text-teal-600"/> Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} AztroSys IT Solutions (PVT) LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}