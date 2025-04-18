
interface Workshop {
  title: string;
  date: string;
  category: 'workshop' | 'retreat' | 'oneOnOne';
  imageUrl: string;
}

export const workshops: Workshop[] = [
  {
    title: "Biohack your Pain & Stress with Fascia Release Maneuvers",
    date: "May 9, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80" // Relaxation, stress relief scene
  },
  {
    title: "Biohack your Teen Series",
    date: "May 24, June 14, July 19, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80" // Teens in a supportive group setting
  },
  {
    title: "Biohack your Fascia for Mothers",
    date: "May 30, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80" // Mothers' wellness scene
  },
  {
    title: "Biohack your Fascia for Fathers & Sons",
    date: "June 13, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1472805906982-64d5f8c9fe78?auto=format&fit=crop&q=80" // Father and son activity
  },
  {
    title: "Biohack your Fascia for the Healers",
    date: "June 22, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80" // Healing professionals scene
  },
  {
    title: "Biohack your Family for Parents",
    date: "Sept. 26, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1502781252888-a4b25ded8a75?auto=format&fit=crop&q=80" // Family wellness scene
  },
  {
    title: "Biohack your School Life for Students",
    date: "Oct. 17, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80" // Students learning environment
  },
  {
    title: "Biohack Your Fertility",
    date: "Aug. 2, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80" // Fertility and wellness imagery
  },
  {
    title: "Biohack your Wellness for Mother & Daughter",
    date: "Sept. 13, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80" // Mother and daughter bonding
  },
  {
    title: "Biohack your Wellness for Father & Son",
    date: "Oct. 11, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-1600880292089-90f55ba7bfc2?auto=format&fit=crop&q=80" // Father and son outdoors
  },
  {
    title: "One-on-One Consultation",
    date: "",
    category: "oneOnOne",
    imageUrl: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80" // Professional consultation
  },
  {
    title: "Discovery Call",
    date: "",
    category: "oneOnOne",
    imageUrl: "https://images.unsplash.com/photo-1551836022-4da1abaea0d1?auto=format&fit=crop&q=80" // Professional communication
  }
];

export const getWorkshopsByCategory = (category: string) => {
  return workshops.filter(workshop => {
    if (category === 'workshop') return workshop.category === 'workshop';
    if (category === 'dayretreat') return workshop.category === 'retreat';
    if (category === 'oneOnOne') return workshop.category === 'oneOnOne';
    return true;
  }).map(workshop => ({
    label: workshop.date ? `${workshop.title} - ${workshop.date}` : workshop.title,
    value: workshop.title
  }));
};
