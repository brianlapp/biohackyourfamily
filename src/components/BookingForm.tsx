
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

const workshops = [
  "Biohack your Pain & Stress with Fascia Release Maneuvers - May 9",
  "Biohack your Teen Series - May 24, June 14, July 19",
  "Biohack your Fascia for Mothers - May 30",
  "Biohack your Fascia for Fathers & Sons - June 13",
  "Biohack your Fascia for the Healers - June 22",
  "Biohack your Family for Parents - Sept. 26",
  "Biohack your School Life for Students - Oct. 17",
  "Biohack Your Fertility - Aug. 2",
  "Biohack your Wellness for Mother & Daughter - Sept. 13",
  "Biohack your Wellness for Father & Son - Oct. 11",
  "One-on-One Consultation",
  "Discovery Call"
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    programType: '',
    workshopTitle: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkgozvwj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your booking request has been submitted. We'll be in touch soon!",
          duration: 5000,
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          programType: '',
          workshopTitle: '',
          comments: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
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
        <label htmlFor="programType" className="block text-sm font-medium">
          Type of Program
        </label>
        <Select 
          name="programType"
          value={formData.programType}
          onValueChange={(value) => setFormData({ ...formData, programType: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select program type" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="workshop">Workshop</SelectItem>
            <SelectItem value="dayretreat">Day Retreat</SelectItem>
            <SelectItem value="oneOnOne">One-on-One Treatment</SelectItem>
            <SelectItem value="discovery">Discovery Call</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="workshopTitle" className="block text-sm font-medium">
          Workshop or Service
        </label>
        <Select 
          name="workshopTitle"
          value={formData.workshopTitle}
          onValueChange={(value) => setFormData({ ...formData, workshopTitle: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select event" />
          </SelectTrigger>
          <SelectContent className="bg-white max-h-[300px]">
            {workshops.map((workshop) => (
              <SelectItem key={workshop} value={workshop}>
                {workshop}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
        className="w-full bg-primary hover:bg-primary/90 text-white transition-all text-lg py-6"
      >
        {isSubmitting ? "Submitting..." : "Register Now"}
      </Button>
    </form>
  );
};

export default BookingForm;

