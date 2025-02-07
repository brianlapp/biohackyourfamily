
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      name="booking"
      method="POST"
      data-netlify="true"
      className="space-y-6 max-w-md mx-auto"
      onSubmit={(e) => {
        setIsSubmitting(true);
      }}
    >
      <input type="hidden" name="form-name" value="booking" />
      
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
          <SelectContent>
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
        <label htmlFor="telephone" className="block text-sm font-medium">
          Your Telephone
        </label>
        <input
          type="tel"
          name="telephone"
          id="telephone"
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
