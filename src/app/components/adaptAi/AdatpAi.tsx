"use client"

import { motion } from "framer-motion";
import { Bot, Check, Cloud, Globe, LineChart, Shield, Sliders, Star, Target, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { containerVariants, fadeInUp, itemVariants } from "../animation/Homepage";

const AdatpAi = () => {

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

    return (
        <main className="min-h-dvh w-full text-foreground dark:text-dark-foreground bg-background dark:bg-dark-background relative overflow-hidden lg:pt-10 pt-28">

            <section className="py-20 md:py-32 border-b border-border dark:border-dark-border">
                <div className="max-w-7xl mx-auto px-8">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Left Column: Image & Feature List */}
                        <div className="flex flex-col items-center lg:items-start gap-8">
                            
                             <motion.h2
                                className="lg:hidden block text-4xl md:text-5xl font-bold leading-tight text-foreground dark:text-dark-foreground"
                                variants={itemVariants}
                            >
                                Transform Ideas into Algo Bots, with{" "}
                                <span className="text-primary dark:text-dark-primary">
                                    Simple Prompts
                                </span>
                            </motion.h2>

                            <motion.div
                                className="w-full relative bg-card dark:bg-dark-card rounded-2xl p-1 shadow border border-border dark:border-dark-border"
                                variants={itemVariants}
                            >
                                <Image
                                    src={theme === "light" ? "/images/image.png" : "/images/imageDark.png"}
                                    alt="AI Strategy Builder UI"
                                    width={1000}
                                    height={800}
                                    className="rounded-xl"
                                    priority={true}
                                />
                            </motion.div>

                            {/* Feature List */}
                            <motion.div
                                className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
                                variants={containerVariants}
                            >
                                <motion.div
                                    className="flex items-start gap-3 bg-card dark:bg-dark-card p-6 rounded-lg shadow-sm border border-border dark:border-dark-border"
                                    variants={itemVariants}
                                >
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-foreground dark:text-dark-foreground">Build AI-driven strategies</h4>
                                        <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">In seconds with simple prompts.</p>
                                    </div>
                                </motion.div>
                                
                                <motion.div
                                    className="flex items-start gap-3 bg-card dark:bg-dark-card p-6 rounded-lg shadow-sm border border-border dark:border-dark-border"
                                    variants={itemVariants}
                                >
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-foreground dark:text-dark-foreground">Integrate external signals</h4>
                                        <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">From TradingView, Chartink & more.</p>
                                    </div>
                                </motion.div>
                                
                                <motion.div
                                    className="flex items-start gap-3 bg-card dark:bg-dark-card p-6 rounded-lg shadow-sm border border-border dark:border-dark-border"
                                    variants={itemVariants}
                                >
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary">
                                        <Cloud className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-foreground dark:text-dark-foreground">Deploy instantly</h4>
                                        <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">Zero DevOps or setup hassle.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-3 bg-card dark:bg-dark-card p-6 rounded-lg shadow-sm border border-border dark:border-dark-border"
                                    variants={itemVariants}
                                >
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-foreground dark:text-dark-foreground">Future-proof your trading</h4>
                                        <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">Bots adapt to evolving markets.</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column: Heading & Paragraph */}
                        <div className="space-y-8">
                            <motion.h2
                                className="hidden lg:block text-4xl md:text-5xl font-bold leading-tight text-foreground dark:text-dark-foreground"
                                variants={itemVariants}
                            >
                                Transform Ideas into Algo Bots, with{" "}
                                <span className="text-primary dark:text-dark-primary">
                                    Simple Prompts
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-lg text-muted-foreground dark:text-dark-muted-foreground"
                                variants={itemVariants}
                            >
                                At Arthalab, we believe that Algo trading should be as simple as
                                expressing your idea. With our **Adapt AI engine**, you no longer
                                need complex coding skills or endless hours of trial-and-error.
                                Simply describe your strategy in plain language, and our AI
                                instantly converts it into a fully functional Algo Bot ready for
                                backtesting, paper trading, or live execution.
                            </motion.p>
                            <motion.p
                                className="text-lg text-muted-foreground dark:text-dark-muted-foreground"
                                variants={itemVariants}
                            >
                                Our advanced AI models are trained on market data, trading
                                patterns, and proven strategies—giving you the power to
                                experiment, validate, and execute at lightning speed. Whether
                                you&apos;re a beginner exploring no-code algo trading or a professional
                                scaling with API trading bots, Arthalab&apos;s Adapt AI gives you the
                                freedom to build your trading edge.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="strategies" className="py-20 md:py-32 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="offscreen"
                        animate="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-dark-foreground">
                            From Standard to Self-Learning <span className="text-primary"> AI Bots </span>
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto">
                            Whether you need a simple, proven strategy or the power of next-generation AI, Arthalab has the right bot for you.
                        </p>
                    </motion.div>

                    <div className="mt-16 flex flex-col lg:flex-row gap-12">
                        {/* Standard Option Bots */}
                        <motion.div
                            className="flex-1 bg-card dark:bg-dark-card p-8 rounded-xl shadow-lg"
                            initial="offscreen"
                            animate="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <div className="flex items-center gap-4 text-primary dark:text-dark-primary mb-6">
                                <Sliders className="w-10 h-10" />
                                <h3 className="text-3xl font-bold text-card-foreground dark:text-dark-card-foreground">
                                    Standard Option Bots
                                </h3>
                            </div>
                            <p className="text-lg text-muted-foreground dark:text-dark-muted-foreground">
                                Ready-to-deploy strategies you can launch in seconds, with options to customize risk and targets. Popular examples include:
                            </p>
                            <ul className="mt-6 space-y-4 text-card-foreground dark:text-dark-card-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary mt-1">
                                        <LineChart className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Moving Average Crossover</h4>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm">Identify momentum shifts and ride trends.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary mt-1">
                                        <Shield className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Short Iron Butterfly</h4>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm">Capture profits in stable market conditions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary mt-1">
                                        <Target className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">RSI Indicator Bot</h4>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm">Trade based on overbought/oversold signals.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* AI Trading Bots */}
                        <motion.div
                            className="flex-1 bg-card dark:bg-dark-card p-8 rounded-xl shadow-lg"
                            initial="offscreen"
                            animate="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <div className="flex items-center gap-4 text-secondary dark:text-dark-secondary mb-6">
                                <Bot className="w-10 h-10" />
                                <h3 className="text-3xl font-bold text-card-foreground dark:text-dark-card-foreground">
                                    AI Trading Bots
                                </h3>
                            </div>
                            <p className="text-lg text-muted-foreground dark:text-dark-muted-foreground">
                                Beyond traditional algo trading — these bots continuously learn from market behavior, adapting dynamically to volatility, trends, and breaking news to deliver next-level performance.
                            </p>
                            <ul className="mt-6 space-y-4 text-card-foreground dark:text-dark-card-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary/10 dark:bg-dark-secondary/10 text-secondary dark:text-dark-secondary mt-1">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Self-Learning Algorithms</h4>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm">Continuously optimize strategies for better outcomes.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary/10 dark:bg-dark-secondary/10 text-secondary dark:text-dark-secondary mt-1">
                                        <Star className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Dynamic Market Adaptation</h4>
                                        <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm">React to volatility and sudden changes in real-time.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default AdatpAi