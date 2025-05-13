import React from "react";
import { motion } from "framer-motion";
import Chart from "./Chart";

const ChartSection = () => {
  return (
    <div className="relative  mx-auto px-4 pb-16 w-[91%]">
      <div className="relative bg-gradient-to-br from-[#1a063a] to-[#2a0e52] rounded-2xl overflow-hidden shadow-[0_10px_60px_-15px_rgba(187,155,255,0.1)]">
        <div className="flex flex-col lg:flex-row divide-x-0 lg:divide-x divide-purple-500/20">
          <div className="w-full lg:w-5/6">
            <div className="h-[600px] w-full">
              <Chart />
            </div>

            <p className="p-6 pt-2 text-center text-sm text-purple-300/80">
              Interactive visualization of document processing workflow
            </p>
          </div>

          {/* Right Info Section - Clean 1/3 width */}
          <div className="w-full lg:w-1/3 p-6 bg-gradient-to-b from-purple-900/20 to-purple-950/30">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[30px] font-semibold text-purple-100 mb-4">
                  Key Features
                </h3>

                <ul className="space-y-3 text-purple-100/90 text-[18px]">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Interactive visual pipeline with React Flow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      Automated document text extraction and structured output
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>AI-powered document analysis and summarization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Customizable, multi-stage processing flow</span>
                  </li>
                </ul>
              </div>

              <div className="mt-2 space-y-12">
                <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/20">
                  <p className="text-lg text-purple-200">
                    "Processes documents with 98.7% accuracy across multiple
                    formats"
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-900/40 text-purple-100 border border-purple-500/30">
                    AI-Powered
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-900/40 text-pink-100 border border-pink-500/30">
                    Automated
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
