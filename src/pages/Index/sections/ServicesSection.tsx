import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Home, Search, UserCheck } from 'lucide-react';
const services = [{
  title: "One-on-One Consulting",
  description: "Personalized attention focused on your specific wellness goals",
  icon: UserCheck
}, {
  title: "EMF Home Inspections",
  description: "Identify electromagnetic field sources in your home that might affect your health",
  icon: Search
}, {
  title: "Healthy Home Audits",
  description: "Comprehensive assessment of your living space for optimal wellness",
  icon: Home
}, {
  title: "Culinary Nutrition",
  description: "Learn how to prepare nutritious meals that support your wellness journey",
  icon: Activity
}];
const additionalServices = ["One on one fascia release treatment with a fascia release maneuver coach", "PEMF session treatment", "Reiki Master Mahatma Energy treatment", "Culinary nutrition consultation", "EMF Home Inspection", "Healthy Home Audit"];
const ServicesSection = () => {
  return <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">
          One-on-One Consulting & Services
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg mb-6">
            For those ready for more personal, focused attention —
          </p>
          <p className="mb-8">
            Book a free 15-minute discovery call so we can explore your story and wellness goals and customize a biohacking menu and checklist. There is nothing more important than investing in your health. Call today to discover how easy it is to receive support for your journey.
          </p>
          <Button className="text-white bg-amber-500 hover:bg-amber-400">
            Book a free 15 min discovery call
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#booking">
                  <Button variant="outline" className="w-full border-primary hover:bg-primary/10 text-amber-500">
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Additional Support Services</h3>
          <p className="text-center mb-6">Contact us directly for more info on:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
            {additionalServices.map((service, index) => <li key={index} className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>{service}</span>
              </li>)}
          </ul>
        </div>
      </div>
    </section>;
};
export default ServicesSection;