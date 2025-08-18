export const staggerChildren = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const timelineItemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            // type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

export const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const iconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};