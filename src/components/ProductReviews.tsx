import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  const [showAll, setShowAll] = useState(false);
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <section className="py-16 border-t border-border">
      <div className="section-padding">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase">
            Customer Reviews
          </h2>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(Number(averageRating))
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-bold">{averageRating}</span>
            <span className="text-sm text-muted-foreground">
              ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-4">
          {(showAll ? reviews : reviews.slice(0, 2)).map((review) => (
            <Card key={review.id} className="border-border/50 hover:border-border transition-colors">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Comment */}
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      "{review.comment}"
                    </p>

                    {/* Name and Date */}
                    <div className="flex items-center gap-2 text-xs">
                      <p className="font-medium">{review.name}</p>
                      <span className="text-muted-foreground">•</span>
                      <p className="text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {reviews.length > 2 && (
          <div className="mt-6 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="min-w-[200px]"
            >
              {showAll ? "Show Less" : `Show More (${reviews.length - 2} more)`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductReviews;
