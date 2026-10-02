/**
 * All page copy. Image specs ("time|motifs|seed") feed scripts/generate-images.mjs,
 * which writes original SVG illustrations to public/images.
 * Local facts are kept to what public sources support; ask Dr. Duffy for live numbers.
 */
const raw = [
  {
    key: "home",
    path: "/",
    navTitle: "Home",
    title: "Paseos Village Summerlin Realtor | Dr. Jan Duffy",
    description:
      "Dr. Jan Duffy is a Berkshire Hathaway HomeServices REALTOR® focused on The Paseos Village in Summerlin, Las Vegas (89138). Search homes and book a consultation.",
    h1: "The Paseo Village in Summerlin: Your Hyper-Local Realtor, Dr. Jan Duffy",
    lede: "Buying, selling or relocating to The Paseos on the west side of Summerlin? Work with a REALTOR® who focuses on this village, its streets, parks and trails.",
    answer:
      "Dr. Jan Duffy is a Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties who helps buyers and sellers in The Paseos Village, a master-planned neighborhood in Summerlin, Nevada near Red Rock Canyon.",
    heroAlt:
      "Illustration of Paseos Village homes with tile roofs below the Red Rock mountains at sunrise in Summerlin, Las Vegas",
    spec: "dawn|mountains,homes,palms,saguaro|3",
    cta: "buyer",
    sections: [
      {
        id: "paseos-homes",
        h2: "Homes for sale in The Paseos, Summerlin",
        answer:
          "The Paseos is a village on the west side of Summerlin, Las Vegas (primarily ZIP code 89138) with single-family neighborhoods and multi-family options built under the Summerlin master plan.",
        body: [
          "Summerlin was developed by The Howard Hughes Corporation beginning in 1990, and The Paseos is one of its villages. Streets inside the village range from tile-roof family homes to townhome-style communities, so the right fit depends on your budget, lot preferences and HOA comfort.",
          "Dr. Duffy compares current MLS listings and recent sales street by street, so you see what a Paseos home really costs rather than a Las Vegas-wide average.",
        ],
        spec: "day|mountains,bighome,palms,sign|4",
        alt: "Illustration of a stucco Summerlin home with a for-sale sign and palm trees in front of Red Rock mountains",
        cta: "buyer",
        cards: [
          ["Single-family neighborhoods", "Named neighborhoods inside the village, such as Mariposa and Las Lomas, offer different lot sizes, floor plans and finishes.", "day|mountains,homes,palms|11"],
          ["Multi-family and low-maintenance living", "Townhome and multi-family options suit buyers who want a lock-and-leave Summerlin address.", "dusk|homes,palms,saguaro|12"],
          ["Mountain-view and park-adjacent streets", "Elevation on the west side of Summerlin gives some streets views toward Red Rock; Dr. Duffy shows you which.", "dawn|mountains,homes,sun|13"],
        ],
      },
      {
        id: "services",
        h2: "Hyper-local services for Paseos buyers and sellers",
        answer:
          "Dr. Jan Duffy represents buyers, sellers and relocating homeowners in The Paseos, Summerlin, with MLS-based pricing, private tours and negotiation support.",
        body: [
          "Every service starts with a Calendly consultation, so you pick a time that works and arrive with your questions already on the calendar.",
        ],
        spec: "dusk|desk,mountains,keys|14",
        alt: "Illustration of a realtor desk with laptop and house keys with Summerlin mountains in the background",
        cta: "general",
        cards: [
          ["Buyer representation", "Neighborhood tours, offer strategy and due-diligence guidance for Paseos homes.", "day|bighome,keys,palms|15"],
          ["Seller strategy", "Pricing from comparable Paseos sales, marketing and negotiation through closing.", "day|chart,homes,mountains|16"],
          ["California-to-Nevada relocation", "Virtual tours and a step-by-step plan for moving to Summerlin from out of state.", "day|coast,palms,truck|17"],
        ],
      },
      {
        id: "why-paseos",
        h2: "Why people choose The Paseos Village",
        answer:
          "Residents choose The Paseos in Summerlin for neighborhood parks, trail connections, Red Rock Canyon access and a short trip to Downtown Summerlin.",
        body: [
          "The village sits on the western edge of the valley, close to Red Rock Canyon National Conservation Area, with parks and walking paths woven between neighborhoods.",
        ],
        spec: "dusk|mountains,tower,family,trail|18",
        alt: "Illustration of a family walking toward the Fox Hill Park climbing tower at dusk below Red Rock",
        cta: "market",
        cards: [
          ["Fox Hill Park and Paseos Park", "Playgrounds, climbing structures, zip lines and sports space give the village a strong family focus.", "dusk|tower,playground,mountains|19"],
          ["Trails and arroyos", "Paths and landscaped washes connect streets, parks and the wider Summerlin trail network.", "dawn|trail,mountains,family|20"],
          ["Minutes to Downtown Summerlin", "Dining, shopping, City National Arena and Las Vegas Ballpark are a short drive from the village.", "night|shops,pin,family|21"],
        ],
      },
    ],
    faqs: [
      ["Where is The Paseos Village in Summerlin?", "The Paseos is a village on the west side of Summerlin in Las Vegas, Nevada, primarily ZIP code 89138, near Red Rock Canyon.", "dawn|mountains,pin,homes|22"],
      ["Who is the realtor for The Paseos Village?", "Dr. Jan Duffy, a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties (Nevada license S.0197614.LLC), focuses on Summerlin villages including The Paseos.", "day|desk,keys,mountains|23"],
      ["How do I start a home search in The Paseos?", "Browse the RealScout listings under the hero of this page, then book a buyer consultation on Dr. Duffy's calendar.", "day|calendar,mountains,palms|24"],
    ],
  },
  {
    key: "buy",
    path: "/buy-homes-in-the-paseos-summerlin",
    navTitle: "Buy",
    title: "Buy a Home in The Paseos, Summerlin | Dr. Jan Duffy",
    description:
      "Buying in The Paseos Village, Summerlin (89138)? Dr. Jan Duffy guides tours, offers and closing. Browse listings and book a buyer consultation.",
    h1: "Buy a Home in The Paseos Village, Summerlin",
    lede: "From the first tour to the closing table, Dr. Jan Duffy helps you buy in The Paseos with local comparisons and clear next steps.",
    answer:
      "To buy a home in The Paseos in Summerlin, get pre-approved, tour Paseos neighborhoods with a REALTOR® such as Dr. Jan Duffy, compare recent sales, then submit an offer and complete inspections before closing.",
    heroAlt: "Illustration of a Summerlin family touring a Paseos home with a for-sale sign and Red Rock mountains behind",
    spec: "day|mountains,bighome,sign,family,palms|31",
    cta: "buyer",
    sections: [
      {
        id: "buying-process",
        h2: "How buying in The Paseos works with Dr. Jan Duffy",
        answer:
          "Buying in The Paseos starts with a consultation about budget, timeline and must-haves, followed by tours, an offer, inspections and closing in Clark County, Nevada.",
        body: ["Your first call is a 30-minute buyer consultation. Dr. Duffy reviews what you want, how current Las Vegas inventory matches your budget, and whether touring makes sense now."],
        spec: "dawn|desk,calendar,mountains|32",
        alt: "Illustration of a buyer consultation calendar and desk with Summerlin mountains at dawn",
        cta: "buyer",
        cards: [
          ["Consultation and goals", "Define budget, commute, lot, view and HOA preferences before touring.", "day|calendar,palms,mountains|33"],
          ["Tours of Paseos streets", "See neighborhoods and parks in person, or request a showing of a specific listing.", "day|homes,family,trail|34"],
          ["Offer and negotiation", "Use recent Paseos sales to shape price, contingencies and timelines.", "dusk|keys,bighome,mountains|35"],
        ],
      },
      {
        id: "compare",
        h2: "What to compare before you buy in The Paseos",
        answer:
          "Compare HOA rules and fees, lot position and views, and distance to Paseos parks, trails and Downtown Summerlin before choosing a home in The Paseos.",
        body: ["Villages in Summerlin often have one or more associations. Review the governing documents and fees early so there are no surprises."],
        spec: "day|mountains,homes,pin,sun|36",
        alt: "Illustration of a map pin above Paseos homes under Red Rock mountains showing neighborhood comparison",
        cta: "market",
        cards: [
          ["HOA rules and fees", "Read CC&Rs, fees and architectural guidelines for the specific neighborhood.", "day|desk,homes,palms|37"],
          ["Views, lot and orientation", "Sun exposure, backyard privacy and mountain views vary by street.", "dawn|mountains,bighome,sun|38"],
          ["Parks and trail access", "Walk or drive times to Fox Hill Park, Paseos Park and trails affect daily life.", "dusk|tower,trail,family|39"],
        ],
      },
      {
        id: "closing",
        h2: "Financing, inspections and closing in Nevada",
        answer:
          "Nevada purchases typically involve lender pre-approval, a home inspection, title and escrow, and a closing handled by an escrow company.",
        body: ["Dr. Duffy coordinates with lenders, inspectors and escrow so deadlines are visible. Ask your lender and an attorney or tax professional about anything specific to your situation."],
        spec: "dusk|keys,calendar,homes,palms|40",
        alt: "Illustration of house keys and a closing-day calendar over Summerlin homes at dusk",
        cta: "buyer",
        cards: [
          ["Pre-approval first", "A lender letter shows sellers you are ready and sets a realistic search range.", "day|chart,desk,palms|41"],
          ["Inspections and due diligence", "Inspect the home, review disclosures and verify HOA documents within contract deadlines.", "day|bighome,sign,saguaro|42"],
          ["Closing and move-in", "Sign through escrow, receive keys and plan your move into the village.", "dawn|keys,truck,homes|43"],
        ],
      },
    ],
    faqs: [
      ["How do I buy a home in The Paseos in Summerlin?", "Get pre-approved, book a buyer consultation with Dr. Jan Duffy, tour Paseos homes, make an offer, complete inspections and close through escrow.", "day|keys,bighome,mountains|44"],
      ["Does The Paseos have HOAs?", "Many Summerlin villages do. Review the specific neighborhood's HOA documents and fees before you buy.", "day|desk,homes,palms|45"],
      ["Can I tour a Paseos home this week?", "Book a home showing on Dr. Duffy's Calendly and share the address you want to see.", "dusk|calendar,homes,palms|46"],
    ],
  },
  {
    key: "sell",
    path: "/sell-your-paseos-summerlin-home",
    navTitle: "Sell",
    title: "Sell Your Paseos Summerlin Home | Dr. Jan Duffy",
    description:
      "Selling in The Paseos Village, Summerlin (89138)? Dr. Jan Duffy prices with local comps, markets on the MLS and negotiates to close. Book a listing consultation.",
    h1: "Sell Your Home in The Paseos Village, Summerlin",
    lede: "Price with Paseos-level comparable sales, market with purpose and negotiate with a REALTOR® who knows the village.",
    answer:
      "To sell a home in The Paseos in Summerlin, a REALTOR® such as Dr. Jan Duffy reviews recent Paseos sales, recommends a list price and prep plan, markets on the MLS and manages offers through closing.",
    heroAlt: "Illustration of a Paseos home with a for-sale sign and a rising price chart at sunset in Summerlin",
    spec: "dusk|mountains,bighome,sign,chart,palms|51",
    cta: "listing",
    sections: [
      {
        id: "pricing",
        h2: "Price your Paseos home with neighborhood-level comps",
        answer:
          "A Paseos list price should come from recent sales of similar homes in the same neighborhood, adjusted for condition, upgrades, lot and views.",
        body: ["Online estimates are a starting point only. Dr. Duffy pulls MLS comparables so your price reflects your street and your home."],
        spec: "day|chart,desk,mountains|52",
        alt: "Illustration of a pricing chart and desk with Summerlin mountains behind",
        cta: "listing",
        cards: [
          ["Comparable Paseos sales", "Compare closed sales, active competition and days on market.", "day|chart,homes,palms|53"],
          ["Condition and updates", "Decide which repairs or refreshes pay off before you list.", "day|bighome,saguaro,sun|54"],
          ["Timing your listing", "Choose a list date that fits your move and local buyer activity.", "dawn|calendar,homes,mountains|55"],
        ],
      },
      {
        id: "marketing",
        h2: "Marketing a Summerlin home",
        answer:
          "Marketing a Paseos home combines professional photography, accurate MLS data, online syndication, and well-managed showings.",
        body: ["Buyers often start online. Your listing needs clear photos, honest details and local selling points such as nearby parks and trails."],
        spec: "dusk|bighome,palms,pin,sun|56",
        alt: "Illustration of a staged Summerlin home glowing at dusk with a location pin for online marketing",
        cta: "listing",
        cards: [
          ["Photography and staging", "Present light, space and outdoor living in their best form.", "dusk|bighome,pool,palms|57"],
          ["MLS and online exposure", "Reach agents and buyers searching Summerlin and The Paseos.", "night|pin,homes,skyline|58"],
          ["Showings and open houses", "Schedule showings that protect your time and your home.", "day|calendar,family,homes|59"],
        ],
      },
      {
        id: "negotiate",
        h2: "Negotiating offers through closing",
        answer:
          "Negotiating a Paseos sale means comparing price, terms and buyer strength, then managing inspections and repairs until closing.",
        body: ["Dr. Duffy explains each offer in plain language and helps you weigh price against contingencies and timing."],
        spec: "dawn|keys,sign,homes,sun|60",
        alt: "Illustration of keys and a sold sign at sunrise in a Summerlin neighborhood",
        cta: "listing",
        cards: [
          ["Reviewing offers", "Look beyond price to financing, contingencies and closing date.", "day|desk,keys,palms|61"],
          ["Inspections and repairs", "Respond to inspection findings with a clear plan.", "day|bighome,saguaro,desk|62"],
          ["Closing and moving", "Coordinate escrow, possession and your next move.", "dusk|truck,homes,palms|63"],
        ],
      },
    ],
    faqs: [
      ["How much is my Paseos home worth?", "Value depends on recent comparable sales, condition, lot and views. Book a listing consultation for a comp-based opinion.", "day|chart,bighome,palms|64"],
      ["How long does it take to sell in Summerlin?", "Timing depends on price, condition and demand. Dr. Duffy reviews current days-on-market for your neighborhood.", "dawn|calendar,homes,sun|65"],
      ["Do I need to renovate before selling?", "Not always. Compare repair cost with likely price impact in a consultation.", "day|desk,bighome,saguaro|66"],
    ],
  },
  {
    key: "relocate",
    path: "/relocate-to-the-paseos-summerlin",
    navTitle: "Relocate",
    title: "Relocate to The Paseos, Summerlin | Dr. Jan Duffy",
    description:
      "Moving to Summerlin from California or elsewhere? Dr. Jan Duffy plans virtual tours, timelines and your move to The Paseos Village (89138). Book a Zoom call.",
    h1: "Relocate to The Paseos Village in Summerlin",
    lede: "Moving from California or another state? Tour virtually, plan the timeline and land in The Paseos with a local guide.",
    answer:
      "Relocating to The Paseos in Summerlin works best with a virtual consultation, video tours of Paseos neighborhoods, a clear moving timeline, and a local REALTOR® such as Dr. Jan Duffy, who specializes in California-to-Nevada moves.",
    heroAlt: "Illustration of a moving truck leaving the California coast with palm trees toward Red Rock mountains in Summerlin",
    spec: "day|coast,palms,truck,sun|71",
    cta: "virtual",
    sections: [
      {
        id: "long-distance",
        h2: "Plan a long-distance move to Summerlin",
        answer:
          "A long-distance move to The Paseos starts with a video consultation, then virtual tours, a budget review and a timeline that matches your sale and purchase.",
        body: ["Dr. Duffy has focused on California-to-Nevada relocation and meets clients on Zoom, so you can start planning before you travel."],
        spec: "day|desk,calendar,coast|72",
        alt: "Illustration of a video meeting calendar with the California coast and Summerlin mountains",
        cta: "virtual",
        cards: [
          ["Virtual tours", "Walk through homes and streets on video before you fly in.", "day|bighome,palms,pin|73"],
          ["Timeline and logistics", "Align your sale, purchase, movers and possession dates.", "dusk|calendar,truck,road|74"],
          ["Budget and taxes", "Nevada has no state personal income tax; confirm details with a tax professional.", "day|chart,desk,palms|75"],
        ],
      },
      {
        id: "settling-in",
        h2: "Settling into the Paseos lifestyle",
        answer:
          "Settling into The Paseos means learning your nearest parks, trails, shopping and school zoning in Summerlin, Las Vegas.",
        body: ["Verify school zoning with the district before you buy, since boundaries can change."],
        spec: "dusk|family,trail,mountains,saguaro|76",
        alt: "Illustration of a newly arrived family walking a Paseos trail at dusk toward Red Rock mountains",
        cta: "market",
        cards: [
          ["Parks and trails", "Find the nearest Paseos parks, arroyo paths and Red Rock access.", "dawn|trail,tower,family|77"],
          ["Shops and dining", "Downtown Summerlin is a short drive for errands and evenings out.", "night|shops,family,pin|78"],
          ["Schools and services", "Check zoning for the exact address and confirm services you need.", "day|desk,homes,palms|79"],
        ],
      },
      {
        id: "sell-and-buy",
        h2: "Selling in California while buying in Summerlin",
        answer:
          "Coordinating a California sale with a Summerlin purchase requires matching contract dates, financing and possession so you are not stuck between homes.",
        body: ["Dr. Duffy helps you plan the order of events and connects you with the right professionals."],
        spec: "dusk|road,truck,mountains,coast|80",
        alt: "Illustration of a road leading from the coast to Red Rock mountains in Summerlin",
        cta: "transition",
        cards: [
          ["Contingent strategies", "Understand how selling and buying contracts can be sequenced.", "day|calendar,keys,desk|81"],
          ["Referral coordination", "Work with your out-of-state agent to keep both transactions aligned.", "day|desk,pin,coast|82"],
          ["Move-in day", "Plan possession, utilities and keys for a smooth arrival.", "dawn|truck,homes,palms|83"],
        ],
      },
    ],
    faqs: [
      ["Can I buy in Summerlin without visiting first?", "Many buyers tour on video first. Book a Zoom meeting with Dr. Duffy to plan your remote search.", "day|desk,pin,palms|84"],
      ["Is Nevada tax-friendly for California movers?", "Nevada has no state personal income tax. Confirm your situation with a tax professional.", "day|chart,coast,palms|85"],
      ["How early should I plan my move?", "Start a few months ahead so sale, financing and move dates can align.", "dusk|calendar,truck,mountains|86"],
    ],
  },
  {
    key: "guide",
    path: "/the-paseos-village-guide",
    navTitle: "Village Guide",
    title: "The Paseos Village Guide, Summerlin | Dr. Jan Duffy",
    description:
      "A local guide to The Paseos Village in Summerlin, Las Vegas: location, Fox Hill Park, trails, Downtown Summerlin and Red Rock Canyon.",
    h1: "The Paseos Village Guide: Summerlin's West-Side Neighborhood",
    lede: "Location, parks, trails and nearby destinations explained by a REALTOR® who works this village.",
    answer:
      "The Paseos is a village in Summerlin on the west side of Las Vegas, Nevada, known for neighborhood parks, trail connections, views toward Red Rock and a short drive to Downtown Summerlin.",
    heroAlt: "Illustration map pin over The Paseos Village with Red Rock mountains and Summerlin neighborhoods",
    spec: "dawn|mountains,homes,pin,trail,palms|91",
    cta: "market",
    sections: [
      {
        id: "location",
        h2: "Where The Paseos is located",
        answer:
          "The Paseos sits on the west side of Summerlin in Las Vegas, Nevada, mainly in ZIP code 89138, close to Red Rock Canyon.",
        body: ["Summerlin spans multiple villages along the western rim of the Las Vegas valley, and The Paseos is one of them."],
        spec: "day|pin,mountains,homes,road|92",
        alt: "Illustration of a location pin on the west side of Summerlin below Red Rock mountains",
        cta: "market",
        cards: [
          ["West Summerlin setting", "Mountain views and open space define the western edge of the valley.", "dawn|mountains,sun,homes|93"],
          ["Getting around", "Local roads connect the village to Downtown Summerlin and the wider valley.", "day|road,car,mountains|94"],
          ["Master-planned structure", "Summerlin's villages share planning, parks and design standards.", "day|homes,palms,pin|95"],
        ],
      },
      {
        id: "outdoors",
        h2: "Parks, trails and outdoor life",
        answer:
          "The Paseos offers neighborhood parks such as Fox Hill Park and Paseos Park, plus walking paths and arroyos that link to Summerlin's trail network.",
        body: ["Fox Hill Park is known for its climbing structures and zip lines, and Paseos Park serves sports and play."],
        spec: "dusk|tower,playground,family,mountains|96",
        alt: "Illustration of Fox Hill Park climbing tower and playground at dusk in The Paseos",
        cta: "showing",
        cards: [
          ["Fox Hill Park", "Climbing structures, zip lines and open play space draw families.", "dusk|tower,playground,family|97"],
          ["Paseos Park", "Sports fields and play areas for neighborhood recreation.", "day|playground,trail,family|98"],
          ["Red Rock access", "Hiking and scenic drives are nearby at Red Rock Canyon.", "dawn|mountains,trail,sun|99"],
        ],
      },
      {
        id: "nearby",
        h2: "Everyday life and nearby destinations",
        answer:
          "Residents of The Paseos are a short drive from Downtown Summerlin's shops and restaurants, City National Arena and Las Vegas Ballpark.",
        body: ["Confirm drive times for your address, as they vary by time of day."],
        spec: "night|shops,ballpark,pin|100",
        alt: "Illustration of Downtown Summerlin storefronts and ballpark lights at night",
        cta: "market",
        cards: [
          ["Downtown Summerlin", "Shopping, dining and events in Summerlin's urban core.", "night|shops,family,pin|101"],
          ["Las Vegas Ballpark", "Home of the Las Vegas Aviators near Downtown Summerlin.", "dusk|ballpark,mountains,pin|102"],
          ["City National Arena", "Practice facility for the Vegas Golden Knights near the village.", "night|ballpark,skyline,pin|103"],
        ],
      },
    ],
    faqs: [
      ["What ZIP code is The Paseos in?", "The Paseos is primarily in ZIP code 89138 in Summerlin, Las Vegas.", "day|pin,homes,mountains|104"],
      ["Is The Paseos near Red Rock Canyon?", "Yes. It is on Summerlin's west side, close to Red Rock Canyon National Conservation Area.", "dawn|mountains,sun,trail|105"],
      ["What parks are in The Paseos?", "Fox Hill Park and Paseos Park are two well-known neighborhood parks.", "dusk|tower,playground,family|106"],
    ],
  },
  {
    key: "about",
    path: "/about-dr-jan-duffy",
    navTitle: "About",
    title: "About Dr. Jan Duffy, Summerlin REALTOR®",
    description:
      "Meet Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, serving The Paseos Village and Summerlin, Las Vegas.",
    h1: "About Dr. Jan Duffy, Your Paseos Village REALTOR®",
    lede: "A Berkshire Hathaway HomeServices Nevada Properties REALTOR® serving Summerlin and The Paseos Village.",
    answer:
      "Dr. Jan Duffy is a licensed Nevada REALTOR® (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties who serves buyers, sellers and relocating clients in Summerlin and The Paseos Village.",
    heroAlt: "Illustration of a realtor desk with laptop and keys in front of the Red Rock mountains of Summerlin",
    spec: "dawn|desk,keys,mountains,palms|111",
    cta: "inperson",
    sections: [
      {
        id: "who",
        h2: "Who is Dr. Jan Duffy?",
        answer:
          "Dr. Jan Duffy is a Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, licensed in Nevada as S.0197614.LLC, who speaks English, Spanish and German.",
        body: ["Dr. Duffy focuses on Summerlin, relocation and clear communication, offering Calendly scheduling so you can book without filling out forms."],
        spec: "day|desk,keys,mountains|112",
        alt: "Illustration of a REALTOR desk with keys and laptop under a bright Summerlin sky",
        cta: "general",
        cards: [
          ["Licensed in Nevada", "Nevada real estate license S.0197614.LLC; verify on the state lookup.", "day|desk,sign,palms|113"],
          ["Brokerage", "Berkshire Hathaway HomeServices Nevada Properties.", "day|bighome,palms,sun|114"],
          ["Languages", "English, Spanish and German.", "dusk|desk,pin,mountains|115"],
        ],
      },
      {
        id: "approach",
        h2: "How Dr. Duffy works with Paseos clients",
        answer:
          "Dr. Duffy works from local data, clear communication and booked consultations, so each Paseos client knows the next step.",
        body: ["Expect honest guidance on timing, price and process."],
        spec: "dusk|calendar,desk,homes|116",
        alt: "Illustration of a booked consultation calendar and desk at dusk in Summerlin",
        cta: "general",
        cards: [
          ["Data first", "Neighborhood-level comps and inventory guide each recommendation.", "day|chart,desk,mountains|117"],
          ["Clear communication", "Plain-language updates at each stage of the transaction.", "day|desk,keys,palms|118"],
          ["Calendly-first scheduling", "Choose a time that works; no forms to fill out.", "day|calendar,desk,sun|119"],
        ],
      },
      {
        id: "areas",
        h2: "Service areas around Summerlin",
        answer:
          "Dr. Duffy serves The Paseos and Summerlin, along with Henderson and other Las Vegas communities.",
        body: ["Ask about neighborhoods beyond The Paseos if you are comparing options."],
        spec: "day|pin,mountains,homes,road|120",
        alt: "Illustration of map pins across Las Vegas neighborhoods near Summerlin",
        cta: "market",
        cards: [
          ["Summerlin", "Villages across Summerlin, including The Paseos.", "dawn|mountains,homes,pin|121"],
          ["Henderson", "Communities in Henderson and Southern Nevada.", "dusk|homes,palms,skyline|122"],
          ["Greater Las Vegas", "Northwest and valley-wide neighborhoods on request.", "night|skyline,pin,road|123"],
        ],
      },
    ],
    faqs: [
      ["Is Dr. Jan Duffy licensed in Nevada?", "Yes. Nevada license S.0197614.LLC with Berkshire Hathaway HomeServices Nevada Properties.", "day|desk,sign,palms|124"],
      ["What languages does Dr. Duffy speak?", "English, Spanish and German.", "dusk|desk,pin,mountains|125"],
      ["How do I contact Dr. Duffy?", "Book a time on Calendly using the buttons on this page.", "day|calendar,desk,sun|126"],
    ],
  },
  {
    key: "faq",
    path: "/paseos-village-faq",
    navTitle: "FAQ",
    title: "The Paseos Village FAQ | Dr. Jan Duffy",
    description:
      "Answers about living, buying and selling in The Paseos Village, Summerlin (89138), and working with REALTOR® Dr. Jan Duffy.",
    h1: "The Paseos Village, Summerlin: Frequently Asked Questions",
    lede: "Short, direct answers about The Paseos and working with Dr. Jan Duffy.",
    answer:
      "The Paseos is a Summerlin village in Las Vegas, Nevada, near Red Rock Canyon; Dr. Jan Duffy is a REALTOR® who helps buyers and sellers there.",
    heroAlt: "Illustration of a question mark pin above The Paseos homes and Red Rock mountains",
    spec: "day|pin,mountains,homes,palms|131",
    cta: "market",
    faqFromCards: true,
    sections: [
      {
        id: "living",
        h2: "Questions about living in The Paseos",
        answer: "Living in The Paseos means parks, trails, Red Rock access and Downtown Summerlin nearby.",
        body: [],
        spec: "dusk|family,trail,mountains|132",
        alt: "Illustration of a family on a Paseos trail at dusk",
        cta: "market",
        cards: [
          ["What is The Paseos like?", "The Paseos is a master-planned Summerlin village with parks, paths and a range of home types.", "dusk|homes,family,trail|133"],
          ["Is The Paseos family friendly?", "Yes. Fox Hill Park and Paseos Park serve families, and many residents use the trails.", "dusk|tower,family,playground|134"],
          ["How far is Downtown Summerlin?", "Downtown Summerlin is a short drive; confirm timing for your address.", "night|shops,pin,car|135"],
        ],
      },
      {
        id: "transactions",
        h2: "Questions about buying and selling here",
        answer: "Buying or selling in The Paseos starts with local comparables and a consultation.",
        body: [],
        spec: "day|bighome,sign,chart|136",
        alt: "Illustration of a sign and chart in front of a Paseos home",
        cta: "buyer",
        cards: [
          ["How do I search Paseos listings?", "Use the RealScout search under the hero or ask Dr. Duffy for a custom search.", "day|pin,homes,palms|137"],
          ["How is a Paseos home priced?", "From recent comparable sales adjusted for condition, lot and views.", "day|chart,homes,palms|138"],
          ["Can I buy remotely?", "Yes, many buyers tour on video and book a Zoom call first.", "day|desk,coast,pin|139"],
        ],
      },
      {
        id: "working",
        h2: "Questions about working with Dr. Jan Duffy",
        answer: "Dr. Duffy offers buyer, listing, virtual and in-person meetings through Calendly.",
        body: [],
        spec: "dawn|calendar,desk,keys|140",
        alt: "Illustration of a Calendly-style calendar and keys at dawn",
        cta: "general",
        cards: [
          ["How do I book?", "Use any Book button on the site to open Dr. Duffy's Calendly.", "day|calendar,desk,sun|141"],
          ["Is there a form?", "No forms. Scheduling is handled by Calendly.", "day|calendar,keys,palms|142"],
          ["What does a consultation cover?", "Goals, timing, local market data and your next steps.", "dusk|desk,chart,mountains|143"],
        ],
      },
    ],
    faqs: [
      ["Who answers these questions?", "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties.", "day|desk,keys,palms|144"],
      ["Are these figures current?", "Market details change. Ask for live numbers on a call.", "day|chart,calendar,desk|145"],
      ["Where do I start?", "Browse listings under the hero, then book a time.", "dawn|pin,calendar,homes|146"],
    ],
  },
  {
    key: "book",
    path: "/book-a-consultation",
    navTitle: "Book",
    title: "Book a Paseos Village Consultation | Dr. Jan Duffy",
    description:
      "Schedule a buyer, listing, virtual or in-person meeting with Dr. Jan Duffy about The Paseos Village, Summerlin, using Calendly.",
    h1: "Book a Paseos Village Consultation with Dr. Jan Duffy",
    lede: "Pick the meeting that matches your goal and choose a time. No forms.",
    answer:
      "You can book a buyer consultation, listing consultation, free 15-minute market call, Zoom meeting or in-person meeting with Dr. Jan Duffy through Calendly.",
    heroAlt: "Illustration of a booking calendar with a confirmed check mark over Summerlin homes and Red Rock mountains",
    spec: "dusk|calendar,homes,mountains,palms|151",
    cta: "general",
    sections: [
      {
        id: "choose",
        h2: "Choose your meeting",
        answer: "Choose a buyer consultation, listing consultation or free market call to start.",
        body: [],
        spec: "day|calendar,desk,palms|152",
        alt: "Illustration of a calendar and desk for choosing a consultation",
        cta: "general",
        cards: [
          ["Buyer consultation (30 min)", "A phone or Zoom call about your goals, budget and Paseos options.", "day|keys,bighome,palms|153", "buyer"],
          ["Listing consultation (30 min)", "A comp-based conversation about your home's market position.", "day|chart,sign,homes|154", "listing"],
          ["Free market strategy call (15 min)", "A quick read on your micro-market and timing.", "dawn|chart,pin,mountains|155", "market"],
        ],
      },
      {
        id: "format",
        h2: "Meet online or in person",
        answer: "Meet on Zoom from anywhere or in person at a Berkshire Hathaway HomeServices Nevada office.",
        body: [],
        spec: "dusk|desk,pin,mountains|156",
        alt: "Illustration of online and in-person meeting options near Summerlin",
        cta: "general",
        cards: [
          ["Virtual meeting on Zoom", "Share screens and review listings together.", "day|desk,coast,pin|157", "virtual"],
          ["In-person consultation", "Meet at a BHHS Nevada office; location confirmed after booking.", "day|desk,homes,sun|158", "inperson"],
          ["Home showing", "Tour a specific property you have in mind.", "dusk|bighome,keys,palms|159", "showing"],
        ],
      },
      {
        id: "transition",
        h2: "Life transitions and private conversations",
        answer: "A private transition consultation helps when a big life change affects your home.",
        body: [],
        spec: "dawn|calendar,desk,homes|160",
        alt: "Illustration of a calm private consultation at sunrise",
        cta: "transition",
        cards: [
          ["Real estate transition consultation", "A private video call about selling, buying or both.", "dawn|desk,keys,sun|161", "transition"],
          ["Private 15-minute conversation", "One topic, direct answers.", "day|calendar,desk,palms|162", "market"],
          ["General booking page", "See every meeting type on Calendly.", "day|calendar,pin,mountains|163", "general"],
        ],
      },
    ],
    faqs: [
      ["Do I need to fill out a form?", "No. Booking is handled entirely by Calendly.", "day|calendar,desk,palms|164"],
      ["Is the market call free?", "Yes. The 15-minute market strategy call is listed as free on Calendly.", "dawn|chart,calendar,mountains|165"],
      ["Can I reschedule?", "Yes. Use the link in your Calendly confirmation email.", "dusk|calendar,keys,homes|166"],
    ],
  },
];

