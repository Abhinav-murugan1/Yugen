import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="section-padding pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
              About YUGEN
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Defining Contemporary Fashion Through Bold Design & Premium Quality
            </p>
          </div>

          {/* Story Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2024, YUGEN emerged from a vision to revolutionize contemporary streetwear. 
                We believe fashion should be bold, expressive, and accessible to those who dare to stand out.
              </p>
              <p>
                Our name, "YUGEN," embodies the profound grace and subtle profundity we infuse into every piece. 
                We create clothing that speaks to the modern individual—someone who values quality, authenticity, 
                and self-expression.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Every piece is crafted from carefully selected materials, ensuring durability and comfort 
                  that lasts season after season.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-3">Bold Design</h3>
                <p className="text-muted-foreground">
                  We push boundaries with designs that challenge conventions while maintaining timeless appeal 
                  and versatility.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to ethical production practices and sustainable materials, creating fashion 
                  that's responsible.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  Our customers are at the heart of everything we do. We listen, adapt, and grow together 
                  as a community.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-16 bg-card border-2 border-border p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              To empower individuals through fashion that makes a statement. We create pieces that don't just 
              follow trends—they set them. Our commitment is to deliver exceptional quality, innovative design, 
              and an unparalleled customer experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every collection tells a story. Every piece has a purpose. Join us in defining the future of 
              contemporary fashion.
            </p>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@yugen.fashion" 
              className="inline-block btn-hero"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
