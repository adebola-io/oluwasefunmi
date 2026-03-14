import { getPaintingImage } from "./paintingImages";

export interface Painting {
  id: number;
  title: string;
  artist: string;
  year: string;
  filename: string;
  description: string;
}

export const paintings: Painting[] = [
  {
    id: 1,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "c. 1503–1506",
    filename: "01_Mona_Lisa.jpg",
    description:
      "The most famous portrait in the world, known for the subject's enigmatic smile.",
  },
  {
    id: 2,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    filename: "02_The_Starry_Night.jpg",
    description:
      "A swirling night sky over a village, one of the most recognized paintings in Western art.",
  },
  {
    id: 3,
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: "1495–1498",
    filename: "03_The_Last_Supper.jpg",
    description:
      "A late 15th-century mural depicting the scene of the Last Supper of Jesus with his apostles.",
  },
  {
    id: 4,
    title: "The Scream",
    artist: "Edvard Munch",
    year: "1893",
    filename: "04_The_Scream.jpg",
    description:
      "An iconic expressionist painting showing an agonized figure against a tumultuous orange sky.",
  },
  {
    id: 5,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    filename: "05_Girl_with_a_Pearl_Earring.jpg",
    description:
      "Often called the 'Mona Lisa of the North', this tronie depicts a girl wearing an exotic dress and a large pearl earring.",
  },
  {
    id: 6,
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1907–1908",
    filename: "06_The_Kiss.jpg",
    description:
      "A golden-flecked depiction of a couple embracing, wrapped in elaborate golden robes.",
  },
  {
    id: 7,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "c. 1484–1486",
    filename: "07_The_Birth_of_Venus.jpg",
    description:
      "A Renaissance masterpiece depicting the goddess Venus emerging from the sea as a fully grown woman.",
  },
  {
    id: 8,
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: "1656",
    filename: "08_Las_Meninas.jpg",
    description:
      "A complex and enigmatic composition showing the Spanish royal family with the artist himself at work.",
  },
  {
    id: 9,
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: "c. 1508–1512",
    filename: "09_The_Creation_of_Adam.jpg",
    description:
      "Part of the Sistine Chapel ceiling, depicting the Biblical creation narrative where God gives life to Adam.",
  },
  {
    id: 10,
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    filename: "10_Guernica.jpg",
    description:
      "A powerful anti-war painting depicting the suffering caused by the bombing of Guernica during the Spanish Civil War.",
  },
  {
    id: 11,
    title: "Water Lilies",
    artist: "Claude Monet",
    year: "1896–1926",
    filename: "11_Water_Lilies.jpg",
    description:
      "Part of a series of approximately 250 oil paintings depicting Monet's flower garden at Giverny.",
  },
  {
    id: 12,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: "1931",
    filename: "12_The_Persistence_of_Memory.jpg",
    description:
      "A surrealist masterpiece featuring melting watches in a dreamlike landscape.",
  },
  {
    id: 13,
    title: "American Gothic",
    artist: "Grant Wood",
    year: "1930",
    filename: "13_American_Gothic.jpg",
    description:
      "An iconic depiction of rural American values, showing a farmer and his daughter in front of their farmhouse.",
  },
  {
    id: 14,
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    year: "1642",
    filename: "14_The_Night_Watch.jpg",
    description:
      "A group portrait of a militia company, notable for its effective use of light and shadow.",
  },
  {
    id: 15,
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    artist: "Georges Seurat",
    year: "1884–1886",
    filename: "15_A_Sunday_Afternoon_on_the_Island_of_La_Grande_Jatte.jpg",
    description:
      "A pioneering pointillist work showing Parisians relaxing by the Seine.",
  },
  {
    id: 16,
    title: "Nighthawks",
    artist: "Edward Hopper",
    year: "1942",
    filename: "16_Nighthawks.jpg",
    description:
      "A moody depiction of a late-night diner, capturing urban isolation and loneliness.",
  },
  {
    id: 17,
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    year: "1872",
    filename: "17_Impression_Sunrise.jpg",
    description:
      "The painting that gave its name to the Impressionist movement, showing the harbor of Le Havre at sunrise.",
  },
  {
    id: 18,
    title: "The Son of Man",
    artist: "René Magritte",
    year: "1964",
    filename: "18_The_Son_of_Man.jpg",
    description:
      "A surrealist self-portrait with the artist's face obscured by a floating green apple.",
  },
  {
    id: 19,
    title: "Bal du moulin de la Galette",
    artist: "Pierre-Auguste Renoir",
    year: "1876",
    filename: "19_Bal_du_moulin_de_la_Galette.jpg",
    description:
      "A joyous depiction of a Sunday afternoon dance in Montmartre, Paris.",
  },
  {
    id: 20,
    title: "Whistler's Mother",
    artist: "James McNeill Whistler",
    year: "1871",
    filename: "20_Whistlers_Mother.jpg",
    description:
      "Formally titled 'Arrangement in Grey and Black No. 1', this portrait of the artist's mother is an American icon.",
  },
  {
    id: 21,
    title: "The School of Athens",
    artist: "Raphael",
    year: "1509–1511",
    filename: "21_The_School_of_Athens.jpg",
    description:
      "A Renaissance fresco depicting an imaginary gathering of philosophers, mathematicians, and scientists.",
  },
  {
    id: 22,
    title: "The Garden of Earthly Delights",
    artist: "Hieronymus Bosch",
    year: "c. 1490–1510",
    filename: "22_The_Garden_of_Earthly_Delights.jpg",
    description:
      "A triptych depicting heaven, earth, and hell, filled with fantastical creatures and symbolism.",
  },
  {
    id: 23,
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "c. 1829–1833",
    filename: "23_The_Great_Wave_off_Kanagawa.jpg",
    description:
      "An iconic woodblock print depicting a massive wave towering over boats with Mount Fuji in the background.",
  },
  {
    id: 24,
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    year: "1830",
    filename: "24_Liberty_Leading_the_People.jpg",
    description:
      "A romantic painting commemorating the July Revolution, showing Liberty personified leading the people forward.",
  },
  {
    id: 25,
    title: "The Arnolfini Portrait",
    artist: "Jan van Eyck",
    year: "1434",
    filename: "25_The_Arnolfini_Portrait.jpg",
    description:
      "A detailed double portrait believed to depict an Italian merchant and his wife, noted for its complex symbolism.",
  },
  {
    id: 26,
    title: "Les Demoiselles d'Avignon",
    artist: "Pablo Picasso",
    year: "1907",
    filename: "26_Les_Demoiselles_dAvignon.jpg",
    description:
      "A revolutionary proto-Cubist work depicting five nude women in a brothel, which challenged traditional perspectives.",
  },
  {
    id: 27,
    title: "Sunflowers",
    artist: "Vincent van Gogh",
    year: "1888",
    filename: "27_Sunflowers.jpg",
    description:
      "One of Van Gogh's most famous still-life series, depicting vibrant sunflowers in various stages of life.",
  },
  {
    id: 28,
    title: "Salvator Mundi",
    artist: "Leonardo da Vinci",
    year: "c. 1500",
    filename: "28_Salvator_Mundi.jpg",
    description:
      "A depiction of Christ as Salvator Mundi, which became the most expensive painting ever sold at auction.",
  },
  {
    id: 29,
    title: "The Third of May 1808",
    artist: "Francisco Goya",
    year: "1814",
    filename: "29_The_Third_of_May_1808.jpg",
    description:
      "A powerful anti-war painting depicting the execution of Spanish civilians by French soldiers.",
  },
  {
    id: 30,
    title: "Luncheon of the Boating Party",
    artist: "Pierre-Auguste Renoir",
    year: "1881",
    filename: "30_Luncheon_of_the_Boating_Party.jpg",
    description:
      "A vibrant scene of friends enjoying lunch on a balcony overlooking the Seine at the Maison Fournaise.",
  },
];

export function getPaintingImagePath(painting: Painting): string | undefined {
  return getPaintingImage(painting.id)?.default;
}

export function getPaintingById(id: number): Painting | undefined {
  return paintings.find((p) => p.id === id);
}

export function getPaintingByArtist(artist: string): Painting[] {
  return paintings.filter((p) =>
    p.artist.toLowerCase().includes(artist.toLowerCase()),
  );
}

export function getTotalPaintings(): number {
  return paintings.length;
}
