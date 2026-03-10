"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bell, ShieldCheck, Users, Play, Search, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CampusCrib() {
    const heroRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(".hero-content", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            });

            // Floating Cards Animation
            gsap.to(".floating-card", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.3
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-soft-pearl font-body text-cool-slate overflow-x-hidden">

            {/* --- Navigation --- */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="font-header font-black text-2xl tracking-tighter text-cool-slate flex items-center gap-2">
                    <div className="w-8 h-8 bg-burnt-amber rounded-lg rotate-12" />
                    CAMPUS CRIB
                </div>
                <div className="hidden md:flex gap-8 font-semibold text-sm">
                    <a href="#" className="hover:text-burnt-amber transition-colors">The Lighthouse</a>
                    <a href="#" className="hover:text-burnt-amber transition-colors">Verified Cribs</a>
                    <a href="#" className="hover:text-burnt-amber transition-colors">Roommates</a>
                </div>
                <button className="bg-cool-slate text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-black transition-all">
                    Get Started
                </button>
            </nav>

            {/* --- Hero Section --- */}
            <section ref={heroRef} className="relative px-6 pt-16 pb-32 max-w-7xl mx-auto flex flex-col items-center">
                <div className="hero-content inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-warm-grey shadow-sm mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-burnt-amber animate-pulse" />
                    <span className="text-[10px] font-header font-black uppercase tracking-[0.2em]">The Lighthouse is Active</span>
                </div>

                <h1 className="hero-content font-header font-black text-5xl md:text-8xl text-center leading-[0.9] tracking-tighter mb-8">
                    Your Perfect Crib <br />
                    Is One <span className="text-burnt-amber italic">Bid</span> Away
                </h1>

                {/* --- Multi-Step Search/Capture --- */}
                <div className="hero-content w-full max-w-3xl bg-white p-2 rounded-3xl shadow-2xl shadow-cool-slate/10 border border-warm-grey flex flex-col md:flex-row gap-2">
                    <select className="flex-1 h-14 px-6 bg-transparent outline-none font-bold text-lg cursor-pointer">
                        <option>Select University</option>
                        <option>UNILAG</option>
                        <option>UI (Ibadan)</option>
                        <option>FUNAAB</option>
                    </select>
                    <input
                        type="tel"
                        placeholder="WhatsApp for Portal Alerts"
                        className="flex-[1.5] h-14 px-6 bg-soft-pearl rounded-2xl outline-none focus:ring-2 ring-burnt-amber/20 transition-all"
                    />
                    <button className="h-14 px-10 bg-burnt-amber text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                        JOIN WAITLIST <ArrowRight size={18} />
                    </button>
                </div>

                {/* --- Floating UI Elements (FitMe Style) --- */}
                <div className="hidden xl:block">
                    <div className="floating-card absolute top-40 left-10 p-4 bg-white rounded-2xl shadow-xl border border-warm-grey w-48">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><ShieldCheck /></div>
                            <p className="text-xs font-black">Verified Crib</p>
                        </div>
                        <div className="h-2 w-full bg-warm-grey rounded-full overflow-hidden">
                            <div className="h-full w-[90%] bg-green-500" />
                        </div>
                    </div>

                    <div className="floating-card absolute top-60 right-10 p-4 bg-white rounded-2xl shadow-xl border border-warm-grey w-56">
                        <div className="flex -space-x-3 mb-3">
                            {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 border-4 border-white rounded-full bg-slate-200" />)}
                        </div>
                        <p className="text-sm font-bold">Roommate Match</p>
                        <p className="text-[10px] text-slate-400">98% Compatibility Found</p>
                    </div>
                </div>
            </section>

            {/* --- Feature Grid --- */}
            <section className="bg-white py-24 border-t border-warm-grey">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Card: The Lighthouse */}
                    <div className="group">
                        <div className="w-16 h-16 bg-burnt-amber/10 rounded-3xl flex items-center justify-center text-burnt-amber mb-8 group-hover:rotate-12 transition-transform">
                            <Bell size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-header font-bold text-2xl mb-4 text-cool-slate">The Lighthouse</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">
                            We monitor the school portal so you don{`'`}t have to. Get an instant WhatsApp trigger the moment rooms are available.
                        </p>
                    </div>

                    {/* Card: Crib Verified™ */}
                    <div className="group">
                        <div className="relative aspect-video bg-slate-100 rounded-[2rem] overflow-hidden mb-8 border border-warm-grey">
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-cool-slate shadow-xl cursor-pointer hover:scale-110 transition-transform">
                                    <Play fill="currentColor" size={20} />
                                </div>
                            </div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase">4K Tour</div>
                        </div>
                        <h3 className="font-header font-bold text-2xl mb-4 text-cool-slate">Crib Verified™</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">
                            Every hostel on our platform is physically inspected. No scams, no fake photos, just transparency.
                        </p>
                    </div>

                    {/* Card: Roommate Match */}
                    <div className="group">
                        <div className="w-16 h-16 bg-cool-slate/5 rounded-3xl flex items-center justify-center text-cool-slate mb-8 group-hover:scale-110 transition-transform">
                            <Users size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-header font-bold text-2xl mb-4 text-cool-slate">Roommate Match</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">
                            Find partners based on habits, department, and budget. Shared living made easy for the modern student.
                        </p>
                    </div>

                </div>
            </section>

            {/* --- Footer Ticker (FitMe style) --- */}
            <div className="bg-cool-slate py-12 overflow-hidden whitespace-nowrap">
                <div className="flex gap-20 items-center animate-marquee text-white/10 font-header font-black text-6xl md:text-8xl uppercase italic">
                    <span>Secure Your Crib</span>
                    <span>Portal Alerts</span>
                    <span>Verified Hostels</span>
                    <span>Roommate Matching</span>
                </div>
            </div>

        </div>
    );
}