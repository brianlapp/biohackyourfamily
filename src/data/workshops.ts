
interface Workshop {
  title: string;
  date: string;
  category: 'workshop' | 'retreat' | 'oneOnOne';
}

export const workshops: Workshop[] = [
  {
    title: "Biohack your Pain & Stress with Fascia Release Maneuvers",
    date: "May 9, 2025",
    category: "workshop"
  },
  {
    title: "Biohack your Teen Series",
    date: "May 24, June 14, July 19, 2025",
    category: "workshop"
  },
  {
    title: "Biohack your Fascia for Mothers",
    date: "May 30, 2025",
    category: "workshop"
  },
  {
    title: "Biohack your Fascia for Fathers & Sons",
    date: "June 13, 2025",
    category: "workshop"
  },
  {
    title: "Biohack your Fascia for the Healers",
    date: "June 22, 2025",
    category: "workshop"
  },
  {
    title: "Biohack your Family for Parents",
    date: "Sept. 26, 2025",
    category: "workshop"
  },
  {
    title: "Biohack your School Life for Students",
    date: "Oct. 17, 2025",
    category: "workshop"
  },
  {
    title: "Biohack Your Fertility",
    date: "Aug. 2, 2025",
    category: "retreat"
  },
  {
    title: "Biohack your Wellness for Mother & Daughter",
    date: "Sept. 13, 2025",
    category: "retreat"
  },
  {
    title: "Biohack your Wellness for Father & Son",
    date: "Oct. 11, 2025",
    category: "retreat"
  },
  {
    title: "One-on-One Consultation",
    date: "",
    category: "oneOnOne"
  },
  {
    title: "Discovery Call",
    date: "",
    category: "oneOnOne"
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
