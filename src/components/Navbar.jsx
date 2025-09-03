// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = ["Home", "About", "Education", "Experience", "Projects", "Contact"];

// --- Variants ---
const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
    hoverDesktop: {
        color: "#ff4000",
        scale: 1.1,
        transition: { duration: 0.1 },
    },
    hoverMobile: {
        scale: 1.05,
        color: "#ff4000",
        transition: { duration: 0.15, ease: "easeOut" },
    },
    tap: {
        scale: 0.9,
        transition: { duration: 0.1 },
    },
};

const underlineVariants = {
    initial: { scaleX: 0 },
    hover: {
        scaleX: 1,
        originX: 0,
        transition: { duration: 0.25, ease: "easeOut" },
    },
};

const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
        x: "100%",
        transition: { duration: 0.3, ease: "easeIn" },
    },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md px-8 py-4 flex items-center justify-between shadow-lg"
        >
            {/* Logo */}
            <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-3 cursor-pointer"
            >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg">
                    <span className="text-[#ff4000] font-extrabold text-lg">SR</span>
                </div>
                <span className="text-white font-bold text-xl tracking-wide">
                    Shivam Ramoliya
                </span>
            </motion.div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
                {navItems.map((item, index) => (
                    <motion.li
                        key={item}
                        variants={navItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hoverDesktop"
                        whileTap="tap"
                        custom={index}
                        className="relative cursor-pointer"
                    >
                        <a href={`#${item}`} className="block">
                            {item}
                        </a>
                        <motion.div
                            variants={underlineVariants}
                            initial="initial"
                            whileHover="hover"
                            className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#ff4000]"
                        />
                    </motion.li>
                ))}
            </ul>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex space-x-7">
                {[
                    { Icon: Github, link: "https://github.com/Shivam-Ramoliya/" },
                    { Icon: Linkedin, link: "https://www.linkedin.com/in/ramoliya-shivam-sureshbhai-753265287/" },
                    { Icon: Instagram, link: "https://www.instagram.com/ss_ramoliya07/" },
                ].map(({ Icon, link }, i) => (
                    <motion.a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.1,
                            color: "#ff4000",
                            transition: { duration: 0.1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-300 hover:text-white"
                    >
                        <Icon size={22} />
                    </motion.a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="text-gray-300 hover:text-white focus:outline-none"
                >
                    <FaBars size={24} />
                </motion.button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobileMenu"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 right-0 h-screen w-3/4 bg-black/95 backdrop-blur-md shadow-xl flex flex-col p-6 z-50 overflow-y-auto"
                    >
                        {/* Close Button */}
                        <div className="flex justify-end mb-8">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white focus:outline-none"
                            >
                                <FaTimes size={24} />
                            </motion.button>
                        </div>

                        {/* Nav Links */}
                        <ul className="flex flex-col space-y-6 text-gray-300 font-medium text-lg">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item}
                                    variants={navItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                    whileHover="hoverMobile"
                                    whileTap="tap"
                                    className="cursor-pointer"
                                >
                                    <a
                                        href={`#${item}`}
                                        onClick={() => setIsOpen(false)}
                                        className="block"
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="flex space-x-6 mt-10">
                            {[
                                { Icon: Github, link: "https://github.com/Shivam-Ramoliya/" },
                                { Icon: Linkedin, link: "https://www.linkedin.com/in/ramoliya-shivam-sureshbhai-753265287/" },
                                { Icon: Instagram, link: "https://www.instagram.com/ss_ramoliya07/" },
                            ].map(({ Icon, link }, i) => (
                                <motion.a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, color: "#ff4000", transition: { duration: 0.15 } }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-300 hover:text-white"
                                >
                                    <Icon size={26} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
