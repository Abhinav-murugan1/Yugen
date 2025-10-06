import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const collabs = [
  {
    id: "streetwear-legends",
    name: "Streetwear Legends",
    description: "Urban fusion with iconic street artists",
    tagline: "Where art meets fashion",
    products: [
      {
        id: 1,
        name: "Limited Edition Hoodie",
        price: "$149",
        image: "/src/assets/product-hoodie.jpg",
        category: "Hoodies",
      },
      {
        id: 2,
        name: "Graffiti Bomber Jacket",
        price: "$299",
        image: "/src/assets/product-jacket.jpg",
        category: "Streetwear",
      },
      {
        id: 3,
        name: "Street Art Sneakers",
        price: "$199",
        image: "/src/assets/product-sneakers.jpg",
        category: "Footwear",
      },
    ],
  },
  {
    id: "minimal-collection",
    name: "Minimal Collection",
    description: "Clean lines, timeless design",
    tagline: "Less is more",
    products: [
      {
        id: 4,
        name: "Essential Tee",
        price: "$79",
        image: "/src/assets/product-hoodie.jpg",
        category: "T-Shirts",
      },
      {
        id: 5,
        name: "Classic Denim",
        price: "$159",
        image: "/src/assets/product-jacket.jpg",
        category: "Streetwear",
      },
    ],
  },
  {
    id: "tech-wear",
    name: "Tech Wear x Future",
    description: "Where technology meets fashion",
    tagline: "Future is now",
    products: [
      {
        id: 6,
        name: "Smart Jacket",
        price: "$399",
        image: "/src/assets/product-jacket.jpg",
        category: "Tech Wear",
      },
      {
        id: 7,
        name: "Performance Sneakers",
        price: "$249",
        image: "/src/assets/product-sneakers.jpg",
        category: "Footwear",
      },
      {
        id: 8,
        name: "Tech Hoodie Pro",
        price: "$189",
        image: "/src/assets/product-hoodie.jpg",
        category: "Hoodies",
      },
    ],
  },
];

const Collab = () => {
  const navigate = useNavigate();
  const [selectedCollab, setSelectedCollab] = useState<typeof collabs[0] | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Collaborations
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Exclusive partnerships bringing together creative minds and bold designs
          </p>
        </section>

        {/* Vertical Collab Cards */}
        <section className="max-w-6xl mx-auto space-y-8">
          {collabs.map((collab, index) => (
            <div
              key={collab.id}
              className="group relative h-[400px] overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(collab.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCollab(collab)}
            >
              {/* Hero-style Card */}
              <div className="flex h-full border-2 border-border transition-all duration-700 hover:border-primary hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.4)]">
                {/* Image Area - 70% */}
                <div className="w-[70%] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${collab.products[0].image})`,
                      transform: hoveredCard === collab.id ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                  
                  {/* Animated Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent opacity-0 transition-opacity duration-700"
                    style={{
                      opacity: hoveredCard === collab.id ? 1 : 0,
                    }}
                  />

                  {/* Sliding Line Animation */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary transition-all duration-700"
                    style={{
                      height: hoveredCard === collab.id ? "100%" : "0%",
                      boxShadow: hoveredCard === collab.id ? "0 0 20px hsl(var(--primary))" : "none",
                    }}
                  />

                  {/* Product Count Badge */}
                  <div className="absolute top-6 left-6 transition-all duration-500"
                    style={{
                      transform: hoveredCard === collab.id ? "translateY(0) scale(1.1)" : "translateY(-10px)",
                      opacity: hoveredCard === collab.id ? 1 : 0.8,
                    }}
                  >
                    <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2">
                      {collab.products.length} Products
                    </Badge>
                  </div>
                </div>

                {/* Details Area - 30% */}
                <div className="w-[30%] bg-card flex items-center p-8 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-5 transition-opacity duration-700"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
                      backgroundSize: "40px 40px",
                      opacity: hoveredCard === collab.id ? 0.1 : 0.05,
                    }}
                  />

                  <div className="relative z-10 w-full">
                    {/* Accent Line */}
                    <div 
                      className="h-1 bg-primary mb-6 transition-all duration-700"
                      style={{
                        width: hoveredCard === collab.id ? "64px" : "32px",
                      }}
                    />
                    
                    {/* Title */}
                    <h2 
                      className="text-3xl lg:text-4xl font-black mb-4 tracking-tighter uppercase transition-all duration-500"
                      style={{
                        transform: hoveredCard === collab.id ? "translateX(8px)" : "translateX(0)",
                        color: hoveredCard === collab.id ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                      }}
                    >
                      {collab.name}
                    </h2>
                    
                    {/* Description */}
                    <p 
                      className="text-muted-foreground mb-3 transition-all duration-500 text-lg"
                      style={{
                        transform: hoveredCard === collab.id ? "translateX(8px)" : "translateX(0)",
                        opacity: hoveredCard === collab.id ? 1 : 0.8,
                      }}
                    >
                      {collab.description}
                    </p>
                    
                    {/* Tagline */}
                    <p 
                      className="text-sm text-muted-foreground/70 italic mb-6 transition-all duration-700"
                      style={{
                        transform: hoveredCard === collab.id ? "translateX(8px) translateY(0)" : "translateX(0) translateY(10px)",
                        opacity: hoveredCard === collab.id ? 1 : 0,
                      }}
                    >
                      {collab.tagline}
                    </p>

                    {/* CTA */}
                    <div
                      className="transition-all duration-700"
                      style={{
                        transform: hoveredCard === collab.id ? "translateX(8px) translateY(0)" : "translateX(0) translateY(10px)",
                        opacity: hoveredCard === collab.id ? 1 : 0,
                      }}
                    >
                      <Button className="btn-hero group/btn">
                        View Collection
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Products Modal */}
      <Dialog open={!!selectedCollab} onOpenChange={() => setSelectedCollab(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto animate-scale-in">
          {selectedCollab && (
            <div className="p-6">
              <div className="mb-8 text-center animate-fade-in">
                <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {selectedCollab.name}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {selectedCollab.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCollab.products.map((product, index) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="group cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-105">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="p-4 bg-card">
                        <p className="text-sm text-muted-foreground mb-1">
                          {product.category}
                        </p>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-primary font-bold text-xl">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Collab;