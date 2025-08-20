"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    Book,
    BookOpen,
    ChevronDown,
    Contact,
    Gift,
    Globe,
    Home,
    Info,
    Menu,
    User,
    Video,
    X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { itemVariants } from "../animation/Homepage";
import KnowledgeBaseDropdown from "./Navbar/KnowledgeBaseDropdown";
import { ThemeToggle } from "./theme-toggle";

interface ProfileMenuProps {
    children: React.ReactNode;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 border border-[hsl(214.3,31.8%,91.4%)] bg-[hsl(0,0%,100%)]/80 backdrop-blur-sm px-3 py-2 rounded-lg cursor-pointer hover:bg-[hsl(0,0%,100%)]/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <User className="text-[hsl(221.2,83.2%,53.3%)] h-5 w-5" />
                <ChevronDown
                    className={`h-4 w-4 text-[hsl(215.4,16.3%,46.9%)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute px-2 top-full right-0 mt-2 py-3 flex flex-col gap-2 w-56 rounded-lg bg-[hsl(0,0%,100%)] shadow-lg border border-[hsl(214.3,31.8%,91.4%)] backdrop-blur-md z-[800]"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState("home");
    const [scrollActive, setScrollActive] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const endpoint = pathname.split("/").filter(Boolean).pop() || "";
        setActiveLink(endpoint)
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollActive(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            const navbarHeight = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const toggleSubmenu = (menu: string) => {
        setMobileSubMenuOpen(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                className={`fixed h-16 top-0 left-0 right-0 z-[500] dark:bg-dark-background transition-all duration-300 ${scrollActive
                    ? "bg-[hsl(210,40%,98%)]/80 dark:bg-dark-background/80 backdrop-blur-md shadow-md"
                    : "bg-[hsl(210,40%,98%)]/5 backdrop-blur-sm"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="max-w-7xl lg:max-w-[calc(100%-8%)] mx-auto px-4 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push("/")}
                            className="cursor-pointer flex items-center justify-start font-bold text-xl text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"
                        >
                            <Image
                                src='/arthalabLogo2.png'
                                alt="Logo"
                                width={100}
                                height={100}
                                priority={true}
                                className="w-10 h-10 mr-0.5"
                            />
                            <span className="text-[hsl(221.2,83.2%,53.3%)]">Artha</span>lab
                        </motion.div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/"
                                className={`transition-colors hover:text-[hsl(221.2,83.2%,53.3%)] ${activeLink === "home" || activeLink === ''
                                    ? "text-[hsl(221.2,83.2%,53.3%)] "
                                    : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"
                                    }`}
                                onClick={() => setActiveLink("home")}
                            >
                                Home
                            </Link>
                            <Link
                                href='/ourJourney'
                                className={`transition-colors hover:text-[hsl(221.2,83.2%,53.3%)] ${activeLink === "ourJourney"
                                    ? "text-[hsl(221.2,83.2%,53.3%)]"
                                    : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"
                                    }`}
                            >
                                Our journey
                            </Link>

                            <Link
                                href="/AdaptAi"
                                className={`transition-colors hover:text-[hsl(221.2,83.2%,53.3%)] ${activeLink === "AdaptAi"
                                    ? "text-[hsl(221.2,83.2%,53.3%)]"
                                    : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"
                                    }`}
                                onClick={() => setActiveLink("AdaptAi")}
                            >
                                Adapt AI
                            </Link>

                            <Link
                                href='/offerings'
                                className={`transition-colors hover:text-[hsl(221.2,83.2%,53.3%)] ${activeLink === "offerings"
                                    ? "text-[hsl(221.2,83.2%,53.3%)]"
                                    : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"
                                    }`}
                            >
                                Offerings
                            </Link>

                            <KnowledgeBaseDropdown activeLink={activeLink} />

                            <Link
                                href='/contact-us'
                                className={`transition-colors hover:text-[hsl(221.2,83.2%,53.3%)] ${activeLink === "contact-us"
                                    ? "text-[hsl(221.2,83.2%,53.3%)]"
                                    : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"
                                    }`}
                            >
                                Contact
                            </Link>

                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">

                            <ThemeToggle />

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden flex items-center justify-center h-9 w-9 rounded-full bg-background-secondary dark:bg-dark-background-secondary text-muted-foreground dark:text-dark-muted-foreground border border-border dark:border-dark-border"
                            >
                                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                            </motion.button>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}
                                target="_blank"
                                className="hidden md:flex items-center justify-center h-9 w-auto px-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-500/50 animate-[pulse_2s_ease-in-out_infinite]"
                            >
                                Login
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm lg:hidden" onClick={() => setMobileMenuOpen(false)}>
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background dark:bg-dark-background shadow-xl p-6 z-50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <Link href='/' className="text-lg font-bold text-[hsl(222.2,84%,4.9%)]">
                                    <span className="text-[hsl(221.2,83.2%,53.3%)]">Artha</span>lab
                                </Link>
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-full bg-muted-foreground dark:bg-dark-muted-foreground text-muted-foreground dark:text-dark-muted-foreground"
                                >
                                    <X className="h-5 w-5" />
                                </motion.button>
                            </div>

                            <div className="space-y-4">
                                {/* Home */}
                                <Link href="/" className="flex items-center space-x-2 p-3 rounded-lg hover:text-[hsl(221.2,83.2%,53.3%)] transition-colors" onClick={() => { setActiveLink("home"); setMobileMenuOpen(false); }}>
                                    <Home className={activeLink === "home" ? "text-[hsl(221.2,83.2%,53.3%)]" : "text-[hsl(215.4,16.3%,46.9%)]"} size={20} />
                                    <span className={activeLink === "home" ? "text-[hsl(221.2,83.2%,53.3%)] font-medium" : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"}>Home</span>
                                </Link>

                                {/* Our Journey */}
                                <Link href='/ourJourney' onClick={() => { setActiveLink("ourJourney"); setMobileMenuOpen(false); }} className="flex items-center space-x-2 p-3 w-full text-left rounded-lg hover:text-[hsl(221.2,83.2%,53.3%)] transition-colors">
                                    <Info className={activeLink === "ourJourney" ? "text-[hsl(221.2,83.2%,53.3%)]" : "text-[hsl(215.4,16.3%,46.9%)]"} size={20} />
                                    <span className={activeLink === "ourJourney" ? "text-[hsl(221.2,83.2%,53.3%)] font-medium" : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"}>Our Journey</span>
                                </Link>

                                {/* Adapt AI with Subsections */}
                                <Link href='/AdaptAi' onClick={() => { setActiveLink("AdaptAi"); setMobileMenuOpen(false); }} className="flex items-center space-x-2 p-3 w-full text-left rounded-lg hover:text-[hsl(221.2,83.2%,53.3%)] transition-colors">
                                    <Globe className={activeLink === "AdaptAi" ? "text-[hsl(221.2,83.2%,53.3%)]" : "text-[hsl(215.4,16.3%,46.9%)]"} size={20} />
                                    <span className={activeLink === "AdaptAi" ? "text-[hsl(221.2,83.2%,53.3%)] font-medium" : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"}>Adapt AI</span>
                                </Link>

                                {/* Offerings */}
                                <Link href='/offerings' onClick={() => { setActiveLink("offerings"); setMobileMenuOpen(false); }} className="flex items-center space-x-2 p-3 w-full text-left rounded-lg hover:text-[hsl(221.2,83.2%,53.3%)] transition-colors">
                                    <Gift className={activeLink === "offerings" ? "text-[hsl(221.2,83.2%,53.3%)]" : "text-[hsl(215.4,16.3%,46.9%)]"} size={20} />
                                    <span className={activeLink === "offerings" ? "text-[hsl(221.2,83.2%,53.3%)] font-medium" : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"}>Offerings</span>
                                </Link>

                                {/* Knowledge Base with Subsections */}
                                <div>
                                    <button onClick={() => toggleSubmenu("knowledgeBase")} className="flex items-center justify-between space-x-2 p-3 w-full text-left rounded-lg hover:text-[hsl(221.2,83.2%,53.3%)] transition-colors">
                                        <div className="flex items-center space-x-2">
                                            <Book className={activeLink.includes('blog') || activeLink.includes('videos') ? "text-[hsl(221.2,83.2%,53.3%)]" : "text-[hsl(215.4,16.3%,46.9%)]"} size={20} />
                                            <span className={activeLink.includes('blog') || activeLink.includes('videos') ? "text-[hsl(221.2,83.2%,53.3%)] font-medium" : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"}>Knowledge Base</span>
                                        </div>
                                        <ChevronDown strokeWidth={1.5} className={`${mobileSubMenuOpen["knowledgeBase"] ? "rotate-180" : ""} transition-transform duration-200 w-4 h-4 text-muted-foreground dark:text-dark-muted-foreground`} />
                                    </button>
                                    <AnimatePresence>
                                        {mobileSubMenuOpen["knowledgeBase"] && (
                                            <motion.div
                                                className="rounded-xl pl-10 w-4/5 focus:outline-none overflow-hidden"
                                                initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
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
                                                                onClick={() => { setActiveLink(item); setMobileMenuOpen(false); }}
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
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Contact */}
                                <Link href="/contact-us" className="flex items-center space-x-2 p-3 rounded-lg hover:text-[hsl(221.2,83.2%,53.3%)] transition-colors" onClick={() => { setActiveLink("contact"); setMobileMenuOpen(false); }}>
                                    <Contact className={activeLink === "contact" ? "text-[hsl(221.2,83.2%,53.3%)]" : "text-[hsl(215.4,16.3%,46.9%)]"} size={20} />
                                    <span className={activeLink === "contact" ? "text-[hsl(221.2,83.2%,53.3%)] font-medium" : "text-[hsl(222.2,84%,4.9%)] dark:text-accent-foreground"}>Contact</span>
                                </Link>

                                <div className="h-px bg-border dark:bg-dark-border my-4" />
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}
                                    target="_blank"
                                    className="md:hidden flex items-center justify-center h-9 w-auto px-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-500/50 animate-[pulse_2s_ease-in-out_infinite]"
                                >
                                    Login
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
