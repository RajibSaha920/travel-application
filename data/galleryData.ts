export interface GalleryItem {
  id: number;
  title: string;
  category: "Paintings & Hand Art" | "Monasteries" | "Festivals" | "Landscapes" | "People & Culture" | "Trekking";
  location: string;
  image: string;
  description: string;
  featured?: boolean;
  // Specific to Hand Art & Artist Thoughts
  isArtPiece?: boolean;
  artistName?: string;
  medium?: string;
  artistThought?: string;
}

export const galleryCategories = [
  "All",
  "Paintings & Hand Art",
  "Monasteries",
  "Festivals",
  "Landscapes",
  "People & Culture",
  "Trekking",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  // --- HAND ART PAINTINGS & ARTIST THOUGHTS ---
  {
    id: 101,
    title: "Wheel of Life (Bhavachakra) Wall Mural",
    category: "Paintings & Hand Art",
    location: "Institute of Zorig Chusum, Thimphu",
    image: "/images/photograph.jpg",
    description: "Hand-painted cosmic mandala capturing the cycles of existence, karma, and liberation.",
    featured: true,
    isArtPiece: true,
    artistName: "Master Lhadrip Karma Wangchuk",
    medium: "Hand-ground natural stone pigments & gold dust on organic linen canvas",
    artistThought:
      "Every stroke of the brush in sacred Buddhist iconography is a prayer in motion. When grinding malachite for green and lapis lazuli for blue, we do not paint for worldly acclaim—we paint to empty our minds and provide a visual gateway for the viewer to reflect on impermanence, mindfulness, and inner peace."
  },
  {
    id: 102,
    title: "Guru Rinpoche Eight Manifestations (Thangka)",
    category: "Paintings & Hand Art",
    location: "Bumthang Valley Heritage Studio",
    image: "/images/religion.jpg",
    description: "Detailed sacred scroll painting depicting the life and enlightened forms of Padmasambhava.",
    isArtPiece: true,
    artistName: "Tenzin Dorji (Senior Master Painter)",
    medium: "Mineral pigments, yak leather glue & 24K pure gold leaf detailing",
    artistThought:
      "A thangka painter must first purify their mind before holding the horsehair brush. The proportions (Iconometry) are governed strictly by ancient scriptures. When you paint Guru Rinpoche’s compassionate yet fiery gaze, you feel as though the deity is watching your own heart."
  },
  {
    id: 103,
    title: "The Four Harmonious Friends (Thuenpa Puen Zhi)",
    category: "Paintings & Hand Art",
    location: "Punakha Heritage Farmhouse",
    image: "/images/society.jpg",
    description: "Classic Bhutanese fable depicting an elephant, monkey, rabbit, and partridge cooperating to harvest fruit.",
    isArtPiece: true,
    artistName: "Sonam Choden (Folk Artist)",
    medium: "Vegetable dyes & crushed earth pigments on handmade Desho paper",
    artistThought:
      "This simple depiction on farmhouse entryways reminds every generation that size and age do not matter when kindness guides your action. It is the artistic cornerstone of Gross National Happiness—harmony among people, wildlife, and nature."
  },
  {
    id: 104,
    title: "Wrathful Deity Mahakala Meditation Scroll",
    category: "Paintings & Hand Art",
    location: "Tango Buddhist Institute",
    image: "/images/photograph_another.jpg",
    description: "Intense protective deity painting rendered in gold strokes on a deep indigo silk backing.",
    isArtPiece: true,
    artistName: "Lopen Sonam Tshering",
    medium: "Pure gold ink calligraphy & gouache on indigo treated silk",
    artistThought:
      "Western eyes often see fear in wrathful deities, but the artist understands wrath as fierce compassion—the fire required to burn away ego, ignorance, and suffering before genuine wisdom can dawn."
  },

  // --- REGULAR PHOTOGRAPHY ITEMS ---
  {
    id: 1,
    title: "Taktsang (Tiger's Nest) Monastery",
    category: "Monasteries",
    location: "Paro Valley (3,120m)",
    image: "/images/photograph.jpg",
    description: "Perched dramatically on a granite cliff 900 meters above the valley floor.",
    featured: true,
  },
  {
    id: 2,
    title: "Thimphu Tsechu Cham Masked Dance",
    category: "Festivals",
    location: "Tashichho Dzong, Thimphu",
    image: "/images/photograph_another.jpg",
    description: "Sacred masked dances performed by monks and laymen in honor of Guru Rinpoche.",
  },
  {
    id: 3,
    title: "Dochula Pass 108 Memorial Chortens",
    category: "Landscapes",
    location: "Dochula Pass (3,100m)",
    image: "/images/religion.jpg",
    description: "108 Druk Wangyal Chortens with panoramic views of the Eastern Himalayan peaks.",
  },
  {
    id: 4,
    title: "Punakha Dzong at River Confluence",
    category: "Monasteries",
    location: "Punakha Valley",
    image: "/images/society.jpg",
    description: "The Palace of Great Happiness built between the Pho Chhu and Mo Chhu rivers.",
  },
  {
    id: 5,
    title: "Local Bhutanese Elder in Traditional Kira",
    category: "People & Culture",
    location: "Bumthang Valley",
    image: "/images/people.jpg",
    description: "A warm smile reflecting the enduring spirit of Gross National Happiness.",
  },
  {
    id: 6,
    title: "Camp beside Lake Jimilangtsho",
    category: "Trekking",
    location: "Druk Path Trail (3,880m)",
    image: "/images/photograph.jpg",
    description: "Pristine alpine tarns teeming with trout along ancient mountain ridges.",
  },
];