import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Building2, MapPin, Quote, Paintbrush, Hammer, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
  {
    title: 'Office Interior Remodeling & Civil Works',
    description: 'Complete office layout redesign, civil demolition, tiling, and structural upgrades in Naranpura.',
    imgSrc: 'https://lh3.googleusercontent.com/1Rk8_9TUvUs5qFV8tBZ7ztA6ggXikJT41adg2a6vgLUH0ubAqcE2o3x80kLA37N-X90bejKc3SNYs5SfFQ=s0',
    location: 'Naranpura, Ahmedabad',
    link: '/projects/office-renovation'
  },
  {
    title: 'Flat Custom Furniture & Carpentry',
    description: 'Elegant custom furniture, modular kitchen panels, and laminate carpentry work in Bopal.',
    imgSrc: 'https://lh3.googleusercontent.com/kLXoOjR-rpRds97P9ZPREEjAVEv6fMkzNySIbEwokE48T21qmdWlwLDQoh_nk3WKxJxl3mQSjHc2Cgf62g=s0',
    location: 'Bopal, Ahmedabad',
    link: '/projects/flat-furniture'
  },
  {
    title: 'POP Ceilings, Putty & Premium Painting',
    description: 'Decorative POP ceiling designs, smooth putty leveling, and premium emulsion paint application.',
    imgSrc: 'https://lh3.googleusercontent.com/fQFODongn6xOEfkTj1T-Q1d3WhaAF4blBGaZGl1AAtWUyLA1aqchyxHm29384ezdPEdJ8_Zn53XfOVGEYQ=s0',
    location: 'Ahmedabad',
    link: '/projects/wall-painting'
  },
  {
    title: 'Luxury Bathroom Renovation & Plumbing',
    description: 'Full bathroom waterproofing, digital tile cladding, plumbing layouts, and sanitary fittings.',
    imgSrc: 'https://lh3.googleusercontent.com/TJc6COs50M1M4m042X7EKbc9NtzI7v0MV3nxGbzZaXHQfN74jPWqkppeH8gokT2StDUwR51dtNMSg9U-kA=s0',
    location: 'Ahmedabad',
    link: '/projects/bathroom-remodeling'
  }
];

