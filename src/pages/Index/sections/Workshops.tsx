
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

interface WorkshopItem {
  title: string;
  date: string;
  location: string;
  time: string;
  description?: string;
}

const workshops: WorkshopItem[] = [
  {
    title: "Biohack your Pain & Stress with Fascia Release Maneuvers",
    date: "May 9, 2025",
    location: "Windsor, ON",
    time: "6:15–8 PM",
    description: "You will learn easy hacks to kick start your wellness path, how to do fascia release maneuvers that release your stress and help activate the journey to release back pain, along with breathwork, meditation, sound therapy, forest bathing and grounding to start off your weekend feeling motivated. Limited Spots"
  },
  {
    title: "Biohack your Teen Series",
    date: "May 24, June 14, July 19, 2025",
    location: "Windsor, ON",
    time: "4:00-6:00 PM",
    description: "Support your growing teens with life skill tools that will help them navigate all the stress that comes with teenage life, learning about toxins in common care products they consume on a daily basis, cooking demos that meet their taste buds and protein needs and budget for healthy snacks, navigating their personal goals, peer pressure and social media, understanding emf exposure and why they shouldn't sleep with their cell phones, determining their personal values and creating value based vision boards, mindfulness practices, laughing yoga, guided meditation, fascia release maneuvers and so much more. Prep them for an empowering summer, so they can re-charge and have the tools to stay safe and happy! Limited Spots."
  },
  {
    title: "Biohack your Fascia for Mothers",
    date: "May 30, 2025",
    location: "Windsor, ON",
    time: "6:15–8 PM",
    description: "To celebrate you, Mother, the creator, the multi-tasker, the problem solver, the one that carries the world on their shoulders, be guided on how you can fill your cup by releasing the stress and tension with fascia release maneuvers. We will relax you with forest bathing, grounding, guided meditation, sound therapy, reiki support for emotional releases and you will all go home with a custom essential oil gift! Limited Spots"
  },
  {
    title: "Biohack your Fascia for Fathers & Sons",
    date: "June 13, 2025",
    location: "Windsor, ON",
    time: "6:15–8 PM",
    description: "Holding space for Fathers and Sons so that you two can learn how to support each other in your wellness journey regardless of where you are. You will learn tips on boosting your current nutrition, regardless of how picky the eaters are, we will teach you fascia release maneuvers to help reset stress and tension, we will do neuro-path activities to accelerate your eye and hand and brain coordination, you will enjoy a forest walk, guided meditation and sound therapy. Limited Spots"
  },
  {
    title: "Biohack your Fascia for the Healers",
    date: "June 22, 2025",
    location: "Amherstburg, ON",
    time: "12:00-2:00 PM",
    description: "We were called to step in and guide, teach, support, repair, keep safe, heal and help others. We must learn how to recover from the excess transfer of energy, the stored drama in our body. Learn how to release the stress, the emotional stored trauma, discover biohacking tips to restore your cellular health and learn the fascia release maneuvers you can practice at home to elevate your wellness journey. Whether you're a burned out teacher, nurse, paramedic, police officer, firefighter, social worker, psychologist, holistic healer or you have your own persona that feels called to share this space, we welcome you and look forward to helping you feel lighter. We will gather together in a unique quaint private space, surrounded by fields of green and nature sounds. Limit Spots"
  },
  {
    title: "Biohack your Family for Parents",
    date: "Sept. 26, 2025",
    location: "Windsor, ON",
    time: "6:15–8 PM"
  },
  {
    title: "Biohack your School Life for Students",
    date: "Oct. 17, 2025",
    location: "Windsor, ON",
    time: "6:15–8 PM"
  }
];

const retreats: WorkshopItem[] = [
  {
    title: "Biohack Your Fertility",
    date: "Aug. 2, 2025",
    location: "Windsor, ON",
    time: "11 AM–4 PM"
  },
  {
    title: "Biohack your Wellness for Mother & Daughter",
    date: "Sept. 13, 2025",
    location: "Windsor, ON",
    time: "11 AM–4 PM"
  },
  {
    title: "Biohack your Wellness for Father & Son",
    date: "Oct. 11, 2025",
    location: "Windsor, ON",
    time: "11 AM–4 PM"
  }
];

const WorkshopCard = ({ workshop }: { workshop: WorkshopItem }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#35853d]/20 bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src="/lovable-uploads/e367a7ae-7924-4b97-92d6-db29edee011e.png"
          alt={workshop.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">Limited spots available!</Badge>
        <h3 className="text-xl font-bold text-primary mb-4">{workshop.title}</h3>
        
        <div className="flex flex-col gap-1.5 mt-2 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{workshop.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{workshop.location}</span>
          </div>
        </div>
        
        {workshop.description && (
          <div className="mb-6 text-sm text-gray-600">
            <p>{workshop.description}</p>
          </div>
        )}
        
        <div className="mt-auto">
          <a href="#booking">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Register
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Workshops = () => {
  return (
    <section id="workshops" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-primary">
          Workshops & Retreats
        </h2>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700">
            Experience a transformative Family Retreat designed to strengthen bonds and promote holistic
            family wellness. Unplug with your family and enjoy a digital detox weekend filled with activities
            that bring back the simplicity of fresh air, family cooking, family goal planning, music circles,
            campfires, hiking and more. Book now to elevate your family's wellness journey!
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Upcoming Spring, Summer, and Fall 2025 Workshops:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <WorkshopCard key={index} workshop={workshop} />
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Day Retreats:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retreats.map((retreat, index) => (
              <WorkshopCard key={index} workshop={retreat} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-4 text-lg font-medium">
            We love collaborating with businesses, healers, educators, wellness pros, and community groups.
          </p>
          <p className="text-gray-600">
            Check back often to see what's coming up!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
