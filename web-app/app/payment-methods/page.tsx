"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Building, FileText, Lock, Globe } from "lucide-react";

export default function PaymentMethodsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      
      {/* Header */}
      <section className="bg-slate-900 text-white pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Payment Methods</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Secure and flexible payment options for our valued clients and partners.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8 -mt-20 relative z-20">
        
        {/* 1. Bank Transfer */}
        <Card className="lg:col-span-2 border-none shadow-xl">
            <CardHeader className="border-b border-slate-100 bg-white rounded-t-xl">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                        <Building size={20} />
                    </div>
                    <CardTitle className="text-xl">Bank Transfer Information</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8 bg-white/80 backdrop-blur-sm space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Bank Name</p>
                        <p className="font-bold text-lg">Meezan Bank Ltd</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Account Title</p>
                        <p className="font-bold text-lg">AztroSys IT Solutions</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Account Number</p>
                        <p className="font-mono font-bold text-lg tracking-widest">0101-01010101-01</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">IBAN</p>
                        <p className="font-mono font-bold text-lg tracking-widest">PK36 MEZN 0000 0000 0000 0000</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-md">
                    <Lock size={16} /> 
                    <span>Please verify the Account Title before proceeding with any transaction.</span>
                </div>
            </CardContent>
        </Card>

        {/* 2. Online Payment */}
        <Card className="border-none shadow-xl bg-slate-900 text-white h-fit">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                        <CreditCard size={20} />
                    </div>
                    <CardTitle className="text-xl">Online Payment</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-slate-400 text-sm">
                    Pay securely using your Credit/Debit card or digital wallets. Instant confirmation.
                </p>
                <Button className="w-full h-12 text-lg bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg shadow-lg shadow-teal-500/20">
                    Pay Online Now
                </Button>
                <div className="flex gap-3 justify-center opacity-50">
                    {/* Placeholders for payment icons */}
                    <div className="w-10 h-6 bg-white/20 rounded"></div>
                    <div className="w-10 h-6 bg-white/20 rounded"></div>
                    <div className="w-10 h-6 bg-white/20 rounded"></div>
                </div>
            </CardContent>
        </Card>

        {/* 3. Terms & Conditions */}
        <Card className="lg:col-span-3 border-none shadow-xl bg-white">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <FileText size={20} className="text-slate-400" />
                    <CardTitle className="text-xl">Payment Terms & Conditions</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="text-slate-600 space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                    <li>All invoices are to be paid within 14 days of receipt unless otherwise agreed.</li>
                    <li>Payments must be made in the currency specified on the invoice (PKR/USD).</li>
                    <li>Proof of payment (receipt/screenshot) must be emailed to <strong>accounts@aztrosys.com</strong>.</li>
                    <li>AztroSys reserves the right to suspend services for overdue payments exceeding 30 days.</li>
                </ul>
            </CardContent>
        </Card>

      </div>
      <Footer />
    </div>
  );
}