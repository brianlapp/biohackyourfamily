
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
    imageUrl: "https://images.unsplash.com/photo-1623855682715-a49c40a previewing&fit=crop&q=80" // Relaxation, stress relief scene
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
    imageUrl: "https://images.unsplash.com/photo-1581579186913-45ac24ed53d2?auto=format&fit=crop&q=80" // Mothers' wellness, soft and nurturing scene
  },
  {
    title: "Biohack your Fascia for Fathers & Sons",
    date: "June 13, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1472805906982-64d5f8c9fe78?auto=format&fit=crop&q=80" // Father and son doing physical activity together
  },
  {
    title: "Biohack your Fascia for the Healers",
    date: "June 22, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1515847049296-a281d6509f45?auto=format&fit=crop&q=80" // Healing, wellness professionals scene
  },
  {
    title: "Biohack your Family for Parents",
    date: "Sept. 26, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1502781252888-a4b25ded8a75?auto=format&fit=crop&q=80" // Family wellness, supportive environment
  },
  {
    title: "Biohack your School Life for Students",
    date: "Oct. 17, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1596524430615-2252b68410d1?auto=format&fit=crop&q=80" // Students in a learning, supportive environment
  },
  {
    title: "Biohack Your Fertility",
    date: "Aug. 2, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-152580314917-3fde7e553ab2?auto=format&fit=crop&q=80" // Wellness, fertility, nurturing imagery
  },
  {
    title: "Biohack your Wellness for Mother & Daughter",
    date: "Sept. 13, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80" // Mother and daughter in a wellness setting
  },
  {
    title: "Biohack your Wellness for Father & Son",
    date: "Oct. 11, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-1600880292089-90f55ba7bfc2?auto=format&fit=crop&q=80" // Father and son in a wellness/outdoor setting
  },
  {
    title: "One-on-One Consultation",
    date: "",
    category: "oneOnOne",
    imageUrl: "https://images.unsplash.com/photo-1515847049296-a281d6509f45?auto=format&fit=crop&q=80" // Professional consultation setting
  },
  {
    title: "Discovery Call",
    date: "",
    category: "oneOnOne",
    imageUrl: "https://images.unsplash.com/photo-1551836022-4da1abaea0d1?auto=format&fit=crop&q=80" // Professional communication setting
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
