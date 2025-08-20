"use client"

import { motion } from "framer-motion";
import { Info, ShieldAlert } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            // ease: "easeOut",
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function DisclaimerSection() {
    return (
        <section className="py-20 md:py-32 px-4 sm:px-6 bg-background-secondary dark:bg-dark-background-secondary">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="bg-card dark:bg-dark-card rounded-3xl shadow-sm border border-border dark:border-dark-border p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Icon and Title */}
                    <motion.div
                        className="flex lg:flex-col gap-4 flex-row items-center justify-start lg:justify-center text-center space-y-0 lg:space-y-4 lg:w-1/3 w-full"
                        variants={itemVariants}
                    >
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary">
                            <ShieldAlert className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground dark:text-dark-foreground">
                            Important 
                            <span className="text-primary dark:text-dark-primary"> Disclaimers</span>
                        </h2>
                    </motion.div>

                    {/* Disclaimer Content */}
                    <motion.div
                        className="space-y-6 lg:w-2/3 text-muted-foreground dark:text-dark-muted-foreground"
                        variants={itemVariants}
                    >
                        <div className="space-y-4">
                            <p className="font-semibold text-foreground dark:text-dark-foreground">
                                Arthalab.com provides technology-driven tools and automation for trading, but does not guarantee profits or returns of any kind.
                            </p>
                            <p className="text-sm">
                                Stock and derivatives trading involve significant financial risk, including the potential loss of capital. By using our platform, you acknowledge and accept full responsibility for all your trading decisions, strategies, and outcomes.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="flex items-center gap-2 font-semibold text-foreground dark:text-dark-foreground">
                                <Info className="w-5 h-5 text-accent dark:text-dark-accent" />
                                <span>Regulatory Information</span>
                            </p>
{/*                             <p className="text-sm">
                                Arthalab is a SEBI-registered Investment Advisor (Registration No. 123456789). While our platform empowers traders to create, test, and automate their own strategies using algo trading bots and APIs, we do not guarantee profits or risk-free trading.
                            </p> */}
                            <p className="text-sm">
                                Our services and tools are designed to assist traders, not to replace personal judgment. Users must carefully evaluate their risk appetite before making any investment or trading decisions.
                            </p>
                            <p className="text-sm font-semibold">
                                Please consult a qualified financial advisor if you are unsure about the risks involved.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
