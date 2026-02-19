import React, { useEffect, useRef, useState } from "react";
import "./LoveCarousel.css";

const slides = [
  { title: "Hi! Khushi 👋", num: "01", img: "/src/assets/images/IMG_20241220_100818.jpg" },
  { title: "I want to tell you Something 😍", num: "02", img: "/src/assets/images/IMG_20241226_014109.jpg" },
  { title: "Please Keep Dragging 😊", num: "03", img: "/src/assets/images/IMG_20241226_014144.jpg" },
  { title: "You are Amazing 🤩", num: "04", img: "/src/assets/images/IMG_20241226_014205.jpg" },
  { title: "Most Beautiful Person on Earth 💯", num: "05", img: "/src/assets/images/IMG_20241226_014236.jpg" },
  { title: "And Cutest 🎀", num: "06", img: "/src/assets/images/IMG_20241226_014422.jpg" },
  { title: "And Since I met You 😗", num: "07", img: "/src/assets/images/IMG_20241226_014449.jpg" },
  { title: "I feel very Lucky Everyday 😇", num: "08", img: "/src/assets/images/IMG_20241226_014517.jpg" },
  { title: "I have Crush on You 🥰", num: "09", img: "/src/assets/images/jj.jpg" },
  { title: "I love You ❤️", num: "10", img: "/src/assets/images/li.png" }
];

export default function LoveCarousel() {
  const [progress, setProgress] = useState(50);
  const [active, setActive] = useState(0);
  const startX = useRef(0);
  const isDown = useRef(false);

  const speedWheel = 0.02;
  const speedDrag = -0.1;

  useEffect(() => {
    const newActive = Math.floor((progress / 100) * (slides.length - 1));
    setActive(newActive);
  }, [progress]);

  const handleWheel = (e) => {
    setProgress((prev) =>
      Math.max(0, Math.min(100, prev + e.deltaY * speedWheel))
    );
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    const x = e.clientX;
    const move = (x - startX.current) * speedDrag;
    startX.current = x;
    setProgress((prev) =>
      Math.max(0, Math.min(100, prev + move))
    );
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <p className="carousel-subtitle">OUR LOVE JOURNEY</p>
        <h2 className="carousel-title">Love Carousel</h2>
        <div className="carousel-divider" />
      </div>

      <div
        className="carousel-wrapper"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {slides.map((slide, index) => {
          const zIndex =
            index === active
              ? slides.length
              : slides.length - Math.abs(active - index);

          const activeValue = (index - active) / slides.length;

          return (
            <div
              key={index}
              className="carousel-item-custom"
              style={{
                "--zIndex": zIndex,
                "--active": activeValue
              }}
              onClick={() =>
                setProgress((index / slides.length) * 100 + 10)
              }
            >
              <div className="carousel-box">
                <div className="num">{slide.num}</div>
                <img 
                  src={slide.img} 
                  alt={slide.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }} 
                />
                <div className="title">{slide.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel-instruction">
        👆 Drag or scroll to explore our love story
      </div>
    </div>
  );
}
