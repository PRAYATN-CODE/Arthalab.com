'use client'

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, BrainCircuit, Check, ChevronLeft, ChevronRight, Cpu, Plug, Quote, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cardVariants, fadeIn, fadeInUp, slideVariants } from '../animation/Homepage';
import { brokers, edges, features, stats, testimonials } from "../data/homePage";
import BackgroundDots from "../ui/BackgroundDots";
import DisclaimerSection from "../ui/DisclaimerSection";


const staggerChildren = {
    offscreen: {
        opacity: 0,
        y: 20,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3,
            bounce: 0.4
        },
    },
}

const url = process.env.NEXT_PUBLIC_APP_URL

// components/HeroSection.jsx
export default function HomePage() {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [theme, setTheme] = useState<"light" | "dark" | null>("light");

    useEffect(() => {
        // Client-side check
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
            setTheme(savedTheme || 'light');

            // Optional: Listen for theme changes
            const handleStorageChange = () => {
                const updatedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
                setTheme(updatedTheme || 'light');
            };
            window.addEventListener('storage', handleStorageChange);
            return () => window.removeEventListener('storage', handleStorageChange);
        }
    }, []);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
    };

    const scrollToPercentage = (percent: number): void => {
        const scrollHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;

        const targetY = (scrollHeight - viewportHeight) * (percent / 100);

        window.scrollTo({
            top: targetY,
            behavior: "smooth", // smooth scroll
        });
    };

    return (
        <>

            <main className="min-h-dvh w-full text-foreground dark:text-dark-foreground bg-background dark:bg-dark-background relative overflow-hidden lg:pt-10 pt-28">

                <section id="main" className="section-hero px-4 sm:px-6 flex items-center justify-center pb-10" >
                    <BackgroundDots />
                    <div className="max-w-6xl min-h-dvh mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                        {/* Hero Content - Left Side */}
                        <motion.div
                            className="flex-1 space-y-10 text-center md:text-left"
                            initial="offscreen"
                            whileInView="onscreen"
                            animate="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerChildren}
                        >
                            {/* Tagline */}
                            <motion.div className="flex flex-col space-y-6" variants={fadeInUp}>
                                {/* Badge / Tagline */}
                                <div className="inline-flex px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 self-center md:self-start">
                                    A Unique Blend of Market Insight & Technology
                                </div>

                                {/* Heading */}
                                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground dark:text-dark-foreground">
                                    <span className="text-primary dark:text-dark-primary">Trusted Expertise</span>, Powered by <span className="text-primary dark:text-dark-primary">AI</span>
                                </h1>

                                {/* Subtext */}
                                <span className="text-muted-foreground/90 dark:text-dark-muted-foreground text-lg md:text-xl max-w-2xl">
                                    SEBI-Registered Research Analysts with 15+ years of IT expertise — delivering
                                    legally sound, technologically advanced solutions for smarter, safer trading.
                                </span>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                className="text-muted-foreground dark:text-dark-muted-foreground/60 max-w-xl text-base leading-relaxed mx-auto md:mx-0"
                                variants={fadeInUp}
                            >
                                Isn't that a blend worth trusting? With Arthalab, you get a SEBI-registered RA
                                platform that merges compliance, strategy, and technology — built to give you
                                an edge in today's markets, while ensuring safety, transparency, and reliability.
                            </motion.p>


                            {/* Call-to-Action Buttons */}
                            <motion.div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4" variants={fadeInUp}>

                                <motion.a
                                    href={url}
                                    className="gradient-border bg-primary text-primary-foreground dark:bg-dark-primary dark:text-dark-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 dark:hover:bg-dark-primary/90 transition-colors flex items-center justify-center gap-2 group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    target="_blank"
                                >
                                    Start Trading Today
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </motion.a>

                                <motion.button
                                    onClick={() => scrollToPercentage(20)}
                                    className="bg-muted dark:bg-dark-muted/20 border border-border dark:border-dark-border text-foreground dark:text-dark-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted dark:hover:bg-dark-muted transition-colors flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Learn More
                                </motion.button>

                            </motion.div>
                        </motion.div>

                        {/* Hero Image - Right Side */}
                        <motion.div
                            className="flex-1 flex flex-col gap-6 justify-center items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                        >

                            {/* NEW — Trust Highlight */}
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-start sm:items-center justify-start gap-4 mt-4">
                                <div className="px-5 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full text-sm font-semibold text-primary dark:text-dark-pirmary shadow-xl dark:drop-shadow-primary">
                                    🚀 Successfully Serving Algo Traders Since 2016
                                </div>
                                <span className="text-sm text-muted-foreground dark:text-dark-muted-foreground bg-muted dark:bg-dark-muted/50 px-3 py-3 rounded-full " >⚡ 8+ Years Experience</span>
                                <span className="text-sm text-muted-foreground dark:text-dark-muted-foreground bg-muted dark:bg-dark-muted/50 px-3 py-3 rounded-full " >🤖 Algo Bots Automated</span>
                                <span className="text-sm text-muted-foreground dark:text-dark-muted-foreground bg-muted dark:bg-dark-muted/50 px-3 py-3 rounded-full " >🌍 Trusted by Global Traders</span>
                            </div>

                            {/* Use a relevant image for your platform, e.g., an app screenshot or a conceptual image */}
                            <Image
                                src={theme === 'dark' ? '/images/heroDark.png' : '/images/hero.png'}
                                alt="Arthalab Platform Overview"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-lg border border-border dark:border-dark-border"
                                priority={true}
                            />

                        </motion.div>
                    </div>
                </section>

                <section id="whyTrustUs" className="py-20 md:py-32 px-4 sm:px-6 border-y border-border dark:border-dark-border">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left Column: Heading and Mission Statement */}
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={staggerChildren}
                            >
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold leading-tight text-foreground dark:text-dark-foreground"
                                    variants={fadeInUp}
                                >
                                    <span className="text-primary dark:text-dark-primary">
                                        Why Traders
                                    </span>{" "}
                                    Trust Arthalab
                                </motion.h2>

                                <motion.p
                                    className="mt-6 text-lg text-muted-foreground dark:text-dark-muted-foreground"
                                    variants={fadeInUp}
                                >
                                    We&apos;re traders first and technologists second — so everything we build comes from real market experience, not theory. Our mission has always been to simplify algo trading and make it accessible to everyone, regardless of coding knowledge.
                                </motion.p>

                                <motion.p
                                    className="mt-4 text-lg text-muted-foreground dark:text-dark-muted-foreground"
                                    variants={fadeInUp}
                                >
                                    We combine AI innovation, deep market knowledge, and rock-solid reliability so you can trade faster, smarter, and with confidence. With Arthalab, you&apos;re not just keeping up with the market — you&apos;re a decade ahead.
                                </motion.p>
                            </motion.div>

                            {/* Right Column: Key Stats and Visuals */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={staggerChildren}
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border shadow-lg"
                                        variants={fadeInUp}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-dark-secondary/10 text-secondary dark:text-dark-secondary flex items-center justify-center mb-4">
                                            {stat.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-card-foreground dark:text-dark-card-foreground">
                                            {stat.title}
                                        </h3>
                                        <p className="mt-2 text-muted-foreground dark:text-dark-muted-foreground text-sm">
                                            {stat.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="howItWorks" className="py-20 md:py-32 px-4 sm:px-6 bg-background dark:bg-dark-background relative overflow-hidden">
                    {/* Background Bubbles (Light Theme) */}
                    <div className="absolute top-1/5 left-1/5 w-1/2 h-1/2 pointer-events-none z-0 hidden dark:block">
                        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    </div>
                    {/* Background Bubbles (Dark Theme) */}
                    <div className="absolute top-1/6 left-1/4 w-1/2 h-1/2 pointer-events-none z-0 dark:hidden">
                        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-dark-foreground">
                                <span className="text-primary dark:text-dark-primary">
                                    Create & Deploy
                                </span>{" "}
                                AI Trading Strategies
                            </h2>
                            <p className="mt-4 text-xl text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto">
                                Turn your trading ideas into automated bots in minutes—no coding
                                needed.
                            </p>
                        </div>

                        <motion.div
                            className="space-y-24"
                            initial="offscreen"
                            whileInView="onscreen"
                            animate="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerChildren}
                        >
                            {/* Step 1: Create with AI Prompts */}
                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                variants={fadeInUp}
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary font-bold text-xl">
                                            1
                                        </div>
                                        <h3 className="text-3xl font-semibold text-foreground dark:text-dark-foreground">
                                            Create Your Strategy with AI
                                        </h3>
                                    </div>
                                    <p className="text-lg text-muted-foreground dark:text-dark-muted-foreground">
                                        Simply describe your trading idea in plain English, and our AI
                                        Strategy Builder will convert it into a fully functional algo
                                        bot— complete with entry/exit rules, position sizing, and risk
                                        management.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-dark-muted-foreground">
                                        <li>
                                            <span className="font-semibold">No coding required.</span> No
                                            guesswork. Just your vision, instantly brought to life.
                                        </li>
                                        <li>
                                            &quot;Build me a Nifty 50 intraday breakout strategy&quot; — and watch
                                            it come alive.
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-card dark:bg-dark-card p-1 rounded-xl shadow-lg border border-border dark:border-dark-border">
                                    <div className="w-full rounded-lg bg-muted dark:bg-dark-muted flex items-center justify-center text-muted-foreground dark:text-dark-muted-foreground">
                                        <span className="text-center p-1">
                                            <Image
                                                src={
                                                    theme === "light" ? "/images/image.png" : "/images/imageDark.png"
                                                }
                                                alt={`Ai Strategies Image`}
                                                width={800}
                                                height={700}
                                                className="rounded-lg object-cover border-2 border-primary/20"
                                                priority={true}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2: Choose Your Build Method */}
                            <motion.div variants={fadeInUp}>
                                <div className="text-center md:text-left mb-8">
                                    <h3 className="text-3xl font-semibold text-foreground dark:text-dark-foreground">
                                        Choose Your Build Method – Maximum Flexibility
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Card 1 */}
                                    <div className="bg-card dark:bg-dark-card p-6 rounded-xl shadow-md border-2 border-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 dark:hover:border-dark-primary/50">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-primary dark:text-dark-primary" />
                                            </div>
                                            <h3 className="font-semibold text-lg text-card-foreground dark:text-dark-card-foreground">
                                                Non-Stop Trading Power
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground">
                                            Why spend 10+ hours a day glued to charts when our AI-driven algo bots can trade for you — 24/7, without fatigue?
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-card dark:bg-dark-card p-6 rounded-xl shadow-md border-2 border-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 dark:hover:border-dark-primary/50">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center">
                                                <Cpu className="w-5 h-5 text-primary dark:text-dark-primary" />
                                            </div>
                                            <h3 className="font-semibold text-lg text-card-foreground dark:text-dark-card-foreground">
                                                True Multi-Tasking at Scale
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground">
                                            Track and analyze hundreds of stocks, indices, and options simultaneously with zero human error. Our automation never misses an opportunity.
                                        </p>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-card dark:bg-dark-card p-6 rounded-xl shadow-md border-2 border-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 dark:hover:border-dark-primary/50">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center">
                                                <Bot className="w-5 h-5 text-primary dark:text-dark-primary" />
                                            </div>
                                            <h3 className="font-semibold text-lg text-card-foreground dark:text-dark-card-foreground">
                                                Fully Automated Execution
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground">
                                            Your strategies run in the background, continuously monitoring the market and executing trades with speed, precision, and discipline — all according to your rules.
                                        </p>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="bg-card dark:bg-dark-card p-6 rounded-xl shadow-md border-2 border-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 dark:hover:border-dark-primary/50">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center">
                                                <BrainCircuit className="w-5 h-5 text-primary dark:text-dark-primary" />
                                            </div>
                                            <h3 className="font-semibold text-lg text-card-foreground dark:text-dark-card-foreground">
                                                Future-Ready Intelligence
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground">
                                            Markets evolve. So do our bots. AI-powered adaptability ensures your strategies stay optimized for changing market conditions and upcoming trends.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3: Test & Refine */}
                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                variants={fadeInUp}
                            >
                                <div className="bg-card dark:bg-dark-card p-1 rounded-xl shadow-lg border border-border dark:border-dark-border">
                                    <div className="w-full rounded-lg bg-muted dark:bg-dark-muted flex items-center justify-center text-muted-foreground dark:text-dark-muted-foreground">
                                        <span className="text-center p-1">
                                            <Image
                                                src={
                                                    theme === "light" ? "/images/step2/image.png" : "/images/step2/imageDark.png"
                                                }
                                                alt={`Test Image`}
                                                width={800}
                                                height={700}
                                                className="rounded-lg object-cover border-2 border-primary/20"
                                                priority={true}
                                                key={theme}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary font-bold text-xl">
                                            2
                                        </div>
                                        <h3 className="text-3xl font-semibold text-foreground dark:text-dark-foreground">
                                            Test & Refine with Advanced Backtesting
                                        </h3>
                                    </div>
                                    <p className="text-lg text-muted-foreground dark:text-dark-muted-foreground">
                                        Run your strategy against years of historical market data to
                                        analyze profitability, drawdowns, and accuracy.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-card dark:bg-dark-card p-4 rounded-lg text-center shadow-sm transition-all duration-300 ease-out border border-border dark:border-dark-border hover:shadow-lg hover:border-primary dark:hover:border-dark-primary">
                                            <span className="block text-primary dark:text-dark-primary text-xl font-semibold">
                                                Backtesting
                                            </span>
                                            <span className="block text-sm text-muted-foreground dark:text-dark-muted-foreground">
                                                Historical performance
                                            </span>
                                        </div>
                                        <div className="bg-card dark:bg-dark-card p-4 rounded-lg text-center shadow-sm transition-all duration-300 ease-out border border-border dark:border-dark-border hover:shadow-lg hover:border-primary dark:hover:border-dark-primary">
                                            <span className="block text-primary dark:text-dark-primary text-xl font-semibold">
                                                Options Trading
                                            </span>
                                            <span className="block text-sm text-muted-foreground dark:text-dark-muted-foreground">
                                                AI Self-Improves
                                            </span>
                                        </div>
                                        <div className="bg-card dark:bg-dark-card p-4 rounded-lg text-center shadow-sm transition-all duration-300 ease-out border border-border dark:border-dark-border hover:shadow-lg hover:border-primary dark:hover:border-dark-primary">
                                            <span className="block text-primary dark:text-dark-primary text-xl font-semibold">
                                                Highly Accurate
                                            </span>
                                            <span className="block text-sm text-muted-foreground dark:text-dark-muted-foreground">
                                                Perfect Trade AI Bots
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Steps 4, 5, 6 */}
                            <motion.div
                                className="grid lg:grid-cols-3 gap-8"
                                variants={fadeInUp}
                            >
                                {/* Step 4 */}
                                <motion.div
                                    className="bg-card dark:bg-dark-card p-8 rounded-xl shadow-md border border-border dark:border-dark-border transition-all duration-300 ease-out hover:shadow-xl hover:border-primary dark:hover:border-dark-primary"
                                    variants={fadeInUp}
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary font-bold text-lg">
                                            3
                                        </div>
                                        <h4 className="font-semibold text-xl text-card-foreground dark:text-dark-card-foreground">
                                            Effortless Deployment
                                        </h4>
                                    </div>
                                    <p className="text-muted-foreground dark:text-dark-muted-foreground mb-4">
                                        No technical hassles—our cloud infrastructure handles everything
                                        for you.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground dark:text-dark-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>Fully cloud-managed infrastructure.</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>SEBI-compliant workflows.</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>Enterprise-grade backend for scalability.</span>
                                        </li>
                                    </ul>
                                </motion.div>

                                {/* Step 5 */}
                                <motion.div
                                    className="bg-card dark:bg-dark-card p-8 rounded-xl shadow-md border border-border dark:border-dark-border transition-all duration-300 ease-out hover:shadow-xl hover:border-primary dark:hover:border-dark-primary"
                                    variants={fadeInUp}
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary font-bold text-lg">
                                            4
                                        </div>
                                        <h4 className="font-semibold text-xl text-card-foreground dark:text-dark-card-foreground">
                                            Integrate External Signals
                                        </h4>
                                    </div>
                                    <p className="text-muted-foreground dark:text-dark-muted-foreground mb-4">
                                        Already have your trading signals? Feed them directly into your
                                        strategy from:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground dark:text-dark-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>TradingView Webhooks</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>Chartink Alerts</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>Excel Sheets & Custom APIs</span>
                                        </li>
                                    </ul>
                                </motion.div>

                                {/* Step 6 */}
                                <motion.div
                                    className="bg-card dark:bg-dark-card p-8 rounded-xl shadow-md border border-border dark:border-dark-border transition-all duration-300 ease-out hover:shadow-xl hover:border-primary dark:hover:border-dark-primary"
                                    variants={fadeInUp}
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary font-bold text-lg">
                                            5
                                        </div>
                                        <h4 className="font-semibold text-xl text-card-foreground dark:text-dark-card-foreground">
                                            Your AI Trading Assistant
                                        </h4>
                                    </div>
                                    <p className="text-muted-foreground dark:text-dark-muted-foreground mb-4">
                                        Get real-time guidance from AlgoBuddy, a built-in AI chatbot
                                        trained on trading strategies and market insights.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground dark:text-dark-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>Ask for strategy optimizations.</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>Get guidance on market insights.</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary dark:text-dark-primary flex-shrink-0" />
                                            <span>Real-time help with your trading setup.</span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <div className="mt-16 text-center">
                            <h3 className="text-2xl font-semibold text-foreground dark:text-dark-foreground">
                                Ready to build your first algo bot?
                            </h3>
                            <a
                                href={`${url}/dashboard/ai-strategy`}
                                target="_blank"
                                className="inline-block mt-4 px-8 text-white py-4 bg-primary dark:bg-dark-primary font-semibold rounded-full hover:bg-primary/90 dark:hover:bg-dark-primary/90 transition-colors"
                            >
                                Type Your First Trading Prompt →
                            </a>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-20 md:py-32 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-dark-foreground">
                                Unleash the Power of <span className="text-primary"> Intelligent </span> Trading
                            </h2>
                            <p className="mt-4 text-center text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto">
                                Arthalab combines cutting-edge technology with intuitive design to give you a trading platform that is both powerful and easy to use.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerChildren}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card dark:bg-dark-card p-8 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    variants={cardVariants}
                                >
                                    <div className="w-16 h-16 rounded-full bg-secondary/10 dark:bg-dark-secondary/10 text-secondary dark:text-dark-secondary flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-card-foreground dark:text-dark-card-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-muted-foreground dark:text-dark-muted-foreground">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="why" className="py-20 md:py-32 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-dark-foreground">
                                The <span className="text-primary"> Arthalab </span> Edge — Trusted by Traders Nationwide
                            </h2>
                            <p className="mt-4 text-center text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto">
                                Our platform is designed to give you a powerful and secure trading experience that sets you apart from the competition.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerChildren}
                        >
                            {edges.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card dark:bg-dark-card p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                                    variants={fadeInUp}
                                >
                                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-card-foreground dark:text-dark-card-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-1 text-muted-foreground dark:text-dark-muted-foreground text-sm">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="support" className="py-20 md:py-32 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <div className="flex items-center justify-center gap-4 text-center">
                                <Plug className="w-10 h-10 text-primary dark:text-dark-primary" />
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-dark-foreground">
                                    Trade With Your Existing Broker — Securely
                                </h2>
                            </div>
                            <p className="mt-4 text-center text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto">
                                We integrate directly with India&apos;s leading brokers via secure API connections for seamless, reliable execution.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerChildren}
                        >
                            {brokers.map((broker, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center justify-center"
                                    variants={fadeInUp}
                                >
                                    {/* Using Next.js Image component for optimization */}
                                    <div className="relative w-32 h-16 md:w-40 md:h-20 transition-all duration-300">
                                        <Image
                                            src={broker.logo}
                                            alt={`${broker.name} Logo`}
                                            fill
                                            style={{ objectFit: "contain" }}
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-dark-foreground">
                                What Our Traders Say
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto">
                                Don&apos;t just take our word for it—read what our satisfied users have to say.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={slideVariants}
                            className="relative h-64 mt-16 p-8 md:p-12 rounded-xl border border-border dark:border-dark-border bg-card dark:bg-dark-card shadow-md hover:shadow-xl transition-all duration-300 ease-out overflow-hidden">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={index}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute top-0 left-0 w-full h-56 md:h-64 bg-card dark:bg-dark-card rounded-2xl flex flex-col justify-between p-6 md:p-8 text-center"
                                >
                                    {/* Top: Profile Info */}
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={testimonials[index].avatar || '/testimonials/dummy.avif'}
                                            alt={`${testimonials[index].name}'s testimonial avatar`}
                                            width={64}  // matches your w-16 (16 * 4 = 64)
                                            height={64} // matches your h-16 (16 * 4 = 64)
                                            className="rounded-full object-cover border-2 border-primary/20"
                                        // Optional: add priority if it's above the fold
                                        // priority={index === 0} // only for the first image if it's important
                                        />
                                        <p className="font-semibold text-card-foreground dark:text-dark-card-foreground">
                                            {testimonials[index].name}
                                        </p>
                                    </div>

                                    {/* Middle: Quote */}
                                    <div className="flex flex-col items-center px-5 md:px-10">
                                        <Quote className="w-5 h-5 text-primary dark:text-dark-primary mb-3" />
                                        <p className="text-base md:text-lg italic text-muted-foreground dark:text-dark-muted-foreground">
                                            &quot;{testimonials[index].quote}&quot;
                                        </p>
                                    </div>

                                    {/* Bottom: Title */}
                                    <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground mt-2">
                                        {testimonials[index].title}
                                    </p>
                                </motion.div>
                            </AnimatePresence>


                            {/* Navigation Controls */}
                            <button
                                onClick={() => paginate(-1)}
                                className="absolute flex justify-end items-center w-9 h-9 -left-4 top-1/2 -translate-y-1/2 rounded-full bg-muted dark:bg-dark-muted text-foreground dark:text-dark-foreground hover:bg-muted-foreground/10 transition-colors duration-300 z-20"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                className="absolute flex justify-start items-center w-9 h-9 -right-4 top-1/2 -translate-y-1/2 rounded-full bg-muted dark:bg-dark-muted text-foreground dark:text-dark-foreground hover:bg-muted-foreground/10 transition-colors duration-300 z-20"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </motion.div>

                        {/* Dots for navigation */}
                        <div className="flex justify-center items-center gap-2 mt-8">
                            {testimonials.map((_, dotIndex) => (
                                <motion.button
                                    key={dotIndex}
                                    onClick={() => {
                                        setDirection(dotIndex > index ? 1 : -1);
                                        setIndex(dotIndex);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${dotIndex === index ? "bg-primary dark:bg-dark-primary scale-[1.5]" : "bg-muted-foreground/50 dark:bg-dark-muted-foreground/50 transition-all duration-300 ease-out"
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <DisclaimerSection />

            </main>
        </>
    );
}
