import React, { useRef, useEffect } from "react";

const AsciiFlowTrail = () => {
    const canvasRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const smoothPos = useRef({ x: 0, y: 0 });
    const trail = useRef([]);
    const requestRef = useRef();

    // Configuration
    const glyphSet = "@%#*+=-:. ";
    const scale = 20; // Font size approx
    const tailLength = 20; // Length of trail
    const momentum = 0.5; // 0-1, higher is smoother/laggy
    const textColor = "#FFFFFF";

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const updateSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        updateSize();
        window.addEventListener("resize", updateSize);

        // Mouse tracking
        const handleMouse = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // Initialize mouse pos to center initially to avoid jump
        mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        smoothPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        window.addEventListener("mousemove", handleMouse);

        // Animation Loop
        const animate = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth Movement
            smoothPos.current.x += (mousePos.current.x - smoothPos.current.x) * momentum;
            smoothPos.current.y += (mousePos.current.y - smoothPos.current.y) * momentum;

            // Add to trail
            trail.current.push({
                x: smoothPos.current.x,
                y: smoothPos.current.y,
                life: 1.0,
                char: glyphSet[Math.floor(Math.random() * glyphSet.length)] // Pick random char for jitter
            });

            // Manage trail length/life
            const decay = 0.05;
            trail.current.forEach(p => p.life -= decay);
            trail.current = trail.current.filter(p => p.life > 0);

            // Draw
            ctx.font = `${scale}px monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            trail.current.forEach((p, i) => {
                const alpha = p.life;
                ctx.fillStyle = textColor;
                ctx.globalAlpha = alpha;

                // Jitter position slightly for "flow" effect
                const jitterX = (Math.random() - 0.5) * 5;
                const jitterY = (Math.random() - 0.5) * 5;

                ctx.fillText(p.char, p.x + jitterX, p.y + jitterY);
            });

            ctx.globalAlpha = 1.0;
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", updateSize);
            window.removeEventListener("mousemove", handleMouse);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-50 pointer-events-none mix-blend-difference"
        />
    );
};

export default AsciiFlowTrail;
