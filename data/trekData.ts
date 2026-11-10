export interface TrekPlan {
  name: string;
  daysCount: string;
  schedule: { day: string; title: string; detail?: string }[];
}

export interface TrekItem {
  id: number;
  slug: string;
  title: string;
  tag: string;
  duration: string;
  difficulty: "Moderate" | "Strenuous" | "Demanding Alpine";
  maxAltitude: string;
  season: string;
  image: string;
  summary: string;
  overview: string;
  highlights: string[];
  itinerary: TrekPlan;
}

export const allTreksData: TrekItem[] = [
  {
    id: 1,
    slug: "dagala-thousand-lakes-trek",
    title: "Dagala Thousand Lakes Trek",
    tag: "High Alpine Tarns",
    duration: "11 Days",
    difficulty: "Moderate",
    maxAltitude: "4,520 m",
    season: "April to May & September to October",
    image: "/images/photograph.jpg",
    summary: "Crystal high-altitude lakes teeming with trout, yak herder camps, and panoramic views of Mt. Everest and Kanchenjunga.",
    overview:
      "The Dagala Thousand Lakes Trek passes through a stunning variety of scenery set to a backdrop of magnificent mountains. It is a moderate trek with mostly short trekking days, but includes a few steep climbs. The centerpiece of this communion with nature is time spent exploring the high altitude lakes overflowing with trout and mystical history. It is a great option for those with a desire to experience the variety of flora and fauna in Bhutan and capture a glimpse of the nomadic lifestyle, combined with cultural visits to Thimphu and Paro.",
    highlights: [
      "Picturesque alpine lakes, meadows, and nomadic yak herder settlements.",
      "Trout fishing and mystical mountain folklore across Labatamba.",
      "Spectacular vistas of Himalayan giants including Everest, Kanchenjunga, and Jomolhari.",
      "Moderate pace with accessible daily walking distances and pristine ridge camps.",
      "Comprehensive cultural tours of Thimphu and Paro before and after the trek.",
    ],
    itinerary: {
      name: "11 Days Route",
      daysCount: "11 Days / 10 Nights",
      schedule: [
        { day: "DAY 01", title: "Arrival in Paro", detail: "Acclimatization, orientation & visit to Paro Dzong" },
        { day: "DAY 02", title: "Paro to Thimphu", detail: "Drive to capital, Memorial Chorten & Buddha Dordenma" },
        { day: "DAY 03", title: "Thimphu to Geynekha", detail: "Drive to trail head via rural villages (Trek Start)" },
        { day: "DAY 04", title: "Geynekha to Gur", detail: "Ascend through alpine forests & rhododendron glades" },
        { day: "DAY 05", title: "Gur to Labatamba", detail: "Cross high ridges into the basin of sacred lakes" },
        { day: "DAY 06", title: "Labatamba to Panka", detail: "Traverse scenic passes with panoramic mountain views" },
        { day: "DAY 07", title: "Panka to Telekha", detail: "Descend past monastery ridges and pine trails" },
        { day: "DAY 08", title: "Telekha to Thimphu", detail: "Descent to valley floor, hot shower & rest" },
        { day: "DAY 09", title: "Thimphu to Paro", detail: "Drive back to Paro valley, local farmhouse dinner" },
        { day: "DAY 10", title: "Paro - Taktsang Hike", detail: "Pilgrimage hike to Tiger's Nest cliffside monastery" },
        { day: "DAY 11", title: "Depart Paro", detail: "Transfer to Paro International Airport for departure" },
      ],
    },
  },
  {
    id: 2,
    slug: "druk-path-trek",
    title: "Druk Path Trek",
    tag: "Classic Ridge Trail",
    duration: "11 Days",
    difficulty: "Moderate",
    maxAltitude: "4,200 m",
    season: "Late Feb to June & Sept to Dec",
    image: "/images/religion.jpg",
    summary: "The celebrated historic ridge path between Paro and Thimphu passing trout lakes, ancient dzongs, and rhododendrons.",
    overview:
      "The Druk Path Trek is a moderate, classic trek. This popular route offers beautiful views as you cross the chain of mountains that separate the Paro and Thimphu valleys. Renowned for its spectacular rhododendron forests and wonderful high-altitude lakes teeming with fish, the trail also links ancient fortress temples. In the clear weather of late autumn and winter, there are sensational views of Mt. Gangkar Puensum and the high Himalayas.",
    highlights: [
      "Moderate 6-day wilderness trek crossing pristine alpine passes.",
      "Spectacular rhododendron glades blooming in late spring.",
      "Camp beside the crystal waters of Lake Jimilangtsho and Lake Simkota.",
      "Ancient mountain fortresses: Jele Dzong and Phajoding Monastery.",
      "Excursion to Tiger's Nest (Taktsang) and historic Thimphu sights.",
    ],
    itinerary: {
      name: "11 Days Trek",
      daysCount: "11 Days Package (6 Days Trekking)",
      schedule: [
        { day: "DAY 01", title: "Arrival in Paro", detail: "Meet guide, gear check & stroll through town" },
        { day: "DAY 02", title: "Paro to Jele Dzong", detail: "5 hrs trek: Climb to historic fortress ridge (3,480m)" },
        { day: "DAY 03", title: "Jele Dzong to Jangchulakha", detail: "4 hrs trek: Ridge walk past alpine meadows" },
        { day: "DAY 04", title: "Jangchulakha to Jimilangtsho", detail: "4 hrs trek: Arrive at trout-filled alpine lake" },
        { day: "DAY 05", title: "Jimilangtsho to Simkota", detail: "4 hrs trek: Pass lake basins & yak herder trails" },
        { day: "DAY 06", title: "Simkota to Phajoding", detail: "4 hrs trek: Overlook of Thimphu valley floor" },
        { day: "DAY 07", title: "Phajoding to Thimphu", detail: "3 hrs descent through pine forests into capital" },
        { day: "DAY 08", title: "Thimphu Sightseeing", detail: "Tashichho Dzong, weaving centre & rest day" },
        { day: "DAY 09", title: "Thimphu to Paro", detail: "Return drive to Paro valley" },
        { day: "DAY 10", title: "Paro - Taktsang Excursion", detail: "Hike to Tiger's Nest Monastery" },
        { day: "DAY 11", title: "Depart Paro", detail: "Flight departure from Paro Airport" },
      ],
    },
  },
  {
    id: 3,
    slug: "gangtey-trek",
    title: "Gangtey Trek",
    tag: "Glacial Valley Trail",
    duration: "8 Days",
    difficulty: "Moderate",
    maxAltitude: "3,400 m",
    season: "September to May (Oct-Feb for Cranes)",
    image: "/images/society.jpg",
    summary: "Hike through the rare Phobjikha glacial valley, blue pine woods, and the winter sanctuary of Black-Necked Cranes.",
    overview:
      "This trek explores the beautiful Phobjikha valley (3,000m), one of the few glacial valleys in Bhutan, located in eastern Wangdue Phodrang. After crossing high passes, you reach the 17th-century Gangtey Goenpa. The trail winds through blue pine woods and rural hamlets towards the valley floor where endangered Black-Necked Cranes roost from mid-October after circling the monastery three times.",
    highlights: [
      "Traverse Bhutan's most iconic glacial valley with gentle elevation gains.",
      "Visit the 17th-century Gangtey Monastery, founded by Pema Lingpa’s grandson.",
      "Observe rare Black-Necked Cranes in their natural winter roosting grounds.",
      "Traditional farm villages of Gogona and Khotokha with rustic wood architecture.",
    ],
    itinerary: {
      name: "8 Days Trek",
      daysCount: "8 Days / 7 Nights",
      schedule: [
        { day: "DAY 01", title: "Arrival in Paro", detail: "Transfer and scenic drive" },
        { day: "DAY 02", title: "Paro to Thimphu", detail: "Capital sightseeing and Dochula pass view" },
        { day: "DAY 03", title: "Gangtey Goenpa to Gogona", detail: "Trek start: Pass juniper slopes to village valley" },
        { day: "DAY 04", title: "Gogona to Khotokha", detail: "Ascend Tsho La pass (3,400m) into lush forest" },
        { day: "DAY 05", title: "Khotokha to Chazam / Wangdue", detail: "Descent through subtropical valley trails" },
        { day: "DAY 06", title: "Wangdue to Paro", detail: "Scenic return drive via Dochula" },
        { day: "DAY 07", title: "Paro Valley & Tiger's Nest", detail: "Excursion to iconic Taktsang" },
        { day: "DAY 08", title: "Depart Paro", detail: "Airport farewell" },
      ],
    },
  },
  {
    id: 4,
    slug: "jomolhari-mountain-festival-trek",
    title: "Jomolhari Mountain Festival & Trek",
    tag: "Snow Leopard & Festivals",
    duration: "13 Days",
    difficulty: "Strenuous",
    maxAltitude: "4,930 m",
    season: "October (Festival Dates)",
    image: "/images/photograph_another.jpg",
    summary: "Trek to the base of Mt. Jomolhari coinciding with the annual community Snow Leopard conservation festival.",
    overview:
      "The Jomolhari Trek highlights the diverse landscapes of Bhutan, combined with an exquisitely themed two-day festival celebrated at the base of Mt. Jomolhari. The festival celebrates high-altitude mountain culture and coexistence with the elusive, elegant snow leopard through folk songs, dances, Khuru darts, yak riding, and sampling of local delicacies.",
    highlights: [
      "Witness Mt. Jomolhari (7,326m) rising dramatically above Jangothang basecamp.",
      "Celebrate the Snow Leopard Mountain Festival with highland nomad communities.",
      "Spot blue sheep, Himalayan marmots, and rare highland raptors in Jigme Dorji Park.",
      "Cross high Himalayan passes above 4,800m with views of Tibet border ridges.",
    ],
    itinerary: {
      name: "13 Days Route",
      daysCount: "13 Days Full Expedition",
      schedule: [
        { day: "DAY 01", title: "Arrival in Paro", detail: "Acclimatization day" },
        { day: "DAY 02", title: "Paro to Shana", detail: "Trek trailhead past Pa Chhu river farmlands" },
        { day: "DAY 03", title: "Shana to Soi Thangthangkha", detail: "Oak and rhododendron trail climbing alpine canyon" },
        { day: "DAY 04", title: "Soi Thang’kha to Jangothang", detail: "Arrive at Jomolhari Basecamp under the summit wall" },
        { day: "DAY 05", title: "Jangothang Festival Day", detail: "Attend Snow Leopard festival celebrations & races" },
        { day: "DAY 06", title: "Jangothang to Lingshi", detail: "Cross Nyele La Pass (4,890m) with fortress views" },
        { day: "DAY 07", title: "Lingshi to Shodu", detail: "Cross Yeli La Pass (4,930m) into glacial river basin" },
        { day: "DAY 08", title: "Shodu to Barshong", detail: "Descend canyon following the Thimphu Chhu" },
        { day: "DAY 09", title: "Barshong to Dolam Kencho", detail: "Dense bamboo and pine valley trails" },
        { day: "DAY 10", title: "Dolam Kencho to Dodena / Thimphu", detail: "Descent to Dodena bridge, transfer to Thimphu" },
        { day: "DAY 11", title: "Thimphu to Paro", detail: "Drive to Paro valley, relaxation and craft shopping" },
        { day: "DAY 12", title: "Paro Taktsang Excursion", detail: "Climb to Tiger's Nest Monastery" },
        { day: "DAY 13", title: "Depart Paro", detail: "Departure transfer to airport" },
      ],
    },
  },
  {
    id: 5,
    slug: "laya-gasa-trek",
    title: "Laya Gasa Trek",
    tag: "Highland Culture & Hot Springs",
    duration: "18 Days",
    difficulty: "Demanding Alpine",
    maxAltitude: "5,005 m",
    season: "April to May & Late Sept to November",
    image: "/images/people.jpg",
    summary: "High wilderness trail through the remote nomad village of Laya, alpine passes, and the healing mineral hot springs of Gasa.",
    overview:
      "Laya Gasa trek provides unforgettable memories crossing pristine farmlands, remote alpine forests, and high ridges. Encounter semi-nomadic Layap people wearing conical bamboo hats, witness herds of yaks, and soothe tired muscles in the natural thermal mineral hot springs of Gasa.",
    highlights: [
      "Encounter the indigenous semi-nomadic Layap people in their high mountain homes.",
      "Cross demanding passes: Nyele La (4,890m) and Sinche La (5,005m).",
      "Relax in the renowned outdoor medicinal hot springs (Tshachu) of Gasa.",
      "Spectacular views of peaks: Mt. Jomolhari, Jichu Drake, and Masang Gang.",
    ],
    itinerary: {
      name: "18 Days Expedition",
      daysCount: "18 Days Trans-Himalayan Trek",
      schedule: [
        { day: "DAY 01", title: "Arrival in Paro", detail: "Acclimatization and gear briefing" },
        { day: "DAY 02", title: "Paro to Shana", detail: "Trek commencement along the river valley" },
        { day: "DAY 03", title: "Shana to Soi Thangthangkha", detail: "Climb past birch forests into alpine zone" },
        { day: "DAY 04", title: "Soi Thang’kha to Jangothang", detail: "Basecamp beneath Mt. Jomolhari" },
        { day: "DAY 05", title: "Jangothang to Lingshi", detail: "Cross Nyele La pass to Lingshi Dzong" },
        { day: "DAY 06", title: "Lingshi to Chebisa", detail: "Walk to charming stone village with waterfall" },
        { day: "DAY 07", title: "Chebisa to Shouthang", detail: "Climb Gombu La pass into uninhabited valley" },
        { day: "DAY 08", title: "Shouthang to Robluthang", detail: "Traverse high altitude pastures" },
        { day: "DAY 09", title: "Robluthang to Limithang", detail: "Cross Sinche La pass (5,005m) with glacial views" },
        { day: "DAY 10", title: "Limithang to Laya", detail: "Arrive at Laya village (3,840m), home of Layap nomads" },
        { day: "DAY 11", title: "Rest & Exploration in Laya", detail: "Cultural interaction and unique conical hats" },
        { day: "DAY 12", title: "Laya to Chamsa", detail: "Descent along river gorge through alpine woods" },
        { day: "DAY 13", title: "Chamsa to Gasa Hot Springs", detail: "Camp at Gasa and soak in healing thermal baths" },
        { day: "DAY 14", title: "Gasa to Damji", detail: "Forest trails through oak and wild bamboo" },
        { day: "DAY 15", title: "Damji to Tashithang & Punakha", detail: "Trek end, transfer to warmer Punakha valley" },
        { day: "DAY 16", title: "Punakha to Paro", detail: "Drive via Dochula pass to Paro" },
        { day: "DAY 17", title: "Paro Taktsang Excursion", detail: "Hike to Tiger’s Nest" },
        { day: "DAY 18", title: "Depart Paro", detail: "International flight departure" },
      ],
    },
  },
  {
    id: 6,
    slug: "rodungla-trek",
    title: "Rodungla Trek",
    tag: "Historic Trans-Bhutan Trail",
    duration: "21 Days",
    difficulty: "Demanding Alpine",
    maxAltitude: "4,160 m",
    season: "March, April, May & Sept, Oct, Nov",
    image: "/images/photograph.jpg",
    summary: "Epic 21-day expedition traversing from Western Bhutan to remote Eastern districts along ancient trade and messenger routes.",
    overview:
      "The Rodungla trek of Eastern Bhutan is a long, rewarding journey across historic trade paths used before modern roads existed. Traverse changing climate zones from alpine meadows to wild subtropical gorges, camp near nomadic herders, taste fresh yak butter tea, and discover the distinctive traditions of north-eastern Bhutanese communities.",
    highlights: [
      "Follow the historic postal trade route connecting central Bumthang to eastern Lhuntse.",
      "Cross the rugged Rodung La Pass (4,160m) with sweeping valley views.",
      "Experience raw village life, weaver communities of Kishuthara in Khoma.",
      "Camp alongside highland yak herders and sample traditional butter tea.",
      "Full trans-Bhutan overland crossing ending in eastern frontiers.",
    ],
    itinerary: {
      name: "21 Days Grand Trek",
      daysCount: "21 Days Trans-Country Crossing",
      schedule: [
        { day: "Day 01", title: "Arrival in Paro", detail: "Welcome and orientation" },
        { day: "Day 02", title: "Paro to Thimphu", detail: "Capital monuments & monastery visits" },
        { day: "Day 03", title: "Thimphu to Punakha", detail: "Dochula pass and Punakha Dzong" },
        { day: "Day 04", title: "Punakha to Bumthang", detail: "Scenic cross-mountain drive via Trongsa" },
        { day: "Day 05", title: "Bumthang to Ngang Lhakhang", detail: "Trek Start: Swan Temple valley trail" },
        { day: "Day 06", title: "Ngang Lhakhang to Ugyencholing", detail: "Cross Phephe La Pass (3,360m)" },
        { day: "Day 07", title: "Ugyencholing to Phokpey", detail: "Climb through alpine meadow camps" },
        { day: "Day 08", title: "Phokpey to Ungaar", detail: "Cross Rodung La (4,160m) into eastern valleys" },
        { day: "Day 09", title: "U篤gaar to Taskila", detail: "Trail through bamboo and citrus groves" },
        { day: "Day 10", title: "Taskila to Lhuntse", detail: "Visit ancestral home of Royal Family & Dzong" },
        { day: "Day 11", title: "Lhuntse to Menji", detail: "Walk through terraced rice fields" },
        { day: "Day 12", title: "Menji to Pemi", detail: "Dense subtropical rhododendron forests" },
        { day: "Day 13", title: "Pemi to Taupang", detail: "Cross Dong La pass (3,900m)" },
        { day: "Day 14", title: "Taupang to Trashiyangtse", detail: "Arrive at Chorten Kora valley" },
        { day: "Day 15", title: "Trashiyangtse to Trashigang", detail: "Eastern hub and historic fortress" },
        { day: "Day 16", title: "Trashigang to Bumthang", detail: "Overland return drive across Thrumshing La" },
        { day: "Day 17", title: "Bumthang to Gangtey", detail: "Valley of the Black-Necked Cranes" },
        { day: "Day 18", title: "Gangtey to Paro", detail: "Return drive to Paro valley" },
        { day: "Day 19", title: "Paro - Taktsang Excursion", detail: "Climb to Tiger's Nest Monastery" },
        { day: "Day 20", title: "Paro Leisure Day", detail: "Local market shopping & farewell dinner" },
        { day: "Day 21", title: "Depart Paro", detail: "Departure flight from Paro" },
      ],
    },
  },
];

export const trekInclusions = [
  "All trekking logistics: pack yaks / horses, horsemen, cook, and camp crew.",
  "High-quality dual-layer all-weather alpine camping tents & foam mattresses.",
  "All meals prepared freshly at camp (Breakfast, Hot Lunch, and Dinner).",
  "Bhutan Sustainable Development Fee (SDF) & Government Visa fees.",
  "Experienced licensed English-speaking mountain trekking guide.",
  "All national park permits, route passes, and monument entrance fees.",
  "Private ground transfers in air-conditioned vehicles for all driving days.",
];

export const trekExclusions = [
  "International flights into and out of Paro.",
  "Personal trekking gear (sleeping bag rated to -10°C, boots, trekking poles).",
  "Emergency helicopter evacuation / travel medical insurance.",
  "Personal expenses, laundry, alcoholic beverages, and tips for crew.",
];