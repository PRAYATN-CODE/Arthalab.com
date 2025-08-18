'use client'

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import Image from "next/image";
import { containerVariants, fadeInUp, itemVariants } from "../animation/Homepage";
import { timelineItemVariants } from "../animation/ourJourney";
import { timelineData } from "../data/ourJourney";

const OurJourney = () => {

    return (
        <main className="min-h-dvh w-full text-foreground dark:text-dark-foreground bg-background dark:bg-dark-background relative overflow-hidden">

            <section id="journey" className="py-20 md:py-32 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto relative">
                    <motion.div
                        className="text-center mb-16"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={timelineItemVariants}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-dark-foreground">
                            Our <span className="text-primary"> Journey: </span> From Traders to Innovators
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto">
                            A decade of relentless innovation, built by traders, for traders.
                        </p>
                    </motion.div>

                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 rounded-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hidden md:block"></div>

                    <motion.div
                        className="relative space-y-8"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInUp}
                    >
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-center w-full ${item.isLeft ? "justify-start" : "justify-end"
                                    } md:mx-auto`}
                                custom={item.isLeft}
                                variants={fadeInUp}
                            >
                                {/* Timeline card */}
                                <div
                                    className={`relative bg-card border border-border dark:border-dark-border dark:bg-dark-card p-6 rounded-xl shadow-lg flex-1 ${item.isLeft ? "md:mr-[51%]" : "md:ml-[51%]"
                                        }`}
                                >
                                    <div className="flex items-center justify-between gap-4 text-primary dark:text-dark-primary mb-2">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 rounded-full bg-primary/10 dark:bg-dark-primary/10">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-card-foreground dark:text-dark-card-foreground">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <span
                                            className={`text-sm font-bold text-primary dark:text-primary/90`}
                                        >
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-muted-foreground dark:text-dark-muted-foreground">
                                        {item.description}
                                    </p>
                                    {/* <span className={`${!item.isLeft ? "right-full mr-0" : "left-full ml-0"} rounded-full w-5 h-5 bg-background-secondary absolute top-1/2 -translate-y-1/2`} /> */}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-32 px-4 sm:px-6 bg-background dark:bg-dark-background">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="bg-card dark:bg-dark-card rounded-3xl shadow-md border border-border dark:border-dark-border p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Image and Title Section */}
                        <motion.div
                            className="w-full lg:w-1/3 flex flex-col items-center text-center space-y-4"
                            variants={itemVariants}
                        >
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary dark:border-dark-primary shadow-lg">
                                <Image
                                    src="/arthalabLogo2.png"
                                    alt="Professional Photo of SEBI Registered Research Analyst"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground dark:text-dark-foreground">
                                [Abhisekh Gujrati]
                            </h3>
                            <span className="text-lg text-primary dark:text-dark-primary font-semibold">
                                SEBI Registered Research Analyst
                            </span>
                            <div className="flex items-center gap-2 text-muted-foreground dark:text-dark-muted-foreground">
                                <Award className="w-5 h-5 text-accent dark:text-dark-accent" />
                                <p className="text-sm">
                                    Registration No.:{" "}
                                    <span className="font-semibold">[SEBI License Number]</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Text Content Section */}
                        <motion.div
                            className="w-full lg:w-2/3 space-y-8 text-foreground dark:text-dark-foreground"
                            variants={itemVariants}
                        >
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold">Why This Matters</h4>
                                <p className="text-lg text-muted-foreground dark:text-dark-muted-foreground">
                                    As a SEBI Registered Research Analyst, I am committed to
                                    ensuring that every strategy and signal provided through Arthalab meets the highest standards of transparency, compliance, and investor protection.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold">Our Commitment to You</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-muted-foreground dark:text-dark-muted-foreground">
                                        <CheckCircle className="w-6 h-6 text-primary dark:text-dark-primary flex-shrink-0 mt-1" />
                                        <p>
                                            <span className="font-semibold text-foreground dark:text-dark-foreground">Data-Backed Strategies:</span> We provide well-researched, data-backed strategies that are built on a solid foundation of analysis.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-3 text-muted-foreground dark:text-dark-muted-foreground">
                                        <CheckCircle className="w-6 h-6 text-primary dark:text-dark-primary flex-shrink-0 mt-1" />
                                        <p>
                                            <span className="font-semibold text-foreground dark:text-dark-foreground">Ethical & Unbiased Recommendations:</span> Our solutions are developed with an unwavering commitment to ethical standards and impartiality.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-3 text-muted-foreground dark:text-dark-muted-foreground">
                                        <CheckCircle className="w-6 h-6 text-primary dark:text-dark-primary flex-shrink-0 mt-1" />
                                        <p>
                                            <span className="font-semibold text-foreground dark:text-dark-foreground">Full SEBI Compliance:</span> We operate in strict accordance with SEBI regulations and investor guidelines, ensuring a safe and transparent trading environment.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </main>
    )
}

export default OurJourney
