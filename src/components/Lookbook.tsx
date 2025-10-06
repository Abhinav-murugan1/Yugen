import { Button } from "@/components/ui/button";
import lookbookHero from "@/assets/lookbook-hero.jpg";

const Lookbook = () => {
  return (
    <section id="lookbook" className="section-margin">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Lookbook</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest styling inspiration and discover how to wear our pieces
          </p>
        </div>

        {/* Featured Lookbook */}
        <div className="relative overflow-hidden rounded-sm group cursor-pointer border-2 border-transparent hover:border-primary/30">
          <div className="aspect-[16/9] lg:aspect-[21/9]">
            <img
              src={lookbookHero}
              alt="Modern Streetwear Lookbook"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-end justify-center pb-12">
              <div className="text-center text-white max-w-2xl mx-auto section-padding">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                  Modern Streetwear
                </h3>
                <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up">
                  Contemporary pieces designed for the urban lifestyle
                </p>
                <Button className="btn-hero animate-slide-up">
                  View Lookbook
                </Button>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                <div className="w-4 h-4 border-2 border-white rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Collection Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Essentials",
              description: "Timeless pieces for everyday wear",
              items: "24 pieces"
            },
            {
              title: "Statement",
              description: "Bold designs that make an impact",
              items: "16 pieces"
            },
            {
              title: "Seasonal",
              description: "Limited drops for each season",
              items: "12 pieces"
            }
          ].map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-lg p-8 hover:bg-card/80 transition-colors duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="text-sm text-primary font-semibold">
                  {category.items}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;