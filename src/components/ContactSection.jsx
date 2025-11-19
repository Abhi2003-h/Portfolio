import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
     return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="gap-12">
          <div className="space-y-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-left"> Email</h4>
                  <a
                    href="mailto:abhi03jith@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    abhi03jith@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-left"> Phone</h4>
                  <a
                    href="tel:+917736977391"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7736977391
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-left"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kerala, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https:www.linkedin.com/in/abhi03jith-h" target="_blank">
                  <Linkedin />
                </a>
                <a href="https:www.instagram.com/itzmeabhi_" target="_blank">
                  <Instagram />
                </a>
                <a href="https:www.github.com/Abhi2003-h" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};