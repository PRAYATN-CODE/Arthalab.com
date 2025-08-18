"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { contentVariants, iconVariants } from '../animation/ourJourney'
import { offerings } from '../data/ourJourney'

const Offerings = () => {

    const [activeTab, setActiveTab] = useState('hni')

    return (
        <div>
            <section className="py-20 md:py-32 px-4 sm:px-6 relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-dark-foreground mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        AI-Driven <span className="text-primary"> Algo </span> Trading Solutions for Every Trader
                    </motion.h2>

                    {/* Desktop Tabs */}
                    <div className="hidden lg:flex gap-8">
                        <div className="w-1/3 flex flex-col gap-4">
                            {offerings.map((offering) => (
                                <motion.button
                                    key={offering.id}
                                    onClick={() => setActiveTab(offering.id)}
                                    className={`flex items-center p-6 rounded-lg text-left transition-all duration-300 ${activeTab === offering.id
                                        ? "bg-card dark:bg-dark-card text-primary dark:text-dark-primary shadow-lg border border-border dark:border-dark-border"
                                        : "bg-transparent text-muted-foreground dark:text-dark-muted-foreground hover:bg-muted dark:hover:bg-dark-muted"
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center mr-4">
                                        {offering.icon}
                                    </div>
                                    <div className="flex-1">
                                        <span className="block font-semibold text-lg">
                                            {offering.title}
                                        </span>
                                        <span className="block text-sm text-muted-foreground dark:text-dark-muted-foreground/70">
                                            {offering.subtitle}
                                        </span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        <div className="w-2/3">
                            <AnimatePresence mode="wait">
                                {offerings.map(
                                    (offering) =>
                                        activeTab === offering.id && (
                                            <motion.div
                                                key={offering.id}
                                                className="bg-card dark:bg-dark-card p-10 rounded-lg shadow-lg border border-border dark:border-dark-border"
                                                variants={contentVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="initial"
                                            >
                                                <motion.div variants={iconVariants}>
                                                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary flex items-center justify-center mb-6">
                                                        {offering.icon}
                                                    </div>
                                                </motion.div>
                                                <h3 className="text-3xl font-semibold text-card-foreground dark:text-dark-card-foreground">
                                                    {offering.title}
                                                </h3>
                                                <p className="mt-4 text-lg text-muted-foreground dark:text-dark-muted-foreground">
                                                    {offering.description}
                                                </p>
                                                {offering.features && (
                                                    <ul className="mt-6 space-y-3">
                                                        {offering.features.map((feature, index) => (
                                                            <li key={index} className="flex items-start gap-3">
                                                                <Check className="w-5 h-5 text-primary dark:text-dark-primary flex-shrink-0 mt-1" />
                                                                <span className="text-muted-foreground dark:text-dark-muted-foreground">
                                                                    {feature}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </motion.div>
                                        )
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Accordion */}
                    <div className="block lg:hidden mt-8 space-y-4">
                        {offerings.map((offering) => (
                            <div key={offering.id} className="bg-card dark:bg-dark-card rounded-lg shadow-lg border border-border dark:border-dark-border">
                                <motion.button
                                    onClick={() => setActiveTab(activeTab === offering.id ? "" : offering.id)}
                                    className="flex justify-between items-center w-full p-6 text-left text-card-foreground dark:text-dark-card-foreground"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 flex items-center justify-center text-primary dark:text-dark-primary">
                                            {offering.icon}
                                        </div>
                                        <span className="font-semibold">{offering.title}</span>
                                    </div>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: activeTab === offering.id ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-6 h-6" />
                                    </motion.div>
                                </motion.button>
                                <AnimatePresence>
                                    {activeTab === offering.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 border-t border-border dark:border-dark-border">
                                                <p className="text-muted-foreground dark:text-dark-muted-foreground">
                                                    {offering.description}
                                                </p>
                                                {offering.features && (
                                                    <ul className="mt-4 space-y-2">
                                                        {offering.features.map((feature, index) => (
                                                            <li key={index} className="flex items-start gap-2">
                                                                <Check className="w-5 h-5 text-primary dark:text-dark-primary flex-shrink-0 mt-1" />
                                                                <span className="text-muted-foreground dark:text-dark-muted-foreground text-sm">
                                                                    {feature}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <PriceCards /> */}

        </div>
    )
}

export default Offerings
