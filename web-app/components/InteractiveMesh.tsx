"use client";

import { useEffect, useRef } from "react";

export default function InteractiveMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle Configuration
    const particleCount = 80;
    const connectionDistance = 150;
    const mouseRepulsionRadius = 150; // The "Vanishing" Zone

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const mouse = { x: -1000, y: -1000 };

    // Initialize Particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & Draw Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(20, 184, 166, 0.5)"; // Teal color
        ctx.fill();

        // Connect Lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate distance to mouse
            const mouseDx = p.x - mouse.x;
            const mouseDy = p.y - mouse.y;
            const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

            // "Vanishing" Effect: Only draw line if FAR from mouse
            if (mouseDist > mouseRepulsionRadius) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(20, 184, 166, ${1 - distance / connectionDistance})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}