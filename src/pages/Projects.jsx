import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building, CheckCircle2 } from 'lucide-react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  // Convert object to array for mapping
  const projects = Object.values(projectsData);

  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage: "url('assets/extracted_index_152.jpg')"}}></div>
        <div className="page-header-overlay"></div>
        <div className="container page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Our Masterpieces</h5>
            <h1 className="gradient-text font-heading">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
              Discover our exclusive commercial and residential developments that are reshaping Ahmedabad's skyline.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-section py-24">
        <div className="container">
          <div className="portfolio-stack">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`portfolio-item ${index % 2 !== 0 ? 'reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="portfolio-image-col">
                  <div className="portfolio-image-wrapper shadow-2xl">
                    <div className="img-inner" style={{backgroundImage: `url(${project.previewImage})`}}></div>
                    <div className="portfolio-type-badge">
                      <Building size={16} />
                      <span>{project.type}</span>
                    </div>
                  </div>
                </div>
                <div className="portfolio-details-col">
                  <div className="portfolio-details glass-panel">
                    <h2 className="text-4xl font-heading text-gold mb-6">{project.title}</h2>
                    
                    <div className="location text-gray-300 mb-6 flex items-start gap-3">
                      <MapPin size={24} className="text-gold mt-1 flex-shrink-0" />
                      <p className="text-lg leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div className="features-grid mb-8">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle2 size={16} className="text-gold" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rera-box mb-8">
                      <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">RERA Registration</span>
                      <strong className="text-sm font-mono text-gray-300 tracking-tight">{project.rera}</strong>
                    </div>
                    
                    <Link to={`/projects/${project.id}`} className="btn-secondary w-full sm:w-auto inline-flex justify-center items-center">
                      View Project Details <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
