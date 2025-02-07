
import { useState } from 'react';
import { Button } from './ui/button';

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
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="participants" className="block text-sm font-medium">
          Number of Participants
        </label>
        <input
          type="number"
          name="participants"
          id="participants"
          min="1"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Special Requirements
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all"
        ></textarea>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-white transition-all"
      >
        {isSubmitting ? "Submitting..." : "Register Now"}
      </Button>
    </form>
  );
};

export default BookingForm;
