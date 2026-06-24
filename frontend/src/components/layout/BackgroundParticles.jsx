import { useEffect, useRef } from "react";

const BackgroundParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, active: false };

    // Set dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Color definitions
    // Gold: theme accent color (#e2b697) or rich metallic gold (#ffd700)
    // Silver: clean metallic silver (#c0c0c0, #e2e8f0)
    // White: soft background white
    const colors = {
      gold: ["#e2b697", "#ffd700", "#e5a97e"],
      silver: ["#c0c0c0", "#e2e8f0", "#a1a1aa"],
      white: ["#ffffff", "#f4f4f5"]
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      // Scale count based on screen width
      const baseCount = window.innerWidth < 768 ? 40 : 100;
      
      for (let i = 0; i < baseCount; i++) {
        const typeRand = Math.random();
        let type = "dot";
        let color = "";
        let size = 0;

        if (typeRand < 0.65) {
          // Dots (65% frequency)
          type = "dot";
          const isGold = Math.random() < 0.5;
          color = isGold 
            ? colors.gold[Math.floor(Math.random() * colors.gold.length)]
            : colors.silver[Math.floor(Math.random() * colors.silver.length)];
          size = Math.random() * 2 + 1.2; // Size 1.2 to 3.2
        } else {
          // Dumbbells (35% frequency)
          type = "dumbbell";
          const isGold = Math.random() < 0.55;
          color = isGold
            ? colors.gold[Math.floor(Math.random() * colors.gold.length)]
            : colors.white[Math.floor(Math.random() * colors.white.length)];
          size = Math.random() * 3.5 + 3.5; // Size 3.5 to 7.0
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35, // Slow horizontal drift
          vy: -(Math.random() * 0.3 + 0.1), // Gentle float upwards
          size,
          type,
          color,
          opacity: Math.random() * 0.28 + 0.12, // Subtle opacity 0.12 to 0.4
          angle: Math.random() * Math.PI * 2, // Rotation angle for dumbbells
          rotationSpeed: (Math.random() - 0.5) * 0.015, // Slow spin
          pulse: Math.random() * Math.PI, // Starting phase for opacity pulsing
          pulseSpeed: Math.random() * 0.005 + 0.002
        });
      }
    };

    // Mouse listeners
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.active = false;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // 1. Update Position (floating physics)
        p.x += p.vx;
        p.y += p.vy;

        // Rotate dumbbells
        if (p.type === "dumbbell") {
          p.angle += p.rotationSpeed;
        }

        // Pulse opacity slightly for shimmer/twinkle effect
        p.pulse += p.pulseSpeed;
        const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.08;

        // 2. Mouse Repulsion Effect
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const angle = Math.atan2(dy, dx);
            // Push particle gently away
            p.x += Math.cos(angle) * force * 1.2;
            p.y += Math.sin(angle) * force * 1.2;
          }
        }

        // 3. Screen Wrap / Re-spawn (Upward Flow)
        if (p.y < -30) {
          p.y = canvas.height + 30;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -30) {
          p.x = canvas.width + 30;
        } else if (p.x > canvas.width + 30) {
          p.x = -30;
        }

        // 4. Drawing code
        ctx.save();

        if (p.type === "dot") {
          // Draw soft outer glow
          ctx.globalAlpha = Math.max(0.02, currentOpacity * 0.25);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Draw sharp center dot
          ctx.globalAlpha = Math.max(0.05, currentOpacity);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (p.type === "dumbbell") {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.globalAlpha = Math.max(0.05, currentOpacity);

          // Draw the dumbbell bar/handle
          ctx.beginPath();
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size * 0.22;
          ctx.moveTo(-p.size * 1.2, 0);
          ctx.lineTo(p.size * 1.2, 0);
          ctx.stroke();

          // Left weights: Inner plate + Outer smaller plate
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(-p.size * 1.2, 0, p.size * 0.48, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(-p.size * 1.45, 0, p.size * 0.38, 0, Math.PI * 2);
          ctx.fill();

          // Right weights: Inner plate + Outer smaller plate
          ctx.beginPath();
          ctx.arc(p.size * 1.2, 0, p.size * 0.48, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.size * 1.45, 0, p.size * 0.38, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Setup listeners and initialize
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        display: "block"
      }}
    />
  );
};

export default BackgroundParticles;
