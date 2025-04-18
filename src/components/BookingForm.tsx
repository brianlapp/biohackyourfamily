import { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getWorkshopsByCategory } from '@/data/workshops';

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
  const [availableWorkshops, setAvailableWorkshops] = useState(getWorkshopsByCategory(''));

  const handleProgramTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, programType: value, workshopTitle: '' }));
    setAvailableWorkshops(getWorkshopsByCategory(value));
  };

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
            className="border-amber-300 focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
            className="border-amber-300 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Your Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="border-amber-300 focus:border-primary focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="programType" className="text-sm font-medium">
          Type of Program
        </Label>
        <Select 
          name="programType"
          value={formData.programType}
          onValueChange={handleProgramTypeChange}
        >
          <SelectTrigger className="border-amber-300 focus:border-primary focus:ring-primary bg-amber-50/50">
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
        <Label htmlFor="workshopTitle" className="text-sm font-medium">
          Workshop or Service
        </Label>
        <Select 
          name="workshopTitle"
          value={formData.workshopTitle}
          onValueChange={(value) => setFormData({ ...formData, workshopTitle: value })}
        >
          <SelectTrigger className="border-amber-300 focus:border-primary focus:ring-primary bg-amber-50/50">
            <SelectValue placeholder="Select event" />
          </SelectTrigger>
          <SelectContent className="bg-white max-h-[300px]">
            {availableWorkshops.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments" className="text-sm font-medium">
          Comments or Questions
        </Label>
        <textarea
          name="comments"
          id="comments"
          rows={4}
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all bg-amber-50/50 border-amber-300"
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
