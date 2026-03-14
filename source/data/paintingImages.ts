const imageModules = import.meta.glob<{ default: string }>(
  [
    "/source/data/images/paintings/*.webp",
    "/source/data/images/paintings-small/*.webp",
  ],
  { eager: true },
);

const gradientMap: Record<number, string> = {
  1: "radial-gradient(circle at 20% 20%, rgb(118 108 67) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(105 101 65) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(75 50 44) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(45 29 38) 0, transparent 45%), linear-gradient(180deg, rgb(87 65 45), rgb(75 50 44))",
  2: "radial-gradient(circle at 20% 20%, rgb(79 98 128) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(102 121 140) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(58 68 75) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(66 80 98) 0, transparent 45%), linear-gradient(180deg, rgb(86 107 134), rgb(58 68 75))",
  3: "radial-gradient(circle at 20% 20%, rgb(87 74 63) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(112 97 82) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(115 100 88) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(127 110 95) 0, transparent 45%), linear-gradient(180deg, rgb(109 95 84), rgb(115 100 88))",
  4: "radial-gradient(circle at 20% 20%, rgb(140 100 77) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(133 97 81) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(110 93 81) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(111 93 80) 0, transparent 45%), linear-gradient(180deg, rgb(104 90 80), rgb(110 93 81))",
  5: "radial-gradient(circle at 20% 20%, rgb(70 62 51) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(68 63 53) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(67 55 36) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(100 89 68) 0, transparent 45%), linear-gradient(180deg, rgb(108 98 84), rgb(67 55 36))",
  6: "radial-gradient(circle at 20% 20%, rgb(153 132 74) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(139 118 66) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(149 142 90) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(153 136 76) 0, transparent 45%), linear-gradient(180deg, rgb(176 153 86), rgb(149 142 90))",
  7: "radial-gradient(circle at 20% 20%, rgb(170 160 130) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(137 114 79) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(174 166 131) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(139 121 87) 0, transparent 45%), linear-gradient(180deg, rgb(184 163 119), rgb(174 166 131))",
  8: "radial-gradient(circle at 20% 20%, rgb(35 27 17) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(21 18 12) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(55 40 24) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(51 38 23) 0, transparent 45%), linear-gradient(180deg, rgb(39 31 20), rgb(55 40 24))",
  9: "radial-gradient(circle at 20% 20%, rgb(204 199 185) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(142 116 78) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(147 136 89) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(165 153 119) 0, transparent 45%), linear-gradient(180deg, rgb(180 165 132), rgb(147 136 89))",
  10: "radial-gradient(circle at 20% 20%, rgb(117 117 117) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(131 131 131) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(154 154 154) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(146 146 146) 0, transparent 45%), linear-gradient(180deg, rgb(175 175 175), rgb(154 154 154))",
  11: "radial-gradient(circle at 20% 20%, rgb(98 127 142) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(99 130 136) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(80 121 141) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(84 123 144) 0, transparent 45%), linear-gradient(180deg, rgb(92 134 154), rgb(80 121 141))",
  12: "radial-gradient(circle at 20% 20%, rgb(105 112 91) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(111 110 81) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(68 50 36) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(23 19 19) 0, transparent 45%), linear-gradient(180deg, rgb(73 63 48), rgb(68 50 36))",
  13: "radial-gradient(circle at 20% 20%, rgb(148 142 110) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(153 145 114) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(54 45 32) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(58 57 50) 0, transparent 45%), linear-gradient(180deg, rgb(99 88 68), rgb(54 45 32))",
  14: "radial-gradient(circle at 20% 20%, rgb(36 28 18) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(42 33 20) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(54 42 26) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(60 46 28) 0, transparent 45%), linear-gradient(180deg, rgb(51 40 26), rgb(54 42 26))",
  15: "radial-gradient(circle at 20% 20%, rgb(154 155 135) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(120 118 106) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(111 108 89) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(91 97 92) 0, transparent 45%), linear-gradient(180deg, rgb(139 134 103), rgb(111 108 89))",
  16: "radial-gradient(circle at 20% 20%, rgb(51 47 39) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(92 94 68) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(66 91 75) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(64 63 49) 0, transparent 45%), linear-gradient(180deg, rgb(45 59 52), rgb(66 91 75))",
  17: "radial-gradient(circle at 20% 20%, rgb(119 114 104) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(116 112 100) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(100 107 93) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(107 114 96) 0, transparent 45%), linear-gradient(180deg, rgb(97 107 100), rgb(100 107 93))",
  18: "radial-gradient(circle at 20% 20%, rgb(165 165 147) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(167 165 149) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(108 107 106) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(86 89 85) 0, transparent 45%), linear-gradient(180deg, rgb(98 94 88), rgb(108 107 106))",
  19: "radial-gradient(circle at 20% 20%, rgb(86 97 83) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(81 89 66) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(85 93 91) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(55 58 54) 0, transparent 45%), linear-gradient(180deg, rgb(73 75 71), rgb(85 93 91))",
  20: "radial-gradient(circle at 20% 20%, rgb(92 91 80) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(114 112 95) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(57 55 40) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(47 45 32) 0, transparent 45%), linear-gradient(180deg, rgb(75 75 63), rgb(57 55 40))",
  21: "radial-gradient(circle at 20% 20%, rgb(159 143 112) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(149 134 105) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(129 111 86) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(151 134 109) 0, transparent 45%), linear-gradient(180deg, rgb(186 169 139), rgb(129 111 86))",
  22: "radial-gradient(circle at 20% 20%, rgb(119 122 83) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(84 85 62) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(107 103 61) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(109 95 59) 0, transparent 45%), linear-gradient(180deg, rgb(120 115 71), rgb(107 103 61))",
  23: "radial-gradient(circle at 20% 20%, rgb(161 167 152) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(193 187 160) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(125 140 133) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(133 143 130) 0, transparent 45%), linear-gradient(180deg, rgb(151 157 143), rgb(125 140 133))",
  24: "radial-gradient(circle at 20% 20%, rgb(83 62 44) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(133 116 93) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(54 45 37) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(62 51 45) 0, transparent 45%), linear-gradient(180deg, rgb(75 59 45), rgb(54 45 37))",
  25: "radial-gradient(circle at 20% 20%, rgb(56 48 35) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(77 59 40) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(53 44 32) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(51 52 18) 0, transparent 45%), linear-gradient(180deg, rgb(55 51 29), rgb(53 44 32))",
  26: "radial-gradient(circle at 20% 20%, rgb(174 137 128) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(163 145 138) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(175 132 123) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(180 144 137) 0, transparent 45%), linear-gradient(180deg, rgb(181 150 142), rgb(175 132 123))",
  27: "radial-gradient(circle at 20% 20%, rgb(188 174 82) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(178 163 75) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(193 178 71) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(186 169 66) 0, transparent 45%), linear-gradient(180deg, rgb(158 141 48), rgb(193 178 71))",
  28: "radial-gradient(circle at 20% 20%, rgb(58 49 33) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(50 40 25) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(83 72 53) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(77 70 57) 0, transparent 45%), linear-gradient(180deg, rgb(99 79 51), rgb(83 72 53))",
  29: "radial-gradient(circle at 20% 20%, rgb(72 63 47) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(37 33 27) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(110 85 58) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(66 51 34) 0, transparent 45%), linear-gradient(180deg, rgb(79 65 47), rgb(110 85 58))",
  30: "radial-gradient(circle at 20% 20%, rgb(144 116 97) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgb(101 87 70) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgb(115 104 95) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgb(121 106 96) 0, transparent 45%), linear-gradient(180deg, rgb(109 93 80), rgb(115 104 95))",
};

const imageMap: Record<
  number,
  { default: string; small: string; gradient: string }
> = {};

for (const path of Object.keys(imageModules)) {
  const match = path.match(/\/(\d+)_([^/]+)\.webp$/);
  if (match) {
    const id = parseInt(match[1], 10);
    if (!imageMap[id]) {
      imageMap[id] = { default: "", small: "", gradient: gradientMap[id] };
    }
    if (path.includes("/paintings-small/")) {
      imageMap[id].small = imageModules[path].default;
    } else {
      imageMap[id].default = imageModules[path].default;
    }
  }
}

export function getPaintingImage(id: number): {
  default: string;
  small: string;
  gradient: string;
} {
  return imageMap[id];
}

export function getAllPaintingImages(): Record<
  number,
  { default: string; small: string; gradient: string }
> {
  return { ...imageMap };
}

export function hasPaintingImage(id: number): boolean {
  return id in imageMap;
}

export function getPaintingIds(): number[] {
  return Object.keys(imageMap)
    .map(Number)
    .sort((a, b) => a - b);
}
