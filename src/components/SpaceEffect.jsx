import React, { useEffect, useRef, useState } from 'react';
import './SpaceEffect.css';

const SpaceEffect = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGlowingEffect(ctx, mousePosition.x, mousePosition.y);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  const drawGlowingEffect = (ctx, x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    // Increase the number of lines for a denser effect
    for (let i = 0; i < 25; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Increase the length range for longer tendrils
      const length = Math.random() * 300 + 100;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      const cp1x = x + Math.cos(angle) * length * 0.3;
      const cp1y = y + Math.sin(angle) * length * 0.3;
      const cp2x = endX - Math.cos(angle) * length * 0.3;
      const cp2y = endY - Math.sin(angle) * length * 0.3;
      
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
    }

    
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
    gradient.addColorStop(0, 'rgba(0, 191, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 191, 255, 0)');

    ctx.strokeStyle = gradient;
    
    ctx.lineWidth = 3;
    
    ctx.shadowBlur = 30;
    ctx.shadowColor = 'rgba(0, 191, 255, 0.5)';
    ctx.stroke();
  };

  return <canvas ref={canvasRef} className="space-effect" />;
};

export default SpaceEffect;