
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

// Extend form props to properly type Netlify attributes
interface NetlifyFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  'data-netlify'?: boolean;
  'data-netlify-honeypot'?: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    retreatType: '',
    adults: '',
    kids: '',
    email: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = encode({
      'form-name': 'booking',
      ...formData
    });

    console.log('Submitting form with data:', formBody);

    try {
      // Target Netlify's form submission endpoint with the form name
      const response = await fetch("/booking", {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
        },
        body: formBody
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      const responseText = await response.text();
      console.log('Response text:', responseText);

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your booking request has been submitted. We'll be in touch soon!",
          duration: 5000,
        });
        setFormData({
          firstName: '',
          lastName: '',
          retreatType: '',
          adults: '',
          kids: '',
          email: '',
          comments: ''
        });
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Try submitting the form directly as a fallback
      const formElement = e.target as HTMLFormElement;
      formElement.submit();
      
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. The form will try to submit directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formProps: NetlifyFormProps = {
    name: "booking",
    method: "POST",
    'data-netlify': true,
    'data-netlify-honeypot': "bot-field",
    className: "space-y-6 max-w-md mx-auto",
    onSubmit: handleSubmit
  };

  return (
    <form {...formProps}>
      <input type="hidden" name="form-name" value="booking" />
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
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="retreatType" className="block text-sm font-medium">
          Retreat Type
        </label>
        <Select 
          name="retreatType"
          value={formData.retreatType}
          onValueChange={(value) => setFormData({ ...formData, retreatType: value })}
        >
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
          value={formData.adults}
          onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
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
          value={formData.kids}
          onChange={(e) => setFormData({ ...formData, kids: e.target.value })}
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
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
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
