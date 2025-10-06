import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "Absolutely love this hoodie! The quality is outstanding and it fits perfectly."
  },
  {
    id: 2,
    name: "James C.",
    rating: 5,
    comment: "These sneakers are incredibly comfortable and look great. Perfect for daily wear."
  },
  {
    id: 3,
    name: "Emma T.",
    rating: 5,
    comment: "The jacket exceeded my expectations. Premium quality materials and beautiful design."
  },
  {
    id: 4,
    name: "Michael R.",
    rating: 5,
    comment: "Great product and fast shipping. The fit is true to size."
  },
  {
    id: 5,
    name: "Lisa K.",
    rating: 5,
    comment: "Best purchase I've made this year. The quality speaks for itself!"
  },
  {
    id: 6,
    name: "David P.",
    rating: 5,
    comment: "Exceeded expectations. Will definitely shop here again."
  }
];

const CustomerReviews = () => {
  const averageRating = 4.9;
  const totalReviews = 1247;

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="pt-32 pb-16 overflow-hidden">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{averageRating}</span>
            <span className="text-sm text-muted-foreground">
              • {totalReviews.toLocaleString()}+ reviews
            </span>
          </div>
        </div>

        {/* Rolling Reviews Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="fixed left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background/60 to-transparent z-10 pointer-events-none" />
          <div className="fixed right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background/60 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Reviews */}
          <div className="flex animate-scroll-left">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-[350px] mx-2"
              >
                <div className="bg-card/50 border border-border/50 p-5 h-full hover:bg-card hover:border-border transition-all duration-300">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    "{review.comment}"
                  </p>

                  {/* Name */}
                  <p className="text-xs font-medium text-muted-foreground/70">
                    — {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
