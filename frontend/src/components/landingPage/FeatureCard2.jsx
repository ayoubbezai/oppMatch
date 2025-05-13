import React from 'react';
import Icon1 from '../../assets/signal_5382637.png';

const FeatureCard2 = () => {
    return (
        <div className="relative flex flex-col  items-start max-w-[450px] p-8 rounded-2xl 
      border border-[#BB9BFF]/20 bg-white/5 backdrop-blur-[40px] 
      shadow-[0_0_25px_5px_rgba(187,155,255,0.2)] transition-shadow duration-300 hover:shadow-[0_0_40px_10px_rgba(187,155,255,0.4)] px-8 gap-6 pt-7">

            <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-[#BB9BFF]/90 blur-md animate-pulse z-0" />
                <img src={Icon1} alt="Feature Icon" className="w-12 h-12 relative z-10" />
            </div>            <h2 className="text-2xl  font-semibold text-primary-300">Live Opportunity Feed</h2>
            <p className="text-sm  text-primary-400 font-light text-start">
                AI continuously scans trusted platforms for the latest internships and grants, ensuring you never miss a fresh opportunity. It pulls data in real time, matching you with the most relevant options based on your profile, preferences, and goals.
            </p>
        </div>
    );
};

export default FeatureCard2;
