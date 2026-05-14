"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const elementsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        // Trigger for those already in view
        setTimeout(() => {
            elementsRef.current.forEach((el) => {
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        el.classList.add("active");
                    }
                }
            });
        }, 100);

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    return (
        <>
            <div className="fixed inset-0 z-[-1] bg-notebook bg-notebook-pattern pointer-events-none"></div>

            {/* Background SVG Doodles (Floating in background) */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-40">
                {/* Paper Plane */}
                <svg className="absolute top-20 left-10 w-16 h-16 animate-float" viewBox="0 0 100 100">
                    <path className="doodle-stroke" d="M10 50 L90 10 L50 90 L40 60 Z" />
                    <path className="doodle-stroke" d="M10 50 L40 60 L90 10" />
                    <path className="doodle-stroke" strokeDasharray="4 4" d="M-20 70 C 0 80, 5 60, 10 50" />
                </svg>
                {/* Lightbulb */}
                <svg className="absolute bottom-40 left-20 w-12 h-12 animate-float-delayed text-accent" viewBox="0 0 100 100">
                    <path className="doodle-stroke stroke-current" d="M30 40 C30 20, 70 20, 70 40 C70 55, 60 65, 60 75 L40 75 C40 65, 30 55, 30 40 Z" />
                    <path className="doodle-stroke stroke-current" d="M40 85 L60 85 M45 95 L55 95" />
                    <path className="doodle-stroke stroke-current" d="M50 10 L50 0 M20 20 L10 10 M80 20 L90 10" />
                </svg>
                {/* Star */}
                <svg className="absolute top-1/3 right-12 w-10 h-10 animate-float" viewBox="0 0 100 100">
                    <path className="doodle-stroke" d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 75 L25 90 L35 60 L10 40 L40 40 Z" />
                </svg>
                {/* Pencil */}
                <svg className="absolute bottom-20 right-24 w-16 h-16 animate-float-delayed transform rotate-45" viewBox="0 0 100 100">
                    <path className="doodle-stroke" d="M20 80 L80 20 L90 30 L30 90 Z" />
                    <path className="doodle-stroke" d="M20 80 L10 90 L30 90 Z M80 20 L90 30" />
                    <path className="doodle-stroke" d="M40 60 L60 40" />
                </svg>
            </div>

            <nav className="fixed w-full z-50 transition-all duration-300 bg-paper/90 backdrop-blur-sm border-b border-sketch/50" id="navbar">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-lg border-2 border-ink bg-primary flex items-center justify-center text-white font-bold text-xl sketch-card transform -rotate-3 group-hover:rotate-3 transition-transform">
                                IT
                            </div>
                            <span className="font-heading font-extrabold text-2xl tracking-tight text-ink">ITQAN <span className="text-primary">TECH</span></span>
                        </a>

                        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                            <a href="#services" className="hover:text-primary transition-colors relative group">
                                Services
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#features" className="hover:text-primary transition-colors relative group">
                                Why Us
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#contact" className="sketch-button bg-primary text-white px-6 py-2.5 font-semibold">Contact Us</a>
                        </div>

                        <button className="md:hidden text-ink text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-paper border-b border-sketch px-6 transition-all duration-300">
                        <div className="flex flex-col gap-4 text-center py-6">
                            <a href="#services" className="block text-ink font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                            <a href="#features" className="block text-ink font-medium" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
                            <a href="#contact" className="block sketch-button bg-primary text-white py-3 mt-2 font-bold" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
                        </div>
                    </div>
                )}
            </nav>

            <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                    {/* Hero Text Content */}
                    <div className="text-left reveal" ref={addToRefs}>
                        <div className="transform -rotate-6 mb-4 ml-4">
                            <span className="font-handwriting text-2xl text-accent">Hey Student! Struggling with assignments? 👇</span>
                        </div>

                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-ink">
                            Smart Solutions <br />
                            Powered by <span className="highlight text-primary">Tech!</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed border-l-4 border-accent pl-4">
                            Kya aapko professional writing ya digital services ki zarurat hai? <strong className="text-ink font-bold">ITQAN TECH</strong> laya hai aap ke liye complete solution. Relax, and let the professionals handle it!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="sketch-button bg-primary text-white px-8 py-4 text-center font-bold text-lg flex justify-center items-center gap-2 group">
                                Get Started <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </a>
                            <a href="#services" className="sketch-button bg-white text-ink px-8 py-4 text-center font-bold text-lg flex justify-center items-center gap-2">
                                <i className="fas fa-book-open text-primary"></i> Explore Services
                            </a>
                        </div>
                    </div>

                    {/* Hero Hand-drawn Illustration (Student studying) */}
                    <div className="relative reveal delay-200 hidden md:block" ref={addToRefs}>
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl transform scale-150"></div>

                        {/* Main Hand-drawn Scene SVG */}
                        <svg className="w-full h-auto drop-shadow-xl relative z-10" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                            {/* Desk */}
                            <path d="M50 350 L450 350 L420 380 L80 380 Z" fill="#e2e8f0" className="doodle-stroke" />
                            <path d="M80 380 L80 400 M420 380 L420 400" className="doodle-stroke" />

                            {/* Student Body */}
                            <path d="M250 180 C200 180, 180 250, 170 350 L330 350 C320 250, 300 180, 250 180 Z" fill="#f1f5f9" className="doodle-stroke" />
                            {/* Head */}
                            <circle cx="250" cy="130" r="45" fill="#fff" className="doodle-stroke" />
                            {/* Hair/Cap */}
                            <path d="M205 130 C205 80, 295 80, 295 130" fill="#1e293b" className="doodle-stroke" />
                            <path d="M180 100 L320 100 L250 60 Z" fill="#4f46e5" className="doodle-stroke" /> {/* Graduation cap vibe */}
                            {/* Glasses & Expression */}
                            <circle cx="230" cy="135" r="12" className="doodle-stroke" />
                            <circle cx="270" cy="135" r="12" className="doodle-stroke" />
                            <path d="M242 135 L258 135" className="doodle-stroke" /> {/* Bridge of glasses */}
                            <path d="M245 160 C250 165, 255 165, 260 160" className="doodle-stroke" /> {/* Smile */}

                            {/* Laptop */}
                            <path d="M120 350 L200 350 L220 280 L140 280 Z" fill="#fff" className="doodle-stroke" /> {/* Screen */}
                            <path d="M100 350 L240 350 L260 370 L80 370 Z" fill="#cbd5e1" className="doodle-stroke" /> {/* Keyboard base */}
                            {/* Code/Text on screen */}
                            <path d="M150 300 L200 300 M150 315 L180 315 M150 330 L190 330" className="doodle-stroke" strokeWidth="1.5" />

                            {/* Stack of Books */}
                            <path d="M340 350 L420 350 L420 320 L340 320 Z" fill="#fca5a5" className="doodle-stroke" />
                            <path d="M345 320 L415 320 L415 290 L345 290 Z" fill="#67e8f9" className="doodle-stroke" />
                            <path d="M350 290 L410 290 L410 260 L350 260 Z" fill="#fcd34d" className="doodle-stroke" />

                            {/* Coffee Mug */}
                            <path d="M100 320 L130 320 L125 350 L105 350 Z" fill="#fff" className="doodle-stroke" />
                            <path d="M130 330 C140 330, 140 340, 128 340" className="doodle-stroke" /> {/* Handle */}
                            <path d="M110 310 Q115 300 110 290 M120 310 Q125 300 120 290" className="doodle-stroke" strokeDasharray="2 2" /> {/* Steam */}

                            {/* Thought bubble/Hard work vibes */}
                            <path d="M300 100 Q330 60 380 80 Q420 70 420 110 Q440 140 400 160 Q350 180 320 140 Z" fill="#fff" className="doodle-stroke" />
                            <text x="345" y="125" fontFamily="Outfit" fontWeight="bold" fontSize="24" fill="#f59e0b">A+</text>
                        </svg>

                        {/* Floating handwritten note next to illustration */}
                        <div className="absolute -right-10 top-20 transform rotate-12 bg-white px-4 py-2 sketch-card animate-float">
                            <span className="font-handwriting text-xl text-primary">Deadline met! ✅</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-20 relative z-10 bg-white/50 border-y border-sketch">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal" ref={addToRefs}>
                        <span className="font-handwriting text-3xl text-accent block mb-2 transform -rotate-2">Why stress out?</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-ink">Why Choose <span className="highlight">Us?</span></h2>
                        <p className="text-slate-600">Courses & Services – All in One Place, done by experts!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="sketch-card p-8 text-center reveal" ref={addToRefs}>
                            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 border-2 border-ink flex items-center justify-center mb-6 transform -rotate-3">
                                <i className="fas fa-award text-2xl text-blue-600"></i>
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-2 text-ink">High Quality</h3>
                            <p className="text-sm text-slate-600">Premium quality academic & digital work that gets top grades and results.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="sketch-card p-8 text-center reveal delay-100" ref={addToRefs}>
                            <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 border-2 border-ink flex items-center justify-center mb-6 transform rotate-3">
                                <i className="fas fa-stopwatch text-2xl text-amber-600"></i>
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-2 text-ink">On-Time Delivery</h3>
                            <p className="text-sm text-slate-600">Deadline tomorrow? We respect your time. Prompt delivery is our promise.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="sketch-card p-8 text-center reveal delay-200" ref={addToRefs}>
                            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border-2 border-ink flex items-center justify-center mb-6 transform -rotate-6">
                                <i className="fas fa-user-secret text-2xl text-emerald-600"></i>
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-2 text-ink">100% Confidential</h3>
                            <p className="text-sm text-slate-600">Your assignments, data, and projects are completely secure and private.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="sketch-card p-8 text-center reveal delay-300" ref={addToRefs}>
                            <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 border-2 border-ink flex items-center justify-center mb-6 transform rotate-6">
                                <i className="fas fa-headset text-2xl text-purple-600"></i>
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-2 text-ink">24/7 Support</h3>
                            <p className="text-sm text-slate-600">Always awake, just like a student before finals! Round-the-clock support.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 reveal" ref={addToRefs}>
                        <span className="font-handwriting text-3xl text-primary block mb-2 transform rotate-2">What we do best</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-ink">Our <span className="highlight">Services</span></h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">From securing your academic future to building your digital presence.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Academic Services */}
                        <div className="reveal relative" ref={addToRefs}>
                            {/* Background sketchy circle */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply opacity-50"></div>

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="w-14 h-14 bg-white border-2 border-ink rounded-xl flex items-center justify-center shadow-[4px_4px_0px_#f59e0b] transform -rotate-3">
                                    <i className="fas fa-graduation-cap text-accent text-2xl"></i>
                                </div>
                                <h3 className="font-heading text-3xl font-extrabold text-ink">Academic Help</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="sketch-card p-6 flex items-start gap-5 group">
                                    <div className="mt-1 w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-accent group-hover:text-ink group-hover:border-ink transition-all">
                                        <i className="fas fa-pen-nib text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl font-bold text-ink mb-1">Article Writing</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Well-researched, SEO-optimized, and professionally crafted articles with proper citations.</p>
                                    </div>
                                </div>

                                <div className="sketch-card p-6 flex items-start gap-5 group">
                                    <div className="mt-1 w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-accent group-hover:text-ink group-hover:border-ink transition-all">
                                        <i className="fas fa-scroll text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl font-bold text-ink mb-1">Thesis & Assignment</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Complete help with university assignments, research papers, and thesis structuring.</p>
                                        <span className="inline-block mt-2 font-handwriting text-primary font-bold text-lg">Plagiarism free!</span>
                                    </div>
                                </div>

                                <div className="sketch-card p-6 flex items-start gap-5 group">
                                    <div className="mt-1 w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-accent group-hover:text-ink group-hover:border-ink transition-all">
                                        <i className="fas fa-file-word text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl font-bold text-ink mb-1">MS Word Work & formatting</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">APA, MLA formatting, data entry, proofreading, and making documents look perfect.</p>
                                    </div>
                                </div>

                                <div className="sketch-card p-6 flex items-start gap-5 group">
                                    <div className="mt-1 w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-accent group-hover:text-ink group-hover:border-ink transition-all">
                                        <i className="fas fa-id-badge text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl font-bold text-ink mb-1">CV / Resume Design</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Stand out to employers with modern, ATS-friendly, and highly professional resumes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Digital Services */}
                        <div className="reveal relative delay-200" ref={addToRefs}>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply opacity-50"></div>

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="w-14 h-14 bg-white border-2 border-ink rounded-xl flex items-center justify-center shadow-[4px_4px_0px_#4f46e5] transform rotate-3">
                                    <i className="fas fa-code text-primary text-2xl"></i>
                                </div>
                                <h3 className="font-heading text-3xl font-extrabold text-ink">Digital & Tech</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="sketch-card p-6 flex items-start gap-5 group border-primary">
                                    <div className="mt-1 w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white group-hover:border-ink transition-all">
                                        <i className="fab fa-flutter text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl font-bold text-ink mb-1">App Development</h4>
                                        <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-primary text-xs rounded-full mb-2 font-bold uppercase tracking-wide">Flutter & Dart</span>
                                        <p className="text-slate-600 text-sm leading-relaxed">Cross-platform, high-performance mobile applications for iOS and Android.</p>
                                    </div>
                                </div>

                                <div className="sketch-card p-6 flex items-start gap-5 group">
                                    <div className="mt-1 w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white group-hover:border-ink transition-all">
                                        <i className="fas fa-film text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl font-bold text-ink mb-1">Video Editing</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">YouTube videos, social media reels, assignments, and engaging motion graphics.</p>
                                    </div>
                                </div>

                                <div className="sketch-card p-6 flex items-start gap-5 group">
                                    <div className="mt-1 w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white group-hover:border-ink transition-all">
                                        <i className="fas fa-bezier-curve text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl font-bold text-ink mb-1">Graphic Designing</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Logos, presentations, social media posts, and stunning visual assets for your projects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="contact" className="py-24 relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="sketch-card bg-primary text-white relative p-10 md:p-16 text-center overflow-hidden reveal" ref={addToRefs}>
                        
                        {/* Doodle decorations inside CTA */}
                        <svg className="absolute top-5 left-5 w-16 h-16 opacity-30 animate-float" viewBox="0 0 100 100">
                            <path className="doodle-stroke stroke-white" d="M10 50 L90 50 M50 10 L50 90 M20 20 L80 80 M20 80 L80 20" />
                        </svg>
                        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                        
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 relative z-10">Ready to submit your best work?</h2>
                        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto relative z-10 font-medium">
                            Abhi contact karein aur apna kaam professionals se karwain! We are available 24/7 to rescue your deadlines.
                        </p>
                        
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                            {/* Phone Contact */}
                            <a href="https://wa.me/923042729797" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white text-ink border-2 border-ink p-4 rounded-xl shadow-[4px_4px_0px_#1e293b] hover:shadow-[6px_6px_0px_#f59e0b] hover:-translate-y-1 transition-all w-full md:w-auto">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 border-2 border-ink">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">WhatsApp / Call</p>
                                    <p className="text-xl font-heading font-extrabold">0304 2729797</p>
                                </div>
                            </a>
                            
                            {/* Email Contact */}
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=itqantechsolution@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white text-ink border-2 border-ink p-4 rounded-xl shadow-[4px_4px_0px_#1e293b] hover:shadow-[6px_6px_0px_#f59e0b] hover:-translate-y-1 transition-all w-full md:w-auto">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-ink">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Us</p>
                                    <p className="text-lg font-heading font-extrabold truncate w-48 sm:w-auto">itqantechsolution@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t-2 border-sketch bg-white relative z-10 pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="font-heading font-extrabold text-2xl tracking-tight text-ink">ITQAN <span className="text-primary">TECH</span></span>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-3 text-sm font-handwriting text-xl text-slate-600">
                            <span className="hover:text-primary transition-colors cursor-pointer">#ITQANTech</span>
                            <span className="hover:text-primary transition-colors cursor-pointer">#StudentsHelp</span>
                            <span className="hover:text-primary transition-colors cursor-pointer">#Assignments</span>
                            <span className="hover:text-primary transition-colors cursor-pointer">#Thesis</span>
                            <span className="hover:text-primary transition-colors cursor-pointer">#AppDevelopment</span>
                            <span className="hover:text-primary transition-colors cursor-pointer">#Pakistan</span>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 text-center text-slate-500 text-sm font-medium border-t border-sketch/50 flex flex-col items-center justify-center gap-2">
                        <p>&copy; 2026 ITQAN TECH. Getting you straight A's and perfect code.</p>
                        <div className="flex gap-1">
                            <i className="fas fa-star text-accent text-xs"></i>
                            <i className="fas fa-star text-accent text-xs"></i>
                            <i className="fas fa-star text-accent text-xs"></i>
                            <i className="fas fa-star text-accent text-xs"></i>
                            <i className="fas fa-star text-accent text-xs"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
