import React from 'react'

const Cube = () => {

    const cube = document.querySelector(".cube");
    const playIcon = document.querySelector(".play-icon");
    const pauseIcon = document.querySelector(".pause-icon");
    const toggleButton = document.querySelector(".toggle-button");

    function toggleRotation() {
        const animationState = getComputedStyle(cube).animationPlayState;

        if (animationState === "running") {
            cube.style.animationPlayState = "paused";
            playIcon.style.display = "inline-block";
            pauseIcon.style.display = "none";
        } else {
            cube.style.animationPlayState = "running";
            playIcon.style.display = "none";
            pauseIcon.style.display = "inline-block";
        }
    }

    // Event listener for spacebar and button click
    document.addEventListener("keydown", (event) => {
        if (
            event.code === "Space" ||
            (event.target === toggleButton && event.type === "click")
        ) {
            event.preventDefault();
            toggleRotation();
        }
    });

    // Prevent spacebar from scrolling the page
    window.addEventListener("keydown", (event) => {
        if (event.code === "Space" && event.target === document.body) {
            event.preventDefault();
        }
    });


    return (
        <div>
            <div className="canvas">
                <div className="cube-wrapper">
                    <div className="cube">
                        <div className="side front" />
                        <div className="side back" />
                        <div className="side left" />
                        <div className="side right" />
                        <div className="side top" />
                        <div className="side bottom" />
                    </div>
                </div>
                <button className="toggle-button relative z-50" onclick="toggleRotation()">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="play-icon"
                        style={{ display: "none" }}
                    >
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pause-icon"
                    >
                        <rect x={6} y={4} width={4} height={16} />
                        <rect x={14} y={4} width={4} height={16} />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default Cube