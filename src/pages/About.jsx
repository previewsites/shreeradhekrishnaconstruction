import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Target, Users, Hammer } from 'lucide-react';
import './About.css';

const coreValues = [
  { icon: <ShieldCheck size={32} />, title: "Quality Commitment", desc: "We use only premium materials (Asian Paints, premium Birla putty, robust ply/cement) to ensure finishes that stand the test of time." },
  { icon: <Hammer size={32} />, title: "Precision Craft", desc: "From plaster leveling to modular carpentry joints, we take immense pride in fine workmanship and structural durability." },
  { icon: <Zap size={32} />, title: "Timely Delivery", desc: "No delays. We optimize labor coordination and site layout to ensure your remodeling or paint job is completed strictly on schedule." },
  { icon: <Heart size={32} />, title: "Transparency", desc: "Honesty is our foundation. We provide detailed, itemized quotes with clear material specifications, ensuring zero hidden costs." },
  { icon: <Target size={32} />, title: "Attention to Detail", desc: "Whether it is anti-skid grouting in bathrooms, pop false ceiling lines, or texture coat alignment, we care about the details." },
  { icon: <Users size={32} />, title: "Client First", desc: "We tailor our civil construction and paint schedules around your comfort, keeping disturbance to your daily life to a minimum." }
];

const milestones = [
  { year: "2026", text: "Successfully completed over 500+ residential and commercial contracting projects across Ahmedabad." },
  { year: "2023", text: "Expanded team capabilities to handle large-scale commercial civil and custom carpentry works (e.g. Bopal, Thaltej)." },
  { year: "2020", text: "Acclaimed as a top-rated civil and color contractor on JustDial and local directories in Gujarat." },
  { year: "2015", text: "Pioneered integrated home remodeling services combining waterproofing, tiling, POP, and electrical works under one roof." },
  { year: "2010", text: "Founded by Mr. Satish Rathod as a dedicated colour and painting service provider in Naranpura, Ahmedabad." }
];

const team = [
  { name: "Mr. Satish Rathod", role: "Founder & Proprietor", img: "assets/about/view/image-28.jpg" },
  { name: "Mr. Rajesh Rathod", role: "Project Supervisor", img: "assets/about/view/image-29.jpg" },
  { name: "Mr. Dinesh Rathod", role: "Carpentry Coordinator", img: "assets/about/view/image-26.jpg" },
  { name: "Mr. Manoj Patel", role: "Master Painting Specialist", img: "assets/about/view/image-27.jpg" }
];

const About = () => {
  return (
    <div className="about-page">
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
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Discover Our Legacy</h5>
            <h1 className="gradient-text font-heading">About Shree Radhe</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
              Building trust and delivering high-quality painting, civil renovations, and carpentry in Ahmedabad since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">Our Story</h5>
              <h2 className="text-4xl font-heading mb-6">Over 15 Years of Crafting Beautiful Spaces in Gujarat</h2>
              <p className="text-lg text-gray-300 mb-4">
                Shree Radhe Colour Work & Construction Contractor was established with a singular vision: to offer honest, reliable, and premium civil construction and colour contracting services.
              </p>
              <p className="text-gray-400 mb-6">
                Under the leadership of Mr. Satish Rathod (Satish bhai), we have grown from a local painting service into a comprehensive civil contracting firm. Our team handles every aspect of interior construction, waterproofing, structural repairs, POP design, and carpentry. We do not compromise on structural integrity or aesthetic refinement. Whether it's a minor bathroom repair or a full-scale office remodeling, we guarantee absolute customer satisfaction.
              </p>
              <p className="text-gray-400 font-bold border-l-2 border-[#d4af37] pl-4 italic">
                "Shree Radhe believes in executing projects with superior materials, transparent timelines, and neat workmanship to ensure lifelong quality for our clients."
              </p>
            </motion.div>
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="about-image" style={{backgroundImage: "url('https://lh3.googleusercontent.com/qzFAY6umb5a92LpFSdFmCeqp3VxqsBLjlc0MX1txZ1xAMMvAH24kgTiy7odWbY7n8Eyh3MYpuD6_ic6wDQ=s0')"}}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section bg-[#08101a]">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">Our Ethos</h5>
            <h2 className="text-4xl font-heading">Core Values</h2>
          </motion.div>
          
          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <motion.div 
                className="value-card glass-panel"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="value-icon text-gold mb-4">{val.icon}</div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones-section py-24">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">Our Journey</h5>
            <h2 className="text-4xl font-heading">Milestones & History</h2>
          </motion.div>

          <div className="timeline">
            {milestones.map((item, idx) => (
              <motion.div 
                className="timeline-item"
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <span className="text-gold font-bold text-xl mb-2 block">{item.year}</span>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section bg-[#050b14] py-24 border-t border-[#1a2333]">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">The Leadership</h5>
            <h2 className="text-4xl font-heading">Our Key Team</h2>
          </motion.div>

          <div className="team-grid">
            {team.map((member, idx) => (
              <motion.div 
                className="team-card"
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="team-img-wrapper">
                  <div className="team-img" style={{backgroundImage: `url('${member.img}')`}}></div>
                  <div className="team-overlay"></div>
                </div>
                <div className="team-info text-center mt-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gold text-sm tracking-wide uppercase">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
