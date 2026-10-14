export const DEMO_PRODUCTS = [
  {
    id: "mascot-lamp",
    cat: "Lamps",
    sub: "Glow Lamps",
    name: "Mascot Glow Lamp",
    desc: "Your FIZZ mascot turned into a soft ambient desk light. This adorable lamp brings character to any space with its warm, gentle glow.",
    price: "₹899",
    originalPrice: "₹1,499",
    discount: "40%",
    img: "/assets/mascot-happy.png",
    stock: "In Stock - Ready to Ship",
    features: [
      "Adorable mascot design with soft ambient lighting",
      "Perfect for desk, nightstand or shelf",
      "Premium 3D printed finish",
      "Warm LED glow for cozy vibes",
      "Ideal gift for desk setup enthusiasts"
    ]
  },
  {
    id: "mini-bot",
    cat: "OLED & Electronics",
    sub: "Desk Companions",
    name: "Mini Mood Bot",
    desc: "A pocket-sized desk companion with an expressive face. Watch it display different emotions and brighten up your workspace.",
    price: "₹1,499",
    originalPrice: "₹2,499",
    discount: "40%",
    img: "/assets/robot-sprue.png",
    stock: "In Stock - Ready to Ship",
    features: [
      "Expressive OLED face with animated emotions",
      "Compact size fits any desk setup",
      "Battery-powered wireless design",
      "Multiple mood modes available",
      "Perfect desk companion for tech lovers"
    ]
  },
  {
    id: "memory-light",
    cat: "Lamps",
    sub: "Memory Lamps",
    name: "Memory Light",
    desc: "Turn a favourite photo into a warm keepsake. Upload your photo and we'll create a personalized lamp that glows with your memories.",
    price: "₹1,299",
    originalPrice: "₹1,999",
    discount: "35%",
    img: "/assets/face-lamp.png",
    custom: true,
    stock: "Made to Order",
    features: [
      "Custom photo printed on lamp shade",
      "Soft warm LED illumination",
      "Perfect for memorializing special moments",
      "Great gift for anniversaries & birthdays",
      "Personalized with your chosen photo"
    ]
  },
  {
    id: "oled-tag",
    cat: "OLED & Electronics",
    sub: "Name Tags",
    name: "OLED Name Tag",
    desc: "Your name, animation and vibe on a tiny screen. Display your name, custom animations or messages on this sleek OLED badge.",
    price: "₹499",
    originalPrice: "₹799",
    discount: "38%",
    img: "/assets/robot-sprue.png",
    stock: "In Stock - Ready to Ship",
    features: [
      "Bright OLED display with custom text",
      "Upload your own animations",
      "Magnetic back for easy attachment",
      "Rechargeable battery included",
      "Perfect for events, conventions & gifts"
    ]
  },
  {
    id: "desk-buddy",
    cat: "3D Printed Decor",
    sub: "Desk Objects",
    name: "Mascot Desk Buddy",
    desc: "A tiny FIZZ mascot companion for your desk, shelf or setup. Add some personality to your workspace with this cute 3D printed figure.",
    price: "₹1,299",
    originalPrice: "₹1,999",
    discount: "35%",
    img: "/assets/mascot-gift.png",
    stock: "In Stock - Ready to Ship",
    features: [
      "Cute mascot design for your desk",
      "High-quality 3D printed finish",
      "Multiple color options available",
      "Perfect shelf or desk decor",
      "Great collectible for fans"
    ]
  },
  {
    id: "mini-robot",
    cat: "OLED & Electronics",
    sub: "Robots",
    name: "Mini Bot",
    desc: "A compact expressive robot built to live beside your screen. This tiny companion features animated expressions and LED eyes.",
    price: "₹1,799",
    originalPrice: "₹2,999",
    discount: "40%",
    img: "/assets/robot-sprue.png",
    stock: "In Stock - Ready to Ship",
    features: [
      "Animated expressions with OLED display",
      "LED eyes that change colors",
      "Compact design fits beside monitors",
      "Interactive touch sensors",
      "Perfect for tech enthusiasts"
    ]
  },
  {
    id: "night-lamp",
    cat: "Lamps",
    sub: "Ambient Lights",
    name: "Night Mode Lamp",
    desc: "Minimal ambient light for late-night desks and rooms. Soft, warm glow that's perfect for working late or relaxing.",
    price: "₹999",
    originalPrice: "₹1,599",
    discount: "38%",
    img: "/assets/lamp-character.png",
    stock: "In Stock - Ready to Ship",
    features: [
      "Minimalist modern design",
      "Adjustable brightness levels",
      "Soft warm LED for late-night use",
      "Touch controls for easy operation",
      "Perfect for bedrooms & home offices"
    ]
  },
  {
    id: "digital-tag",
    cat: "OLED & Electronics",
    sub: "Identity Tags",
    name: "Digital Identity Tag",
    desc: "Animated name, logo or message on a tiny OLED screen. Create your own digital identity with this customizable badge.",
    price: "₹599",
    originalPrice: "₹999",
    discount: "40%",
    img: "/assets/robot-sprue.png",
    stock: "In Stock - Ready to Ship",
    features: [
      "Custom text and logo display",
      "Upload your own animations",
      "Magnetic clip for easy wear",
      "Long-lasting rechargeable battery",
      "Great for branding and personalization"
    ]
  }
];

