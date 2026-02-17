import React from 'react';

const BlobButton = ({ text, href, onClick, colorClass = "fill-[#E36414]", textColorClass = "fill-[#0F4C5C]" }) => {
    // Unique ID for the clip path to avoid conflicts if multiple buttons are used
    const uniqueId = `blob-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <a
            href={href}
            onClick={onClick}
            target="_blank"
            rel="noreferrer"
            className="inline-block relative w-[180px] h-[180px] group cursor-pointer"
        >
            <svg
                viewBox="0 0 200 200"
                className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-110"
            >
                <defs>
                    <clipPath id={uniqueId}>
                        <path
                            d="M36.1,123.4c-9.1-23.9-3.3-46.6,8.1-62.8c12.3-17.5,33.5-27.6,56.7-25.9c32.7,2.4,56.6,30.3,60.5,58.5 c3.4,24.6-9.7,50.1-33.1,64.3c-23.7,14.4-53.5,10.6-76-9.1C35.1,135.5,36.1,123.4,36.1,123.4z"
                            className="transform-origin-center transition-transform duration-400 ease-out group-hover:scale-115"
                        />
                    </clipPath>
                </defs>

                {/* Background Blob */}
                <path
                    id="blobClip"
                    d="M36.1,123.4c-9.1-23.9-3.3-46.6,8.1-62.8c12.3-17.5,33.5-27.6,56.7-25.9c32.7,2.4,56.6,30.3,60.5,58.5 c3.4,24.6-9.7,50.1-33.1,64.3c-23.7,14.4-53.5,10.6-76-9.1C35.1,135.5,36.1,123.4,36.1,123.4z"
                    className={`${colorClass} transition-transform duration-400 ease-out group-hover:scale-110 origin-center`}
                />

                {/* Text */}
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className={`text-content font-bold uppercase tracking-[0.15em] text-[14px] transition-all duration-500 ease-in-out ${textColorClass} group-hover:fill-white group-hover:mix-blend-overlay`}
                >
                    {text}
                </text>
            </svg>
        </a>
    );
};

export default BlobButton;
