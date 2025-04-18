import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Filter, Calendar as CalendarIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WorkshopItem {
  title: string;
  date: string;
  location: string;
  time: string;
  description?: string;
  category: 'spring-summer' | 'fall' | 'retreat';
  month: string;
}

const workshops: WorkshopItem[] = [{
  title: "Biohack your Pain & Stress with Fascia Release Maneuvers",
  date: "May 9, 2025",
  location: "Windsor, ON",
  time: "6:15–8 PM",
  description: "You will learn easy hacks to kick start your wellness path, how to do fascia release maneuvers that release your stress and help activate the journey to release back pain, along with breathwork, meditation, sound therapy, forest bathing and grounding to start off your weekend feeling motivated. Limited Spots",
  category: "spring-summer",
  month: "May"
}, {
  title: "Biohack your Teen Series",
  date: "May 24, June 14, July 19, 2025",
  location: "Windsor, ON",
  time: "4:00-6:00 PM",
  description: "Support your growing teens with life skill tools that will help them navigate all the stress that comes with teenage life, learning about toxins in common care products they consume on a daily basis, cooking demos that meet their taste buds and protein needs and budget for healthy snacks, navigating their personal goals, peer pressure and social media, understanding emf exposure and why they shouldn't sleep with their cell phones, determining their personal values and creating value based vision boards, mindfulness practices, laughing yoga, guided meditation, fascia release maneuvers and so much more. Prep them for an empowering summer, so they can re-charge and have the tools to stay safe and happy! Limited Spots.",
  category: "spring-summer",
  month: "May"
}, {
  title: "Biohack your Fascia for Mothers",
  date: "May 30, 2025",
  location: "Windsor, ON",
  time: "6:15–8 PM",
  description: "To celebrate you, Mother, the creator, the multi-tasker, the problem solver, the one that carries the world on their shoulders, be guided on how you can fill your cup by releasing the stress and tension with fascia release maneuvers. We will relax you with forest bathing, grounding, guided meditation, sound therapy, reiki support for emotional releases and you will all go home with a custom essential oil gift! Limited Spots",
  category: "spring-summer",
  month: "May"
}, {
  title: "Biohack your Fascia for Fathers & Sons",
  date: "June 13, 2025",
  location: "Windsor, ON",
  time: "6:15–8 PM",
  description: "Holding space for Fathers and Sons so that you two can learn how to support each other in your wellness journey regardless of where you are. You will learn tips on boosting your current nutrition, regardless of how picky the eaters are, we will teach you fascia release maneuvers to help reset stress and tension, we will do neuro-path activities to accelerate your eye and hand and brain coordination, you will enjoy a forest walk, guided meditation and sound therapy. Limited Spots",
  category: "spring-summer",
  month: "June"
}, {
  title: "Biohack your Fascia for the Healers",
  date: "June 22, 2025",
  location: "Amherstburg, ON",
  time: "12:00-2:00 PM",
  description: "We were called to step in and guide, teach, support, repair, keep safe, heal and help others. We must learn how to recover from the excess transfer of energy, the stored drama in our body. Learn how to release the stress, the emotional stored trauma, discover biohacking tips to restore your cellular health and learn the fascia release maneuvers you can practice at home to elevate your wellness journey. Whether you're a burned out teacher, nurse, paramedic, police officer, firefighter, social worker, psychologist, holistic healer or you have your own persona that feels called to share this space, we welcome you and look forward to helping you feel lighter. We will gather together in a unique quaint private space, surrounded by fields of green and nature sounds. Limit Spots",
  category: "spring-summer",
  month: "June"
}, {
  title: "Biohack your Family for Parents",
  date: "Sept. 26, 2025",
  location: "Windsor, ON",
  time: "6:15–8 PM",
  description: "More details coming soon! Join us for this special workshop focused on empowering parents with biohacking techniques for the whole family.",
  category: "fall",
  month: "September"
}, {
  title: "Biohack your School Life for Students",
  date: "Oct. 17, 2025",
  location: "Windsor, ON",
  time: "6:15–8 PM",
  description: "More details coming soon! Learn essential biohacking techniques to improve your academic performance and maintain wellness during the school year.",
  category: "fall",
  month: "October"
}, {
  title: "Biohack Your Fertility",
  date: "Aug. 2, 2025",
  location: "Windsor, ON",
  time: "11 AM–4 PM",
  category: "retreat",
  month: "August"
}, {
  title: "Biohack your Wellness for Mother & Daughter",
  date: "Sept. 13, 2025",
  location: "Windsor, ON",
  time: "11 AM–4 PM",
  category: "retreat",
  month: "September"
}, {
  title: "Biohack your Wellness for Father & Son",
  date: "Oct. 11, 2025",
  location: "Windsor, ON",
  time: "11 AM–4 PM",
  category: "retreat",
  month: "October"
}];

const WorkshopCard = ({
  workshop
}: {
  workshop: WorkshopItem;
}) => {
  return <div className="group relative overflow-hidden rounded-lg border border-[#35853d]/20 bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src="/lovable-uploads/e367a7ae-7924-4b97-92d6-db29edee011e.png" alt={workshop.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <Badge variant="secondary" className="mb-2 bg-amber-400/30 text-slate-600">Limited spots available!</Badge>
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
        
        {workshop.description && <div className="mb-6 text-sm text-gray-600">
            <p>{workshop.description}</p>
          </div>}
        
        <div className="mt-auto">
          <a href="#booking">
            <Button className="text-white bg-amber-500 hover:bg-amber-400">
              Register
            </Button>
          </a>
        </div>
      </div>
    </div>;
};

