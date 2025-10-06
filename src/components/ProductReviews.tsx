import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  const handleSubmitReview = () => {
    if (!name || !comment || rating === 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields and select a rating.",
        variant: "destructive",
      });
      return;
    }

    // This will be connected to the admin/database in the future
    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback. Your review will be published after approval.",
    });

    // Reset form
    setName("");
    setComment("");
    setRating(0);
    setShowReviewForm(false);
  };

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

        {/* Add Review Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="btn-hero"
          >
            {showReviewForm ? "Cancel" : "Write a Review"}
          </Button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <Card className="mt-8 border-primary/30">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Share Your Experience</h3>
              
              {/* Rating Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wider">
                  Your Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="cursor-interactive transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wider">
                  Your Name
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="input-glow"
                />
              </div>

              {/* Review Comment */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wider">
                  Your Review
                </label>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us what you think about this product..."
                  rows={4}
                  className="input-glow"
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmitReview}
                className="btn-hero w-full"
              >
                Submit Review
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ProductReviews;
