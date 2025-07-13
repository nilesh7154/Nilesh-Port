import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";

const images = [
  "/Image/ai.jpg",
  "/Image/bg1.jpg",
  "/Image/bg2.jpg",
  "/Image/bg3.jpg",
  "/Image/bg4.jpg",
  "/Image/bg5.jpg",
];

export default function Hero() {
  const sectionRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const nextImage = images[Math.floor(Math.random() * images.length)];
          setBackgroundImage(nextImage);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen bg-cover bg-center text-white px-8 transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute bottom-10 left-10 max-w-2xl space-y-2 leading-tight">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
          Nilesh Rathod
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-white drop-shadow-[1px_1px_5px_rgba(0,0,0,0.7)]">
          I'm a{" "}
          <span className="inline-block relative min-w-[300px]">
            <span className=" border-b-4 border-red-500 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] via-[#8b5cf6] to-[#06b6d4] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.6)]">
              <ReactTyped
                strings={[
                  "Full Stack Web Developer",
                  "React.js Developer",
                  "Frontend Enthusiast",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
}
