import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseOut = () => setIsVisible(false);

    // Add cursor tracking
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseout', handleMouseOut);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], .cursor-interactive, .card-hover, input, textarea, select'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseout', handleMouseOut);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
      }}
    >
      {/* Main cursor dot - static size */}
      <div
        className="w-3 h-3 rounded-full bg-primary transition-opacity duration-200 ease-out"
        style={{
          boxShadow: isHovering 
            ? '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))'
            : '0 0 10px hsl(var(--primary))'
        }}
      />
      
      {/* Outer ring for hover state */}
      {isHovering && (
        <div 
          className="absolute top-1/2 left-1/2 w-6 h-6 border border-primary/50 rounded-full"
          style={{
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;