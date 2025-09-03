// src/components/Education.jsx

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PSSImg from "../assets/PSS.jpg";
import DAUImg from "../assets/DAU.jpg";

const educationData = [
    {
        id: 1,
        title: "Purohit Science School",
        degree: "Higher Secondary (Science)",
        year: "2021 – 2023",
        description:
            "Focused on core science subjects and built strong foundations for technology.",
        image: PSSImg,
        link: "https://maps.app.goo.gl/sY5Gf4ADg9pJdDi57",
    },
    {
        id: 2,
        title: "DAIICT, Gandhinagar",
        degree: "B.Tech in Information and Communication Technology",
        year: "2023 – Present",
        description:
            "Pursuing engineering in ICT with interests in AI, software engineering, and development.",
        image: DAUImg,
        link: "https://www.daiict.ac.in",
    },
];


const Education = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="education"
            className="relative w-full min-h-screen text-white px-6 py-16 flex flex-col items-center justify-center"
        >
            <h2 className="text-5xl font-bold text-center mb-12 text-orange-500">
                Education
            </h2>

            {/* Desktop/Tablet: Centered Timeline */}
            {!isMobile ? (
                <div className="relative w-full max-w-5xl flex flex-col items-center">
                    {/* Vertical line in center */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 h-full"></div>

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`relative mb-16 w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end"
                                }`}
                        >
                            {/* Card */}
                            {/* Card */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg max-w-md w-[90%]">
                                <a
                                    href={edu.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mb-4"
                                >
                                    <img
                                        src={edu.image}
                                        alt={edu.title}
                                        className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-xl shadow-lg hover:scale-105 transition-transform bg-white/5 p-2"
                                    />
                                </a>
                                <h3 className="text-2xl font-bold text-orange-400">
                                    {edu.title}
                                </h3>
                                <p className="text-sm text-gray-400">{edu.degree}</p>
                                <p className="text-sm text-gray-500 italic">{edu.year}</p>
                                <p className="mt-3 text-gray-300">{edu.description}</p>
                            </div>

                            {/* Dot on timeline */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-black"></div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                // Mobile: Horizontal Infinite Scroll
                <div className="overflow-hidden relative w-full">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: "linear",
                        }}
                    >
                        {[...educationData, ...educationData].map((edu, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-72 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <a
                                    href={edu.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <img
                                        src={edu.image}
                                        alt={edu.title}
                                        className="w-40 h-40 mx-auto object-contain rounded-lg mb-4 shadow-lg hover:scale-105 transition-transform bg-white/5 p-2"
                                    />
                                </a>
                                <h3 className="text-xl font-bold text-orange-400">
                                    {edu.title}
                                </h3>
                                <p className="text-sm text-gray-400">{edu.degree}</p>
                                <p className="text-sm text-gray-500 italic">{edu.year}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Education;
