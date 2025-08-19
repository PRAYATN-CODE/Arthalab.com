"use client";

import type React from "react";

import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sun,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const socialLink = {
  linkedin: 'https://www.linkedin.com/company/arthalab/',
  x: 'https://x.com/arthalab',
  facebook: 'https://www.facebook.com/arthalab.solutions',
  instagram: 'https://www.instagram.com/arthalab.solutions/'
}

const Footer = () => {
  const [isDark, setIsDark] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter()
  const socialLinks = [
    { href: socialLink.facebook, label: "Facebook", Icon: Facebook },
    { href: socialLink.x, label: "Twitter", Icon: Twitter },
    { href: socialLink.instagram, label: "Instagram", Icon: Instagram },
    { href: socialLink.linkedin, label: "LinkedIn", Icon: Linkedin },
  ];

  // Listen for theme changes using MutationObserver
  useEffect(() => {
    // Initial theme check
    setIsDark(document.documentElement.classList.contains("dark"));

    // Create a MutationObserver to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, { attributes: true });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Also listen for storage events (in case theme is changed in another tab)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Toggle theme by modifying DOM directly
  // const toggleTheme = () => {
  //   if (isDark) {
  //     document.documentElement.classList.remove("dark")
  //     localStorage.setItem("theme", "light")
  //   } else {
  //     document.documentElement.classList.add("dark")
  //     localStorage.setItem("theme", "dark")
  //   }
  //   // No need to update state here as the MutationObserver will catch the change
  // }

  // Show back-to-top button when scrolled down

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Create a custom event for theme changes that other components can listen to
  const dispatchThemeChangeEvent = (isDark: boolean) => {
    const themeChangeEvent = new CustomEvent("themeChange", {
      detail: { isDark },
    });
    document.dispatchEvent(themeChangeEvent);
  };

  // Enhanced toggle theme function that also dispatches an event
  const handleThemeToggle = () => {
    const newIsDark = !isDark;

    // Update DOM
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Dispatch custom event
    dispatchThemeChangeEvent(newIsDark);
  };

  const scrollToSection = (id: string) => {
    // Find the element with the specified ID
    router.push(`/?scrollTo=${id}`)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);
    setIsSubmitted(true);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 pt-16 pb-8 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/arthalabLogo.png"
                alt="AI tool dashboard showing analytics and chatbot configuration"
                width={100}
                height={100}
                priority // if above the fold
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Empowering traders with intelligent automation and data-driven strategies for smarter algo trading.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-9 h-9 rounded-full 
            bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 
            hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white 
            transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm group flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 mr-2 transition-colors duration-200"></span>
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/ourJourney"
                  className="text-sm group flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 mr-2 transition-colors duration-200"></span>
                  Our Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/AdaptAi"
                  className="text-sm group flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 mr-2 transition-colors duration-200"></span>
                  Adapt AI
                </Link>
              </li>
              <li>
                <Link
                  href="/offerings"
                  className="text-sm group flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 mr-2 transition-colors duration-200"></span>
                  Offerings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </p>
                  <a
                    href="mailto:contact@arthalab.com"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    contact@arthalab.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </p>
                  <a
                    href="tel:+919028880257"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    +91-90288-80257
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Aurangabad, Maharashtra, India
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold relative inline-block">
              Stay Updated
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for the latest updates, market
              insights, and trading tips.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                  }}
                  placeholder="Your email address"
                  className={`w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border ${isEmailValid
                    ? "border-gray-300 dark:border-gray-700 focus:border-cyan-500 dark:focus:border-cyan-400"
                    : "border-red-500 dark:border-red-500"
                    } focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 text-gray-800 dark:text-gray-200 transition-all duration-200`}
                />
                {!isEmailValid && (
                  <p className="text-red-500 text-xs mt-1">
                    Please enter a valid email address
                  </p>
                )}
                {isSubmitted && (
                  <p className="text-green-500 dark:text-green-400 text-xs mt-1">
                    Thank you for subscribing!
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Arthalab. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
              <button
                onClick={handleThemeToggle}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
              {/* <Link
                to="/sitemap"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                Sitemap
              </Link>
              <Link
                to="/faq"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                FAQ
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 z-50 ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
