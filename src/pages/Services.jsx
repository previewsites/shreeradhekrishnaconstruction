import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Wrench, Building, Landmark, Hammer, Shield } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    title: "Premium Colour Work & Painting",
    icon: <Paintbrush size={40} />,
    description: "Double-coat putty application, texture wall coatings, weatherproofing primer, and premium exterior/interior paint application using leading brands like Asian Paints Royale & Apex. We handle complete restoration and dampness treatments before painting.",
    imgSrc: "https://lh3.googleusercontent.com/fQFODongn6xOEfkTj1T-Q1d3WhaAF4blBGaZGl1AAtWUyLA1aqchyxHm29384ezdPEdJ8_Zn53XfOVGEYQ=s0"
  },
  {
    title: "Civil Construction & Remodeling",
    icon: <Building size={40} />,
    description: "Expert brick masonry, concrete plastering, ceiling repairs, layout modifications, and high-quality floor/wall tiling for kitchens, bathrooms, commercial shops, and office spaces.",
    imgSrc: "https://lh3.googleusercontent.com/qzFAY6umb5a92LpFSdFmCeqp3VxqsBLjlc0MX1txZ1xAMMvAH24kgTiy7odWbY7n8Eyh3MYpuD6_ic6wDQ=s0"
  },
  {
    title: "POP False Ceilings & Finishes",
    icon: <Landmark size={40} />,
    description: "Custom Plaster of Paris (POP) false ceiling designs, gypsum board ceilings, wall repair patches, ceiling border moldings, and smooth texture finishes for residential and commercial interiors.",
    imgSrc: "https://lh3.googleusercontent.com/TeaDMJY5zAVotmy0D-2QbB11yCweq2ulik4GCLlupohkpgaIrDxW4Qqcs7DSixcaeTHVNB3MW6O40J2cOA=s0"
  },
  {
    title: "Custom Carpentry & Furniture",
    icon: <Hammer size={40} />,
    description: "On-site custom woodwork, laminate wardrobes, modular kitchen cabinets, high-gloss veneer polishing, wall paneling, main door installations, and general residential carpentry using top-grade plywood.",
    imgSrc: "https://lh3.googleusercontent.com/kLXoOjR-rpRds97P9ZPREEjAVEv6fMkzNySIbEwokE48T21qmdWlwLDQoh_nk3WKxJxl3mQSjHc2Cgf62g=s0"
  },
  {
    title: "Demolition & Allied Contractor Services",
    icon: <Wrench size={40} />,
    description: "Safe structural demolition, bathroom remodeling preparation, CPVC pipeline upgrades, concealed wiring installations, wall leakage sealing, and structural dampness waterproofing.",
    imgSrc: "https://lh3.googleusercontent.com/TJc6COs50M1M4m042X7EKbc9NtzI7v0MV3nxGbzZaXHQfN74jPWqkppeH8gokT2StDUwR51dtNMSg9U-kA=s0"
  }
];

const Services = () => {
  return (
    <div className="services-page">
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
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Complete Contracting Solutions</h5>
            <h1 className="gradient-text font-heading">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
              Providing top-tier painting, civil, POP, demolition, and carpentry contractor services across Ahmedabad.
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
              "No compromise in the quality of the work. We serve our customers on priority, ensuring robust construction, beautiful colors, and fine carpentry."
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
