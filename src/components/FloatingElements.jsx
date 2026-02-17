import React from 'react';

const FloatingElements = () => {
    // Emojis for vegetables
    const veggies = ["🌽", "🥕", "🥦", "🍅", "🥬", "🍆"];

    // Create a set of random floating items
    const items = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        emoji: veggies[i % veggies.length],
        left: `${Math.random() * 100}%`,
        animationDuration: `${15 + Math.random() * 20}s`, // Random duration between 15-35s
        animationDelay: `${Math.random() * -20}s`, // Start at random times
        fontSize: `${2 + Math.random() * 3}rem`, // Random size
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-overlay opacity-30">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="absolute top-full animate-float"
                    style={{
                        left: item.left,
                        animationDuration: item.animationDuration,
                        animationDelay: item.animationDelay,
                        fontSize: item.fontSize,
                    }}
                >
                    {item.emoji}
                </div>
            ))}
        </div>
    );
};

export default FloatingElements;
