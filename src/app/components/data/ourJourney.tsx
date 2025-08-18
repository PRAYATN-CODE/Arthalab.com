import { Code, Cpu, Crown, Handshake, Lightbulb, LineChart, Palette, Rocket, ShieldCheck, User, Users } from "lucide-react";

export const timelineData = [
    {
        year: "2013–2014",
        title: "Learning the Hard Way",
        description: "Trading was manual. Charts, signals, and sleepless nights… with more losses than wins. No APIs. No AI. Just raw experience gained the hard way.",
        icon: <LineChart className="w-6 h-6" />,
        isLeft: true,
    },
    {
        year: "2015",
        title: "The Spark (First year of API-based trading in India)",
        description: "Built our first auto-trading bots for personal use — executing signals without constant monitoring.",
        icon: <Lightbulb className="w-6 h-6" />,
        isLeft: false,
    },
    {
        year: "2016–2018",
        title: "Closed Network Success",
        description: "Developed 300+ custom strategies for a private network of traders, delivering profitable automation solutions tailored to each style.",
        icon: <Users className="w-6 h-6" />,
        isLeft: true,
    },
    {
        year: "2019",
        title: "Scaling Up",
        description: "Launched SaaS-based algo trading platform with integrations to almost all leading Indian brokers — making automation accessible to everyone.",
        icon: <Rocket className="w-6 h-6" />,
        isLeft: false,
    },
    {
        year: "2020–2023",
        title: "Trust & Reliability",
        description: "Became known for rock-solid execution, advanced risk controls, and 99.99% uptime — serving thousands of traders nationwide.",
        icon: <ShieldCheck className="w-6 h-6" />,
        isLeft: true,
    },
    {
        year: "2024",
        title: "The AI Leap",
        description: "Introduced India's first AI Strategy Builder — speak or type your idea, and our platform instantly codes, backtests, and prepares it for live execution.",
        icon: <Cpu className="w-6 h-6" />,
        isLeft: false,
    },
];

export const offerings = [
    {
        id: "hni",
        title: "HNI Solutions",
        subtitle: "Exclusive AI Algo Trading for High-Net-Worth Investors",
        description: "Unlock sophisticated AI-powered algo trading strategies designed for large portfolios. Our solutions combine machine learning, advanced data analytics, and automated execution to deliver consistent alpha generation and superior risk management.",
        icon: <Crown className="w-6 h-6" />,
        features: [
            "Portfolio Management with AI Precision",
            "Alpha Generation Strategies",
            "Custom HNI Algo Trading Bots",
        ],
    },
    {
        id: "retail",
        title: "Retail Algo Trading",
        subtitle: "AI Algo Bots for Every Trader",
        description: "Experience the future of retail algorithmic trading with our AI-enhanced trading platform. Perfect for intraday, positional, and options traders who want speed, accuracy, and zero emotional bias.",
        icon: <User className="w-6 h-6" />,
        features: [
            "AI Strategy Builder (No Code)",
            "AI-Powered Backtesting",
            "Live Algo Trading Execution",
        ],
    },
    {
        id: "creators",
        title: "Strategy Creators",
        subtitle: "Build, Test & Deploy Algo Bots",
        description: "For traders and quants who want full creative control. Use our platform to design strategies using technical indicators, price actions, or AI-driven signals — then test, optimize, and deploy as live algo bots instantly.",
        icon: <Palette className="w-6 h-6" />,
    },
    {
        id: "developers",
        title: "Developer Solutions",
        subtitle: "API Trading for Coders",
        description: "For developers building the next generation of algorithmic trading applications:",
        icon: <Code className="w-6 h-6" />,
        features: [
            "Access our robust API trading infrastructure.",
            "Build, integrate, and run custom algo trading bots in any programming language.",
            "Leverage real-time market data, order execution APIs, and AI-powered analytics.",
        ],
    },
    {
        id: "partnerships",
        title: "Partnership Opportunities",
        subtitle: "Collaborate & Grow with Us",
        description: "We partner with brokers, fintech startups, and trading educators to expand AI-powered algo trading access to more traders.",
        icon: <Handshake className="w-6 h-6" />,
        features: [
            "White-label algo trading platforms for brokers.",
            "API integration partnerships for fintech companies.",
            "Educational collaborations for trading academies.",
        ],
    },
];