const Workshops = () => {
  const [viewType, setViewType] = useState<'cards' | 'timeline'>('cards');
  const filterByMonth = (month: string) => {
    return workshops.filter(w => w.month === month);
  };
  const months = Array.from(new Set(workshops.map(w => w.month))).sort((a, b) => {
    const monthOrder = ["May", "June", "July", "August", "September", "October"];
    return monthOrder.indexOf(a) - monthOrder.indexOf(b);
  });

  return <section id="workshops" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-primary">
          Workshops & Retreats
        </h2>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="text-lg text-gray-700 text-left space-y-4">
            <p className="bg-white p-4 rounded-lg border-l-4 border-gray-200">
              Throughout the year, we will have a wide variety of workshops catered to different groups and topics that will guide you and your family on how to biohack your wellness.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-300">
              <h4 className="font-bold mb-2 text-[#35853d]">Teens:</h4>
              <p>
                They will focus on life skills, mindfulness, navigating products that disrupt their hormones, healthy meal preps and tips, digital screen exposure awareness, laughing yoga and fascia release maneuvers to help navigate teenage stress.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-gray-200">
              <h4 className="font-bold mb-2 text-[#35853d]">Adults:</h4>
              <p>
                We will help navigate pain and stress, teach fascia release maneuvers, DIY face movements and stretches, breathing techniques, meditation, laughter with supporting resources for different groups.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-300">
              <h4 className="font-bold mb-2 text-[#35853d]">Seniors:</h4>
              <p>
                We will support with simple exercises that help keep the eye, brain and hand coordination sharp, provide modified fascia release maneuvers, create a community to stay active, get fresh air and learn how to support each other and focus on longevity.
              </p>
            </div>

            <p className="bg-white p-4 rounded-lg border-l-4 border-gray-200">
              Other Workshops: Parents, Mother and Daughter, Father and Son, Mom, Fertility, Postpartum, EMF, with more to come...
            </p>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button variant={viewType === 'cards' ? 'default' : 'outline'} onClick={() => setViewType('cards')} size="sm" className="gap-2">
            <Filter size={16} /> Card View
          </Button>
          <Button variant={viewType === 'timeline' ? 'default' : 'outline'} onClick={() => setViewType('timeline')} size="sm" className="gap-2">
            <CalendarIcon size={16} /> Timeline View
          </Button>
        </div>
        
        {viewType === 'cards' ? <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">View All</TabsTrigger>
                <TabsTrigger value="spring-summer">Spring & Summer</TabsTrigger>
                <TabsTrigger value="fall">Fall</TabsTrigger>
                <TabsTrigger value="retreat">Day Retreats</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshops.map((workshop, index) => <WorkshopCard key={index} workshop={workshop} />)}
              </div>
            </TabsContent>
            
            <TabsContent value="spring-summer">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshops.filter(w => w.category === 'spring-summer').map((workshop, index) => <WorkshopCard key={index} workshop={workshop} />)}
              </div>
            </TabsContent>
            
            <TabsContent value="fall">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshops.filter(w => w.category === 'fall').map((workshop, index) => <WorkshopCard key={index} workshop={workshop} />)}
              </div>
            </TabsContent>
            
            <TabsContent value="retreat">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Day Retreats:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshops.filter(w => w.category === 'retreat').map((workshop, index) => <WorkshopCard key={index} workshop={workshop} />)}
              </div>
            </TabsContent>
          </Tabs> : <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Timeline View</h3>
            
            <div className="space-y-8">
              {months.map(month => <div key={month} className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <CalendarIcon /> {month} 2025
                  </h4>
                  <div className="space-y-4">
                    {filterByMonth(month).map((workshop, idx) => <div key={idx} className="flex flex-col md:flex-row gap-4 border-b border-gray-100 pb-4">
                        <div className="md:w-1/4">
                          <Badge variant={workshop.category === 'retreat' ? 'secondary' : 'outline'}>
                            {workshop.category === 'retreat' ? 'Day Retreat' : 'Workshop'}
                          </Badge>
                          <p className="text-sm text-gray-500 mt-1">{workshop.date.split(',')[0]}</p>
                        </div>
                        <div className="md:w-2/4">
                          <h5 className="font-semibold">{workshop.title}</h5>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{workshop.time}</span>
                            <MapPin className="h-3 w-3 ml-2 mr-1" />
                            <span>{workshop.location}</span>
                          </div>
                        </div>
                        <div className="md:w-1/4 flex items-center justify-end">
                          <a href="#booking">
                            <Button size="sm" className="text-white bg-amber-500 hover:bg-amber-400">
                              Register
                            </Button>
                          </a>
                        </div>
                      </div>)}
                  </div>
                </div>)}
            </div>
          </div>}
        
        <div className="text-center mt-12">
          <p className="mb-4 text-lg font-medium">
            We love collaborating with businesses, healers, educators, wellness pros, and community groups.
          </p>
          <p className="text-gray-600">
            Check back often to see what's coming up!
          </p>
        </div>
      </div>
    </section>;
};

export default Workshops;
