import React, { useState, useMemo } from "react";
import logo from "../assets/Logo.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "../routes/useAuth";
import { PaymentService } from "../services/PaymentService";
import { toast } from "react-hot-toast";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAccessValid = useMemo(() => {
    if (!user || !user.access_expires_at) return false;
    return new Date(user.access_expires_at) > new Date();
  }, [user]);

  const handleCompletePayment = async () => {
    setIsProcessingPayment(true);
    try {
      const { data, error } = await PaymentService.chargilypay();
      console.log(data)

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
      <img src={logo} alt="logo" className="h-6" />

      {/* Desktop Links */}
      <div className="text-primary-400 lg:flex text-sm md:flex gap-7 hidden">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          About Us
        </ScrollLink>
        <ScrollLink
          to="features"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          Features
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          Contact Us
        </ScrollLink>
      </div>

      {/* Desktop Buttons */}
      <div className="lg:flex gap-5 hidden">
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
            <Button className="rounded-2xl bg-transparent border border-primary text-primary">
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
        <div className="absolute top-16 right-4 bg-background border rounded-lg shadow-lg p-4 flex flex-col gap-4 text-primary-400">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </ScrollLink>

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