export const CATS = ["Lamps", "OLED & Electronics", "3D Printed Decor"];

export const THEME_DATA = {
  female: {
    mode: "HER",
    eyebrow: "made for her vibe ✦",
    title: "cute.<br>clever.<br>personal.",
    text: "Aesthetic little things with big personality — tiny tech, dreamy lights, custom objects and gifts made to feel like they were made just for you.",
    button: "Shop her picks ↗"
  },
  male: {
    mode: "HIM",
    eyebrow: "built for his vibe ✦",
    title: "bold.<br>smart.<br>different.",
    text: "Pastel blue, clean and a little nerdy — desk tech, OLED objects, mini robots, ambient lights and custom pieces made for his setup.",
    button: "Shop his picks ↗"
  }
};

export const UPDATES = [
  {
    id: 1,
    title: "Feelings Deserve a Little Light",
    description: "Meet lamps designed to express the feelings we all know—shy, loving, chill, angry, and everything in between.",
    image: "/assets/Feelings Deserve a Little Light.png",
    link: "#lamps",
    button: "Shop Lamps"
  },
  {
    id: 2,
    title: "Holographic Lyrics in the Air",
    description: "Experience our OLED displays with animated expressions and customizable messages.",
    image: "/assets/Holographic Lyrics in the Air.png",
    link: "#oled",
    button: "Shop OLED"
  },
  {
    id: 3,
    title: "Meet the Sproutie Robot Companions",
    description: "Cute desk companions with expressive faces to brighten up your workspace.",
    image: "/assets/Meet the Sproutie Robot Companions.png",
    link: "#robots",
    button: "Shop Robots"
  },
  {
    id: 4,
    title: "More Than a Lamp: A Memory That Glows",
    description: "Turn your favorite photos into beautiful illuminated keepsakes.",
    image: "/assets/More Than a Lamp_ A Memory That Glows.png",
    link: "#custom",
    button: "Customize"
  },
  {
    id: 5,
    title: "Personalized Gifts, Cozy Dreams",
    description: "Custom-made gifts and cozy items designed just for you or your loved ones.",
    image: "/assets/Personalized Gifts, Cozy Dreams.png",
    link: "#gifts",
    button: "Shop Gifts"
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    product: "Custom Memory Lamp",
    rating: 5,
    review: "Absolutely loved my custom lamp! The photo quality is amazing and the glow is so warm. Perfect gift for my mom's birthday.",
    image: "/assets/face-lamp.png",
    date: "Oct 2026"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    product: "Mini Mood Bot",
    rating: 5,
    review: "The OLED expressions are so cute! It sits on my desk and makes me smile every day. Great build quality too.",
    image: "/assets/robot-sprue.png",
    date: "Oct 2026"
  },
  {
    id: 3,
    name: "Ananya Patel",
    product: "Mascot Desk Buddy",
    rating: 4,
    review: "Super cute and well-made. The 3D printing quality is excellent. Would definitely order more for friends!",
    image: "/assets/mascot-gift.png",
    date: "Sep 2026"
  },
  {
    id: 4,
    name: "Vikram Singh",
    product: "Night Mode Lamp",
    rating: 5,
    review: "Perfect for late-night coding sessions. The ambient light is just right - not too bright, not too dim. Love the minimalist design.",
    image: "/assets/lamp-character.png",
    date: "Sep 2026"
  }
];
