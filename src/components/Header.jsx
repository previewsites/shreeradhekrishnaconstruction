import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: '-100%', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo flex flex-col justify-center" style={{ textDecoration: 'none' }}>
          <span className="text-gold font-bold font-heading text-xl tracking-wide">𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗱𝗵𝗲</span>
          <span className="text-[8px] text-gray-500 uppercase tracking-widest mt-[-2px]">Colour Work & Civil Contractor</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="nav-item">
              <span className="nav-item-text">{link.name}</span>
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-4" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>Get Quote</Link>
        </nav>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ zIndex: 2000 }}>
          {isMobileMenuOpen ? <X size={32} className="text-gold" /> : <Menu size={32} />}
        </button>
      </div>

      {/* Creative Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-nav-content">
              {navLinks.map((link, i) => (
                <motion.div custom={i} variants={linkVariants} key={i}>
                  <Link 
                    to={link.path} 
                    className="mobile-nav-item font-heading" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div custom={navLinks.length} variants={linkVariants}>
                <Link 
                  to="/contact" 
                  className="btn-primary mt-8 inline-block" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
