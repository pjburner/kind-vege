import { useEffect, useRef } from 'react';

const emojis = ['🥦', '🥕', '🍆', '🥬', '🌽', '🫑', '🍅'];

export default function VegetableCursor() {
    const containerRef = useRef(null);
    const lastPos = useRef({ x: 0, y: 0 });
    const timeSinceLast = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const now = Date.now();
            const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);

            // Only spawn if moved enough or enough time passed to avoid clutter
            if (dist > 30 && now - timeSinceLast.current > 50) {
                spawnVegetable(e.clientX, e.clientY);
                lastPos.current = { x: e.clientX, y: e.clientY };
                timeSinceLast.current = now;
            }
        };

        const spawnVegetable = (x, y) => {
            const el = document.createElement('div');
            el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.position = 'fixed';
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
            el.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
            el.style.pointerEvents = 'none';
            el.style.zIndex = '9999';
            el.style.transform = 'translate(-50%, -50%) scale(0.5)';
            el.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.27), opacity 1s ease-out';

            container.appendChild(el);

            // Animate in
            requestAnimationFrame(() => {
                el.style.transform = `translate(-50%, -50%) scale(1) rotate(${Math.random() * 360}deg)`;
                el.style.left = `${x + (Math.random() - 0.5) * 50}px`;
                el.style.top = `${y + (Math.random() - 0.5) * 50}px`;
            });

            // Cleanup
            setTimeout(() => {
                el.style.opacity = '0';
                setTimeout(() => el.remove(), 1000);
            }, 800);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
}
