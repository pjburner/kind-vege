import React from 'react';

const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className={`overflow-hidden cursor-default group ${className}`}>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-1 motion-reduce:transition-none"
                    style={{
                        transitionDelay: `${index * 30}ms`,
                        color: "currentColor"
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
    );
};

export default AnimatedText;
