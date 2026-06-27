const PALETTE = [
  "#e63946",
  "#457b9d",
  "#2a9d8f",
  "#f4a261",
  "#e9c46a",
  "#264653",
  "#8338ec",
  "#fb5607",
];

function hash(x: number, y: number): number {
  let h = x * 374761393 + y * 668265263;
  h = (h ^ (h >>> 13)) * 1274126177;
  return (h ^ (h >>> 16)) >>> 0;
}

export function posterColor(row: number, col: number): string {
  return PALETTE[hash(row, col) % PALETTE.length]!;
}
