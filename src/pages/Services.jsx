import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Wrench, Building, Globe, Landmark } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    title: "Developer Assisted Interior Design",
    icon: <Paintbrush size={40} />,
    description: "HRG Construction Co. has an in-house team of designers and engineers to help you plan and execute the property of your dreams in a timely and cost-efficient manner.",
    imgSrc: "assets/services/view/image-19.jpg"
  },
  {
    title: "Developer Assisted Property Maintenance",
    icon: <Wrench size={40} />,
    description: "We believe in regular maintenance of our properties to ensure they look as good as new with every passing year. We assist clients with housekeeping, civil work, electrical, plumbing etc.",
    imgSrc: "assets/services/view/image-20.jpg"
  },
  {
    title: "Leasing and Resale Assistance",
    icon: <Building size={40} />,
    description: "HRG Construction Co. believes in creating value for customers by assisting with leasing or resale of their properties with the best possible returns through our extensive channel partner network.",
    imgSrc: "assets/cross-roads/view/view-19.jpg"
  },
  {
    title: "Property Purchase & Management for NRI's",
    icon: <Globe size={40} />,
    description: "There is nothing in the world that feels as good as coming home. We specialize in assisting NRI's with all their property requirements from purchase, legal assistance to post-purchase management.",
    imgSrc: "assets/mercado/view/view-19.jpg"
  },
  {
    title: "Home/Commercial Loans & Insurance",
    icon: <Landmark size={40} />,
    description: "We offer assistance for Home and Commercial Loans through various leading banks and help in purchasing Property Insurance to secure your property's future.",
    imgSrc: "assets/jewel-park/view/image-32.jpg"
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage: "url('assets/cross-roads/view/banner-3.jpg')"}}></div>
        <div className="page-header-overlay"></div>
        <div className="container page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Beyond Construction</h5>
            <h1 className="gradient-text font-heading">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
              Committed to our customers at all stages - right from inquiry to post-possession property handover.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="services-quote bg-[#050b14] py-16 border-b border-[#1a2333]">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading text-gold italic">
              "The projects we design are thoughtfully designed, impeccably built, strategically located and crafted for the contemporary dwellers of the present time."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-container py-24">
        <div className="container">
          <div className="services-showcase">
            {servicesList.map((service, index) => (
              <motion.div 
                key={index}
                className={`service-featured-card ${index % 2 !== 0 ? 'reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="service-featured-img-container">
                  <div className="service-featured-img" style={{backgroundImage: `url(${service.imgSrc})`}}></div>
                </div>
                <div className="service-featured-content glass-panel">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="text-3xl font-heading font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
