"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
    ArrowRight,
    ShieldCheck,
    Users,
    CheckCircle2
} from "lucide-react";
import ConversionBar from "./ConversionBar";

export default function Hero() {
    const scope = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.from(".animate-item", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15
            }).from(
                ".floating-card",
                {
                    scale: 0.9,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                },
                "-=0.7"
            );

            gsap.to(".floating-card", {
                y: "random(-12,12)",
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.4,
                    from: "random"
                }
            });



            // Animate headline words
            gsap.from(".headline-word", {
                opacity: 0,
                y: 30,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Animate subheadline
            gsap.from(".subheadline", {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.8,
                ease: "power3.out",
            });

            // Floating effect for headline
            gsap.to(".headline-word", {
                y: "+=3",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.2,
                duration: 2,
            });

        }, scope);



        return () => ctx.revert();
    }, []);



    return (
        <section
            ref={scope}

            className=" md:pt-10 h-screen bg-white"

        >

            <div className="relative px-6 pt-44 pb-36 max-w-7xl mx-auto flex flex-col gap-5 items-center overflow-visible">

                <div className="animate-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burnt-amber/10 text-burnt-amber text-sm font-semibold shadow-sm hover:shadow-md hover:brightness-105 transition-all">
                    <Users size={16} className="text-burnt-amber" />
                    <span>Trusted by 2,400+ Students</span>
                </div>


                <h1 className="animate-item font-header flex flex-col gap-3 font-black text-5xl md:text-[84px] text-center leading-[0.9] tracking-tight text-cool-slate mb-4">
                    <div>
                        {["Never", "Miss", "Your"].map((word, i) => (
                            <span key={i} className="headline-word inline-block mr-2">
                                {word}
                            </span>
                        ))}
                    </div>

                    <span className="headline-word text-burnt-amber inline-block">
                        Perfect Hostel
                    </span>
                </h1>

                <p className="subheadline text-slate-500 font-body max-w-xl mx-auto text-lg md:text-xl text-center">
                    Lighthouse monitors university housing portals 24/7 and sends instant{" "}
                    <span className="font-bold text-cool-slate">WhatsApp alerts</span> the
                    moment new hostels are available — so you can secure your spot before
                    anyone else.
                </p>


                {/* CTA */}
                <ConversionBar />

                {/* Trust Row */}
                <div className="animate-item mt-6 flex items-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-green-500" />
                        Verified Listings
                    </span>

                    <span className="flex items-center gap-2">
                        <Users size={16} className="text-blue-500" />
                        2400+ Students
                    </span>

                    <span className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500" />
                        Instant Alerts
                    </span>
                </div>

                {/* Floating Cards */}
                <div className="floating-card absolute hidden xl:flex top-1/3 -left-10 p-5 bg-white rounded-2xl shadow-lg border border-warm-grey w-56 flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <ShieldCheck size={22} className="text-green-500" />
                        <p className="font-bold text-sm text-cool-slate">
                            Verified Hostel
                        </p>
                    </div>

                    <p className="text-xs text-slate-400">
                        This property passed our physical inspection.
                    </p>
                </div>

                <div className="floating-card absolute hidden xl:flex bottom-1/4 -right-10 p-5 bg-white rounded-2xl shadow-lg border border-warm-grey w-56 flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <Users size={20} className="text-burnt-amber" />
                        <p className="font-bold text-sm text-cool-slate">
                            Roommate Match
                        </p>
                    </div>

                    <p className="text-xs text-slate-400">
                        Found compatible roommates for your listing.
                    </p>
                </div>
            </div>

        </section>
    );
}