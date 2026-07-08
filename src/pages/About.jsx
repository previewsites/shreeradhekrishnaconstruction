import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, ShieldCheck, Zap, Heart, Target, Users } from 'lucide-react';
import './About.css';

const coreValues = [
  { icon: <Diamond size={32} />, title: "Exclusivity", desc: "Homes are assets forever. We take a lot more than bricks and concrete, crafting spaces that exude exclusivity." },
  { icon: <ShieldCheck size={32} />, title: "Simplicity", desc: "Simplicity has been the ultimate form of sophistication. A thought that acts as the centre of all." },
  { icon: <Zap size={32} />, title: "Dynamism", desc: "Driven by dynamism, we take inspiration from global trends without forgetting our roots and ethos." },
  { icon: <Heart size={32} />, title: "Honesty", desc: "Honesty is the richest legacy. We have an open door policy, admire transparency, and make no compromise with quality." },
  { icon: <Target size={32} />, title: "Attention to Detail", desc: "Achieving thoroughness and accuracy. Besides finesse, we take good care of the foundation and functionality." },
  { icon: <Users size={32} />, title: "People Centric", desc: "Whatever we do endeavours around you. Every aspect of your home is designed keeping you in mind." }
];

const milestones = [
  { year: "2019", text: "Mr. Karan Bhatia on Panel Discussion at Realty Plus Conclave & Excellence Awards, Ahmedabad & Pune" },
  { year: "2019", text: "RealtyPlus Awards 'Iconic Project of The Year'" },
  { year: "2018", text: "RealtyPlus Awards 'Residential Project of The Year' & 'Themed Project of The Year'" },
  { year: "2018", text: "Times Realty & Retail Icons 'Emerging Luxury Project of The Year'" },
  { year: "2017", text: "Prop Realty Awards 'Luxury Project of The Year'" },
  { year: "2016", text: "Bhumi Pujan at HRG Verántes® & Presentations at Realtors 2020" },
];

const team = [
  { name: "Mr. Chandrasen Gajria", role: "Partner", img: "assets/about/view/image-28.jpg" },
  { name: "Mr. Nirmal Bhatia", role: "Partner", img: "assets/about/view/image-29.jpg" },
  { name: "Mr. Karan Bhatia", role: "Director, Sales & Marketing", img: "assets/about/view/image-26.jpg" },
  { name: "Mr. Chirag Bhatia", role: "Director, Operations", img: "assets/about/view/image-27.jpg" }
];

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage: "url('assets/cross-roads/view/banner-2.jpg')"}}></div>
        <div className="page-header-overlay"></div>
        <div className="container page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Discover Our Legacy</h5>
            <h1 className="gradient-text font-heading">About HRG Construction</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
              Pioneering excellence in real estate development since 2015, building a living heritage.
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
              <h2 className="text-4xl font-heading mb-6">Started in 2015, with our first Residential Project</h2>
              <p className="text-lg text-gray-300 mb-4">
                HRG Construction Co., a pioneering real-estate development company based in Ahmedabad (Gujarat), 
                has been benchmarking the industry since its inception. 
              </p>
              <p className="text-gray-400 mb-6">
                We strive to bring to you exclusive high end properties that have been carefully crafted to your perfection. 
                We believe that perfection is only a milestone and we choose to go beyond that. At HRG, we don’t just build 
                buildings but craft a space that has been tailored to your needs. These spaces are inspired from design trends 
                across the globe yet stay rooted to our values.
              </p>
              <p className="text-gray-400 font-bold border-l-2 border-[#d4af37] pl-4 italic">
                "HRG Group believes in creating noteworthy additions to the urban landscape through creative collaborations with passionate people."
              </p>
            </motion.div>
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="about-image" style={{backgroundImage: "url('assets/about/view/image-30.png')"}}></div>
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
            <h2 className="text-4xl font-heading">Milestones & Awards</h2>
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
            <h2 className="text-4xl font-heading">Our Team</h2>
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
