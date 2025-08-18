import { Banknote, BarChart3, Bot, Brain, Clock, Cloud, Code, FastForward, Gem, Plug, ShieldCheck, TestTube, TrendingUp } from "lucide-react";

export const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Driven Decision Making",
    description:
      "Our bots don’t just follow fixed rules — they learn, adapt, and optimize based on market data, continuously improving strategy performance.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Proven Pre-Built Strategies",
    description:
      "Start strong with strategies that have been tested and fine-tuned for Indian markets — perfect for both beginners and experts.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Backtesting Engine",
    description:
      "Test your strategy against years of historical data to see how it would have performed before risking real capital.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Precision & Speed",
    description:
      "Every trade is executed instantly and flawlessly, ensuring you never miss an entry or exit point.",
  },
];

export const edges = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "24/7 AI-Powered Automation",
    description: "Never miss an opportunity, even while you sleep.",
  },
  {
    icon: <FastForward className="w-8 h-8" />,
    title: "Ultra-Fast Setup",
    description: "Go live with your bot in under 2 minutes.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Enterprise-Grade Security",
    description: "Built on AWS Cloud for reliability, encryption, and zero downtime.",
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: "Wide Broker Coverage",
    description: "Trade with your preferred Indian broker without switching platforms.",
  },
];

export const brokers = [
  { name: "AngelOne", logo: '/logo/angel_one.png' },
  { name: "Dhan", logo: '/logo/dhan.png' },
  { name: "Aliceblue", logo: '/logo/Alice_blue.png' },
  { name: "5paisa", logo: '/logo/5paisa.png' },
  { name: "Fyers", logo: '/logo/fyers.png' },
  { name: "Nuvama", logo: '/logo/nuvama.webp' },
  { name: "Motilal Oswal", logo: '/logo/motilal.avif' },
  { name: "IIFL", logo: '/logo/iifl.png' },
];

export const testimonials = [
  {
    quote: "Being into job, I could not trade all day. Thanks to Arthalab, where I just have my configure my trading rules & bot follow the same to accuracy. Thanks a ton Arthalab for providing such a wonderful platform which trade as per my configure rules.",
    name: "Mangesh",
    title: "Bank Manager",
    avatar: '/testimonials/mangesh.jpg'
  },
  {
    quote: "This is really very easy. I already had an account with aliceblue, and it was easy to connect with Arthalab. I started automatic trading the day I signed up.",
    name: "Archana",
    title: "Cake Shop Owner",
    avatar: '/testimonials/prajakta.jpg'
  },
  {
    quote: "I've tried many algo trading platforms, but most were expensive or underperformed in live markets. Arthalab changed that—their bots execute trades in real time with precision, backed by transparent backtesting that actually reflects live results. No hidden fees, no overpromises—just reliable automation.",
    name: "Rohit Malhotra",
    title: "Algo Trader & Investor",
    avatar: '/testimonials/dummy.avif'
  },
  {
    quote: "As someone new to algo trading, I needed bots that could manage market swings without constant monitoring. Arthalab impressed me—affordable pricing, intuitive interface, and strategies that run smoothly day and night. I can focus on my work while the bots handle my trades.",
    name: "Manoj Verma",
    title: "Retail Trader",
    avatar: ''
  },
  {
    quote: "Most bot services either hide costs or fail in live execution. Arthalab’s bots deliver consistent performance with accurate trade execution and a transparent pricing model. The seamless integration with my broker has made my trading more efficient and profitable.",
    name: "Sandeep Mehra",
    title: "Options Swing Trader",
    avatar: ''
  },
  {
    quote: "With a busy schedule, I can’t monitor markets all day. Arthalab’s bots work around the clock, capturing opportunities I’d otherwise miss. It’s affordable, easy to use, and has completely changed the way I trade.",
    name: "Akash Jain",
    title: "Part-Time Trader",
    avatar: ''
  },
];

export const stats = [
  {
    icon: <Gem className="w-8 h-8" />,
    title: "300+ Custom Strategies",
    description: "Proven strategies fine-tuned for the market.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "99.99% Uptime",
    description: "Advanced reliability and zero downtime.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Advanced Risk Controls",
    description: "Protect your capital with robust safeguards.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "AI Innovation",
    description: "Smarter bots that adapt and learn dynamically.",
  },
];

export const steps = [
  {
    id: 1,
    title: "Start with Your Idea — Let AI Do the Heavy Lifting",
    description: `Simply describe your strategy in plain English—for example: “Buy NIFTY when RSI crosses above 30 and sell when it crosses below 70”. Our **AI Strategy Builder** transforms your prompt into a ready-to-run algo bot. No technical skills? No problem—the AI handles coding, logic building, and optimization for you.`,
    image: "/placeholder-ai-prompt.png", // Replace with your actual image path
    icon: <Brain className="w-8 h-8 text-primary dark:text-dark-primary" />,
  },
  {
    id: 2,
    title: "Customize with Full Code or No-Code Flexibility",
    description: `Use **Phoenix Suite** for drag-and-drop no-code strategy creation. For advanced traders, switch to **Full Code Mode** and write Python strategies using scikit-learn, TensorFlow, or any library you like. Blend AI and human expertise for maximum performance and control.`,
    image: "/placeholder-no-code.png", // Replace with your actual image path
    icon: <Code className="w-8 h-8 text-primary dark:text-dark-primary" />,
  },
  {
    id: 3,
    title: "Connect Your Data & External Signals",
    description: `Integrate live market data from your preferred broker. Use external signals from TradingView, Chartink, Excel, APIs, or your own systems. Our platform ensures instant, accurate execution with zero delays.`,
    image: "/placeholder-integration.png", // Replace with your actual image path
    icon: <Plug className="w-8 h-8 text-primary dark:text-dark-primary" />,
  },
  {
    id: 4,
    title: "Test Before You Trade — Backtest, Paper Trade & Go Live",
    description: `Validate your strategy using years of historical data. Run paper trading to simulate performance without risking capital. Deploy to live trading instantly without changing a single line of code.`,
    image: "/placeholder-backtest.png", // Replace with your actual image path
    icon: <TestTube className="w-8 h-8 text-primary dark:text-dark-primary" />,
  },
  {
    id: 5,
    title: "Trade with Confidence — SEBI-Compliant & Enterprise-Ready",
    description: `All workflows follow **SEBI compliance standards** with proper onboarding & documentation. Scalable infrastructure that works for 1 or 10,000 clients. Hosted on secure cloud servers—no DevOps required.`,
    image: "/placeholder-compliance.png", // Replace with your actual image path
    icon: <ShieldCheck className="w-8 h-8 text-primary dark:text-dark-primary" />,
  },
  {
    id: 6,
    title: "Never Trade Alone — Get Support from AI",
    description: `Meet **AlgoBuddy**, your personal AI trading assistant. Ask questions, troubleshoot, or get strategy recommendations. Learn and execute faster with expert-trained insights at your fingertips.`,
    image: "/placeholder-chatbot.png", // Replace with your actual image path
    icon: <Bot className="w-8 h-8 text-primary dark:text-dark-primary" />,
  },
];
