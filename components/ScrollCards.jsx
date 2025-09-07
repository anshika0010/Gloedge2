// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import Link from "next/link";
// import { useLocale } from "next-intl";
// import Heading from "./common/Heading";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const language = useLocale();
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const section = sectionRef.current;
//     const container = containerRef.current;
//     if (!section || !container) return;

//     const cards = gsap.utils.toArray(".card");
//     const maxX = () => container.scrollWidth - section.clientWidth;

//     // Calculate snap points
//     const snapIncrement = 1 / (cards.length - 1);
//     const snapPoints = Array.from(
//       { length: cards.length },
//       (_, i) => i * snapIncrement
//     );

//     const ctx = gsap.context(() => {
//       gsap.set(container, { x: 0 });

//       gsap.to(container, {
//         x: () => -maxX(),
//         ease: "sine.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           pin: true,
//           scrub: 1.5,
//           snap: {
//             snapTo: snapPoints,
//             duration: { min: 0.3, max: 0.8 },
//             ease: "power2.inOut",
//             inertia: false
//           },
//           end: () => `+=${maxX()}`,
//           invalidateOnRefresh: true,
//           anticipatePin: 1,
//         },
//       });
//     }, section);

//     return () => ctx.revert();
//   }, [mounted]);

//   const cardData = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       title: "Modern Architecture",
//       description: "Discover innovative architectural designs that shape our future cities",
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       title: "Natural Beauty",
//       description: "Experience breathtaking landscapes and pristine natural environments",
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       title: "Future Technology",
//       description: "Explore cutting-edge innovations that will transform tomorrow",
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       title: "Urban Life",
//       description: "Immerse yourself in the energy and rhythm of metropolitan living",
//     },
//     {
//       id: 5,
//       image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       title: "Creative Arts",
//       description: "Explore the world of creativity and artistic expression",
//     },
//     {
//       id: 6,
//       image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       title: "Innovation Hub",
//       description: "Discover breakthrough ideas and revolutionary concepts",
//     },
//   ];

//   if (!mounted) return null;

//   return (
//     <section ref={sectionRef} className="relative w-full bg-gradient-to-b from-slate-50 to-slate-100 pt-8 pb-16 overflow-hidden">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
//           <div className="text-center md:text-left">
//             <Heading
//               text={"Latest Articles"}
//               className="text-4xl font-bold text-gray-900 mb-4 md:mb-0"
//             />
//             <p className="text-sm text-gray-600 max-w-2xl">
//               India's No.1 Overseas Career Consultant and presumably the world's largest B2C immigration firm. Established in 1999, with 50+ offices across India, Australia, UAE, UK, and Canada.
//             </p>
//           </div>

//           {/* Button moved to right */}
//           <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
//             <Link
//               href={`/${language}/testimonials`}
//               className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md inline-block"
//             >
//               View All Article
//             </Link>
//           </div>
//         </div>

//         {/* Cards Container */}
//         <div ref={containerRef} className="flex h-[300px] pb-10 gap-6 will-change-transform pl-4">
//           {cardData.map((card) => (
//             <div
//               key={card.id}
//               className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden shadow-2xl"
//             >
//               {/* Background Image - Fixed Image component usage */}
//               <div className="absolute inset-0">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110"
//                   priority={card.id === 1}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
//               </div>

//               {/* Content */}
//               <div className="relative z-10 h-full flex flex-col justify-end p-6">
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
//                   {card.title}
//                 </h2>
//                 <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
//                   {card.description}
//                 </p>
//               </div>

//               {/* Card number */}
//               <div className="absolute top-6 right-6 z-10">
//                 <span className="text-white/70 text-xl font-medium">0{card.id}</span>
//               </div>

//               {/* Hover indicator */}
//               <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="w-8 h-0.5 bg-white/80 mr-2"></div>
//                 <span className="text-white/80 text-sm">Explore</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollCards;

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

// Mock Heading component since it wasn't provided
const Heading = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};

