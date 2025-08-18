import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, ChevronDown, Video } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const KnowledgeBaseDropdown = ({ activeLink }: { activeLink: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Animation variants
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                // type: 'spring',
                damping: 20,
                stiffness: 200
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { x: -10, opacity: 0 },
        visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.02,
                // type: 'spring',
                stiffness: 200
            }
        })
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1 transition-all hover:text-[hsl(221.2,83.2%,53.3%)] ${isOpen || activeLink.includes('blog') || activeLink.includes('videos')
                    ? "text-[hsl(221.2,83.2%,53.3%)]"
                    : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"
                    }`}
            >
                Knowledge base
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute right-[70%] translate-x-1/2 mt-2 w-48 origin-top-right rounded-xl bg-background dark:bg-dark-background border-2 border-border dark:border-dark-border shadow-xl focus:outline-none z-50 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                    >
                        <div className="p-1 space-y-1">
                            {['blog', 'videos'].map((item, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={itemVariants}
                                >
                                    <Link
                                        href={`/${item}`}
                                        className={`${activeLink === item
                                            ? 'text-primary bg-background-secondary dark:text-dark-primary dark:bg-dark-background-secondary'
                                            : 'hover:text-foreground dark:hover:text-dark-foreground text-muted-foreground dark:text-dark-muted-foreground hover:bg-background-secondary dark:hover:bg-dark-background-secondary'
                                            } group capitalize rounded-lg flex items-center px-3 py-2 text-sm transition-all duration-200 ease-out`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item === 'blog' && (
                                            <BookOpen
                                                className={`${activeLink === item ? '' : 'group-hover:text-primary dark:group-hover:text-dark-primary'
                                                    } w-4 h-4 mr-2`}
                                            />
                                        )}
                                        {item === 'videos' && (
                                            <Video
                                                className={`${activeLink === item ? '' : 'group-hover:text-primary dark:group-hover:text-dark-primary'
                                                    } w-4 h-4 mr-2`}
                                            />
                                        )}
                                        {item}
                                        {item === 'blog' && (
                                            <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary dark:bg-dark-primary dark:text-dark-foreground text-dark-foreground">
                                                New
                                            </span>
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Learn with our resources
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default KnowledgeBaseDropdown;