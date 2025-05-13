import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slideIn } from "../../utils/Animation";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const policies = [
    { name: "Privacy Policy", action: () => navigate("/privacy") },
    { name: "Terms of Service", action: () => navigate("/terms") },
    { name: "Cookie Policy", action: () => navigate("/cookies") },
  ];

  const socialLinks = [
    {
      icon: faInstagram,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      url: "#",
    },
    { icon: faFacebook, color: "bg-blue-600", url: "#" },
    { icon: faTwitter, color: "bg-sky-500", url: "#" },
    { icon: faLinkedin, color: "bg-blue-700", url: "#" },
    { icon: faGithub, color: "bg-gray-800", url: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-background border-t border-[#BB9BFF]/10 w-full">
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#BB9BFF] blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#6E3AFF] blur-[100px]"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 pb-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...slideIn} className="space-y-4 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#BB9BFF] to-[#6E3AFF] bg-clip-text text-transparent">
              Contact Us
            </h3>

            <div className="space-y-2">
              <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-[#BB9BFF]/10">
                <MapPin size={16} className="text-[#BB9BFF] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-primary-300">
                    Location
                  </p>
                  <p className="text-xs text-primary-400/60">
                    123 Developer St, Code City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-[#BB9BFF]/10">
                <Phone size={16} className="text-[#BB9BFF] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-primary-300">Phone</p>
                  <p className="text-xs text-primary-400/60">+123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-[#BB9BFF]/10">
                <Mail size={16} className="text-[#BB9BFF] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-primary-300">Email</p>
                  <p className="text-xs text-primary-400/60">
                    contact@ourapp.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div {...slideIn} className="space-y-6 ml-20">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#BB9BFF] to-[#6E3AFF] bg-clip-text text-transparent">
              Quick Links
            </h3>

            <div className="flex flex-col space-y-3">
              {policies.map((policy, index) => (
                <button
                  key={index}
                  onClick={policy.action}
                  className="text-primary-400/70 hover:text-[#BB9BFF] text-left transition-colors hover:underline"
                >
                  {policy.name}
                </button>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -4 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center text-white text-lg transition-all hover:shadow-lg hover:shadow-[#BB9BFF]/20`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-[#BB9BFF]/30 to-transparent my-4"
        />

        {/* Bottom */}
        <motion.div
          {...slideIn}
          className="flex flex-col items-center justify-center text-center text-xs text-primary-400/70 py-2"
        >
          <p>&copy; {new Date().getFullYear()} OurApp. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
