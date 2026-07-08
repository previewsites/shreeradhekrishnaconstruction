import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="footer border-t border-[#1a2333] bg-[#050b14] relative overflow-hidden">
      {/* Blueprint decorative scan line */}
      <div className="footer-scan-line"></div>
      
      <div className="container">
        <motion.div 
          className="footer-content py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand block */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <h2 className="footer-logo font-heading">
              HRG<span className="text-gold">.</span>
            </h2>
            <p className="brand-text">
              Pioneering high-end commercial and residential real estate since 2015. Benchmarking excellence, one landmark at a time.
            </p>
            <div className="social-links">
              <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" aria-label="Facebook"><FaFacebook size={18} /></motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" aria-label="Instagram"><FaInstagram size={18} /></motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" aria-label="Twitter"><FaTwitter size={18} /></motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" aria-label="LinkedIn"><FaLinkedin size={18} /></motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" aria-label="YouTube"><FaYoutube size={18} /></motion.a>
            </div>
          </motion.div>

          {/* Quick links block */}
          <motion.div className="footer-links" variants={itemVariants}>
            <h3>Navigation</h3>
            <div className="links-grid">
              <Link to="/" className="hover-underline">Home</Link>
              <Link to="/about" className="hover-underline">About Us</Link>
              <Link to="/projects" className="hover-underline">Our Projects</Link>
              <Link to="/services" className="hover-underline">Services</Link>
              <Link to="/contact" className="hover-underline">Contact</Link>
              <Link to="/contact" className="hover-underline">Careers</Link>
            </div>
          </motion.div>

          {/* Featured projects block */}
          <motion.div className="footer-links" variants={itemVariants}>
            <h3>Landmarks</h3>
            <div className="links-grid">
              <Link to="/projects/verantes" className="hover-underline flex items-center gap-1">VERÁNTES® <ExternalLink size={12} /></Link>
              <Link to="/projects/mercado" className="hover-underline flex items-center gap-1">MERCÁDO® <ExternalLink size={12} /></Link>
              <Link to="/projects/cross-roads" className="hover-underline flex items-center gap-1">Cross Roads <ExternalLink size={12} /></Link>
              <Link to="/projects/jewel-park" className="hover-underline flex items-center gap-1">The Jewel Park® <ExternalLink size={12} /></Link>
            </div>
          </motion.div>

          {/* Newsletter and Corporate indicators */}
          <motion.div className="footer-newsletter-col" variants={itemVariants}>
            <h3>Stay Updated</h3>
            <p className="newsletter-desc">Subscribe to receive exclusive updates on upcoming luxury developments.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            
            <div className="corporate-badges mt-6 flex items-center gap-3">
              <div className="badge-item flex items-center gap-1.5 text-xs text-gray-400">
                <ShieldCheck size={14} className="text-gold" />
                <span>RERA Registered</span>
              </div>
              <div className="divider-dot"></div>
              <div className="badge-item text-xs text-gray-400">
                <span>ESTD. 2015</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mid Divider & Contact Details bar */}
        <div className="footer-contact-bar py-8 border-t border-[#161f30]">
          <div className="contact-grid-row">
            <div className="contact-card-item">
              <MapPin size={20} className="text-gold flex-shrink-0" />
              <div>
                <h4>Office</h4>
                <p>UL3 Samedh Building, CG Road, Ahmedabad</p>
              </div>
            </div>
            
            <div className="contact-card-item">
              <Phone size={20} className="text-gold flex-shrink-0" />
              <div>
                <h4>Inquiries</h4>
                <p>Sales: +91 99787 93795</p>
              </div>
            </div>

            <div className="contact-card-item">
              <Mail size={20} className="text-gold flex-shrink-0" />
              <div>
                <h4>Email</h4>
                <p>sales@hrgconstruction.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom py-6 border-t border-[#161f30] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HRG Construction Co. All Rights Reserved.
          </p>
          <div className="footer-legal text-xs text-gray-500 flex gap-4">
            <a href="#" className="hover:text-gold transition">RERA Disclaimer</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
