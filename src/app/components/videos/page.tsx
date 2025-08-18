"use client";

import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

export default function Videos() {
    const videos = [
        {
            id: "mainVideo",
            title: "How to Build an Algo Bot in 3 Minutes",
            description: "A quick, step-by-step tutorial on creating your first automated trading bot with our no-code builder.",
            embedUrl: "https://www.youtube.com/embed/Ci0bmYZhLyg?si=s-puXrUr730yBTm8",
        },
        {
            id: "video2",
            title: "Best Bot in ArthaLab | Option Chain Bot Explained",
            description: "Discover the Option Chain Bot – the most powerful algo trading bot from ArthaLab. 🚀",
            embedUrl: "https://www.youtube.com/embed/wwN1kyi71n0?si=iFj1NWbizESPYF5K", // replace with actual video
        },
        {
            id: "video3",
            title: "AI-Powered Trading Bots Explained",
            description: "Understand how AI-driven bots can transform your trading experience and maximize profits.",
            embedUrl: "https://www.youtube.com/embed/RwKNS7Ggks4?si=l1mHP3ICkM_k7gvM", // replace with actual video
        },
    ];

    return (
        <section
            id="knowledgeBase"
            className="min-h-dvh py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-background dark:bg-dark-background"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    className="space-y-4 mb-16 text-center"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground dark:text-dark-foreground">
                        <span className="text-primary dark:text-dark-primary">
                            Knowledge Hub
                        </span>{" "}
                        for Smart Traders
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground dark:text-dark-muted-foreground max-w-3xl mx-auto">
                        Stay ahead in the world of Algo trading and AI bots with our curated
                        video tutorials, blogs, and practical insights.
                    </p>
                </motion.div>

                {/* First Video (Hero) */}
                <motion.div
                    className="relative mb-20"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Animated bubbles */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
                    <div className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

                    <h3 className="text-3xl font-semibold mb-6 text-center text-foreground dark:text-dark-foreground">
                        {videos[0].title}
                    </h3>
                    <div className="bg-card dark:bg-dark-card rounded-2xl flex items-center flex-col justify-center p-6 overflow-hidden shadow-md border border-border dark:border-dark-border">
                        <div className="relative aspect-video h-full w-full overflow-hidden rounded-xl">
                            <iframe
                                className="w-full h-full"
                                src={videos[0].embedUrl}
                                title={videos[0].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-md text-muted-foreground dark:text-dark-muted-foreground">
                                {videos[0].description}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Second Video (Split Layout - Content Left, Video Right) */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6 items-center mb-20"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="space-y-6 text-left">
                        <h3 className="text-3xl font-bold text-foreground dark:text-dark-foreground">
                            {videos[1].title}
                        </h3>
                        <p className="text-lg text-muted-foreground dark:text-dark-muted-foreground">
                            {videos[1].description}
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-16 -right-16 w-48 h-48 bg-pink-500 rounded-full blur-3xl opacity-30 animate-bounce"></div>
                        <div className="bg-card dark:bg-dark-card p-4 rounded-xl overflow-hidden shadow-lg border border-border dark:border-dark-border">
                            <div className="aspect-video overflow-hidden rounded-lg">
                                <iframe
                                    className="w-full h-full"
                                    src={videos[1].embedUrl}
                                    title={videos[1].title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Third Video (Split Layout - Video Left, Content Right) */}
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="relative">
                        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-indigo-500 rounded-full blur-3xl opacity-25 animate-spin-slow"></div>
                        <div className="bg-card dark:bg-dark-card p-4 rounded-xl overflow-hidden shadow-lg border border-border dark:border-dark-border">
                            <div className="aspect-video overflow-hidden rounded-lg">
                                <iframe
                                    className="w-full h-full"
                                    src={videos[2].embedUrl}
                                    title={videos[2].title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 text-left">
                        <h3 className="text-3xl font-bold text-foreground dark:text-dark-foreground">
                            {videos[2].title}
                        </h3>
                        <p className="text-lg text-muted-foreground dark:text-dark-muted-foreground">
                            {videos[2].description}
                        </p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <a
                        href="https://www.youtube.com/@arthalab/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-dark-primary text-primary-foreground dark:text-dark-primary-foreground font-semibold rounded-full hover:bg-primary/90 dark:hover:bg-dark-primary/90 transition-colors"
                    >
                        <Youtube className="w-6 h-6" />
                        <span>Visit Our YouTube Channel</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
