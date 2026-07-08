import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage: "url('/assets/cross-roads/view/banner-3.jpg')"}}></div>
        <div className="page-header-overlay"></div>
        <div className="container page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Let's Connect</h5>
            <h1 className="gradient-text font-heading">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
              We are always here to help you. Reach out to our team to discover your next premium property.
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
                <p className="text-lg text-gray-400">Our premium spaces await your presence. Connect with our dedicated sales or vendor teams directly.</p>
              </div>
              
              <div className="info-block glass-panel">
                <div className="info-item hover-gold">
                  <div className="icon-wrapper"><MapPin size={28} /></div>
                  <div className="info-text">
                    <h4 className="font-heading text-xl text-white mb-1">Corporate Office</h4>
                    <p className="text-gray-400 leading-relaxed">UL3 Samedh Building, Next to Associated Petrol Pump, CG Road Ahmedabad - 380009.</p>
                  </div>
                </div>
                
                <div className="info-item hover-gold">
                  <div className="icon-wrapper"><Phone size={28} /></div>
                  <div className="info-text">
                    <h4 className="font-heading text-xl text-white mb-1">Direct Lines</h4>
                    <p className="text-gray-400 leading-relaxed"><strong>Sales:</strong> +91 99787 93795</p>
                    <p className="text-gray-400 leading-relaxed"><strong>Vendors:</strong> +91 94267 37211</p>
                  </div>
                </div>
                
                <div className="info-item hover-gold">
                  <div className="icon-wrapper"><Mail size={28} /></div>
                  <div className="info-text">
                    <h4 className="font-heading text-xl text-white mb-1">Email Contacts</h4>
                    <p className="text-gray-400 leading-relaxed"><strong>Sales:</strong> sales@hrgconstruction.com</p>
                  </div>
                </div>
                
                <div className="info-item hover-gold">
                  <div className="icon-wrapper"><Clock size={28} /></div>
                  <div className="info-text">
                    <h4 className="font-heading text-xl text-white mb-1">Working Hours</h4>
                    <p className="text-gray-400 leading-relaxed">Mon - Sat: 10:00 AM - 7:00 PM</p>
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
              <h3 className="text-2xl text-gold mb-8 font-heading">Quick Inquiry</h3>
              <form className="contact-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="+91 99787 93795" required />
                </div>
                
                <div className="form-group">
                  <label>Message *</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" className="btn-primary form-submit w-full mt-4 flex items-center justify-center gap-2 text-lg">
                  Submit Inquiry <Send size={20} />
                </button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section h-96 relative w-full border-t border-[#1a2333]">
        <div className="absolute inset-0 bg-[#050b14] flex flex-col items-center justify-center opacity-80 z-10 pointer-events-none">
          <Globe size={48} className="text-gold mb-4" />
          <h3 className="text-2xl font-heading text-white">Interactive Map Location</h3>
          <p className="text-gray-400">Ahmedabad, Gujarat</p>
        </div>
        <div className="w-full h-full bg-[url('/assets/cross-roads/view/view-6.jpg')] bg-cover bg-center grayscale opacity-30"></div>
      </section>
    </div>
  );
};

export default Contact;
