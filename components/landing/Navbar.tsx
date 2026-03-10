"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? "top-3" : "top-5"
                }`}
        >
            <nav
                className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 transition-all duration-300 ${isScrolled
                    ? ""
                    : "bg-transparent border-0"
                    }`}
            >
                {/* Logo */}
                <div className={`flex items-center gap-2 cursor-pointer  `}>
                    <span className={`  text-lg font-semibold tracking-tight text-cool-slate ${isScrolled && "hidden"} `}>
                        Campus <span className="text-burnt-amber">Crib</span>
                    </span>
                </div>


                {/* Actions */}
                <div className={` flex items-center gap-10 ${isScrolled && "px-6 py-3 bg-white/70 backdrop-blur-xl border-t border-slate-200 shadow-sm rounded-full"} `}>
                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a
                            href="#lighthouse"
                            className="hover:text-slate-900 transition-colors"
                        >
                            Lighthouse
                        </a>

                        <a
                            href="#verified"
                            className="hover:text-slate-900 transition-colors"
                        >
                            Verified Cribs
                        </a>

                        <a
                            href="#roommates"
                            className="hover:text-slate-900 transition-colors"
                        >
                            Roommates
                        </a>

                        <a href=""
                            className="hover:text-slate-900 transition-colors"
                        >
                            Sign In.
                        </a>
                    </div>

                    <button className="flex items-center gap-2 bg-cool-slate text-white  px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition">
                        Get Started
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </button>
                </div>
            </nav>
        </header>
    );
}