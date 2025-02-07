
import { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Log form data for debugging
      console.log('Form data being submitted:', data);

      const body = encode({
        'form-name': form.getAttribute('name'),
        ...data
      });

      // Log encoded body
      console.log('Encoded form data:', body);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      });

      // Log response for debugging
      console.log('Form submission response:', response);

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your booking request has been submitted. We'll be in touch soon!",
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="booking-form"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/"
      className="space-y-6 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      {/* These hidden inputs are required for Netlify forms */}
      <input type="hidden" name="form-name" value="booking-form" />
      <div hidden>
        <input name="bot-field" />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="retreatType" className="block text-sm font-medium">
          Retreat Type
        </label>
        <Select name="retreatType">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select retreat type" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="weekend">Weekend Cabin</SelectItem>
            <SelectItem value="oneday">1 Day Retreat</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="adults" className="block text-sm font-medium">
          Number of Adults
        </label>
        <input
          type="number"
          name="adults"
          id="adults"
          min="1"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="kids" className="block text-sm font-medium">
          Number of Kids
        </label>
        <input
          type="number"
          name="kids"
          id="kids"
          min="0"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="comments" className="block text-sm font-medium">
          Comments or Questions
        </label>
        <textarea
          name="comments"
          id="comments"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
        ></textarea>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[rgb(79,30,114)] hover:bg-[rgb(79,30,114)]/90 text-white transition-all text-lg py-6"
      >
        {isSubmitting ? "Submitting..." : "Register Now"}
      </Button>
    </form>
  );
};

export default BookingForm;
