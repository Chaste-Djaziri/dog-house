export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'essential-tips-for-new-puppy-owners',
    title: 'Essential Tips for New Puppy Owners',
    excerpt:
      'Bringing home a new puppy is exciting but can be overwhelming. Use these foundational tips to help you and your pup settle into a happy routine from day one.',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pet Care',
    author: 'Dr. Marie Uwimana',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['puppy care', 'health', 'training basics'],
    content: [
      'The first few weeks with your puppy set the tone for the rest of your life together. Before your new companion arrives, prepare a dedicated space with a cozy bed, food and water bowls, and safe chew toys. Having an established routine for feeding, potty breaks, and playtime helps your puppy feel secure from day one.',
      'Socialization is another crucial step that begins early. Introduce your puppy to gentle people, environments, sights, and sounds so they develop confidence. Pair new experiences with treats and praise, and remember to schedule a vet visit within the first few days to establish a preventive care plan.',
      'Finally, be patient with yourself and your puppy. Accidents and hiccups happen, but consistency and positive reinforcement will build trust and good habits. Celebrate the small wins, and you will soon have a well-adjusted pup who feels right at home.',
    ],
    keyTakeaways: [
      'Prepare your home with safe zones and age-appropriate supplies before pick-up.',
      'Begin socialization within the first weeks to nurture confidence and resilience.',
      'Book a veterinarian visit early to create a long-term wellness plan.',
    ],
  },
  {
    id: 2,
    slug: 'choose-the-right-dog-breed-for-your-family',
    title: 'Understanding Dog Breeds: Which One Is Right for You?',
    excerpt:
      'Lifestyle, space, and experience level all influence which dog breed will thrive in your home. Explore how to match canine temperaments with your family’s rhythm.',
    image: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Breed Guide',
    author: 'Jean Claude Nkusi',
    date: '2024-01-10',
    readTime: '7 min read',
    tags: ['breed guide', 'family planning', 'adoption tips'],
    content: [
      'Every breed carries unique energy levels, grooming needs, and personality traits. Start by mapping out your household schedule and activity level. High-energy breeds like Border Collies or Belgian Malinois need intensive exercise and mental stimulation, while breeds such as French Bulldogs or Cavapoos thrive with moderate walks and plenty of cuddle time.',
      'Your living space also matters. Apartments suit smaller or calmer breeds that adapt to limited outdoor access, whereas large homes with gardens offer room for bigger, more active dogs. Families with young children may prefer patient, gentle breeds such as Golden Retrievers or Labradors, known for their tolerant nature.',
      'Remember that mixed breeds can be wonderful companions too. Speak with reputable breeders about temperament testing and always choose responsible sources that prioritize health screenings and socialization over appearance alone.',
    ],
    keyTakeaways: [
      'Match breed energy and grooming needs with your daily routine.',
      'Consider the size of your home and access to outdoor spaces when shortlisting breeds.',
      'Work with ethical breeders who provide transparency about health histories.',
    ],
  },
  {
    id: 3,
    slug: 'dog-training-basics-building-good-habits-early',
    title: 'Dog Training Basics: Building Good Habits Early',
    excerpt:
      'Early training creates polite, confident dogs. Discover how positive reinforcement and structure turn puppy enthusiasm into wonderful manners.',
    image: 'https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Training',
    author: 'Sarah Mugisha',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['training', 'positive reinforcement', 'behavior'],
    content: [
      'Training begins the moment your puppy walks through the door. Establish a short list of household rules and stick to them, whether your dog is allowed on furniture or how you manage meal times. Consistency across all family members prevents mixed signals and confusion for your pup.',
      'Focus on positive reinforcement techniques—reward desired behaviors with treats, praise, and play, and ignore or redirect unwanted actions. Short, upbeat sessions keep young dogs engaged. Incorporate foundational commands such as sit, stay, come, and leave it, which improve safety and communication.',
      'Crate training and leash manners often take time, but perseverance pays off. Celebrate progress, stay calm during setbacks, and consider enrolling in a local training class if you need additional guidance.',
    ],
    keyTakeaways: [
      'Define household rules early and maintain consistency among caregivers.',
      'Use rewards-based training to reinforce good habits and strengthen your bond.',
      'Stay patient—structured routines and calm guidance create lasting results.',
    ],
  },
  {
    id: 4,
    slug: 'keeping-your-dog-healthy-in-rwanda',
    title: 'Keeping Your Dog Healthy in Rwanda’s Climate',
    excerpt:
      'Rwanda’s tropical climate brings unique health considerations. Learn how to adapt nutrition, grooming, and parasite prevention to keep your dog thriving year-round.',
    image: 'https://images.pexels.com/photos/4340909/pexels-photo-4340909.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Health',
    author: 'Dr. Marie Uwimana',
    date: '2023-12-20',
    readTime: '8 min read',
    tags: ['health', 'grooming', 'nutrition'],
    content: [
      'Warm days and rainy seasons require thoughtful care for your dog’s coat and skin. Regular brushing removes debris and prevents matting, while targeted bathing schedules maintain healthy oils. Choose shampoos designed for sensitive skin and dry thoroughly to ward off fungal infections.',
      'Hydration is essential. Always provide cool, fresh water and adjust exercise intensity during hot afternoons. Parasite control should remain top-of-mind—work with your veterinarian to select tick, flea, and heartworm preventives suited to Rwanda’s climate and your dog’s lifestyle.',
      'Finally, incorporate routine wellness checks, including dental cleanings and weight monitoring. Balanced nutrition tailored to age and activity keeps joints strong and energy levels steady, ensuring your companion enjoys every adventure by your side.',
    ],
    keyTakeaways: [
      'Adapt grooming habits to humidity and rain to protect coat and skin health.',
      'Prioritize hydration and climate-appropriate exercise routines.',
      'Stay current on parasite prevention and routine veterinary check-ups.',
    ],
  },
  {
    id: 5,
    slug: 'traveling-with-your-dog-in-east-africa',
    title: 'Traveling with Your Dog in East Africa',
    excerpt:
      'From weekend trips to cross-border travel, proper preparation keeps your dog relaxed and safe on the road. Discover checklists and comfort tips for every journey.',
    image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Lifestyle',
    author: 'Jean Claude Nkusi',
    date: '2023-12-05',
    readTime: '6 min read',
    tags: ['travel', 'planning', 'safety'],
    content: [
      'Before you depart, ensure your dog is microchipped, wearing an updated ID tag, and fully vaccinated. Pack travel-friendly bowls, familiar bedding, and any medications. If you plan to cross borders, research veterinary certificates and import requirements well in advance to avoid surprises.',
      'During travel, schedule regular breaks for exercise, bathroom needs, and water. Car safety harnesses or secured crates prevent injury, while calming aids such as pheromone sprays can soothe anxious travelers. Keep your dog’s routine as consistent as possible by feeding at normal times.',
      'Once you arrive, introduce new environments slowly. Offer quiet spaces for rest, stick to familiar commands, and monitor your dog for signs of stress. With thoughtful planning, exploring East Africa with your four-legged friend becomes a rewarding experience for you both.',
    ],
    keyTakeaways: [
      'Organize travel documents and essential gear before every trip.',
      'Schedule plenty of breaks and provide secure transport options on the road.',
      'Ease your dog into new environments with familiar routines and calm reassurance.',
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRecentPosts = (limit = 3) =>
  [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
