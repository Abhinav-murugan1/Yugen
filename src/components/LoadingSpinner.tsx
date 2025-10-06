import { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gradient animate-pulse">FASHION</h1>
        </div>
        
        {/* Premium Loading Animation */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-primary-glow rounded-full animate-spin animation-delay-150"></div>
        </div>
        
        <p className="mt-6 text-muted-foreground animate-fade-in">
          Loading your fashion experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;