import React from 'react'
import Logo from "../../assets/Group 6.png"
import { motion } from "framer-motion";
import { slideInPar, fadeIn } from "../../utils/Animation";
const AboutUs = () => {
    return (
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10">
            <div className="absolute -inset-4 bg-purple-900/20 rounded-3xl blur-xl opacity-40"></div>

            <div className="relative border border-purple-500/30 rounded-3xl bg-gradient-to-br from-[#1a063a] to-[#2a0e52] overflow-hidden shadow-[0_10px_60px_-15px_rgba(187,155,255,0.1)]">
                <div className="flex flex-col lg:flex-row">
                    {/* Text Content */}
                    <div className="p-10 lg:p-14 lg:w-2/3">
                        <motion.span {...fadeIn} className="inline-block mb-3 text-sm font-mono text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full">
                            About Platform
                        </motion.span>
                        <motion.h2 {...slideInPar(0.3)} className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 mb-6">
                            Revolutionizing Opportunity Discovery
                        </motion.h2>
                        <div className="space-y-5 text-purple-100/90">
                            <motion.p {...slideInPar(0.6)} className="text-lg leading-relaxed">
                                We're transforming how students and young professionals unlock career potential. Our intelligent platform eliminates the noise, connecting you directly with what matters.
                            </motion.p>
                            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-3 before:w-1 before:bg-gradient-to-b from-purple-400 to-pink-400">
                                <motion.p {...slideInPar(0.9)} className="italic font-medium text-purple-50">
                                    "No more scattered job boards or outdated listings—just precise matches for your unique profile."
                                </motion.p>
                            </div>
                            <motion.p {...slideInPar(0.9)} >
                                Through advanced AI analysis of your skills, interests, and aspirations, we surface the most relevant internships and grants from verified sources.
                            </motion.p>
                        </div>
                    </div>

                    {/* Logo Section */}
                    <div className="lg:w-1/3 flex flex-col items-center justify-center p-10 bg-gradient-to-b from-purple-900/40 to-purple-950/60 border-l-0 lg:border-l border-t lg:border-t-0 border-purple-500/20">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-purple-500/30 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src={Logo}
                                alt="Platform Logo"
                                className="relative w-48 h-auto object-contain z-10 transform group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <span className="px-4 py-2 bg-purple-900/60 text-purple-100 text-sm font-medium rounded-full border border-purple-500/30">
                                AI-Powered Matching
                            </span>
                            <span className="px-4 py-2 bg-pink-900/40 text-pink-100 text-sm font-medium rounded-full border border-pink-500/30">
                                Personalized Results
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs