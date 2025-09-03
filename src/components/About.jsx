// src/components/About.jsx

import { motion } from "framer-motion";
import profilePic from "../assets/Shivam1.jpg";

const About = () => {
    return (
        <section className="w-full flex justify-center items-center py-16 px-6 bg-transparent">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl 
                bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >

                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-orange-500 shadow-lg"
                    />
                </div>

                {/* About Text */}
                <div className="text-center md:text-left text-white space-y-4">
                    <h2 className="text-4xl font-extrabold text-orange-400">About Me</h2>
                    <p className="text-lg leading-relaxed text-gray-200">
                        Hi, I'm <span className="text-orange-400 font-semibold">Shivam Ramoliya</span>,
                        a passionate Full Stack Developer and AI/ML enthusiast. I love building scalable web applications
                        and experimenting with machine learning models to solve real-world problems.
                    </p>
                    <p className="text-gray-300">
                        Over the years, I’ve worked on diverse projects—from blockchain-powered browser
                        extensions to AI-driven systems. I thrive in collaborative environments,
                        enjoy learning new technologies, and believe in writing clean, maintainable code.
                    </p>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-orange-400 font-semibold mb-2">Tech Stack:</h3>
                        <ul className="text-gray-300 list-disc list-inside space-y-1">
                            <li><span className="font-semibold">Languages:</span> JavaScript, Python, C++</li>
                            <li><span className="font-semibold">Frameworks:</span> React, Node.js, Flask</li>
                            <li><span className="font-semibold">AI/ML:</span> TensorFlow, PyTorch, OpenCV</li>
                            <li><span className="font-semibold">Tools:</span> GitHub, Docker</li>
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                        {/* Open to Opportunities → scroll to Contact */}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md cursor-pointer"
                        >
                            Open to Opportunities
                        </motion.a>

                        {/* Resume button → Google Drive link */}
                        <motion.a
                            href="https://drive.google.com/file/d/1pN7bdv3EHte2ECHHMFGgkkS_8TtgGeeW/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold rounded-lg shadow-md cursor-pointer"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
