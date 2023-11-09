'use client';

import SocialLink from "@/app/ui/social-link";
import About from "@/app/ui/about";
import Experience from "@/app/ui/experience";
import NavBar from "@/app/ui/nav-bar";
import React, {useEffect, useState} from "react";
import Project from "@/app/ui/project";

export default function Home() {

    const [windowPosition, setWindowPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    // current about top offset: 95
    // current experience top offset: 534
    function handleScrollEvent() {
        setWindowPosition(window.scrollY);
    }

    return (
        <div className="min-h-screen mx-auto max-w-screen-xl md:px-12 lg:px-24 lg:py-0 px-6 py-12">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <div
                    className="lg:flex lg:sticky lg:top-0 lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:max-h-screen">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">Jacob Chen</h1>
                        <h2 className="text-lg font-medium mt-3 tracking-tight sm:text-xl text-slate-800">Fullstack
                            Engineer</h2>
                        <p className="text-slate-700">I build financial and office automation SaaS products, provide
                            accessible friendly user
                            experience for the web application on the cloud.</p>

                        <NavBar windowPosition={windowPosition}/>
                    </div>

                    <SocialLink/>
                </div>

                <div className="pt-24 lg:w-1/2 lg:py-24">
                    <About/>
                    <Experience/>
                    <Project/>
                    <footer className="max-w-md pb-16 text-sm sm:pb-0 text-slate-500">
                        <p>Coded in <a className="font-medium text-slate-700 hover:text-sky-700"
                                       href="https://www.jetbrains.com/webstorm/" target="_blank">Jetbrains WebStorm</a>.
                            Built with <a className="font-medium text-slate-700 hover:text-sky-700"
                                          href="https://nextjs.org/" target="_blank">Next.js</a> and <a
                                className="font-medium text-slate-700 hover:text-sky-700"
                                href="https://tailwindcss.com/"
                                target="_blank">Tailwind CSS</a> based on <a
                                className="font-medium text-slate-700 hover:text-sky-700"
                                href="https://react.dev/" target="_blank">React.js</a>,
                            deployed with <a className="font-medium text-slate-700 hover:text-sky-700"
                                             href="https://vercel.com/" target="_blank">Vercel</a>.
                            All text is set in the Inter typeface.</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
