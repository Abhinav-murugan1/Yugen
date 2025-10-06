import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ProductReviews from "@/components/ProductReviews";
import Footer from "@/components/Footer";
import productHoodie from "@/assets/product-hoodie.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productJacket from "@/assets/product-jacket.jpg";

// TODO: This product data will be managed via Admin panel in the future
// Products, reviews, sizes, colors, and prices will all be editable through admin interface
const products = [
  {
    id: 1,
    name: "Essential Hoodie",
    price: "$120",
    originalPrice: null,
    image: productHoodie,
    category: "Hoodies",
    isNew: true,
    description: "Premium cotton blend hoodie with contemporary design. Features a relaxed fit with ribbed cuffs and hem, adjustable drawstring hood, and kangaroo pocket. Perfect for layering or wearing solo.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray"],
    details: [
      "80% Cotton, 20% Polyester",
      "Machine washable",
      "Relaxed fit",
      "Premium quality fabric",
      "Reinforced stitching"
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        comment: "Absolutely love this hoodie! The quality is outstanding and it fits perfectly. The fabric is so soft and comfortable.",
        date: "2 weeks ago"
      },
      {
        id: 2,
        name: "Alex T.",
        rating: 5,
        comment: "Best hoodie I've ever owned. The fit is true to size and the material quality exceeded my expectations.",
        date: "3 weeks ago"
      },
      {
        id: 3,
        name: "Jordan P.",
        rating: 4,
        comment: "Really nice hoodie, very comfortable. Only wish it came in more colors!",
        date: "1 month ago"
      },
      {
        id: 4,
        name: "Casey L.",
        rating: 5,
        comment: "Perfect weight, not too heavy or too light. Great for layering or wearing on its own.",
        date: "1 month ago"
      }
    ]
  },
  {
    id: 2,
    name: "Modern Sneakers",
    price: "$180",
    originalPrice: "$220",
    image: productSneakers,
    category: "Footwear",
    isNew: false,
    description: "High-performance sneakers combining style and comfort. Engineered with premium materials and advanced cushioning technology for all-day wear.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Navy"],
    details: [
      "Premium leather upper",
      "Cushioned insole",
      "Durable rubber outsole",
      "Breathable lining",
      "Lightweight construction"
    ],
    reviews: [
      {
        id: 1,
        name: "James C.",
        rating: 5,
        comment: "These sneakers are incredibly comfortable and look great. Perfect for daily wear. The cushioning is amazing!",
        date: "1 week ago"
      },
      {
        id: 2,
        name: "Morgan K.",
        rating: 5,
        comment: "Fantastic quality and style. They go with everything and are so comfortable I forget I'm wearing them.",
        date: "2 weeks ago"
      },
      {
        id: 3,
        name: "Riley B.",
        rating: 4,
        comment: "Great sneakers overall. Very comfortable and stylish. Took a few days to break in but worth it.",
        date: "3 weeks ago"
      },
      {
        id: 4,
        name: "Taylor S.",
        rating: 5,
        comment: "Best sneaker purchase I've made. The quality is exceptional and they're holding up beautifully.",
        date: "1 month ago"
      },
      {
        id: 5,
        name: "Drew M.",
        rating: 5,
        comment: "Love these! Super comfortable for walking all day. The leather is premium quality.",
        date: "1 month ago"
      }
    ]
  },
  {
    id: 3,
    name: "Premium Jacket",
    price: "$290",
    originalPrice: null,
    image: productJacket,
    category: "Outerwear",
    isNew: true,
    description: "Luxury bomber jacket crafted from premium materials. Features a contemporary silhouette with ribbed trims, multiple pockets, and a smooth zip closure.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Navy"],
    details: [
      "Premium outer shell",
      "Quilted lining",
      "Multiple pockets",
      "Ribbed cuffs and hem",
      "Water-resistant finish"
    ],
    reviews: [
      {
        id: 1,
        name: "Emma T.",
        rating: 5,
        comment: "The jacket exceeded my expectations. Premium quality materials and beautiful design. Worth every penny!",
        date: "5 days ago"
      },
      {
        id: 2,
        name: "Chris R.",
        rating: 5,
        comment: "Absolutely stunning jacket. The fit is perfect and the quality is top-notch. Highly recommend!",
        date: "1 week ago"
      },
      {
        id: 3,
        name: "Sam W.",
        rating: 4,
        comment: "Beautiful jacket with excellent craftsmanship. Runs slightly large, so consider sizing down.",
        date: "2 weeks ago"
      },
      {
        id: 4,
        name: "Avery D.",
        rating: 5,
        comment: "This jacket is everything I wanted and more. The water-resistant finish is a great bonus!",
        date: "3 weeks ago"
      }
    ]
  }
];

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id || ""));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
        <div className="section-padding section-margin text-center">
          <h1 className="text-4xl font-black mb-6">Product Not Found</h1>
          <Button onClick={() => navigate("/")} className="btn-hero">
            Return Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color");
      return;
    }
    console.log(`Added to cart: ${product.name}, Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="section-padding pt-32 pb-24">
        <Button
          variant="ghost"
          className="mb-8 cursor-interactive"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-card border-2 border-border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                New
              </Badge>
            )}
            {product.originalPrice && (
              <Badge variant="destructive" className="absolute top-4 left-4 bg-red-500">
                Sale
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="text-xs md:text-sm text-muted-foreground mb-2 uppercase tracking-wider">
              {product.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 tracking-tighter">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg md:text-xl text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-4 md:mb-6">
              <label className="block text-xs md:text-sm font-semibold mb-2 md:mb-3 uppercase tracking-wider">
                Select Size
              </label>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 md:px-6 py-2 md:py-3 border-2 font-semibold transition-all duration-200 cursor-interactive text-sm md:text-base ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6 md:mb-8">
              <label className="block text-xs md:text-sm font-semibold mb-2 md:mb-3 uppercase tracking-wider">
                Select Color
              </label>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 md:px-6 py-2 md:py-3 border-2 font-semibold transition-all duration-200 cursor-interactive text-sm md:text-base ${
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6 md:mb-8">
              <label className="block text-xs md:text-sm font-semibold mb-2 md:mb-3 uppercase tracking-wider">
                Quantity
              </label>
              <div className="flex items-center gap-3 md:gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-border hover:border-primary transition-all duration-200 font-semibold cursor-interactive text-sm md:text-base"
                >
                  -
                </button>
                <span className="text-lg md:text-xl font-semibold min-w-[2.5rem] md:min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-border hover:border-primary transition-all duration-200 font-semibold cursor-interactive text-sm md:text-base"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
              <Button
                className="flex-1 btn-hero text-sm md:text-base"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`h-12 w-12 md:h-14 md:w-14 border-2 cursor-interactive ${
                  isFavorite ? "text-red-500 border-red-500" : ""
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`h-5 w-5 md:h-6 md:w-6 ${isFavorite ? "fill-current" : ""}`}
                />
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t border-border pt-6 md:pt-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 uppercase tracking-wider">
                Product Details
              </h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm md:text-base text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ProductReviews reviews={product.reviews} />
      
      {/* You Might Like Section - Scrollable */}
      <section className="section-padding py-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-tighter">
            You Might Like
          </h2>
          <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex gap-4 md:gap-6 min-w-min">
              {products
                .filter(p => p.id !== product.id)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="group cursor-interactive flex-shrink-0 w-[200px] md:w-[240px]"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-card border-2 border-border mb-3 transition-all duration-300 group-hover:border-primary">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {item.isNew && (
                        <Badge className="absolute top-2 left-2 text-xs bg-primary text-primary-foreground">
                          New
                        </Badge>
                      )}
                      {item.originalPrice && (
                        <Badge variant="destructive" className="absolute top-2 left-2 text-xs bg-red-500">
                          Sale
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.category}
                      </p>
                      <h3 className="text-sm md:text-base font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-primary">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
