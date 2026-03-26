"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Services", href: "/services/veneers" },
  { label: "Doctors", href: "/doctors" },
  { label: "Smile Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const servicesDropdown = [
  { label: "Veneers", href: "/services/veneers" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Hollywood Smile", href: "/services/hollywood-smile" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  // In light theme always use "scrolled" style (white bg, dark text)
  const showScrolled = scrolled || !isHome || theme === "light";

  // When navbar has white bg (showScrolled), text must always be dark regardless of theme
  const scrolledTextColor = "#0a0a0a";
  const navBg = showScrolled ? "rgba(255,255,255,0.97)" : "transparent";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 0.4s, box-shadow 0.4s, border-color 0.4s",
        backgroundColor: navBg,
        borderBottom: showScrolled ? "1px solid var(--tdc-border)" : "1px solid transparent",
        boxShadow: showScrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
        backdropFilter: showScrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container-luxury flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col leading-none">
            <span
              className="font-heading font-bold text-xl tracking-widest transition-colors duration-300"
              style={{ color: showScrolled ? scrolledTextColor : "#ffffff" }}
            >
              TDC
            </span>
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-light"
              style={{ color: "#C9A96E" }}
            >
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Services with dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="text-sm tracking-wide font-medium flex items-center gap-1 transition-colors duration-300 hover:text-[#C9A96E]"
              style={{ color: showScrolled ? scrolledTextColor : "rgba(255,255,255,0.90)" }}
            >
              Services
              <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    marginTop: "8px",
                    width: "208px",
                    backgroundColor: theme === "light" ? "#ffffff" : "#111111",
                    border: `1px solid var(--tdc-border)`,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                    overflow: "hidden",
                  }}
                >
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-sm transition-colors"
                      style={{
                        color: "var(--tdc-text)",
                        borderBottom: "1px solid var(--tdc-border)",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C9A96E"; (e.currentTarget as HTMLElement).style.backgroundColor = "var(--tdc-surface)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--tdc-text)"; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide font-medium relative group transition-colors duration-300 hover:text-[#C9A96E]"
              style={{
                color: pathname === link.href ? "#C9A96E" : (showScrolled ? scrolledTextColor : "rgba(255,255,255,0.90)"),
              }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A96E] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right-side controls */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+971565378313"
            className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-[#C9A96E]"
            style={{ color: showScrolled ? "rgba(10,10,10,0.60)" : "rgba(255,255,255,0.80)" }}
          >
            <Phone className="w-4 h-4" />
            <span>+971 56 537 8313</span>
          </a>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.88 }}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              backgroundColor: theme === "dark" ? "rgba(201,169,110,0.12)" : "rgba(0,0,0,0.07)",
              border: "1px solid rgba(201,169,110,0.35)",
              color: "#C9A96E",
            }}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -30 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <Link
            href="/contact"
            className="text-white text-sm font-medium px-6 py-2.5 transition-all duration-300 tracking-wide hover:shadow-lg"
            style={{
              backgroundColor: "#C9A96E",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#B8891A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C9A96E"; }}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: theme === "dark" ? "rgba(201,169,110,0.12)" : "rgba(0,0,0,0.07)",
              border: "1px solid rgba(201,169,110,0.35)",
              color: "#C9A96E",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 transition-colors"
            style={{ color: showScrolled ? scrolledTextColor : "#ffffff" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#111111",
              borderTop: "1px solid var(--tdc-border)",
              overflow: "hidden",
            }}
            className="lg:hidden"
          >
            <div className="container-luxury py-6 flex flex-col gap-1">
              {servicesDropdown.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium py-2.5 px-3 rounded-lg transition-colors hover:text-[#C9A96E]"
                  style={{ color: "var(--tdc-text-soft)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--tdc-surface)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px my-2" style={{ backgroundColor: "var(--tdc-border)" }} />
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium py-2.5 px-3 rounded-lg transition-colors hover:text-[#C9A96E]"
                  style={{ color: "var(--tdc-text)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--tdc-surface)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px my-2" style={{ backgroundColor: "var(--tdc-border)" }} />
              <Link
                href="/contact"
                className="text-white text-sm font-medium px-6 py-3 text-center tracking-wide mt-2"
                style={{ backgroundColor: "#C9A96E" }}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
