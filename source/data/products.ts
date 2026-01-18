export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  height: "short" | "medium" | "tall";
  description: string;
  material: string;
  care: string[];
  sizes: string[];
  colors: string[];
}

export const colorMap: Record<string, string> = {
  Charcoal: "#36454F",
  Black: "#000000",
  Navy: "#000080",
  "Slate Grey": "#708090",
  "Heather Grey": "#9AA297",
  "Midnight Blue": "#191970",

  Camel: "#C19A6B",
  Terracotta: "#E2725B",
  Sage: "#BCB88A",
  Oatmeal: "#E0DCC8",
  Cognac: "#9A463D",
  Burgundy: "#800020",
  Bordeaux: "#4C0013",
  Emerald: "#50C878",
  "Forest Green": "#228B22",

  Ivory: "#FFFFF0",
  Cream: "#FFFDD0",
  Orange: "#FFA500",
  "Dusty Rose": "#DCAE96",
  Champagne: "#F7E7CE",
  "Powder Blue": "#B0E0E6",
  "Dusty Blue": "#5B7C99",

  "Light Wash": "#ADD8E6",
  "Medium Wash": "#5D8AA8",
};

export const products: Product[] = [
  {
    id: 1,
    name: "Oversized Wool Coat",
    price: 289,
    originalPrice: 350,
    height: "tall",
    description:
      "A luxuriously soft oversized coat crafted from premium Italian wool. Features a relaxed silhouette with dropped shoulders and a classic notch lapel.",
    material: "80% Wool, 20% Cashmere",
    care: ["Dry clean only", "Store on padded hanger"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal", "Camel", "Navy"],
  },
  {
    id: 2,
    name: "Cashmere Sweater",
    price: 175,
    height: "medium",
    description:
      "Indulge in pure comfort with this lightweight cashmere sweater. Perfect for layering or wearing on its own during transitional seasons.",
    material: "100% Mongolian Cashmere",
    care: ["Hand wash cold", "Lay flat to dry"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Slate Grey", "Ivory", "Dusty Rose"],
  },
  {
    id: 3,
    name: "Silk Blouse",
    price: 145,
    height: "short",
    description:
      "An elegant silk blouse with a fluid drape and delicate mother-of-pearl buttons. Features a subtle sheen that catches the light beautifully.",
    material: "100% Mulberry Silk",
    care: ["Dry clean recommended", "Iron on low heat"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Powder Blue", "Champagne", "Black"],
  },
  {
    id: 4,
    name: "Tailored Trousers",
    price: 195,
    height: "medium",
    description:
      "Impeccably tailored trousers with a high waist and straight leg. Crafted from a premium wool blend with just the right amount of stretch.",
    material: "95% Wool, 5% Elastane",
    care: ["Dry clean only"],
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Charcoal", "Navy", "Black"],
  },
  {
    id: 5,
    name: "Leather Jacket",
    price: 425,
    originalPrice: 550,
    height: "tall",
    description:
      "A timeless leather jacket crafted from buttery-soft lambskin. Features a classic moto-inspired design with asymmetrical zip closure.",
    material: "100% Lambskin Leather",
    care: [
      "Professional leather cleaning only",
      "Store in breathable garment bag",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Cognac"],
  },
  {
    id: 6,
    name: "Linen Dress",
    price: 165,
    height: "medium",
    description:
      "A breezy linen dress perfect for warm weather. Features a relaxed A-line silhouette with hidden pockets and a flattering V-neckline.",
    material: "100% European Linen",
    care: ["Machine wash cold", "Line dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sage", "Terracotta", "Orange"],
  },
  {
    id: 7,
    name: "Cotton T-Shirt",
    price: 65,
    height: "short",
    description:
      "The perfect everyday essential. Made from organic Pima cotton with a relaxed fit and perfectly weighted fabric.",
    material: "100% Organic Pima Cotton",
    care: ["Machine wash cold", "Tumble dry low"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Heather Gray", "Orange", "Black", "Navy"],
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 185,
    height: "medium",
    description:
      "A classic denim jacket with a modern twist. Features a slightly cropped length and subtle vintage-inspired wash.",
    material: "100% Japanese Selvedge Denim",
    care: ["Machine wash cold inside out", "Hang dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Wash", "Medium Wash", "Black"],
  },
  {
    id: 9,
    name: "Pleated Skirt",
    price: 125,
    height: "short",
    description:
      "An elegant midi skirt with delicate knife pleats. Falls gracefully with every step and pairs beautifully with any blouse.",
    material: "100% Polyester Crepe",
    care: ["Dry clean recommended"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Forest Green", "Black", "Burgundy"],
  },
  {
    id: 10,
    name: "Merino Cardigan",
    price: 155,
    height: "medium",
    description:
      "A versatile cardigan knit from extra-fine merino wool. Features a relaxed fit with ribbed cuffs and hem.",
    material: "100% Extra-Fine Merino Wool",
    care: ["Hand wash cold", "Reshape and dry flat"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal", "Oatmeal", "Dusty Blue"],
  },
  {
    id: 11,
    name: "Velvet Blazer",
    price: 295,
    originalPrice: 380,
    height: "tall",
    description:
      "A statement blazer crafted from luxurious cotton velvet. Features a tailored fit with satin lapels and decorative buttons.",
    material: "98% Cotton Velvet, 2% Elastane",
    care: ["Dry clean only", "Store on padded hanger"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Emerald", "Midnight Blue", "Bordeaux"],
  },
  {
    id: 12,
    name: "Knit Dress",
    price: 210,
    height: "medium",
    description:
      "A sleek knit dress that hugs in all the right places. Features a ribbed texture and subtle side slit for ease of movement.",
    material: "70% Viscose, 30% Polyamide",
    care: ["Hand wash cold", "Reshape and dry flat"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "Camel", "Black"],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
