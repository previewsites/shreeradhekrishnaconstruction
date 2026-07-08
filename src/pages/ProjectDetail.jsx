import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Building, Info, Image as ImageIcon, LayoutDashboard, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" />;
  }

  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-slider">
          {project.heroImages.map((img, idx) => (
            <div 
              key={idx}
              className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="container project-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="gradient-text font-heading">{project.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">{project.description}</p>
            
            <div className="project-meta">
              <div className="meta-item glass-panel">
                <Building size={18} />
                <span>{project.type}</span>
              </div>
              <div className="meta-item glass-panel">
                <MapPin size={18} />
                <span>RERA: {project.rera}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container">
        {/* About Section */}
        <section className="project-section" id="about">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="project-about-grid"
          >
            <div className="project-vision-col">
              <h2 className="section-title"><Info className="text-gold" /> The Vision</h2>
              <p className="vision-text text-lg text-gray-300 leading-relaxed mb-8">
                {project.about}
              </p>
              <div className="features-grid">
                {project.features.map((feature, i) => (
                  <div key={i} className="feature-pill flex items-center gap-3 text-sm text-gray-400 p-4 bg-[#0a1324] rounded-xl border border-[#1a2333]">
                    <ChevronRight size={16} className="text-gold" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="project-inquiry-col">
              <div className="glass-panel inquiry-form-card">
                <h3 className="inquiry-title text-2xl font-heading text-gold mb-2">Quick Inquiry</h3>
                <p className="inquiry-subtitle text-sm text-gray-400 mb-6">Connect with our luxury sales consultants directly.</p>
                <form className="inquiry-form flex flex-col gap-4">
                  <div className="form-input-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-input-group">
                    <input type="email" placeholder="Your Email Address" required />
                  </div>
                  <div className="form-input-group">
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  <button type="button" className="btn-primary inquiry-btn w-full mt-2 py-4">
                    <span>Request Callback</span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Specifications */}
        <section className="project-section" id="specifications">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title"><LayoutDashboard className="text-gold" /> Specifications</h2>
            <div className="specs-grid">
              {project.specifications.map((spec, i) => (
                <div key={i} className="spec-card rounded-2xl">
                  <h4 className="font-heading">{spec.title}</h4>
                  <p className="text-gray-400">{spec.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Sample Views / Gallery */}
        <section className="project-section" id="views">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title"><ImageIcon className="text-gold" /> Sample Views</h2>
            <div className="gallery-grid">
              {project.sampleViews.map((img, i) => (
                <div key={i} className="gallery-item shadow-2xl">
                  <img src={img} alt={`${project.title} view ${i + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Layout Plans */}
        <section className="project-section mb-24" id="layouts">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title"><LayoutDashboard className="text-gold" /> Layout Plans</h2>
            <div className="grid grid-cols-1 gap-8">
              {project.layoutPlans.map((img, i) => (
                <div key={i} className="layout-item shadow-2xl">
                  <img src={img} alt={`${project.title} layout ${i + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
