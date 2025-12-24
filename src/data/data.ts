import { 
  Target, 
  Eye, 
  Heart, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

// --- NAVIGATION ---
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

// --- HERO SECTION ---
export const heroData = {
  tagline: "Empowering Communities since 2024",
  headline: "Small Actions, Big Impact.",
  image: "/hero_image/hero.jpg", 
  subheadline: "Nitikushal is dedicated to sustainable development, environmental care, and uplifting the lives of the underprivileged through direct action.",
  stats: [
    { value: "50+", label: "Projects Done" },
    { value: "10k+", label: "Lives Impacted" },
    { value: "100%", label: "Transparency" },
  ]
};

// --- ABOUT SECTION ---
export const aboutData = {
  badge: "10+",
  badgeText: "Years of Impact",
  checklist: [
    "Registered NGO under Section 12A",
    "Operating in 5+ Districts",
    "Transparent & Impact-Driven"
  ],
  cards: [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower marginalized communities by providing access to quality education, healthcare, and skill development."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A world where every individual has the opportunity to lead a dignified, healthy, and self-sufficient life."
    },
    {
      icon: Heart,
      title: "Core Values",
      description: "Integrity, Compassion, Transparency, and Inclusivity drive every decision we make."
    }
  ]
};

// --- PROJECTS SECTION ---
export const projectsData = [
  {
    id: 1,
    title: "Project Vidya: Digital Literacy",
    category: "Education",
    year: "2024",
    description: "Setting up computer labs in 5 rural government schools to bridge the digital divide for over 1,000 students.",
    details: "In today's digital age, computer literacy is not a luxury but a necessity. Project Vidya aims to bridge the stark digital divide in rural sectors. We have successfully set up fully functional computer labs equipped with high-speed internet, modern desktops, and projectors in 5 government schools. Beyond hardware, we have introduced a comprehensive curriculum covering basic computing, coding for kids, and safe internet usage, empowering over 1,000 students to compete in the modern world.",
    image: "/project_image/project.png", 
    status: "Ongoing"
  },
  {
    id: 2,
    title: "Clean Water for All",
    category: "Health & Hygiene",
    year: "2023",
    description: "Installed 20 heavy-duty water purifiers in drought-affected villages, reducing waterborne diseases by 40%.",
    details: "Access to clean drinking water remains a critical challenge in many remote villages. Our 'Clean Water for All' initiative targeted the drought-prone districts where waterborne diseases were rampant. We installed 20 industrial-grade RO water purifiers and established community water committees to ensure maintenance. Post-installation surveys indicate a 40% drop in reported cases of typhoid and cholera, significantly improving the overall health index of these communities.",
    image: "/project_image/project.png", 
    status: "Completed"
  },
  {
    id: 3,
    title: "Women Skill Development",
    category: "Livelihood",
    year: "2023",
    description: "Training 500 women in handicrafts and tailoring, enabling them to start their own micro-businesses.",
    details: "Financial independence is the first step towards empowerment. This project focused on upskilling women from low-income households. Over the course of 6 months, we provided intensive training in tailoring, embroidery, and local handicrafts to 500 women. Furthermore, we helped them establish market linkages to sell their products. Today, 60% of these women have started their own micro-businesses, contributing significantly to their household income and self-esteem.",
    image: "/project_image/project.png", 
    status: "Completed"
  }
];

// --- TEAM SECTION ---
export const teamData = [
  {
    name: "Avijit",
    role: "Co-Founder",
    image: "/team_image/avijit.jpg", 
    linkedin: "https://www.linkedin.com/in/avijit-mahato-6a12b11a2/",
    // bio: "Leading with compassion for over 6 years."
  },
  {
    name: "Nandan",
    role: "Co-Founder",
    image: "/team_image/nandan.jpg", 
    linkedin: "https://www.linkedin.com/in/nandanlondhe/",
    // bio: "Leading with compassion for over 6 years."
  },
  {
    name: "Divya",
    role: "Co-Founder",
    image: "/team_image/divya.jpg", 
    linkedin: "https://www.linkedin.com/in/divya-j-b47536211/",
    // bio: "Leading with compassion for over 6 years."
  },
  {
    name: "Isani",
    role: "Co-Founder",
    image: "/team_image/isani.jpg", 
    linkedin: "https://www.linkedin.com/in/isani-mukherjee-583117274/",
    // bio: "Leading with compassion for over 6 years."
  },
  {
    name: "Anish",
    role: "Technical Lead",
    image: "/team_image/anish_patil.jpg",
    linkedin: "https://www.linkedin.com/in/anish-patil-256269281/",
    // bio: "Leading technology decisions with a focus on clean architecture, scalability, and impact."
  },
];

// --- GALLERY SECTION ---
export const galleryData = [
  {
    src: '/gallery_image/image_0.png',
    alt: 'Volunteers helping community',
    caption: 'Community Drive 2023'
  },
  {
    src: '/gallery_image/image_1.png',
    alt: 'Donation activity',
    caption: 'Donation Camp'
  },
  {
    src: '/gallery_image/image_2.png',
    alt: 'Students learning',
    caption: 'Education for All Initiative'
  },
  {
    src: '/gallery_image/image_3.png',
    alt: 'Doctors doing health checkup',
    caption: 'Rural Health Camp'
  },
];

// --- CONTACT SECTION ---
export const contactData = {
  phone: ["+91 97630 58066"],
  email: ["connect.nitikushal@gmail.com"],
  address: {
    line1: "Registered Office: ",
    line2: "Nitikushal Foundation, Vimal Apartment, Homi Bhabha Nagar",
    line3: "Dwarka Corner, Nashik, Maharashtra, India–422011"
  },
  // This is a Google Maps Embed link for New Delhi. 
  // You can generate your specific location link from Google Maps -> Share -> Embed a map.
mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.4807158365415!2d73.78826874189973!3d19.986794042055926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb000124e499%3A0x7a89f7ce7e6b3160!2sVimal%20Apartment!5e0!3m2!1sen!2sin!4v1766553787296!5m2!1sen!2sin"
};

// updatesdata
export const updatesData = [
  {
    id: 1,
    date: "March 15, 2024",
    category: "Event",
    title: "Annual Charity Gala Night Announced",
    excerpt: "Join us for an evening of music, art, and giving back. All proceeds will go towards the 'Education for All' initiative."
  },
  {
    id: 2,
    date: "Feb 28, 2024",
    category: "Impact",
    title: "Over 5,000 Saplings Planted in Green Drive",
    excerpt: "Thanks to our amazing volunteers, we achieved our target of planting 5,000 trees across the city belt this month."
  },
  {
    id: 3,
    date: "Feb 10, 2024",
    category: "News",
    title: "New Partnership with Local Hospitals",
    excerpt: "We are proud to announce a collaboration with City Care Hospital to provide free weekly checkups for the elderly."
  },
  {
    id: 4,
    date: "Jan 20, 2024",
    category: "Volunteer",
    title: "Call for Volunteers: Summer Camp 2024",
    excerpt: "We are looking for enthusiastic mentors to teach arts, crafts, and basic coding at our upcoming summer camp for underprivileged kids."
  },
  {
    id: 5,
    date: "Jan 05, 2024",
    category: "Award",
    title: "Recognized as 'Best NGO' by City Council",
    excerpt: "A proud moment for our team as we received the Certificate of Excellence for our contribution to social welfare."
  },
  {
    id: 6,
    date: "Dec 25, 2023",
    category: "Event",
    title: "Winter Blanket Distribution Drive Success",
    excerpt: "Spread warmth this winter! We successfully distributed over 1,200 blankets to homeless shelters across the district."
  }
];