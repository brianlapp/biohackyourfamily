
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is biohacking?",
    answer: "Discovered by the godfather of biohacking, Dave Asprey, a term biohackers use to explain and express things they do on a daily basis to elevate their health and wellness journey by discovering new research and tools that can enhance our well being and extend our lifespan."
  },
  {
    question: "What is Fascia?",
    answer: "Fascia is the connective tissue that surrounds every muscle, organ, and structure in your body. Keeping it healthy is key to movement, posture, and overall well-being."
  },
  {
    question: "Why Fascia Maneuvers?",
    answer: "These techniques help release tension, improve alignment, and promote deep healing."
  },
  {
    question: "Who is Fascia Maneuvers for?",
    answer: "Everyone! We will provide modifications to do maneuvers seated on a chair when needed."
  },
  {
    question: "How to do Fascia Maneuvers?",
    answer: "Join us for a workshop or retreat to learn guided techniques that combine breath, movement, and full body fascia release maneuvers."
  },
  {
    question: "When can you learn or receive a fascia release treatment?",
    answer: "Throughout the year! We offer group workshops, day retreats, and one-on-one support tailored to your needs."
  }
];

const Faq = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[rgb(79,30,114)]">
          Questions & Answers
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
