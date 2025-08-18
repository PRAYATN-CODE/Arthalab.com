// Animation variants
export const fadeInUp = {
    offscreen: { y: 60, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8 }, // ✅ valid ease
    },
};

export const fadeIn = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: { duration: 0.6 },
    },
};

export const staggerChildren = {
    offscreen: {
        opacity: 0,
        y: 20,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3,
        },
    },
}

export const iconVariants = {
    offscreen: { scale: 0.8, opacity: 0 },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            // type: "spring",
            stiffness: 100,
        },
    },
};

export const cardVariants = {
    offscreen: { scale: 0.9, opacity: 0 },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            // type: "spring",
            stiffness: 100,
        },
    },
};

export const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            // type: "spring",
            stiffness: 100,
        },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
        transition: {
            duration: 0.5,
            // type: "spring",
            stiffness: 100,
        },
    }),
};

export const containerVariants = {
    offscreen: {
        opacity: 0,
        y: 20,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3,
        },
    },
}

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};