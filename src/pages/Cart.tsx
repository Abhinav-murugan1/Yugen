import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Premium Hoodie",
      price: 120,
      quantity: 1,
      image: "/placeholder.svg"
    },
    {
      id: "2",
      name: "Designer Jacket",
      price: 250,
      quantity: 2,
      image: "/placeholder.svg"
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Product removed from cart"
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to payment..."
    });
    // Checkout logic will be implemented here
  };

  const featuredProducts = [
    {
      id: "f1",
      name: "Limited Edition Sneakers",
      price: 180,
      image: "/placeholder.svg"
    },
    {
      id: "f2",
      name: "Designer T-Shirt",
      price: 65,
      image: "/placeholder.svg"
    },
    {
      id: "f3",
      name: "Luxury Watch",
      price: 450,
      image: "/placeholder.svg"
    },
    {
      id: "f4",
      name: "Premium Backpack",
      price: 95,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="section-padding pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
              <Button onClick={() => navigate('/')}>Continue Shopping</Button>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <p className="text-muted-foreground mb-4">${item.price}</p>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border border-border">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="px-4 py-1 min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-bold text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-6"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full mt-2"
                      onClick={() => navigate('/')}
                    >
                      Continue Shopping
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Featured Products Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">You Might Also Like</h2>
            <p className="text-muted-foreground">Curated recommendations just for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">${product.price}</p>
                    <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      View <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
