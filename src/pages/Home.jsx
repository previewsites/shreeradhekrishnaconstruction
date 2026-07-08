import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Building2, MapPin, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
  {
    title: 'THE JEWEL PARK®',
    description: 'Exclusive Retail & Office Spaces For Jewellers at CG Road - Ahmedabad.',
    imgSrc: 'assets/jewel-park/view/banner-1.jpg',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/CAA08835/280721',
    link: '/projects'
  },
  {
    title: 'MERCÁDO®',
    description: 'High End Retail Spaces & Offices at CG Road - Ahmedabad.',
    imgSrc: 'assets/mercado/view/banner-1.jpg',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/CAA08205/170321',
    link: '/projects'
  },
  {
    title: 'VERÁNTES®',
    description: '4 BHK Terrace Apartments at Thaltej - Ahmedabad.',
    imgSrc: 'assets/verantes/view/banner-14.jpg',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA00767/201117',
    link: '/projects'
  },
  {
    title: 'Cross Roads',
    description: 'Modern Retail & Corporate Spaces at Vijay Cross Road - Ahmedabad.',
    imgSrc: 'assets/cross-roads/view/banner-1.jpg',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/CAA12649/161123',
    link: '/projects'
  }
];

const testimonials = [
  { name: "Anuj Panchal", role: "Director", text: "HRG Construction Co. is one of the most Unique Developers of Ahmedabad with exceptional architecture, great planning and delivering as per the commitments. Their professionalism shows in management, quality of work and customer service." },
  { name: "Rakesh Shah", role: "Client", text: "The best real estate company. Young energetic developer, Very professional, experienced and helpful to the client. Coming up with the best project on prime location of Ahmedabad. Highly recommended." },
  { name: "Dharmik Trivedi", role: "Client", text: "Very Supportive & Provide Value For Money Projects on Prime Locations .. It’s a Pleasure Working With HRG. A Big Thumbs Up." },
  { name: "Pujaa Pandya", role: "Client", text: "Extraordinary attention to detail takes your projects to another level. The city must be delighted to witness such Infrastructure!" },
  { name: "Nirav Shah", role: "Client", text: "HRG Team is very Cooperative and flexible. Superb quality of Construction with Innovative structure and delivering Quality Construction which they promise. 100% trustworthy." }
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{backgroundImage: "url('assets/cross-roads/view/banner-1.jpg')"}}></div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h5 className="text-gold tracking-widest mb-4 uppercase text-sm font-bold">Welcome to HRG Construction Co.</h5>
            <h1 className="gradient-text">Crafting Spaces Tailored To Your Needs</h1>
            <p className="hero-subtitle">High End Lifestyles Inspired By Dynamic Global Trends.</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">
                Explore Projects <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary">Get In Touch</Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll down</span>
        </motion.div>
      </section>

      {/* Intro / Ethos Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <motion.div 
              className="intro-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">We don't just build buildings, <span className="text-gold">we craft perfection.</span></h2>
              <p className="lead-text">
                HRG Construction Co., a pioneering real-estate development company based in Ahmedabad, 
                has been benchmarking the industry since its inception in 2015.
              </p>
              <p>
                We strive to bring to you exclusive high end properties that have been carefully crafted to your perfection. We believe that perfection is only a milestone and we choose to go beyond that. These spaces are inspired from design trends across the globe yet stay rooted to our values.
              </p>
              <div className="stats-container mt-8">
                <div className="stat-item">
                  <h3>2015</h3>
                  <p>Established</p>
                </div>
                <div className="stat-item">
                  <h3>Premium</h3>
                  <p>Commercial & Residential</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Industry Awards</p>
                </div>
              </div>
              <Link to="/about" className="btn-secondary mt-8">
                Discover Our Legacy
              </Link>
            </motion.div>
            <motion.div 
              className="intro-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="intro-image" style={{backgroundImage: "url('assets/cross-roads/view/view-6.jpg')"}}></div>
              <div className="glass-panel overlay-card">
                <Building2 size={32} className="text-gold mb-3" />
                <h4>We Love Ahmedabad</h4>
                <p>A living heritage city booming into India's most powerful industrial hub.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel / Grid */}
      <section className="projects-section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-gold tracking-widest uppercase text-sm font-bold mb-2">Our Portfolio</h5>
            <h2 className="text-4xl mb-4 font-heading">Iconic Developments</h2>
            <p className="text-muted max-w-2xl mx-auto">Discover our latest premium commercial and residential developments across prime locations in Ahmedabad.</p>
          </motion.div>

          <div className="projects-showcase">
            {projects.map((project, index) => (
              <motion.div 
                className="project-showcase-card"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="project-img-container">
                  <div className="project-img" style={{ backgroundImage: `url(${project.imgSrc})` }}></div>
                  <div className="project-overlay">
                    <Link to={project.link} className="view-btn">View Project</Link>
                  </div>
                </div>
                <div className="project-details glass-panel">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-heading font-bold text-gold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="rera-info flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={14} />
                    <span>RERA: {project.rera}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary-color)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container relative z-10">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h5 className="text-gold tracking-widest uppercase text-sm font-bold mb-2">Testimonials</h5>
            <h2 className="text-4xl mb-12 font-heading">What Our Clients Say</h2>
          </motion.div>
          
          <div className="testimonials-masonry">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx} 
                className="testimonial-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Quote size={32} className="text-gold mb-4 opacity-50" />
                <p className="text-lg italic text-gray-300 mb-6 flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#aa8623] flex items-center justify-center text-black font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <span className="text-gold text-sm uppercase tracking-wider">{testimonial.role}</span>
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

export default Home;
