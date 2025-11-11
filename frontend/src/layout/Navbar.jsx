import React, { useState, useMemo, useEffect } from "react";
import logo from "../assets/Logo.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Menu, X, Maximize2, Minimize2 } from "lucide-react";
import { useAuth } from "../routes/useAuth";
import { PaymentService } from "../services/PaymentService";
import { toast } from "react-hot-toast";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  // ✅ Check fullscreen state updates
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen toggle failed:", err);
      toast.error("Unable to toggle fullscreen mode");
    }
  };

  const isAccessValid = useMemo(() => {
    if (!user || !user.access_expires_at) return false;
    return new Date(user.access_expires_at) > new Date();
  }, [user]);

  const handleCompletePayment = async () => {
    setIsProcessingPayment(true);
    try {
      const { data, error } = await PaymentService.chargilypay();
      console.log(data);

      if (error) {
        toast.error(error.message || "Payment failed");
        return;
      }

      if (data) {
        window.location.href = data;
      } else {
        toast.success("Payment processed successfully!");
      }
    } catch (err) {
      toast.error("An error occurred during payment processing");
      console.error("Payment error:", err);
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background-light py-3 px-8 flex items-center justify-between font-display font-light z-50">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-6 cursor-pointer" onClick={() => navigate("/")} />

      {/* Desktop Links */}
      <div className="text-primary-400 lg:flex text-sm md:flex gap-7 hidden">
        {["home", "about", "features", "contact"].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer capitalize"
            onClick={() => navigate("/")}
          >
            {section === "about" ? "About Us" : section === "contact" ? "Contact Us" : section}
          </ScrollLink>
        ))}
      </div>

      {/* Desktop Buttons + Fullscreen */}
      <div className="lg:flex gap-4 hidden items-center">
        <button
          onClick={toggleFullscreen}
          className="p-2  bg-gray-100 hover:text-white hover:bg-transparent rounded-full transition"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>

        {user ? (
          isAccessValid ? (
            <Button className="rounded-2xl">
              <RouterLink to="/dashboard">Dashboard</RouterLink>
            </Button>
          ) : (
            <Button
              className="rounded-2xl"
              onClick={handleCompletePayment}
              disabled={isProcessingPayment}
            >
              {isProcessingPayment ? "Processing..." : "Complete Payment"}
            </Button>
          )
        ) : (
          <>
            <Button className="rounded-2xl">
              <RouterLink to="/login">Login</RouterLink>
            </Button>
            <Button className="rounded-2xl bg-transparent border border-primary text-primary hover:text-[#0B0121]">
              <RouterLink to="/signup">Sign Up</RouterLink>
            </Button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-background border rounded-lg shadow-lg p-4 flex flex-col gap-4 text-primary-400 w-48">
          {["home", "about", "features", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer capitalize"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {section === "about" ? "About Us" : section === "contact" ? "Contact Us" : section}
            </ScrollLink>
          ))}

          {/* Fullscreen Toggle */}
          <button
            onClick={() => {
              toggleFullscreen();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center text-white gap-2 border rounded-lg p-2 justify-center"
          >
            {isFullscreen ? (
              <>
                <Minimize2 size={18} className="text-white" /> Exit Fullscreen
              </>
            ) : (
              <>
                <Maximize2 size={18} className="text-white"  /> Fullscreen
              </>
            )}
          </button>

          {user ? (
            isAccessValid ? (
              <Button className="rounded-2xl">
                <RouterLink
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </RouterLink>
              </Button>
            ) : (
              <Button
                className="rounded-2xl"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleCompletePayment();
                }}
                disabled={isProcessingPayment}
              >
                {isProcessingPayment ? "Processing..." : "Complete Payment"}
              </Button>
            )
          ) : (
            <>
              <Button className="rounded-2xl">
                <RouterLink
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </RouterLink>
              </Button>
              <Button className="rounded-2xl bg-transparent border border-primary text-primary hover:text-[#0B0121]">
                <RouterLink
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </RouterLink>
              </Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
