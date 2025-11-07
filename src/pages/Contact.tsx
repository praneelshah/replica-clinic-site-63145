import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Clock } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const offices = [
    {
      name: "Whittier Office",
      address: "15111 Whittier Blvd, Suite 101-A\nWhittier, CA, 90603",
      phone: "(562) 399-5099",
      phoneLink: "tel:+15623995099",
      hours: [
        { day: "Monday - Thursday", time: "10:30 AM - 7:30 PM" },
        { day: "Friday", time: "9:30 AM - 6:30 PM" },
        { day: "Saturday", time: "9:00 AM - 3:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5543567890!2d-118.0327!3d33.9761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzM0LjAiTiAxMTjCsDAxJzU3LjciVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
    {
      name: "Eagle Rock Office",
      address: "1447 Colorado Blvd\nLos Angeles, CA 90041",
      phone: "(323) 255-1708",
      phoneLink: "tel:+13232551708",
      hours: [
        { day: "Monday - Thursday", time: "10:30 AM - 7:30 PM" },
        { day: "Friday", time: "9:30 AM - 6:30 PM" },
        { day: "Saturday - Sunday", time: "Closed" },
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.234567890!2d-118.2088!3d34.1376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA4JzE1LjQiTiAxMTjCsDEyJzMxLjciVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
    {
      name: "Panorama City Office",
      address: "14621 Nordhoff St, Suite 1A\nPanorama City, CA 91402",
      phone: "(818) 891-1761",
      phoneLink: "tel:+18188911761",
      hours: [
        { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
        { day: "Saturday - Sunday", time: "Closed" },
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.123456789!2d-118.4447!3d34.2215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDEzJzE3LjQiTiAxMTjCsDI2JzQwLjkiVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <AnimatedSection className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wide">
            Contact Us
          </h1>
          <div className="h-px w-24 bg-accent mx-auto my-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light opacity-90">
            Three Convenient Locations To Serve You Best
          </p>
        </AnimatedSection>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Contact Form Section */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="p-8 border-0 shadow-2xl bg-background">
                <h2 className="text-3xl font-serif font-bold mb-2">General Inquiries</h2>
                <p className="text-muted-foreground mb-6">
                  To contact our Whittier Office, Eagle Rock Office, or Panorama City Office, fill out the form below or use the office information provided.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </AnimatedSection>

          {/* Office Locations */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Locations</h2>
            <p className="text-muted-foreground text-lg">
              Visit any of our convenient locations for exceptional dental care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {offices.map((office, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="p-6 border-0 shadow-2xl bg-background h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-center">{office.name}</h3>
                  
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground whitespace-pre-line">{office.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <a
                        href={office.phoneLink}
                        className="text-muted-foreground hover:text-primary transition-colors font-medium"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-start gap-3 mb-3">
                        <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <h4 className="font-bold">Office Hours</h4>
                      </div>
                      <div className="space-y-2 pl-8">
                        {office.hours.map((schedule, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="font-medium">{schedule.day}</span>
                            <span className="text-muted-foreground">{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6" asChild>
                    <a href={office.phoneLink}>Call {office.name}</a>
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Maps Section */}
          {offices.map((office, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="p-8 border-0 shadow-2xl bg-background mb-8">
                <h3 className="text-2xl font-serif font-bold mb-4 text-center">{office.name} Location</h3>
                <p className="text-muted-foreground mb-6 text-center whitespace-pre-line">
                  {office.address}
                </p>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.name} Location`}
                  />
                </div>
              </Card>
            </AnimatedSection>
          ))}

          {/* Spanish Language Note */}
          <AnimatedSection delay={300}>
            <Card className="p-6 border-0 shadow-2xl bg-background/80 backdrop-blur-sm text-center">
              <h3 className="text-xl font-bold mb-2">Se Habla Español</h3>
              <p className="text-muted-foreground">
                We have Spanish-speaking staff available to assist you with all your dental needs.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-serif font-light mb-6">
              Ready to Start Your Smile Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-light opacity-90">
              We offer flexible scheduling with evening and weekend appointments available. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-transparent backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300">
                <a href="tel:+15623995099">Whittier: (562) 399-5099</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300">
                <a href="tel:+13232551708">Eagle Rock: (323) 255-1708</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300">
                <a href="tel:+18188911761">Panorama City: (818) 891-1761</a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
