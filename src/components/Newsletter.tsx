import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to the family!",
        description: "You've been successfully subscribed to our newsletter",
      });
      setEmail("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="section-margin bg-gradient-card">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
              Be First to Know
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get exclusive access to new collections, special offers, and style inspiration delivered to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-glow w-full h-14 text-lg pr-12 border-2 focus:border-primary"
                  disabled={isLoading}
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="btn-hero h-14 px-8 whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Join 10,000+ fashion enthusiasts • Unsubscribe anytime • No spam, ever
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Early Access",
                description: "Shop new collections 24 hours before anyone else"
              },
              {
                title: "Exclusive Offers",
                description: "Member-only discounts and special promotions"
              },
              {
                title: "Style Guides",
                description: "Weekly inspiration and styling tips from our team"
              }
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;