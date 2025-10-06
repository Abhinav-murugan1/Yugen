import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productHoodie from "@/assets/product-hoodie.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productJacket from "@/assets/product-jacket.jpg";

const allProducts = [
  {
    id: 1,
    name: "Essential Hoodie",
    price: "$120",
    originalPrice: null,
    image: productHoodie,
    category: "Hoodies",
    isNew: true,
  },
  {
    id: 2,
    name: "Modern Sneakers",
    price: "$180",
    originalPrice: "$220",
    image: productSneakers,
    category: "Streetwear",
    isNew: false,
  },
  {
    id: 3,
    name: "Premium Jacket",
    price: "$290",
    originalPrice: null,
    image: productJacket,
    category: "Streetwear",
    isNew: true,
  },
  {
    id: 4,
    name: "Classic Oversized Tee",
    price: "$85",
    originalPrice: null,
    image: productHoodie,
    category: "Oversized T-Shirts",
    isNew: true,
  },
  {
    id: 5,
    name: "Urban Hoodie Pro",
    price: "$145",
    originalPrice: "$180",
    image: productHoodie,
    category: "Hoodies",
    isNew: false,
  },
  {
    id: 6,
    name: "Street Style Tee",
    price: "$95",
    originalPrice: null,
    image: productJacket,
    category: "Oversized T-Shirts",
    isNew: true,
  },
  {
    id: 7,
    name: "Limited Edition Hoodie",
    price: "$160",
    originalPrice: null,
    image: productHoodie,
    category: "Hoodies",
    isNew: true,
  },
  {
    id: 8,
    name: "Vintage Streetwear Set",
    price: "$250",
    originalPrice: "$300",
    image: productJacket,
    category: "Streetwear",
    isNew: false,
  },
];

const categories = ["All", "Oversized T-Shirts", "Hoodies", "Streetwear"];

const Shop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete collection of oversized tees, hoodies, and
            streetwear
          </p>
        </section>

        {/* Filter Section */}
        <section className="mb-12 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-premium hover:shadow-primary/20 hover:shadow-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => navigate(`/product/${product.id}`)}
                style={{
                  boxShadow:
                    hoveredProduct === product.id
                      ? "0 0 40px hsl(var(--primary) / 0.3), 0 0 80px hsl(var(--primary) / 0.1)"
                      : "",
                }}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-primary text-primary-foreground">
                        New
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge variant="destructive" className="bg-red-500">
                        Sale
                      </Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                      variant="secondary"
                      size="icon"
                      className={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        favorites.includes(product.id) ? "text-red-500" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(product.id) ? "fill-current" : ""
                        }`}
                      />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${product.id}`);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;