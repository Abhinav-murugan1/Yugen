import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import CustomerReviews from "@/components/CustomerReviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      <main>
        <HeroCarousel />
        <CustomerReviews />
        <ProductGrid />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
