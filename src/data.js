export const BRAND = "Outstock";

export const categories = ["Lighting & Chair", "Decoration & Accessories", "Baskets & Storage", "Fashion For Men's"];

const img = (name) => `/images/${name}.jpg`;

export const products = [
  { id: 1, name: "Wooden container Bowl", category: "Decoration & Accessories", price: 96, oldPrice: 120, isNew: false, image: img("bowl"), sku: "OS-001", desc: "Hand-finished wooden bowl made from glued beech sections. Good for fruit, keys, or as a table centerpiece." },
  { id: 2, name: "Euvira Rocking Chair", category: "Lighting & Chair", price: 90, oldPrice: 110, isNew: false, image: img("armchair"), sku: "OS-002", desc: "A compact armchair with a solid wood frame that fits a reading corner. Easy to move between rooms." },
  { id: 3, name: "Set of 2 baskets", category: "Baskets & Storage", price: 230, oldPrice: 250, isNew: false, image: img("baskets"), sku: "OS-003", desc: "Woven baskets for storage. Use them for blankets, laundry, or as a decorative piece." },
  { id: 4, name: "Hauteville Plywood Chair", category: "Lighting & Chair", price: 320, oldPrice: 325, isNew: false, image: img("chair-plywood"), sku: "OS-004", desc: "A molded plywood chair with a clean outline that fits dining rooms and offices." },
  { id: 5, name: "Rosmo Namino", category: "Decoration & Accessories", price: 180, oldPrice: 200, isNew: false, image: img("knife"), sku: "OS-005", desc: "A kitchen knife with a riveted wooden handle and a steel blade, made for everyday cooking." },
  { id: 6, name: "Bottle With Wooden Cork", category: "Decoration & Accessories", price: 270, oldPrice: 290, isNew: false, image: img("bottles"), sku: "OS-006", desc: "Frosted glass bottles with natural cork stoppers. Use them as carafes, vases, or shelf pieces." },
  { id: 7, name: "Juicy Pendant Lamp", category: "Lighting & Chair", price: 350, oldPrice: 380, isNew: false, image: img("lamp-pendant"), sku: "OS-007", desc: "A cluster of three matte white pendant lamps with a warm glow. Hang it over a table or in a corner." },
  { id: 8, name: "Damo Table Lamp", category: "Lighting & Chair", price: 150, oldPrice: 175, isNew: true, image: img("lamp-mushroom"), sku: "OS-008", desc: "A rechargeable table lamp with a wide shade and a narrow base. Soft light for evenings." },
  { id: 9, name: "Classic Table Lamp", category: "Lighting & Chair", price: 400, oldPrice: 480, isNew: true, image: img("lamp-classic"), sku: "OS-009", desc: "A turned brass-finish base with a fabric shade. It suits side tables and hallways." },
  { id: 10, name: "Driftwood Bedside Lamp", category: "Lighting & Chair", price: 420, oldPrice: 560, isNew: true, image: img("lamp-bedside"), sku: "OS-010", desc: "A bedside lamp on a stacked driftwood base with a square paper shade." },
  { id: 11, name: "Cream Fleece Hoodie", category: "Fashion For Men's", price: 67, oldPrice: 80, isNew: true, image: img("hoodie"), sku: "OS-011", desc: "A heavy cotton fleece hoodie with a deep hood and a front pocket." },
  { id: 12, name: "Wool Overcoat", category: "Fashion For Men's", price: 450, oldPrice: 536, isNew: true, image: img("overcoat"), sku: "OS-012", desc: "A straight-cut wool overcoat in a warm taupe color, made for cold weather." },
  { id: 13, name: "Silk Flower Vase", category: "Decoration & Accessories", price: 85, oldPrice: 0, isNew: false, image: img("flowers"), sku: "OS-013", desc: "A glass goblet vase with a mixed arrangement of silk roses and hydrangeas." },
  { id: 14, name: "Windsor Armchair", category: "Lighting & Chair", price: 140, oldPrice: 0, isNew: false, image: img("chair-windsor"), sku: "OS-014", desc: "A spindle-back armchair in light wood with a curved arm rail." }
];

export const slides = [
  { id: 1, title: "Simple Furniture\nFor Every Room", text: "Clean lines and natural wood. Pick pieces that fit your space and last for years.", image: img("hero-1") },
  { id: 2, title: "Handmade\nWooden Chairs", text: "Solid wood chairs with a calm shape, made to sit well at a dining table or a desk.", image: img("hero-2") },
  { id: 3, title: "Plants, Light\nAnd Good Seats", text: "A corner with a chair, a lamp, and a plant is often all a room needs.", image: img("chair-windsor") }
];

export const testimonials = [
  { id: 1, name: "Sara Ahmed", text: "The chair arrived well packed and looks even better in person. Delivery was quick." },
  { id: 2, name: "Omar Khaled", text: "Clean design and fair prices. I ordered three lamps and all of them matched the photos." },
  { id: 3, name: "Nour Hassan", text: "Support answered my question in an hour and helped me change my order." }
];

export const team = [
  { id: 1, name: "Laila Hassan", role: "Founder" },
  { id: 2, name: "Youssef Adel", role: "Product designer" },
  { id: 3, name: "Mariam Fathy", role: "Customer care" }
];

export const blogPosts = [
  { id: 1, title: "How to pick a lamp for a small room", author: "Mamun Ahmed", date: "December 14, 2022", image: img("lamp-bedside"), text: "Placement and shade color matter more than the bulb. Start with the corner that stays dark." },
  { id: 2, title: "Keeping a wooden bowl in good shape", author: "Shahnewaz Sakil", date: "September 14, 2023", image: img("bowl"), text: "A little oil twice a year keeps the grain smooth and stops cracks." },
  { id: 3, title: "Three chairs that save space", author: "Naim Ahmed", date: "November 14, 2022", image: img("chair-plywood"), text: "Stackable and folding designs that still look good in a living room." }
];
