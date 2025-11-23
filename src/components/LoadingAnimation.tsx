"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
    onComplete: () => void;
}

export default function LoadingAnimation({
    onComplete,
}: LoadingAnimationProps) {
    const [index, setIndex] = useState(0);
    const words = ["Hello", "नमस्ते", "নমস্কার", "Welcome"];

    useEffect(() => {
        if (index === words.length - 1) {
            setTimeout(onComplete, 800);
            return;
        }

        const timer = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 350); // Speed of word change

        return () => clearTimeout(timer);
    }, [index, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
        >
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
            >
                <span className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                    {words[index]}
                </span>
                <span className="w-3 h-3 bg-primary rounded-full ml-2 animate-pulse" />
            </motion.div>
        </motion.div>
    );
}