/** Assign image ids/paths so every H1, H2, H3 and FAQ question has an image. */
const img = (id, spec) => ({ id, src: `/images/${id}.svg`, spec });
export const pages = raw.map((p) => ({
  ...p,
  hero: img(`${p.key}-hero`, p.spec),
  sections: p.sections.map((s, i) => ({
    ...s,
    image: img(`${p.key}-s${i + 1}`, s.spec),
    cards: s.cards.map(([h3, text, spec, cta], j) => ({
      h3,
      text,
      cta,
      image: img(`${p.key}-s${i + 1}c${j + 1}`, spec),
    })),
  })),
  faqs: p.faqs.map(([q, a, spec], k) => ({ q, a, image: img(`${p.key}-f${k + 1}`, spec) })),
}));
export const pageByKey = Object.fromEntries(pages.map((p) => [p.key, p]));
export const allImages = pages.flatMap((p) => [
  p.hero,
  ...p.sections.flatMap((s) => [s.image, ...s.cards.map((c) => c.image)]),
  ...p.faqs.map((f) => f.image),
]);

/** Images used by shared page sections (listing search, booking). */
export const sharedImages = [
  img("shared-search", "day|mountains,homes,pin,sign,palms|201"),
  img("shared-book", "dusk|calendar,homes,mountains,palms|202"),
  img("shared-faq", "day|pin,mountains,desk,palms|203"),
];
allImages.push(...sharedImages);
