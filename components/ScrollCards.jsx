"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

// Mock Heading (replace with your actual Heading)
const Heading = ({ text, className }) => <h2 className={className}>{text}</h2>;

const ScrollCards = () => {
  const language = useLocale();
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const secondContainerRef = useRef(null);
  const secondContentRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  // pause states (hover or programmatic)
  const [isPaused, setIsPaused] = useState(false);
  const [isSecondPaused, setIsSecondPaused] = useState(false);

  // hover states (we only allow drag if hovering)
  const [isHovering, setIsHovering] = useState(false);
  const [isSecondHovering, setIsSecondHovering] = useState(false);

  // dragging states
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);

  const [isSecondDragging, setIsSecondDragging] = useState(false);
  const secondDragStartX = useRef(0);
  const secondDragScrollStart = useRef(0);

  const scrollSpeed = 1; // px per frame (tweak)
  const secondScrollSpeed = 1;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize second slider starting position to middle (so moving left looks correct)
  useEffect(() => {
    if (mounted && secondContainerRef.current && secondContentRef.current) {
      const half = secondContentRef.current.scrollWidth / 2;
      secondContainerRef.current.scrollLeft = half;
    }
  }, [mounted]);

  // Auto-scroll first slider (requestAnimationFrame)
  useEffect(() => {
    if (!mounted || !containerRef.current || !contentRef.current) return;
    const container = containerRef.current;
    const content = contentRef.current;
    let rafId;
    let last = performance.now();

    const loop = (now) => {
      const dt = now - last;
      if (!isPaused && !isDragging && dt > 16) {
        container.scrollLeft += scrollSpeed;
        // When we've scrolled past the first copy, roll back by half width (smooth loop)
        const halfWidth = content.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
        last = now;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [mounted, isPaused, isDragging]);

  // Auto-scroll second slider (right -> left)
  useEffect(() => {
    if (!mounted || !secondContainerRef.current || !secondContentRef.current) return;
    const container = secondContainerRef.current;
    const content = secondContentRef.current;
    let rafId;
    let last = performance.now();

    const loop = (now) => {
      const dt = now - last;
      if (!isSecondPaused && !isSecondDragging && dt > 16) {
        container.scrollLeft -= secondScrollSpeed;
        const halfWidth = content.scrollWidth / 2;
        // When we reach the beginning, move forward by half width
        if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
        last = now;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [mounted, isSecondPaused, isSecondDragging]);

  // ---------- POINTER (drag) HANDLERS FOR FIRST SLIDER ----------
  const handlePointerDown = (e) => {
    // Only allow left button or touch pen/finger
    if (!isHovering) return;
    // Prevent default so browser doesn't treat it as native scroll/drag
    e.preventDefault();

    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragScrollStart.current = containerRef.current.scrollLeft;

    // Capture pointer so we keep receiving move/up events even if pointer leaves element
    try {
      containerRef.current.setPointerCapture(e.pointerId);
    } catch (err) {
      // some browsers might throw — ignore
    }
    containerRef.current.style.cursor = "grabbing";
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const dx = e.clientX - dragStartX.current;
    // multiply dx for sensitivity if desired
    containerRef.current.scrollLeft = dragScrollStart.current - dx * 1.3;
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      containerRef.current.releasePointerCapture(e.pointerId);
    } catch (err) {}
    containerRef.current.style.cursor = isHovering ? "grab" : "default";
  };

  // ---------- POINTER (drag) HANDLERS FOR SECOND SLIDER ----------
  const handleSecondPointerDown = (e) => {
    if (!isSecondHovering) return;
    e.preventDefault();
    setIsSecondDragging(true);
    secondDragStartX.current = e.clientX;
    secondDragScrollStart.current = secondContainerRef.current.scrollLeft;
    try {
      secondContainerRef.current.setPointerCapture(e.pointerId);
    } catch (err) {}
    secondContainerRef.current.style.cursor = "grabbing";
  };

  const handleSecondPointerMove = (e) => {
    if (!isSecondDragging) return;
    e.preventDefault();
    const dx = e.clientX - secondDragStartX.current;
    secondContainerRef.current.scrollLeft = secondDragScrollStart.current - dx * 1.3;
  };

  const handleSecondPointerUp = (e) => {
    if (!isSecondDragging) return;
    setIsSecondDragging(false);
    try {
      secondContainerRef.current.releasePointerCapture(e.pointerId);
    } catch (err) {}
    secondContainerRef.current.style.cursor = isSecondHovering ? "grab" : "default";
  };

  // CARD DATA
  const cardData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      title: "Modern Architecture",
      description:
        "Discover innovative architectural designs that shape our future cities",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      title: "Natural Beauty",
      description:
        "Experience breathtaking landscapes and pristine natural environments",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=60",
      title: "Future Technology",
      description:
        "Explore cutting-edge innovations that will transform tomorrow",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=60",
      title: "Urban Life",
      description:
        "Immerse yourself in the energy and rhythm of metropolitan living",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=60",
      title: "Creative Arts",
      description: "Explore the world of creativity and artistic expression",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=60",
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
              largest B2C immigration firm. Established in 1999, with 50+ offices
              across India, Australia, UAE, UK, and Canada.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
            <Link
              href={`/${language}/testimonials`}
              className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md inline-block"
            >
              View All Article
            </Link>
          </div>
        </div>

        {/* First slider */}
        <div className="article-section">
          <div className="mb-4">
            <div
              ref={containerRef}
              className="flex overflow-x-hidden h-[230px] will-change-transform scrollbar-hide"
              // pointer events (unified for mouse + touch)
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerEnter={() => {
                setIsPaused(true);
                setIsHovering(true);
                if (containerRef.current && !isDragging)
                  containerRef.current.style.cursor = "grab";
              }}
              onPointerLeave={() => {
                // don't turn off hover while dragging (pointer capture)
                if (!isDragging) {
                  setIsPaused(false);
                  setIsHovering(false);
                  if (containerRef.current) containerRef.current.style.cursor = "default";
                }
              }}
              // allow pointer events to be delivered; allow vertical page scroll but prevent horizontal default
              style={{ touchAction: "pan-y" }}
            >
              <div ref={contentRef} className="flex gap-6">
                {cardData.map((card) => (
                  <article
                    key={card.id}
                    className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden select-none"
                  >
                    <div className="absolute inset-0">
                      <img
                        draggable="false"
                        src={card.image}
                        alt={card.title}
                        className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {card.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {card.description}
                      </p>
                    </div>

                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-white/70 text-xl font-medium">0{card.id}</span>
                    </div>

                    <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-0.5 bg-white/80 mr-2" />
                      <span className="text-white/80 text-sm">Explore</span>
                    </div>
                  </article>
                ))}

                {/* duplicate for seamless loop */}
                {cardData.map((card) => (
                  <article
                    key={`dup-${card.id}`}
                    className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden select-none"
                  >
                    <div className="absolute inset-0">
                      <img
                        draggable="false"
                        src={card.image}
                        alt={card.title}
                        className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {card.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {card.description}
                      </p>
                    </div>

                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-white/70 text-xl font-medium">0{card.id}</span>
                    </div>

                    <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-0.5 bg-white/80 mr-2" />
                      <span className="text-white/80 text-sm">Explore</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Second slider (reverse direction) */}
          <div>
            <div
              ref={secondContainerRef}
              className="flex overflow-x-hidden h-[250px] pb-10 will-change-transform scrollbar-hide"
              onPointerDown={handleSecondPointerDown}
              onPointerMove={handleSecondPointerMove}
              onPointerUp={handleSecondPointerUp}
              onPointerCancel={handleSecondPointerUp}
              onPointerEnter={() => {
                setIsSecondPaused(true);
                setIsSecondHovering(true);
                if (secondContainerRef.current && !isSecondDragging)
                  secondContainerRef.current.style.cursor = "grab";
              }}
              onPointerLeave={() => {
                if (!isSecondDragging) {
                  setIsSecondPaused(false);
                  setIsSecondHovering(false);
                  if (secondContainerRef.current) secondContainerRef.current.style.cursor = "default";
                }
              }}
              style={{ touchAction: "pan-y" }}
            >
              <div ref={secondContentRef} className="flex gap-6">
                {cardData.map((card) => (
                  <article
                    key={`s-${card.id}`}
                    className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden select-none"
                  >
                    <div className="absolute inset-0">
                      <img
                        draggable="false"
                        src={card.image}
                        alt={card.title}
                        className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {card.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {card.description}
                      </p>
                    </div>

                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-white/70 text-xl font-medium">0{card.id}</span>
                    </div>

                    <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-0.5 bg-white/80 mr-2" />
                      <span className="text-white/80 text-sm">Explore</span>
                    </div>
                  </article>
                ))}

                {/* duplicate */}
                {cardData.map((card) => (
                  <article
                    key={`s-dup-${card.id}`}
                    className="card flex-shrink-0 rounded-3xl p-6 w-[85vw] md:w-[50vw] lg:w-[30vw] h-full relative group cursor-pointer overflow-hidden select-none"
                  >
                    <div className="absolute inset-0">
                      <img
                        draggable="false"
                        src={card.image}
                        alt={card.title}
                        className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {card.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {card.description}
                      </p>
                    </div>

                    <div className="absolute top-6 right-6 z-10">
                      <span className="text-white/70 text-xl font-medium">0{card.id}</span>
                    </div>

                    <div className="absolute bottom-6 left-6 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-0.5 bg-white/80 mr-2" />
                      <span className="text-white/80 text-sm">Explore</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

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
