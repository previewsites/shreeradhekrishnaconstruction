import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage: "url('https://lh3.googleusercontent.com/4GZ66hLP31sDEePFKpEntf1ItWY0aFPieph9HnhkZtoD5PDEdp7Do9O6wPObKd1ZS11q5e-UBaTiIxXurA=s0')"}}></div>
        <div className="page-header-overlay"></div>
        <div className="container page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Start Your Renovation</h5>
            <h1 className="gradient-text font-heading">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
              Reach out to Satish bhai and the Shree Radhe team today for a free on-site estimate and quotation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-section py-24">
        <div className="container">
          <div className="contact-grid">
            
            <motion.div 
              className="contact-info-col"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-header mb-12">
                <h2 className="text-4xl font-heading text-white mb-4">Contact Information</h2>
                <p className="text-lg text-gray-400">Ready to discuss your painting, civil works, POP, or custom carpentry requirements? Let's connect.</p>
              </div>
              
              <div className="info-block glass-panel">
                <div className="info-item hover-gold">
                  <div className="icon-wrapper"><MapPin size={28} /></div>
                  <div className="info-text">
                    <h4 className="font-heading text-xl text-white mb-1">Office Address</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Lakshamikrupa Appartment, No. 3,<br />
                      Opposite Green Park Gate, Naranpura,<br />
                      Ahmedabad, Gujarat, IN - 380013.
                    </p>
                  </div>
                </div>
                
                <div className="info-item hover-gold">
                  <div className="icon-wrapper"><Phone size={28} /></div>
                  <div className="info-text">
                    <h4 className="font-heading text-xl text-white mb-1">Direct Lines</h4>
                    <p className="text-gray-400 leading-relaxed">
                      <strong>Satish Rathod:</strong> <a href="tel:+919426758207" className="hover:text-gold">+91 94267 58207</a>
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      <strong>WhatsApp Support:</strong> <a href="https://wa.me/919426758207" target="_blank" rel="noopener noreferrer" className="text-gold font-bold">Chat Now on WhatsApp</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-item hover-gold">
                  <div className="icon-wrapper"><Mail size={28} /></div>
                  <div className="info-text">
                    <h4 className="font-heading text-xl text-white mb-1">Email Inquiries</h4>
                    <p className="text-gray-400 leading-relaxed">
                      <a href="mailto:info@shreeradhecolourwork.com">info@shreeradhecolourwork.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-item hover-gold">
                  <div className="icon-wrapper"><Clock size={28} /></div>
                  <div className="info-text">
                    <h4 className="font-heading text-xl text-white mb-1">Business Hours</h4>
                    <p className="text-gray-400 leading-relaxed">Monday - Sunday: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-col glass-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-gold mb-8 font-heading">Request Estimate</h3>
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your quote request has been received. Mr. Satish Rathod will contact you shortly."); }}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label>Service Area *</label>
                    <input type="text" placeholder="e.g. Naranpura, Bopal" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="name@example.com" />
                </div>
                
                <div className="form-group">
                  <label>WhatsApp / Phone Number *</label>
                  <input type="tel" placeholder="+91 94267 58207" required />
                </div>
                
                <div className="form-group">
                  <label>Tell us about your requirements *</label>
                  <textarea rows="5" placeholder="Details about colour work, POP ceiling, tiling, carpentry, or civil works..." required></textarea>
                </div>
                
                <button type="submit" className="btn-primary form-submit w-full mt-4 flex items-center justify-center gap-2 text-lg">
                  Submit Request <Send size={20} />
                </button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section h-96 relative w-full border-t border-[#1a2333]">
        <iframe 
          title="Shree Radhe Location" 
          src="https://maps.google.com/maps?q=Shree%20Radhe%20Colour%20Work%20Opposite%20Green%20Park%20Gate%20Naranpura%20Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </section>
    </div>
  );
};

export default Contact;