const ScrollCards = () => {
  const language = useLocale();
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const secondcontainerRef = useRef(null);
  const secondcontentRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSecondPaused, setIsSecondPaused] = useState(false);
  const scrollSpeed = 1;
  const secondscrollSpeed = 1;

  // Drag state variables
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [isSecondDragging, setIsSecondDragging] = useState(false);
  const [secondStartX, setSecondStartX] = useState(0);
  const [secondScrollLeftStart, setSecondScrollLeftStart] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    let animationFrameId;
    let lastTimestamp = 0;

    const animateScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;

      const elapsed = timestamp - lastTimestamp;

      if (!isPaused && !isDragging && elapsed > 16) {
        // Limit to ~60fps
        container.scrollLeft += scrollSpeed;

        // Reset scroll position when reaching the end
        if (
          container.scrollLeft >=
          content.scrollWidth / 2 - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }

        lastTimestamp = timestamp;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, isPaused, scrollSpeed, isDragging]);

  useEffect(() => {
    if (!mounted || !secondcontainerRef.current || !secondcontentRef.current)
      return;

    const secondcontainer = secondcontainerRef.current;
    const content = secondcontentRef.current;

    let animationFrameId;
    let lastTimestamp = 0;

    const animateScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;

      const elapsed = timestamp - lastTimestamp;

      if (!isSecondPaused && !isSecondDragging && elapsed > 16) {
        // Move from right to left (decrease scrollLeft)
        secondcontainer.scrollLeft -= secondscrollSpeed;

        // Reset scroll position when reaching the beginning
        if (secondcontainer.scrollLeft <= 0) {
          secondcontainer.scrollLeft =
            content.scrollWidth / 2 - secondcontainer.clientWidth;
        }

        lastTimestamp = timestamp;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, isSecondPaused, secondscrollSpeed, isSecondDragging]);

  // Drag handlers for first slider
  const handleDragStart = (e) => {
    // Prevent default to avoid image dragging issues
    e.preventDefault();

    // Only handle left mouse button
    if (e.button !== 0) return;

    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftStart(containerRef.current.scrollLeft);

    // Add cursor style
    containerRef.current.style.cursor = "grabbing";
    containerRef.current.style.userSelect = "none";
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast factor
    containerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    // Reset cursor style
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.userSelect = "auto";
    }
  };

  // Drag handlers for second slider
  const handleSecondDragStart = (e) => {
    // Prevent default to avoid image dragging issues
    e.preventDefault();

    // Only handle left mouse button
    if (e.button !== 0) return;

    setIsSecondDragging(true);
    setSecondStartX(e.pageX - secondcontainerRef.current.offsetLeft);
    setSecondScrollLeftStart(secondcontainerRef.current.scrollLeft);

    // Add cursor style
    secondcontainerRef.current.style.cursor = "grabbing";
    secondcontainerRef.current.style.userSelect = "none";
  };

  const handleSecondDragMove = (e) => {
    if (!isSecondDragging) return;

    e.preventDefault();
    const x = e.pageX - secondcontainerRef.current.offsetLeft;
    const walk = (x - secondStartX) * 2; // Scroll-fast factor
    secondcontainerRef.current.scrollLeft = secondScrollLeftStart - walk;
  };

  const handleSecondDragEnd = () => {
    setIsSecondDragging(false);

    // Reset cursor style
    if (secondcontainerRef.current) {
      secondcontainerRef.current.style.cursor = "grab";
      secondcontainerRef.current.style.userSelect = "auto";
    }
  };

  // Add event listeners for drag functionality
  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const container = containerRef.current;

    // Mouse events
    container.addEventListener("mousedown", handleDragStart);
    container.addEventListener("mousemove", handleDragMove);
    container.addEventListener("mouseup", handleDragEnd);
    container.addEventListener("mouseleave", handleDragEnd);

    // Touch events for mobile
    container.addEventListener("touchstart", (e) => {
      handleDragStart(e.touches[0]);
    });
    container.addEventListener("touchmove", (e) => {
      handleDragMove(e.touches[0]);
    });
    container.addEventListener("touchend", handleDragEnd);

    return () => {
      container.removeEventListener("mousedown", handleDragStart);
      container.removeEventListener("mousemove", handleDragMove);
      container.removeEventListener("mouseup", handleDragEnd);
      container.removeEventListener("mouseleave", handleDragEnd);
      container.removeEventListener("touchstart", (e) => {
        handleDragStart(e.touches[0]);
      });
      container.removeEventListener("touchmove", (e) => {
        handleDragMove(e.touches[0]);
      });
      container.removeEventListener("touchend", handleDragEnd);
    };
  }, [mounted, isDragging, startX, scrollLeftStart]);

  // Add event listeners for second slider drag functionality
  useEffect(() => {
    if (!mounted || !secondcontainerRef.current) return;

    const container = secondcontainerRef.current;

    // Mouse events
    container.addEventListener("mousedown", handleSecondDragStart);
    container.addEventListener("mousemove", handleSecondDragMove);
    container.addEventListener("mouseup", handleSecondDragEnd);
    container.addEventListener("mouseleave", handleSecondDragEnd);

    // Touch events for mobile
    container.addEventListener("touchstart", (e) => {
      handleSecondDragStart(e.touches[0]);
    });
    container.addEventListener("touchmove", (e) => {
      handleSecondDragMove(e.touches[0]);
    });
    container.addEventListener("touchend", handleSecondDragEnd);

    return () => {
      container.removeEventListener("mousedown", handleSecondDragStart);
      container.removeEventListener("mousemove", handleSecondDragMove);
      container.removeEventListener("mouseup", handleSecondDragEnd);
      container.removeEventListener("mouseleave", handleSecondDragEnd);
      container.removeEventListener("touchstart", (e) => {
        handleSecondDragStart(e.touches[0]);
      });
      container.removeEventListener("touchmove", (e) => {
        handleSecondDragMove(e.touches[0]);
      });
      container.removeEventListener("touchend", handleSecondDragEnd);
    };
  }, [mounted, isSecondDragging, secondStartX, secondScrollLeftStart]);

  const cardData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kelynJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      title: "Modern Architecture",
      description:
        "Discover innovative architectural designs that shape our future cities",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Natural Beauty",
      description:
        "Experience breathtaking landscapes and pristine natural environments",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Future Technology",
      description:
        "Explore cutting-edge innovations that will transform tomorrow",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      title: "Urban Life",
      description:
        "Immerse yourself in the energy and rhythm of metropolitan living",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      title: "Creative Arts",
      description: "Explore the world of creativity and artistic expression",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Innovation Hub",
      description: "Discover breakthrough ideas and revolutionary concepts",
    },
  ];

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-slate-100 pt-8 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left">
            <Heading
              text={"Latest Articles"}
              className="text-4xl font-bold text-gray-900 mb-4 md:mb-0"
            />
            <p className="text-sm text-gray-600 max-w-2xl">
              India's No.1 Overseas Career Consultant and presumably the world's
              largest B2C immigration firm. Established in 1999, with 50+
              offices across India, Australia, UAE, UK, and Canada.
            </p>
          </div>

          {/* Button moved to right */}
          <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
            <Link
              href={`/${language}/testimonials`}
              className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md inline-block"
            >
              View All Article
            </Link>
          </div>
        </div>

        {/* Cards Container with Marquee Scrolling */}
        <div className="article-section">
          {/* First Slider - Left to Right */}
          <div className="mb-4">
            <div
              ref={containerRef}
              className="flex overflow-x-hidden h-[230px] will-change-transform scrollbar-hide cursor-grab"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div ref={contentRef} className="flex gap-6">
                {cardData.map((card) => (
                  <div
                    key={card.id}
                    className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden select-none"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {card.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {card.description}
                      </p>
                    </div>

                    {/* Card number */}
                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-white/70 text-xl font-medium">
                        0{card.id}
                      </span>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-0.5 bg-white/80 mr-2"></div>
                      <span className="text-white/80 text-sm">Explore</span>
                    </div>
                  </div>
                ))}

                {/* Duplicate content for seamless looping */}
                {cardData.map((card) => (
                  <div
                    key={`duplicate-${card.id}`}
                    className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden select-none"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {card.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {card.description}
                      </p>
                    </div>

                    {/* Card number */}
                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-white/70 text-xl font-medium">
                        0{card.id}
                      </span>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-0.5 bg-white/80 mr-2"></div>
                      <span className="text-white/80 text-sm">Explore</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div
              ref={secondcontainerRef}
              className="flex overflow-x-hidden h-[250px] pb-10 will-change-transform scrollbar-hide cursor-grab"
              onMouseEnter={() => setIsSecondPaused(true)}
              onMouseLeave={() => setIsSecondPaused(false)}
            >
              <div ref={secondcontentRef} className="flex gap-6">
                {cardData.map((card) => (
                  <div
                    key={card.id}
                    className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden select-none"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {card.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {card.description}
                      </p>
                    </div>

                    {/* Card number */}
                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-white/70 text-xl font-medium">
                        0{card.id}
                      </span>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-0.5 bg-white/80 mr-2"></div>
                      <span className="text-white/80 text-sm">Explore</span>
                    </div>
                  </div>
                ))}

                {/* Duplicate content for seamless looping */}
                {cardData.map((card) => (
                  <div
                    key={`second-duplicate-${card.id}`}
                    className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden select-none"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {card.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {card.description}
                      </p>
                    </div>

                    {/* Card number */}
                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-white/70 text-xl font-medium">
                        0{card.id}
                      </span>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-0.5 bg-white/80 mr-2"></div>
                      <span className="text-white/80 text-sm">Explore</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation instructions */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Click and drag to slide horizontally
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .card {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
        }
      `}</style>
    </section>
  );
};

export default ScrollCards;
