"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    const scope = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial Entrance
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.from(".animate-item", {
                y: 80,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
            })
                .from(".floating-card", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                }, "-=0.8");

            // Continuous Floating Animation
            gsap.to(".floating-card", {
                y: "random(-15, 15)",
                x: "random(-10, 10)",
                rotation: "random(-2, 2)",
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.5,
                    from: "random"
                }
            });
        }, scope);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={scope} className="relative px-6 pt-52 pb-40 max-w-7xl mx-auto flex flex-col items-center overflow-visible">

            {/* --- Badge --- */}
            <div className="animate-item inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-warm-grey shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-burnt-amber opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-burnt-amber"></span>
                </span>
                <span className="text-[10px] font-header font-black uppercase tracking-[0.2em] text-cool-slate">
                    The Lighthouse is Active
                </span>
            </div>

            {/* --- Headline --- */}
            <h1 className="animate-item font-header font-black text-6xl md:text-[100px] text-center leading-[0.85] tracking-tighter mb-10 text-cool-slate">
                Stop Refreshing. <br />
                Start <span className="text-burnt-amber italic drop-shadow-sm">Packing.</span>
            </h1>

            <p className="animate-item text-center text-slate-500 font-body max-w-xl mb-12 text-lg">
                The Lighthouse monitors portal openings 24/7. Join <span className="text-cool-slate font-bold">2,400+ students</span> getting instant WhatsApp alerts.
            </p>

            {/* --- Conversion Bar --- */}
            <div className="animate-item w-full max-w-3xl bg-white p-2.5 rounded-[2rem] shadow-2xl shadow-cool-slate/15 border border-warm-grey flex flex-col md:flex-row gap-2 z-20">
                <div className="flex-1 relative group">
                    <select className="w-full h-14 px-6 bg-transparent outline-none font-body font-bold text-lg cursor-pointer appearance-none">
                        <option>Select University</option>
                        <option>UNILAG</option>
                        <option>UI (Ibadan)</option>
                        <option>FUNAAB</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="rotate-90 w-4 h-4" />
                    </div>
                </div>

                <div className="hidden md:block w-px h-8 self-center bg-warm-grey" />

                <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    className="flex-[1.5] h-14 px-6 bg-transparent outline-none font-body font-medium text-lg placeholder:text-slate-300"
                />

                <button className="h-14 px-10 bg-burnt-amber text-white font-header font-black rounded-[1.25rem] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-burnt-amber/20">
                    JOIN WAITLIST <ArrowRight size={20} strokeWidth={3} />
                </button>
            </div>

            {/* --- Floating UI Elements --- */}

            {/* Left Card: Verification */}
            <div className="floating-card absolute hidden xl:flex top-2/4 -left-12 p-5 bg-white rounded-3xl shadow-2xl border border-warm-grey w-60 flex-col gap-4 z-10">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Status</p>
                        <p className="text-sm font-header font-black text-cool-slate">Crib Verified™</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold">
                        <span>Physical Audit</span>
                        <span className="text-green-500">100%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-warm-grey/50">
                        <div className="h-full w-full bg-green-500 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Right Card: Compatibility */}
            <div className="floating-card absolute hidden xl:flex bottom-1/4 -right-12 p-5 bg-white rounded-3xl shadow-2xl border border-warm-grey w-64 flex-col gap-4 z-10">
                <div className="flex items-center justify-between">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 border-4 border-white rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                                <Users size={16} className="text-slate-400" />
                            </div>
                        ))}
                    </div>
                    <div className="bg-burnt-amber/10 text-burnt-amber px-2 py-1 rounded-lg text-[10px] font-black">
                        LIVE MATCH
                    </div>
                </div>
                <div>
                    <p className="text-sm font-header font-black text-cool-slate flex items-center gap-2">
                        98% Match <CheckCircle2 size={14} className="text-green-500" />
                    </p>
                    <p className="text-[10px] text-slate-400 font-body leading-tight mt-1">
                        Found a compatible roommate for your FUNAAB flat.
                    </p>
                </div>
            </div>

        </section>
    );
}