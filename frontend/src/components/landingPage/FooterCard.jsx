import React from "react";

const FooterCard = ({ icon, text, subText }) => {
    return (
        <div className="flex gap-4">
            <div className="bg-primary-400 rounded-full p-2 shadow-[0_0_25px_5px_rgba(187,155,255,0.2)] transition-shadow duration-300 hover:shadow-[0_0_40px_10px_rgba(187,155,255,0.4)] ">{icon}</div>
            <div>
                <h2 className="text-[15px] font-bold text-primary-400">{text}</h2>
                <p className="text-[10px] text-primary-400">{subText}</p>
            </div>
        </div>
    );
};

export default FooterCard;