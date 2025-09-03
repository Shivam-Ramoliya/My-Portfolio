// src/components/Home.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";
import { Send } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const rotatingTexts = ["AI Enthusiast", "Developer", "Tech Explorer", "Software Engineer"];
const staticQuote = "Driven by curiosity, built on code. Let's build the future—together.";

const Home = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        }, 3000);
        return () => clearInterval(textInterval);
    }, []);

    return (
        <section
            className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between 
            overflow-y-auto overflow-x-hidden text-white px-4 sm:px-6 md:px-12">

            {/* Left Text Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center z-20 mt-16 md:mt-0">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left p-4 sm:p-6 md:p-8 max-w-xl"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                        Hi, I'm <span className="text-orange-500">Shivam Ramoliya</span>
                    </h1>

                    {/* Rotating Text */}
                    <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-200">
                        <span className="whitespace-nowrap">I'm a</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentTextIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {rotatingTexts[currentTextIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* Quote */}
                    <div className="min-h-[80px] flex items-center justify-center md:justify-start">
                        <p className="text-gray-300 max-w-md text-base sm:text-lg italic mb-6">
                            "{staticQuote}"
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#ff4000" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-full font-semibold shadow-lg transition-colors duration-200 text-sm sm:text-base"
                        >
                            Know More
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, borderColor: "#ff4000", color: "#ff4000" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 sm:px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2 transition-colors duration-200 text-sm sm:text-base"
                        >
                            <Send size={18} /> Get in Touch
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Right 3D Model Section */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 z-10"
            >
                <div className="w-[90%] sm:w-[500px] md:w-[700px] h-[400px] sm:h-[500px] md:h-[700px] bg-transparent">
                    <Suspense
                        fallback={<div className="w-full h-full bg-black/10 rounded-full animate-pulse" />}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ width: "100%", height: "100%" }}
                        >
                            <Spline
                                scene="https://prod.spline.design/SgqPlsWgSMizETUw/scene.splinecode"
                                onLoad={() => setLoaded(true)}
                            />
                        </motion.div>
                    </Suspense>
                </div>
            </motion.div>

            {/* Spotlight Effect */}
            <div className="absolute right-4 bottom-0 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] z-0 pointer-events-none">
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-orange-400/30 via-orange-500/10 to-transparent blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-70 animate-pulse" />
            </div>
        </section>
    );
};

export default Home;
