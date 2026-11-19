// export interface GalleryItem {
//   id: number;
//   title: string;
//   category: "Paintings & Hand Art" | "Monasteries" | "Festivals" | "Landscapes" | "People & Culture" | "Trekking";
//   location: string;
//   image: string;
//   description: string;
//   featured?: boolean;
//   // Specific to Hand Art & Artist Thoughts
//   isArtPiece?: boolean;
//   artistName?: string;
//   medium?: string;
//   artistThought?: string;
// }

// export const galleryCategories = [
//   "All",
//   "Paintings & Hand Art",
//   "Monasteries",
//   "Festivals",
//   "Landscapes",
//   "People & Culture",
//   "Trekking",
// ] as const;

// export type GalleryCategory = (typeof galleryCategories)[number];


export const galleryCategories = [
  "All",
  "Monasteries",
  "Landscapes",
  "Festivals",
  "People & Culture",
  "Trekking",
  "Paintings & Hand Art",
];

export const galleryItems = [
  {
    id: 1,
    title: "Paro Rinpung Dzong & Nyamai Zam Bridge at Night",
    category: "Monasteries",
    location: "Paro Valley",
    image: "/images/gallery/g1.jpg",
    description:
      "Illuminated traditional wooden cantilever bridge (Nyamai Zam) leading across the Paro Chhu river toward Rinpung Dzong under the night sky.",
    featured: true,
  },
  {
    id: 2,
    title: "Blooming Crimson Rhododendrons & Himalayan Peak",
    category: "Trekking",
    location: "High Himalayan Trail",
    image: "/images/gallery/g2.jpg",
    description:
      "Vibrant spring rhododendron blossoms framing a towering snow-capped Himalayan peak beneath a clear blue sky.",
  },
  {
    id: 3,
    title: "National Memorial Chorten",
    category: "Monasteries",
    location: "Thimphu",
    image: "/images/gallery/g3.jpg",
    description:
      "Devotees and monks circumambulating the iconic whitewashed stupa with golden spires built in memory of the Third King of Bhutan.",
  },
  {
    id: 4,
    title: "Taktsang (Tiger's Nest) & 5 Ngultrum Perspective",
    category: "People & Culture",
    location: "Paro Valley (3,120m)",
    image: "/images/gallery/g4.jpg",
    description:
      "Aligning the illustration of Paro Taktsang on a Bhutanese Five Ngultrum banknote with the real cliffside monastery.",
    featured: true,
  },
  {
    id: 5,
    title: "108 Druk Wangyal Chortens in Clear Sky",
    category: "Monasteries",
    location: "Dochula Pass (3,100m)",
    image: "/images/gallery/g5.jpg",
    description:
      "The 108 memorial stupas built on the mountain pass between Thimphu and Punakha with distant snow-dusted peaks.",
  },
  {
    id: 6,
    title: "Winter Snowfall at Dochula Pass Chortens",
    category: "Landscapes",
    location: "Dochula Pass (3,100m)",
    image: "/images/gallery/g6.jpg",
    description:
      "Fresh winter snow blanketing the 108 Druk Wangyal Chortens and surrounding pine forests in serene mist.",
  },
  {
    id: 7,
    title: "Punakha Dzong Twilight Aerial View",
    category: "Monasteries",
    location: "Punakha Valley",
    image: "/images/gallery/g7.jpg",
    description:
      "The Palace of Great Happiness glowing at dusk at the confluence of the Pho Chhu and Mo Chhu rivers with its covered wooden bridge.",
    featured: true,
  },
  {
    id: 8,
    title: "Emerald Terraced Farmlands & Traditional Farmhouses",
    category: "Landscapes",
    location: "Phobjikha / Rural Valley",
    image: "/images/gallery/g8.jpg",
    description:
      "Lush green stepped fields and traditional Bhutanese timber-and-stone homes nestled across rolling hills.",
  },
  {
    id: 9,
    title: "Himalayan Ridge & Spring Rhododendron Forests",
    category: "Trekking",
    location: "Eastern & Central Highlands",
    image: "/images/gallery/g9.jpg",
    description:
      "Sweeping panoramic views of jagged snow-covered Himalayan summits framed by blooming red rhododendron trees.",
  },
  {
    id: 10,
    title: "Great Buddha Dordenma Illuminated at Night",
    category: "Monasteries",
    location: "Kuenselphodrang, Thimphu",
    image: "/images/gallery/g10.jpg",
    description:
      "The towering gilded bronze Shakyamuni Buddha statue reflecting across the rain-slicked courtyard plaza at night.",
    featured: true,
  },
  {
    id: 11,
    title: "Tiger's Nest Cliffside Sanctuary",
    category: "Monasteries",
    location: "Paro Valley (3,120m)",
    image: "/images/gallery/g11.jpg",
    description:
      "Sacred cliffside temples clinging to sheer granite rock faces 900 meters above Paro Valley.",
  },
  {
    id: 12,
    title: "Thimphu Tsechu Sacred Cham Dances",
    category: "Festivals",
    location: "Tashichho Dzong, Thimphu",
    image: "/images/gallery/g12.jpg",
    description:
      "Monks in vibrant brocade robes and carved wooden masks performing ancient ritual dances.",
  },
  {
    id: 13,
    title: "Phobjikha Glacial Valley & Black-Necked Cranes",
    category: "Landscapes",
    location: "Wangdue Phodrang",
    image: "/images/gallery/g13.jpg",
    description:
      "Wide glacial valley floor serving as the protected winter roosting sanctuary for rare Black-Necked Cranes.",
  },
  {
    id: 14,
    title: "Mount Jomolhari Basecamp at Jangothang",
    category: "Trekking",
    location: "Jomolhari Trail (4,080m)",
    image: "/images/gallery/g14.jpg",
    description:
      "High alpine meadow camp beneath the dramatic 7,326-meter snow peak of sacred Mount Jomolhari.",
  },
  {
    id: 15,
    title: "Traditional Weaving in Kishuthara Silk",
    category: "People & Culture",
    location: "Khoma Village, Lhuntse",
    image: "/images/gallery/g15.jpg",
    description:
      "Master artisans weaving intricate geometric patterns on backstrap looms in eastern Bhutan.",
  },
  {
    id: 16,
    title: "Wheel of Life (Bhavachakra) Temple Mural",
    category: "Paintings & Hand Art",
    location: "Institute of Zorig Chusum, Thimphu",
    image: "/images/gallery/g16.jpg",
    description:
      "Hand-painted cosmic mandala illustrating Buddhist teachings on karma, mindfulness, and liberation.",
    isArtPiece: true,
    artistName: "Master Lhadrip Karma Wangchuk",
    medium: "Natural mineral stone pigments & gold dust on linen",
    artistThought:
      "Every stroke of the brush in sacred Buddhist iconography is a prayer in motion, offering a visual gateway to reflect on mindfulness and inner peace.",
  },
  {
    id: 17,
    title: "Tashichho Dzong Fortress of the Glorious Religion",
    category: "Monasteries",
    location: "Thimphu Valley",
    image: "/images/gallery/g17.jpg",
    description:
      "Seat of the Druk Desi and summer residence of the Central Monastic Body beside the Wang Chhu river.",
  },
  {
    id: 18,
    title: "Colorful Prayer Flags on Chele La Pass",
    category: "Landscapes",
    location: "Chele La Pass (3,988m)",
    image: "/images/gallery/g18.jpg",
    description:
      "Thousands of wind-horse prayer flags fluttering across Bhutan's highest motorable mountain pass.",
  },
  {
    id: 19,
    title: "Paro Tsechu Unfurling of the Thongdrel",
    category: "Festivals",
    location: "Rinpung Dzong, Paro",
    image: "/images/gallery/g19.jpg",
    description:
      "Dawn unveiling of the giant embroidered silk scroll of Guru Padmasambhava during the spring festival.",
  },
  {
    id: 20,
    title: "Highland Yak Herders of Laya",
    category: "People & Culture",
    location: "Laya Highlands (3,840m)",
    image: "/images/gallery/g20.jpg",
    description:
      "Semi-nomadic Layap communities wearing traditional woven wool garments and conical bamboo hats.",
  },
  {
    id: 21,
    title: "Dagala Thousand Lakes Turquoise Tarn",
    category: "Trekking",
    location: "Dagala Range (4,300m)",
    image: "/images/gallery/g21.jpg",
    description:
      "Crystal-clear high-altitude alpine lake surrounded by rugged granite ridges and wildflower meadows.",
  },
  {
    id: 22,
    title: "Trongsa Dzong Overlooking Mangde River Gorge",
    category: "Monasteries",
    location: "Trongsa, Central Bhutan",
    image: "/images/gallery/g22.jpg",
    description:
      "Ancestral home of Bhutan's Royal Family commanding sweeping views across central mountain passes.",
  },
  {
    id: 23,
    title: "Bumthang Autumn Golden Pine Valleys",
    category: "Landscapes",
    location: "Jakar, Bumthang",
    image: "/images/gallery/g23.jpg",
    description:
      "Crisp autumn sunlight illuminating buckwheat fields and ancient temples in Bhutan's spiritual heartland.",
  },
  {
    id: 24,
    title: "Guru Rinpoche Eight Manifestations Thangka",
    category: "Paintings & Hand Art",
    location: "Bumthang Heritage Studio",
    image: "/images/gallery/g24.jpg",
    description:
      "Sacred scroll painting depicting the enlightened forms of Padmasambhava in mineral pigments.",
    isArtPiece: true,
    artistName: "Tenzin Dorji",
    medium: "Mineral pigments, yak leather glue & 24K gold leaf",
    artistThought:
      "A thangka painter must quiet the mind before holding the brush; sacred proportions guide every line from meditation into form.",
  },
  {
    id: 25,
    title: "Traditional Archery (Dha) Tournament",
    category: "People & Culture",
    location: "Changlimithang, Thimphu",
    image: "/images/gallery/g25.jpg",
    description:
      "Bhutan's national sport celebrated with bamboo bows, team songs, and spirited camaraderie.",
  },
  {
    id: 26,
    title: "Jambay Lhakhang Drup Fire Festival",
    category: "Festivals",
    location: "Bumthang Valley",
    image: "/images/gallery/g26.jpg",
    description:
      "Ancient sacred fire blessing ceremony held at one of Bhutan's oldest 7th-century temples.",
  },
  {
    id: 27,
    title: "Druk Path Ridge Crossing at Sunrise",
    category: "Trekking",
    location: "Paro – Thimphu Trail (4,150m)",
    image: "/images/gallery/g27.jpg",
    description:
      "Early morning golden light breaking over high mountain ridges connecting Paro and Thimphu.",
  },
  {
    id: 28,
    title: "Gangtey Goenpa Monastery in Morning Mist",
    category: "Monasteries",
    location: "Phobjikha Valley",
    image: "/images/gallery/g28.jpg",
    description:
      "17th-century Nyingmapa monastery perched on a forested ridge overlooking the glacial valley.",
  },
  {
    id: 29,
    title: "Mo Chhu River Suspension Bridge",
    category: "Landscapes",
    location: "Punakha Valley",
    image: "/images/gallery/g29.jpg",
    description:
      "Draped in colorful prayer flags spanning the turquoise glacial waters of the Mo Chhu river.",
  },
  {
    id: 30,
    title: "The Four Harmonious Friends Mural",
    category: "Paintings & Hand Art",
    location: "Punakha Heritage Farmhouse",
    image: "/images/gallery/g30.jpg",
    description:
      "Traditional folk painting illustrating cooperation and respect between elephant, monkey, rabbit, and bird.",
    isArtPiece: true,
    artistName: "Sonam Choden",
    medium: "Vegetable dyes & crushed earth pigments on Desho paper",
    artistThought:
      "Painted on farmhouse walls to remind every generation that kindness and mutual respect sustain harmony with nature.",
  },
  {
    id: 31,
    title: "Young Novices at Cheri Monastery",
    category: "People & Culture",
    location: "Northern Thimphu Valley",
    image: "/images/gallery/g31.jpg",
    description:
      "Monastic students walking along forested stone steps leading to Bhutan's first monastic community.",
  },
  {
    id: 32,
    title: "Black-Necked Crane Festival Dances",
    category: "Festivals",
    location: "Gangtey Courtyard",
    image: "/images/gallery/g32.jpg",
    description:
      "Local schoolchildren and villagers performing crane-costumed dances celebrating wildlife conservation.",
  },
  {
    id: 33,
    title: "Sinche La High Alpine Pass Crossing",
    category: "Trekking",
    location: "Laya Gasa Route (5,005m)",
    image: "/images/gallery/g33.jpg",
    description:
      "Dramatic high-altitude glacial pass offering sweeping vistas of northern Himalayan peaks.",
  },
  {
    id: 34,
    title: "Chimi Lhakhang Fertility Temple & Rice Fields",
    category: "Monasteries",
    location: "Sopsokha, Punakha",
    image: "/images/gallery/g34.jpg",
    description:
      "15th-century hilltop temple surrounded by lush terraced rice paddies in the Punakha valley.",
  },
  {
    id: 35,
    title: "Haa Valley Alpine Meadows & Three Hills",
    category: "Landscapes",
    location: "Haa Valley",
    image: "/images/gallery/g35.jpg",
    description:
      "Pristine western valley framed by the sacred Meri Puensum hills and traditional wooden farmsteads.",
  },
  {
    id: 36,
    title: "Wrathful Deity Mahakala Gold Scroll",
    category: "Paintings & Hand Art",
    location: "Tango Buddhist Institute",
    image: "/images/gallery/g36.jpg",
    description:
      "Intricate protective deity iconography rendered in fine gold strokes over deep indigo silk.",
    isArtPiece: true,
    artistName: "Lopen Sonam Tshering",
    medium: "Pure gold ink & gouache on indigo-treated silk",
    artistThought:
      "Fierce compassion burns away inner obstacles and ego so that clarity and wisdom can awaken.",
  },
];