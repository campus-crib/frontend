"use client";
import { useEffect, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  py-4 
            ${isScrolled ? 'top-2' : 'top-0'}`}
        >
            <nav
                className={`max-w-7xl w-full mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300
                ${isScrolled
                        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-cool-slate/5 border border-warm-grey'
                        : 'bg-transparent border-border/0'}`}
            >
                {/* --- Logo Block --- */}
                <div className="group cursor-pointer flex items-center gap-3">
                    {/* <div className="relative">
                        <div className="w-10 h-10 bg-burnt-amber rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                        <div className="absolute inset-0 w-10 h-10 bg-cool-slate rounded-xl -rotate-6 group-hover:rotate-0 transition-transform duration-300 -z-10 opacity-20" />
                    </div> */}
                    <span className="font-header font-black text-2xl tracking-tighter text-cool-slate uppercase">
                        Campus <span className="text-burnt-amber">Crib</span>
                    </span>
                </div>

                {/* --- Navigation Links --- */}
                <div className="hidden md:flex items-center gap-10 font-body font-bold text-sm tracking-tight text-slate-500">
                    <a href="#lighthouse" className="relative group hover:text-cool-slate transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-burnt-amber animate-pulse" />
                        The Lighthouse
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-burnt-amber transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a href="#verified" className="relative group hover:text-cool-slate transition-colors">
                        Verified Cribs
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cool-slate transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a href="#roommates" className="relative group hover:text-cool-slate transition-colors">
                        Roommates
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cool-slate transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>

                {/* --- Action Buttons --- */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block font-header font-extrabold text-xs uppercase tracking-widest text-cool-slate hover:text-burnt-amber transition-colors">
                        Sign In
                    </button>

                    <button className="group relative overflow-hidden bg-cool-slate text-white px-7 py-3 rounded-xl font-header font-black text-xs uppercase tracking-widest hover:bg-burnt-amber transition-all duration-500 shadow-xl shadow-cool-slate/10">
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    </button>
                </div>
            </nav>
        </header>
    );
}