const testimonials = [
  { 
    name: "Anuj Panchal", 
    role: "On behalf of 'The Tea Factory'", 
    text: "The best thing about Shree Radhe is they serve their customers on priority. No compromise in the quality of the work. I would like to thank the entire team of Shree Radhe to work so diligently and completing our commercial paint and civil work on time!" 
  },
  { 
    name: "Rakesh Shah", 
    role: "Homeowner", 
    text: "Shree Radhe Colour & Civil Contractor is hands down the best contractor in Ahmedabad! We've worked with them on multiple projects, and each time, they have delivered outstanding results. Satish Rathod is the best person for civil and color work." 
  },
  { 
    name: "Nirav Shah", 
    role: "Flat Owner", 
    text: "Shree Radhe completed our flat interior furniture work and civil tiling in Bopal, and we are very happy with the results. Their team managed the carpentry and tiling neatly with great attention to detail. Clean and professional finish." 
  },
  { 
    name: "Pujaa Pandya", 
    role: "Commercial Client", 
    text: "Ahmedabad's best civil & colour contractor. Perfect and on-time work. If you are planning for remodeling, painting, or any kind of interior furniture work to be done, then I highly recommend Mr. Satish Rathod. They are the best in the industry." 
  },
  { 
    name: "Dharmik Trivedi", 
    role: "Homeowner", 
    text: "We had our stairs wall damaged due to water leakage. Mr. Satish bhai got the waterproofing, POP work, putty, and paint work done seamlessly. Very reliable, well-coordinated, and excellent value for money." 
  }
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{backgroundImage: "url('https://lh3.googleusercontent.com/1Rk8_9TUvUs5qFV8tBZ7ztA6ggXikJT41adg2a6vgLUH0ubAqcE2o3x80kLA37N-X90bejKc3SNYs5SfFQ=s0')"}}></div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h5 className="text-gold tracking-widest mb-4 uppercase text-sm font-bold">Premium Colour Work & Civil Contractor</h5>
            <h1 className="gradient-text">Transforming Spaces with Expert Craftsmanship</h1>
            <p className="hero-subtitle">Top-rated Painting, Civil Renovations, and Custom Interior Woodwork in Ahmedabad.</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">
                Explore Projects <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary">Get Free Quote</Link>
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
              <h2 className="section-title">We don't just renovate, <span className="text-gold">we craft perfection.</span></h2>
              <p className="lead-text">
                Shree Radhe Colour Work & Construction Contractor, a pioneering contracting and interior firm based in Ahmedabad, 
                has been benchmarking quality and trust under the leadership of Mr. Satish Rathod.
              </p>
              <p>
                We specialize in diverse contracting projects—from structural civil and brick construction to premium interior/exterior colour work, plastering, custom carpentry, and bathroom remodeling. Serving clients throughout Ahmedabad, we are acclaimed for our transparent processes, material integrity, and timely project delivery.
              </p>
              <div className="stats-container mt-8">
                <div className="stat-item">
                  <h3>68+</h3>
                  <p>5-Star Reviews</p>
                </div>
                <div className="stat-item">
                  <h3>Premium</h3>
                  <p>Finishes & Materials</p>
                </div>
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
              <Link to="/about" className="btn-secondary mt-8">
                Our Story & Ethos
              </Link>
            </motion.div>
            <motion.div 
              className="intro-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="intro-image" style={{backgroundImage: "url('https://lh3.googleusercontent.com/qzFAY6umb5a92LpFSdFmCeqp3VxqsBLjlc0MX1txZ1xAMMvAH24kgTiy7odWbY7n8Eyh3MYpuD6_ic6wDQ=s0')"}}></div>
              <div className="glass-panel overlay-card">
                <Building2 size={32} className="text-gold mb-3" />
                <h4>Serving Ahmedabad</h4>
                <p>Delivering high-quality custom paint, civil repairs, and home remodeling across Ahmedabad.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services At A Glance */}
      <section className="ethos-section glass-panel" style={{margin: "0 5%", padding: "5rem 2rem", borderRadius: "30px"}}>
        <div className="container">
          <div className="text-center mb-12">
            <h5 className="text-gold tracking-widest uppercase text-sm font-bold mb-2">Our Expertise</h5>
            <h2 className="text-4xl font-heading">Contracting Services We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Paintbrush size={48} className="text-gold mb-4" />
              <h4 className="text-xl font-heading mb-2">Premium Colour Work</h4>
              <p className="text-muted text-sm">Acrylic wall putty, textured coatings, exterior weatherproofing, and interior royal emulsion application.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Hammer size={48} className="text-gold mb-4" />
              <h4 className="text-xl font-heading mb-2">Civil Works & Tiling</h4>
              <p className="text-muted text-sm">Brickwork, concrete plastering, chemical waterproofing, office partition remodeling, and premium tile cladding.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Ruler size={48} className="text-gold mb-4" />
              <h4 className="text-xl font-heading mb-2">POP & Custom Furniture</h4>
              <p className="text-muted text-sm">Decorative false ceiling designs, custom cabinetry, modular kitchen layouts, and expert carpentry solutions.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-secondary">Explore All Services</Link>
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
            <h5 className="text-gold tracking-widest uppercase text-sm font-bold mb-2">Recent Projects</h5>
            <h2 className="text-4xl mb-4 font-heading">Our Featured Works</h2>
            <p className="text-muted max-w-2xl mx-auto">Explore some of our completed commercial and residential contracting renovations across Ahmedabad.</p>
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
                    <Link to={project.link} className="view-btn">View Details</Link>
                  </div>
                </div>
                <div className="project-details glass-panel">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-heading font-bold text-gold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="rera-info flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={14} />
                    <span>Location: {project.location}</span>
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
