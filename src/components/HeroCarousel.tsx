import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFallWinter from "@/assets/hero-fall-winter.jpg";
import heroSpringSummer from "@/assets/hero-spring-summer.jpg";
import heroLimitedEdition from "@/assets/hero-limited-edition.jpg";

const slides = [
  {
    id: 1,
    image: heroFallWinter,
    title: "Fall/Winter 2025",
    subtitle: "Urban elegance meets contemporary comfort",
    cta: "Shop Collection"
  },
  {
    id: 2,
    image: heroSpringSummer,
    title: "Spring/Summer",
    subtitle: "Light layers for modern living",
    cta: "Explore Now"
  },
  {
    id: 3,
    image: heroLimitedEdition,
    title: "Limited Edition",
    subtitle: "Exclusive drops for the fashion forward",
    cta: "Get Exclusive Access"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen overflow-hidden flex">
      {/* Image Area - 70% */}
      <div className="w-[70%] relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="parallax-container h-full">
              <div
                className="parallax-bg"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${slide.image})`,
                }}
              />
            </div>
          </div>
        ))}

        {/* Navigation Controls on Image */}
        <button
          onClick={goToPrevious}
          className="cursor-interactive absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-primary text-white p-3 transition-all duration-200 hover:scale-110 border border-transparent hover:border-primary hover:shadow-glow"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="cursor-interactive absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-primary text-white p-3 transition-all duration-200 hover:scale-110 border border-transparent hover:border-primary hover:shadow-glow"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-interactive w-4 h-4 transition-all duration-200 hover:scale-125 ${
                index === currentSlide
                  ? "bg-primary shadow-glow border-2 border-primary"
                  : "bg-white/30 hover:bg-white/50 border-2 border-transparent hover:border-primary/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Details Area - 30% */}
      <div className="w-[30%] bg-card flex items-center">
        <div className="p-8 lg:p-12 w-full">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-primary"></div>
            <h1 className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter uppercase leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <Button className="btn-hero text-base px-8 py-4 mt-8 cursor-interactive hover:shadow-glow">
              {slides[currentSlide].cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;