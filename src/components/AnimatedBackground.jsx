import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const properties = {
      bgColor: '#050b14',
      particleColor: 'rgba(212, 175, 55, 0.4)',
      lineColor: 'rgba(212, 175, 55, 0.1)',
      particleRadius: 2,
      particleCount: Math.floor((width * height) / 15000),
      particleMaxVelocity: 0.5,
      lineLength: 150,
      particleLife: 6,
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.life = Math.random() * properties.particleLife * 60;
      }
      position() {
        this.x + this.velocityX > width && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
        this.y + this.velocityY > height && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
        this.x += this.velocityX;
        this.y += this.velocityY;
      }
      reDraw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = properties.particleColor;
        ctx.fill();
      }
      reCalculateLife() {
        if (this.life < 1) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
          this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
          this.life = Math.random() * properties.particleLife * 60;
        }
        this.life--;
      }
    }

    const init = () => {
      particles.length = 0;
      properties.particleCount = Math.floor((width * height) / 15000);
      for (let i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      let x1, y1, x2, y2, length, opacity;
      for (let i in particles) {
        for (let j in particles) {
          x1 = particles[i].x;
          y1 = particles[i].y;
          x2 = particles[j].x;
          y2 = particles[j].y;
          length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          if (length < properties.lineLength) {
            opacity = 1 - length / properties.lineLength;
            ctx.lineWidth = '0.5';
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.3})`; // Gold color lines
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Add subtle background gradient matching the theme
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#050b14');
      gradient.addColorStop(1, '#0a1324');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i in particles) {
        particles[i].reCalculateLife();
        particles[i].position();
        particles[i].reDraw();
      }
      drawLines();
      animationFrameId = requestAnimationFrame(loop);
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener('resize', resize);
    init();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-bg-canvas" />;
};

export default AnimatedBackground;
