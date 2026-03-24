import { getPaintingImage } from "./paintingImages";

export interface Painting {
  id: number;
  title: string;
  artist: string;
  year: string;
  filename: string;
  description: string;
  medium: string;
  dimensions: string;
  location: string;
  style: string;
  details: string;
  color: string;
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
    medium: "Oil on poplar panel",
    dimensions: "77 cm × 53 cm (30 in × 21 in)",
    location: "Musée du Louvre, Paris",
    style: "High Renaissance",
    details:
      "The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'. The painting's novel qualities include the subject's expression, which is frequently described as enigmatic, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
    color: "#4a5d4e",
  },
  {
    id: 2,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    filename: "02_The_Starry_Night.jpg",
    description:
      "A swirling night sky over a village, one of the most recognized paintings in Western art.",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm (29 in × 36 1⁄4 in)",
    location: "Museum of Modern Art, New York City",
    style: "Post-Impressionism",
    details:
      "Van Gogh painted The Starry Night during his stay at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence. It depicts the view from the east-facing window of his asylum room, just before sunrise, with the addition of an ideal village. The painting features a dominant cypress tree, swirling clouds, and a bright crescent moon, all rendered with his signature expressive brushwork.",
    color: "#1a3a6c",
  },
  {
    id: 3,
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: "1495–1498",
    filename: "03_The_Last_Supper.jpg",
    description:
      "A late 15th-century mural depicting the scene of the Last Supper of Jesus with his apostles.",
    medium: "Tempera on gesso, pitch, and mastic",
    dimensions: "460 cm × 880 cm (180 in × 350 in)",
    location: "Santa Maria delle Grazie, Milan",
    style: "High Renaissance",
    details:
      "The Last Supper is a mural painting by the Italian High Renaissance artist Leonardo da Vinci, dated to c. 1495–1498. The painting represents the scene of the Last Supper of Jesus with his apostles, as it is told in the Gospel of John, 13:21. Leonardo has depicted the consternation that occurred among the Twelve Apostles when Jesus announced that one of them would betray him.",
    color: "#5c4033",
  },
  {
    id: 4,
    title: "The Scream",
    artist: "Edvard Munch",
    year: "1893",
    filename: "04_The_Scream.jpg",
    description:
      "An iconic expressionist painting showing an agonized figure against a tumultuous orange sky.",
    medium: "Oil, tempera, pastel and crayon on cardboard",
    dimensions: "91 cm × 73.5 cm (35.8 in × 28.9 in)",
    location: "National Gallery, Oslo",
    style: "Expressionism",
    details:
      "The Scream is the popular name given to a composition created by Norwegian artist Edvard Munch in 1893. The agonized face in the painting has become one of the most iconic images of art, seen as symbolizing the anxiety of the human condition. Munch recalled that he had been out for a walk at sunset when suddenly the setting sun's light turned the clouds 'a blood red'. He sensed a 'infinite scream passing through nature'.",
    color: "#8b4513",
  },
  {
    id: 5,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    filename: "05_Girl_with_a_Pearl_Earring.jpg",
    description:
      "Often called the 'Mona Lisa of the North', this tronie depicts a girl wearing an exotic dress and a large pearl earring.",
    medium: "Oil on canvas",
    dimensions: "44.5 cm × 39 cm (17.5 in × 15.4 in)",
    location: "Mauritshuis, The Hague",
    style: "Dutch Golden Age",
    details:
      "Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer. It is a tronie, a Dutch 17th-century description of a 'head' that was not intended to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl.",
    color: "#2f4f4f",
  },
  {
    id: 6,
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1907–1908",
    filename: "06_The_Kiss.jpg",
    description:
      "A golden-flecked depiction of a couple embracing, wrapped in elaborate golden robes.",
    medium: "Oil on canvas with gold leaf, silver and platinum",
    dimensions: "180 cm × 180 cm (71 in × 71 in)",
    location: "Österreichische Galerie Belvedere, Vienna",
    style: "Art Nouveau",
    details:
      "The Kiss is an oil-on-canvas painting with added gold leaf, silver and platinum by the Austrian Symbolist painter Gustav Klimt. It was painted at some point in 1907 and 1908, during the height of what scholars call his 'Golden Period'. It was exhibited in 1908 under the title Liebespaar (the lovers). The painting depicts a couple embracing each other, their bodies entwined in elaborate beautiful robes decorated in a style influenced by the contemporary Art Nouveau style.",
    color: "#b8860b",
  },
  {
    id: 7,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "c. 1484–1486",
    filename: "07_The_Birth_of_Venus.jpg",
    description:
      "A Renaissance masterpiece depicting the goddess Venus emerging from the sea as a fully grown woman.",
    medium: "Tempera on canvas",
    dimensions: "172.5 cm × 278.5 cm (67.9 in × 109.6 in)",
    location: "Uffizi Gallery, Florence",
    style: "Early Renaissance",
    details:
      "The Birth of Venus is a painting by the Italian artist Sandro Botticelli, probably executed in the mid-1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown. Although the two are not a pair, the painting is inevitably discussed with Botticelli's other very large mythological painting, the Primavera, also in the Uffizi. They are among the most famous paintings in the world, and icons of the Italian Renaissance.",
    color: "#8fbc8f",
  },
  {
    id: 8,
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: "1656",
    filename: "08_Las_Meninas.jpg",
    description:
      "A complex and enigmatic composition showing the Spanish royal family with the artist himself at work.",
    medium: "Oil on canvas",
    dimensions: "318 cm × 276 cm (125 in × 109 in)",
    location: "Museo del Prado, Madrid",
    style: "Baroque",
    details:
      "Las Meninas is a 1656 painting in the Museo del Prado in Madrid, by Diego Velázquez, the leading artist of the Spanish Golden Age. Its complex and enigmatic composition raises questions about reality and illusion, and creates an uncertain relationship between the viewer and the figures depicted. Because of these complexities, Las Meninas has been one of the most widely analyzed works in Western painting.",
    color: "#556b2f",
  },
  {
    id: 9,
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: "c. 1508–1512",
    filename: "09_The_Creation_of_Adam.jpg",
    description:
      "Part of the Sistine Chapel ceiling, depicting the Biblical creation narrative where God gives life to Adam.",
    medium: "Fresco",
    dimensions: "280 cm × 570 cm (110 in × 220 in)",
    location: "Sistine Chapel, Vatican City",
    style: "High Renaissance",
    details:
      "The Creation of Adam is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man. The fresco is part of a complex iconographic scheme and is chronologically the fourth in the series of panels depicting episodes from Genesis.",
    color: "#a0522d",
  },
  {
    id: 10,
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    filename: "10_Guernica.jpg",
    description:
      "A powerful anti-war painting depicting the suffering caused by the bombing of Guernica during the Spanish Civil War.",
    medium: "Oil on canvas",
    dimensions: "349.3 cm × 776.6 cm (137.4 in × 305.5 in)",
    location: "Museo Reina Sofía, Madrid",
    style: "Cubism, Surrealism",
    details:
      "Guernica is a large oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937. The painting, which uses a palette of gray, black, and white, is regarded by many art critics as one of the most moving and powerful anti-war paintings in history. It depicts the suffering of people and animals wrought by violence and chaos. Prominent in the composition are a gored horse, a bull, screaming women, dismemberment, and flames.",
    color: "#2f4f4f",
  },
  {
    id: 11,
    title: "Water Lilies",
    artist: "Claude Monet",
    year: "1896–1926",
    filename: "11_Water_Lilies.jpg",
    description:
      "Part of a series of approximately 250 oil paintings depicting Monet's flower garden at Giverny.",
    medium: "Oil on canvas",
    dimensions: "Various dimensions",
    location: "Various museums worldwide",
    style: "Impressionism",
    details:
      "Water Lilies is a series of approximately 250 oil paintings by French Impressionist Claude Monet. The paintings depict his flower garden at his home in Giverny, and were the main focus of his artistic production during the last thirty years of his life. Many of the works were painted while Monet suffered from cataracts.",
    color: "#4682b4",
  },
  {
    id: 12,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: "1931",
    filename: "12_The_Persistence_of_Memory.jpg",
    description:
      "A surrealist masterpiece featuring melting watches in a dreamlike landscape.",
    medium: "Oil on canvas",
    dimensions: "24 cm × 33 cm (9.5 in × 13 in)",
    location: "Museum of Modern Art, New York City",
    style: "Surrealism",
    details:
      "The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and one of the most recognizable works of Surrealism. First shown at the Julien Levy Gallery in 1932, since 1934 the painting has been in the collection of the Museum of Modern Art (MoMA) in New York City, which received it from an anonymous donor. It is widely recognized and frequently referenced in popular culture, and sometimes referred to by more descriptive titles, such as 'Melting Clocks', 'The Soft Watches' or 'The Melting Watches'.",
    color: "#6b8e23",
  },
  {
    id: 13,
    title: "American Gothic",
    artist: "Grant Wood",
    year: "1930",
    filename: "13_American_Gothic.jpg",
    description:
      "An iconic depiction of rural American values, showing a farmer and his daughter in front of their farmhouse.",
    medium: "Oil on beaverboard",
    dimensions: "78 cm × 65.3 cm (30.7 in × 25.7 in)",
    location: "Art Institute of Chicago, Chicago",
    style: "Regionalism",
    details:
      "American Gothic is a 1930 painting by Grant Wood in the collection of the Art Institute of Chicago. Wood was inspired to paint what is now known as the American Gothic House in Eldon, Iowa, along with 'the kind of people [he] fancied should live in that house'. It depicts a farmer standing beside his daughter – often mistakenly assumed to be his wife. The figures were modeled by Wood's sister Nan Wood Graham and their dentist Dr. Byron McKeeby.",
    color: "#556b2f",
  },
  {
    id: 14,
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    year: "1642",
    filename: "14_The_Night_Watch.jpg",
    description:
      "A group portrait of a militia company, notable for its effective use of light and shadow.",
    medium: "Oil on canvas",
    dimensions: "363 cm × 437 cm (143 in × 172 in)",
    location: "Rijksmuseum, Amsterdam",
    style: "Baroque",
    details:
      "Militia Company of District II under the Command of Captain Frans Banninck Cocq, also known as The Shooting Company of Frans Banning Cocq and Willem van Ruytenburch, but commonly referred to as The Night Watch, is a 1642 painting by Rembrandt van Rijn. It is in the collection of the Amsterdam Museum but is prominently displayed in the Rijksmuseum as the best-known painting in its collection. The Night Watch is one of the most famous Dutch Golden Age paintings.",
    color: "#1a1a1a",
  },
  {
    id: 15,
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    artist: "Georges Seurat",
    year: "1884–1886",
    filename: "15_A_Sunday_Afternoon_on_the_Island_of_La_Grande_Jatte.jpg",
    description:
      "A pioneering pointillist work showing Parisians relaxing by the Seine.",
    medium: "Oil on canvas",
    dimensions: "207.6 cm × 308 cm (81.7 in × 121.3 in)",
    location: "Art Institute of Chicago, Chicago",
    style: "Pointillism",
    details:
      "A Sunday Afternoon on the Island of La Grande Jatte painted in 1884, is Georges Seurat's most famous work. It is a leading example of the pointillist technique, executed on a large canvas. Seurat's composition includes a number of Parisians at a park on the banks of the River Seine.",
    color: "#556b2f",
  },
  {
    id: 16,
    title: "Nighthawks",
    artist: "Edward Hopper",
    year: "1942",
    filename: "16_Nighthawks.jpg",
    description:
      "A moody depiction of a late-night diner, capturing urban isolation and loneliness.",
    medium: "Oil on canvas",
    dimensions: "84.1 cm × 152.4 cm (33.1 in × 60.0 in)",
    location: "Art Institute of Chicago, Chicago",
    style: "Social Realism",
    details:
      "Nighthawks is a 1942 oil on canvas painting by Edward Hopper that portrays four people in a downtown diner late at night as viewed through the diner's large glass window. The light coming from the diner illuminates a darkened and deserted urban streetscape. It has been described as Hopper's best-known work and is one of the most recognizable paintings in American art. Within months of its completion, it was sold to the Art Institute of Chicago for $3,000.",
    color: "#006400",
  },
  {
    id: 17,
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    year: "1872",
    filename: "17_Impression_Sunrise.jpg",
    description:
      "The painting that gave its name to the Impressionist movement, showing the harbor of Le Havre at sunrise.",
    medium: "Oil on canvas",
    dimensions: "48 cm × 63 cm (18.9 in × 24.8 in)",
    location: "Musée Marmottan Monet, Paris",
    style: "Impressionism",
    details:
      "Impression, Sunrise is a painting by Claude Monet first shown at what would become known as the 'Exhibition of the Impressionists' in Paris in April, 1874. The painting is credited with inspiring the name of the Impressionist movement. Impression, Sunrise depicts the port of Le Havre, Monet's hometown. It is now displayed at the Musée Marmottan Monet in Paris.",
    color: "#ff8c00",
  },
  {
    id: 18,
    title: "The Son of Man",
    artist: "René Magritte",
    year: "1964",
    filename: "18_The_Son_of_Man.jpg",
    description:
      "A surrealist self-portrait with the artist's face obscured by a floating green apple.",
    medium: "Oil on canvas",
    dimensions: "116 cm × 89 cm (45.7 in × 35 in)",
    location: "Private collection",
    style: "Surrealism",
    details:
      "The Son of Man is a 1964 painting by the Belgian surrealist painter René Magritte. It is perhaps his most well-known artwork. Magritte painted it as a self-portrait. The painting consists of a man in an overcoat and a bowler hat standing in front of a low wall, beyond which are the sea and a cloudy sky. The man's face is largely obscured by a hovering green apple.",
    color: "#708090",
  },
  {
    id: 19,
    title: "Bal du moulin de la Galette",
    artist: "Pierre-Auguste Renoir",
    year: "1876",
    filename: "19_Bal_du_moulin_de_la_Galette.jpg",
    description:
      "A joyous depiction of a Sunday afternoon dance in Montmartre, Paris.",
    medium: "Oil on canvas",
    dimensions: "131 cm × 175 cm (52 in × 69 in)",
    location: "Musée d'Orsay, Paris",
    style: "Impressionism",
    details:
      "Bal du moulin de la Galette is an 1876 painting by French artist Pierre-Auguste Renoir. It is housed at the Musée d'Orsay in Paris and is one of Impressionism's most celebrated masterpieces. The painting depicts a typical Sunday afternoon at the original Moulin de la Galette in the district of Montmartre in Paris. In the late 19th century, working-class Parisians would dress up and spend time there dancing, drinking, and eating galettes into the evening.",
    color: "#4682b4",
  },
  {
    id: 20,
    title: "Whistler's Mother",
    artist: "James McNeill Whistler",
    year: "1871",
    filename: "20_Whistlers_Mother.jpg",
    description:
      "Formally titled 'Arrangement in Grey and Black No. 1', this portrait of the artist's mother is an American icon.",
    medium: "Oil on canvas",
    dimensions: "144.3 cm × 162.4 cm (56.81 in × 63.94 in)",
    location: "Musée d'Orsay, Paris",
    style: "Realism",
    details:
      "Arrangement in Grey and Black No. 1, best known under its colloquial name Whistler's Mother, is an 1871 oil-on-canvas painting by American-born painter James McNeill Whistler. The painting is 56.81 by 63.94 inches (144.3 cm × 162.4 cm), displayed in a frame of Whistler's own design. It is held by the Musée d'Orsay in Paris, having been bought by the French state in 1891. It is now one of the most famous works by an American artist outside the United States.",
    color: "#2f4f4f",
  },
  {
    id: 21,
    title: "The School of Athens",
    artist: "Raphael",
    year: "1509–1511",
    filename: "21_The_School_of_Athens.jpg",
    description:
      "A Renaissance fresco depicting an imaginary gathering of philosophers, mathematicians, and scientists.",
    medium: "Fresco",
    dimensions: "500 cm × 770 cm (200 in × 300 in)",
    location: "Apostolic Palace, Vatican City",
    style: "High Renaissance",
    details:
      "The School of Athens is a fresco by the Italian Renaissance artist Raphael. It was painted between 1509 and 1511 as a part of Raphael's commission to decorate the rooms now known as the Stanze di Raffaello, in the Apostolic Palace in the Vatican. The Stanza della Segnatura was the first of the rooms to be decorated, and The School of Athens, representing Philosophy, was probably the third painting to be finished there, after La Disputa (Theology) on the opposite wall, and the Parnassus (Literature).",
    color: "#a0522d",
  },
  {
    id: 22,
    title: "The Garden of Earthly Delights",
    artist: "Hieronymus Bosch",
    year: "c. 1490–1510",
    filename: "22_The_Garden_of_Earthly_Delights.jpg",
    description:
      "A triptych depicting heaven, earth, and hell, filled with fantastical creatures and symbolism.",
    medium: "Oil on oak panels",
    dimensions: "220 cm × 389 cm (87 in × 153 in)",
    location: "Museo del Prado, Madrid",
    style: "Northern Renaissance",
    details:
      "The Garden of Earthly Delights is the modern title given to a triptych oil painting on oak panel painted by the Early Netherlandish master Hieronymus Bosch, between 1490 and 1510, when Bosch was between 40 and 60 years old. It has been housed in the Museo del Prado in Madrid since the year 1939.",
    color: "#556b2f",
  },
  {
    id: 23,
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "c. 1829–1833",
    filename: "23_The_Great_Wave_off_Kanagawa.jpg",
    description:
      "An iconic woodblock print depicting a massive wave towering over boats with Mount Fuji in the background.",
    medium: "Woodblock print (ukiyo-e); ink and color on paper",
    dimensions: "25.7 cm × 37.8 cm (10.1 in × 14.9 in)",
    location: "Various (e.g., Metropolitan Museum of Art, New York City)",
    style: "Ukiyo-e",
    details:
      "The Great Wave off Kanagawa is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. It is Hokusai's most famous work and is often considered the most recognizable work of Japanese art in the world.",
    color: "#4682b4",
  },
  {
    id: 24,
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    year: "1830",
    filename: "24_Liberty_Leading_the_People.jpg",
    description:
      "A romantic painting commemorating the July Revolution, showing Liberty personified leading the people forward.",
    medium: "Oil on canvas",
    dimensions: "260 cm × 325 cm (102.4 in × 128.0 in)",
    location: "Musée du Louvre, Paris",
    style: "Romanticism",
    details:
      "Liberty Leading the People is a painting by Eugène Delacroix commemorating the July Revolution of 1830, which overthrew King Charles X of France. A woman of the people with a Phrygian cap personifying the concept of Liberty leads a varied group of people forward over a barricade and the bodies of the fallen, holding the tricolour flag of the French Revolution – which again became France's national flag after these events – in one hand and brandishing a bayonetted musket with the other. The figure of Liberty is also viewed as a symbol of France and the French Republic known as Marianne.",
    color: "#8b0000",
  },
  {
    id: 25,
    title: "The Arnolfini Portrait",
    artist: "Jan van Eyck",
    year: "1434",
    filename: "25_The_Arnolfini_Portrait.jpg",
    description:
      "A detailed double portrait believed to depict an Italian merchant and his wife, noted for its complex symbolism.",
    medium: "Oil on oak panel",
    dimensions: "82.2 cm × 60 cm (32.4 in × 23.6 in)",
    location: "National Gallery, London",
    style: "Northern Renaissance",
    details:
      "The Arnolfini Portrait (or The Arnolfini Wedding, The Arnolfini Marriage, the Portrait of Giovanni Arnolfini and his Wife, and other titles) is a 1434 oil painting on oak panel by the Early Netherlandish painter Jan van Eyck. It forms a full-length double portrait, believed to depict the Italian merchant Giovanni di Nicolao Arnolfini and his wife, presumably in their residence at the Flemish city of Bruges.",
    color: "#006400",
  },
  {
    id: 26,
    title: "Les Demoiselles d'Avignon",
    artist: "Pablo Picasso",
    year: "1907",
    filename: "26_Les_Demoiselles_dAvignon.jpg",
    description:
      "A revolutionary proto-Cubist work depicting five nude women in a brothel, which challenged traditional perspectives.",
    medium: "Oil on canvas",
    dimensions: "243.9 cm × 233.7 cm (96 in × 92 in)",
    location: "Museum of Modern Art, New York City",
    style: "Proto-Cubism",
    details:
      "Les Demoiselles d'Avignon is a large oil painting created in 1907 by the Spanish artist Pablo Picasso. The work, part of the permanent collection of the Museum of Modern Art, portrays five nude female prostitutes in a brothel on Carrer d'Avinyó, a street in Barcelona. Each figure is depicted in a disconcerting confrontational manner and none is conventionally feminine. The figures are adolescent in appearance and are shown with angular and disjointed body shapes.",
    color: "#d2691e",
  },
  {
    id: 27,
    title: "Sunflowers",
    artist: "Vincent van Gogh",
    year: "1888",
    filename: "27_Sunflowers.jpg",
    description:
      "One of Van Gogh's most famous still-life series, depicting vibrant sunflowers in various stages of life.",
    medium: "Oil on canvas",
    dimensions: "92.1 cm × 73 cm (36.3 in × 28.7 in)",
    location: "National Gallery, London",
    style: "Post-Impressionism",
    details:
      "Sunflowers is the title of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, made a year later in Arles, shows a bouquet of sunflowers in a vase. In the artist's mind both sets were linked by the name of his friend Paul Gauguin, who acquired two of the Paris versions.",
    color: "#ffd700",
  },
  {
    id: 28,
    title: "Salvator Mundi",
    artist: "Leonardo da Vinci",
    year: "c. 1500",
    filename: "28_Salvator_Mundi.jpg",
    description:
      "A depiction of Christ as Salvator Mundi, which became the most expensive painting ever sold at auction.",
    medium: "Oil on walnut panel",
    dimensions: "65.7 cm × 45.4 cm (25.9 in × 17.9 in)",
    location: "Abu Dhabi (disputed/unknown)",
    style: "High Renaissance",
    details:
      "Salvator Mundi is a painting by Italian Renaissance artist Leonardo da Vinci dated to c. 1500. Long thought to be a copy of a lost original veiled with overpainting, it was rediscovered, restored, and included in a major Leonardo exhibition at the National Gallery, London, in 2011–12. Although most leading scholars have considered it to be an original work by Leonardo, this attribution has been disputed by other specialists, some of whom posit that he only contributed certain elements.",
    color: "#1e3a5f",
  },
  {
    id: 29,
    title: "The Third of May 1808",
    artist: "Francisco Goya",
    year: "1814",
    filename: "29_The_Third_of_May_1808.jpg",
    description:
      "A powerful anti-war painting depicting the execution of Spanish civilians by French soldiers.",
    medium: "Oil on canvas",
    dimensions: "268 cm × 347 cm (106 in × 137 in)",
    location: "Museo del Prado, Madrid",
    style: "Romanticism",
    details:
      "The Third of May 1808 is a painting completed in 1814 by the Spanish painter Francisco Goya, now in the Museo del Prado, Madrid. In the work, Goya sought to commemorate Spanish resistance to Napoleon's armies during the occupation of 1808 in the Peninsular War. Along with its companion piece of the same size, The Second of May 1808 (or The Charge of the Mamelukes), it was commissioned by the provisional government of Spain at Goya's suggestion.",
    color: "#556b2f",
  },
  {
    id: 30,
    title: "Luncheon of the Boating Party",
    artist: "Pierre-Auguste Renoir",
    year: "1881",
    filename: "30_Luncheon_of_the_Boating_Party.jpg",
    description:
      "A vibrant scene of friends enjoying lunch on a balcony overlooking the Seine at the Maison Fournaise.",
    medium: "Oil on canvas",
    dimensions: "129.5 cm × 172.7 cm (51 in × 68 in)",
    location: "The Phillips Collection, Washington, D.C.",
    style: "Impressionism",
    details:
      "Luncheon of the Boating Party is a painting by French impressionist Pierre-Auguste Renoir. Included in the Seventh Impressionist Exhibition in 1882, it was identified as the best painting in the show by three critics. It was purchased from the artist by the dealer Paul Durand-Ruel and bought in 1923 for $125,000 by industrialist Duncan Phillips.",
    color: "#4682b4",
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
    p.artist.toLowerCase().includes(artist.toLowerCase())
  );
}

export function getTotalPaintings(): number {
  return paintings.length;
}
