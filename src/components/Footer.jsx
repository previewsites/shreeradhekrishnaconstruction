import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { FaFacebook, FaWhatsapp, FaInfoCircle } from 'react-icons/fa';
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
            <div className="footer-logo-text mb-4">
              <span className="text-gold font-bold font-heading text-2xl tracking-wide">𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗱𝗵𝗲</span>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Colour Work & Civil Contractor</div>
            </div>
            <p className="brand-text">
              Premier civil and painting contractor in Ahmedabad since 2010. Benchmarking excellence, quality, and trust.
            </p>
            <div className="social-links">
              <motion.a whileHover={{ scale: 1.1, y: -3 }} href="https://www.facebook.com/colorandconstruction" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -3 }} href="https://wa.me/919426758207" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -3 }} href="https://www.justdial.com/Ahmedabad/Shree-Radhe-Colour-World-Opposite-Green-Park-Narol/079PXX79-XX79-220318210821-U6C8_BZDET" target="_blank" rel="noopener noreferrer" aria-label="JustDial" title="JustDial Directory"><FaInfoCircle size={20} /></motion.a>
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
            </div>
          </motion.div>

          {/* Featured projects block */}
          <motion.div className="footer-links" variants={itemVariants}>
            <h3>Our Specialties</h3>
            <div className="links-grid">
              <Link to="/projects/office-renovation" className="hover-underline flex items-center gap-1">Office Remodeling <ExternalLink size={12} /></Link>
              <Link to="/projects/flat-furniture" className="hover-underline flex items-center gap-1">Flat Furniture & Woodwork <ExternalLink size={12} /></Link>
              <Link to="/projects/wall-painting" className="hover-underline flex items-center gap-1">Putty & Painting <ExternalLink size={12} /></Link>
              <Link to="/projects/bathroom-remodeling" className="hover-underline flex items-center gap-1">Bathroom Renovations <ExternalLink size={12} /></Link>
            </div>
          </motion.div>

          {/* Newsletter and Corporate indicators */}
          <motion.div className="footer-newsletter-col" variants={itemVariants}>
            <h3>Request Consultation</h3>
            <p className="newsletter-desc">Submit your email to request a callback for painting or civil estimations.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Callback requested! We will reach out to you shortly."); }}>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
                <button type="submit" aria-label="Submit">
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            
            <div className="corporate-badges mt-6 flex items-center gap-3">
              <div className="badge-item flex items-center gap-1.5 text-xs text-gray-400">
                <ShieldCheck size={14} className="text-gold" />
                <span>100% Trust Guarantee</span>
              </div>
              <div className="divider-dot"></div>
              <div className="badge-item text-xs text-gray-400">
                <span>ESTD. 2010</span>
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
                <h4>Office Location</h4>
                <p>Naranpura, Ahmedabad, IN - 380013</p>
              </div>
            </div>
            
            <div className="contact-card-item">
              <Phone size={20} className="text-gold flex-shrink-0" />
              <div>
                <h4>Contact Satish bhai</h4>
                <p>+91 94267 58207</p>
              </div>
            </div>

            <div className="contact-card-item">
              <Mail size={20} className="text-gold flex-shrink-0" />
              <div>
                <h4>Email Support</h4>
                <p>info@shreeradhecolourwork.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom py-6 border-t border-[#161f30] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shree Radhe Colour Work & Construction Contractor. All Rights Reserved.
          </p>
          <div className="footer-legal text-xs text-gray-500 flex gap-4">
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
