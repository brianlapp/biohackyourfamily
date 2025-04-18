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
    imageUrl: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack your Teen Series",
    date: "May 24, June 14, July 19, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1471666875520-c75081f42081?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack your Fascia for Mothers",
    date: "May 30, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack your Fascia for Fathers & Sons",
    date: "June 13, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack your Fascia for the Healers",
    date: "June 22, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack your Family for Parents",
    date: "Sept. 26, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack your School Life for Students",
    date: "Oct. 17, 2025",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack Your Fertility",
    date: "Aug. 2, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack your Wellness for Mother & Daughter",
    date: "Sept. 13, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?auto=format&fit=crop&q=80"
  },
  {
    title: "Biohack your Wellness for Father & Son",
    date: "Oct. 11, 2025",
    category: "retreat",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
  },
  {
    title: "One-on-One Consultation",
    date: "",
    category: "oneOnOne",
    imageUrl: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80"
  },
  {
    title: "Discovery Call",
    date: "",
    category: "oneOnOne",
    imageUrl: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80"
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
