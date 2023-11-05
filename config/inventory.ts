import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "7dcdf31a-be7f-4c03-af13-27d3e20098ee",
    sku: "00002",
    name: "AIR JORDAN 1 RETRO HIGH OG 'CHICAGO LOST & FOUND'",
    description: "The Air Jordan 1 Retro High OG 'Chicago Lost & Found' brings back the famous 'Chicago' colorway with new storytelling elements. Featuring the OG high-cut shape, the leather upper features a white base with Varsity Red overlays and a black Swoosh and Wings logo. Cracked black leather on the padded collar gives it a vintage look, along with a pre-yellowed midsole. The packaging also tells the 'Lost & Found' story, with a damaged-looking box plastered with sale stickers showcasing a different colored lid. A receipt is also included, alluding to finding this vintage gem tucked away in an attic or storage space.",
    price: 64000,
    image: "https://i.ibb.co/smDpvnk/1-1.jpg",
    images: [
      "https://i.ibb.co/smDpvnk/1-1.jpg",
    ],
    sizes: ["7", "9", "10", "12"],
    categories: ["Air Jordan"],
    colors: ["White", "Red"],
    currency: "USD",
  },
  {
    id: "544b37af-c5a5-4188-984f-be53bfe8ab24",
    sku: "00001",
    name: "AIR JORDAN 1 RETRO HIGH OG 'ROYAL REIMAGINED'",
    description: "Reintroducing the classic 1985 colorway, the Air Jordan 1 Retro High OG 'Royal Reimagined' replaces the original leather construction on the upper with sleek suede in black while the toe box, Swoosh, heel, and collar overlay appear in royal blue. Maintaining its timeless aesthetic, a robust rubber cupsole with white sidewalls sits on a grippy royal blue outsole. The iconic Air Jordan Wings logo proudly marks the collar, while a breathable nylon tongue displays a woven Nike Air tag.",
    price: 31000,
    image: "https://i.ibb.co/v4qMYdc/1.jpg",
    images: [
      "https://i.ibb.co/v4qMYdc/1.jpg",
    ],
    sizes: ["7", "8", "11", "13"],
    categories: ["Air Jordan"],
    colors: ["Black", "Blue"],
    currency: "USD",
  },
  {
    id: "70a64edf-605d-48f9-ae24-fc35ae4132cf",
    sku: "00004",
    name: "AIR JORDAN 11 RETRO 'CONCORD' 2018",
    description: "The 2018 version of the Air Jordan 11 Retro ‘Concord’ shows off ‘45’ imprinted on the black heel tab in honor of the jersey number that Michael Jordan wore when he returned to the NBA after his first retirement. The shoe’s other signature details remain intact, including a white ballistic mesh upper, black patent leather overlays, and an icy translucent outsole.",
    price: 90499,
    image: "https://i.ibb.co/r3kTzSc/1-3.jpg",
    images: [
      "https://i.ibb.co/r3kTzSc/1-3.jpg",
    ],
    sizes: ["7", "8", "9", "11"],
    categories: ["Air Jordan"],
    colors: ["White"],
    currency: "USD",
  },
  {
    id: "dd55ccf6-63e0-4a5b-b40b-7ec74049e753",
    sku: "00003",
    name: "AIR JORDAN 4 RETRO SE 'BLACK CANVAS'",
    description: "The Air Jordan 4 Retro 'Black Canvas' blends a neutral color scheme with unique materials. The upper is crafted predominantly in black canvas, with a subtle suede hit on the toe piece. Traditional AJ4 details return, with black TPU molded wings and a visible Nike Air unit in the heel. A subtle red Flight script on the tongue patch adds a burst of contrast, set against grey on the Jumpman logo, eyelets, and midsole.",
    price: 68000,
    image: "https://i.ibb.co/VBrwLpB/1-2.jpg",
    images: [
      "https://i.ibb.co/VBrwLpB/1-2.jpg",
    ],
    sizes: ["9", "10", "12", "13"],
    categories: ["Air Jordan"],
    colors: ["Black"],
    currency: "USD",
  },
  {
    id: "30cc7117-8ae7-4655-86e3-4585edaec4c7",
    sku: "00008",
    name: "OFF-WHITE X AIR FORCE 1 LOW 'BLACK'",
    description: "Virgil Abloh launches a fairly upfront redesign of Bruce Kilgore’s silhouette with this OFF-WHITE x Air Force 1 Low. Yet there are plenty of new flourishes on the rebuild: in addition to a blend of ripstop and suede, the upper uses taped seams and a white Swoosh attached via zigzag stitching. Exposed foam and unusually placed tags appear on the tongue, while the final postmodern touch arrives with the word ‘LOGO’ printed on the heel tab.",
    price: 240500,
    image: "https://i.ibb.co/528mTbx/1-7.jpg",
    images: [
      "https://i.ibb.co/528mTbx/1-7.jpg"
    ],
    sizes: ["7", "9", "10", "13"],
    categories: ["Nike"],
    colors: ["Black"],
    currency: "USD"
  },
  {
    id: "e2df1bb9-38de-41e8-b9a8-d280c65ea07b",
    sku: "00007",
    name: "OFF-WHITE X DUNK LOW 'UNIVERSITY RED'",
    description: "Part of a larger collaboration from Virgil Abloh and Nike, the OFF-WHITE x Dunk Low 'University Red' offers a unique take on the Dunk Low. The shoe's upper is built with leather in University Red and Wolf Grey, accented by a second lacing overlay over the top of the traditional laces. Exposed foam on the tongue and overbranding on the lateral side contribute to the aesthetic, while a two-tone rubber cupsole supports the fit underfoot.",
    price: 104500,
    image: "https://i.ibb.co/3CgtN4P/1-6.jpg",
    images: [
      "https://i.ibb.co/3CgtN4P/1-6.jpg"
    ],
    sizes: ["8", "10", "11", "12"],
    categories: ["Nike"],
    colors: ["Red"],
    currency: "USD"
  },
  {
    id: "9a4a036f-2184-4fa7-88ab-c083d0457f25",
    sku: "00006",
    name: "PATTA X AIR MAX 1 'NOISE AQUA'",
    description: "Patta and Nike came together again to bring the Patta x Nike Air Max 1 'Noise Aqua.' The standout feature is a wavy suede mudguard, rendered in a bright blue finish with an embroidered mini-Swoosh on the lateral forefoot. The remaining upper is made from matte silver mesh with white leather overlays and a blue suede Swoosh. The mesh tongue features a woven Patta tag, and an embroidered Nike Air branding rests on the back heel. Lightweight cushioning is featured by a pre-yellowed polyurethane midsole with a visible Air unit under the heel.",
    price: 45500,
    image: "https://i.ibb.co/nQM0hsQ/1-5.jpg",
    images: [
      "https://i.ibb.co/nQM0hsQ/1-5.jpg"
    ],
    sizes: ["7", "9", "11", "13"],
    categories: ["Nike"],
    colors: ["Blue"],
    currency: "USD"
  },
  {
    id: "3cc7a17c-7459-4730-abb8-1000c2a0592c",
    sku: "00005",
    name: "TRAVIS SCOTT X AIR FORCE 1 'UTOPIA'",
    description: "Paying tribute to the rapper's fourth studio album, the Travis Scott x Nike Air Force 1 'Utopia' reinvigorates the classic '80s basketball shoe with 'Utopia' and 'Cactus Jack' branding scribbled on the lateral heel of the sleek white leather upper. A white cupsole with interior Air-sole cushioning is supported by a pivot-point rubber outsole. The shoe honors its heritage with details like variable width lacing and a perforated toe box.",
    price: 24500,
    image: "https://i.ibb.co/KVZKJZC/1-4.jpg",
    images: [
      "https://i.ibb.co/KVZKJZC/1-4.jpg",
    ],
    sizes: ["8", "10", "12", "13"],
    categories: ["Nike"],
    colors: ["White"],
    currency: "USD"
  },
  {
    "id": "200459fb-51da-4da1-908e-dbc234ebcf12",
    "sku": "00011",
    "name": "YEEZY 500 'UTILITY BLACK' 2018",
    "description": "In July 2018, Kanye West and adidas released the Yeezy 500 'Utility Black.' The retro-inspired silhouette counterbalances a sleek, all-black design with its bulky form. What distinguishes this colorway from the standard triple-black finish is a unique use of tone – it's a semi-faded black that coats the combination of mesh and upper suede, as opposed to the pitch-black variety more common in the firmament of the sneaker.",
    "price": 35500,
    "image": "https://i.ibb.co/Wtjz6NP/1-10.jpg",
    "images": [
      "https://i.ibb.co/Wtjz6NP/1-10.jpg"
    ],
    "sizes": ["7", "9", "12", "13"],
    "categories": ["Yeezy"],
    "colors": ["Black"],
    "currency": "USD"
  },
  {
    "id": "0dc661fe-0e74-47ba-a8a9-9f8e1e668d33",
    "sku": "00012",
    "name": "YEEZY BOOST 350 V2 'BONE'",
    "description": "The adidas Yeezy Boost 350 V2 is treated to a monochromatic makeover. 'Bone' features an ivory Primeknit upper and a matching traditional lace closure. An off-white webbing pull tab at the heel and a see-through monofilament side stripe continue the tonal theme. Branding arrives in the form of a Three-Stripes logo on the interior heel and a Yeezy word mark stamped on the sockliner. A full-length TPU-wrapped Boost midsole provides responsive cushioning.",
    "price": 27000,
    "image": "https://i.ibb.co/YDRyFf9/1-11.jpg",
    "images": [
      "https://i.ibb.co/YDRyFf9/1-11.jpg"
    ],
    "sizes": ["8", "10", "11", "12"],
    "categories": ["Yeezy"],
    "colors": ["White"],
    "currency": "USD"
  },
  {
    "id": "bb9ab65f-2973-4be4-a30e-bb3c3b830e87",
    "sku": "00009",
    "name": "YEEZY BOOST 700 'HI-RES RED'",
    "description": "The Yeezy Boost 700 arrives in an unmissable colorway, showcasing a vibrant Hi-Res Red on the mesh and leather upper portion of the lifestyle runner. Black suede overlays that run across the shoe are reminiscent of the original release, including the green pop on the front of the midsole and the grey toe cap. Full-length Boost cushioning is embedded in the sculpted midsole, highlighted with red and orange accents. A rubber Hi-Res Red herringbone outsole completes the look.",
    "price": 49000,
    "image": "https://i.ibb.co/c11mdDp/1-8.jpg",
    "images": [
      "https://i.ibb.co/c11mdDp/1-8.jpg",
    ],
    "sizes": ["7", "8", "11", "12"],
    "categories": ["Yeezy"],
    "colors": ["Red"],
    "currency": "USD"
  },
  {
    "id": "4d9234cb-b82f-405f-80a5-87c6ea6ae6eb",
    "sku": "00010",
    "name": "YEEZY BOOST 700 MNVN 'BRIGHT CYAN'",
    "description": "The Yeezy Boost 700 MNVM 'Bright Cyan' emerges with a vibrant look. Built with lightweight polyester, the shoe's upper appears in blue, bolstered by no-sew overlays and highlighted by reflective detailing. No-tie bungee laces secure the fit, while '700' branding marks the lateral side. Underfoot, a sculpted PU midsole provides cushioning, also housing Boost, with the rubber outsole sporting a herringbone pattern for traction.",
    "price": 46500,
    "image": "https://i.ibb.co/zNHwcNN/1-9.jpg",
    "images": [
      "https://i.ibb.co/zNHwcNN/1-9.jpg",
    ],
    "sizes": ["7", "8", "11", "13"],
    "categories": ["Yeezy"],
    "colors": ["Blue"],
    "currency": "USD"
  }
  
]
