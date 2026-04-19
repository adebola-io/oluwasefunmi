import type { ImageModule } from "@/shared/types";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/music-project/*.webp",
  { eager: true }
);

export interface Artist {
  name: string;
  imageUrl: string;
  backgroundGradient: string;
  themeColor: string;
  albums: Album[];
}

export interface Album {
  name: string;
  tracks: Track[];
}

export interface Track {
  name: string;
  duration: number;
}

const gradients: Record<string, string> = {
  "Bruno Mars":
    "radial-gradient(28% 28% at 47% 69%, #b6b6b6f0 0%, #b6b6b685 36%, #00000000 78%),\nradial-gradient(30% 30% at 72% 52%, #c2c2c2f0 0%, #c2c2c285 36%, #00000000 78%),\nradial-gradient(32% 32% at 38% 53%, #e3e3e3f0 0%, #e3e3e385 36%, #00000000 78%),\nradial-gradient(32% 32% at 58% 45%, #e7e7e7f0 0%, #e7e7e785 36%, #00000000 78%),\nradial-gradient(23% 36% at 38% 88%, #6565655f 0%, #65656520 46%, #00000000 100%),\nradial-gradient(23% 36% at 13% 88%, #4f4f4f41 0%, #4f4f4f16 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 63%, #828282a9 0%, #82828239 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 38%, #3939397b 0%, #3939392a 46%, #00000000 100%),\nradial-gradient(36% 23% at 63% 38%, #67676764 0%, #67676722 46%, #00000000 100%),\nradial-gradient(36% 23% at 38% 38%, #4c4c4c49 0%, #4c4c4c19 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 75%, #56565647 0%, #56565618 46%, #00000000 100%),\nradial-gradient(24% 57% at 63% 75%, #969696cc 0%, #96969645 46%, #00000000 100%),\nradial-gradient(24% 57% at 13% 50%, #46464662 0%, #46464621 46%, #00000000 100%),\nradial-gradient(75% 24% at 50% 13%, #3030309c 0%, #30303035 46%, #00000000 100%),\nlinear-gradient(180deg, #363636ff 0%, #545454f0 48%, #6a6a6aff 100%),\nlinear-gradient(90deg, #44444480 0%, #54545429 50%, #53535380 100%),\nradial-gradient(70% 70% at 18% 18%, #3b3b3b94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #40404094 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #60606094 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #76767694 0%, #00000000 72%)",
  Rihanna:
    "radial-gradient(32% 32% at 9% 52%, #f9faf7f0 0%, #f9faf785 36%, #00000000 78%),\nradial-gradient(32% 32% at 87% 59%, #f9faf7f0 0%, #f9faf785 36%, #00000000 78%),\nradial-gradient(32% 32% at 81% 31%, #f9faf7f0 0%, #f9faf785 36%, #00000000 78%),\nradial-gradient(32% 32% at 80% 47%, #f9faf7f0 0%, #f9faf785 36%, #00000000 78%),\nradial-gradient(36% 23% at 88% 63%, #c1c1bfd1 0%, #c1c1bf47 46%, #00000000 100%),\nradial-gradient(23% 36% at 63% 63%, #7d7a7c3e 0%, #7d7a7c15 46%, #00000000 100%),\nradial-gradient(36% 23% at 38% 63%, #353234d1 0%, #35323447 46%, #00000000 100%),\nradial-gradient(23% 36% at 13% 63%, #aeaeacc0 0%, #aeaeac41 46%, #00000000 100%),\nradial-gradient(23% 36% at 63% 38%, #9d9c9d94 0%, #9d9c9d32 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 38%, #191819d1 0%, #19181947 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 38%, #5a5a597f 0%, #5a5a592b 46%, #00000000 100%),\nradial-gradient(23% 36% at 63% 13%, #504d4e9d 0%, #504d4e35 46%, #00000000 100%),\nradial-gradient(57% 24% at 75% 88%, #6764656c 0%, #67646525 46%, #00000000 100%),\nradial-gradient(57% 24% at 25% 88%, #8b88896c 0%, #8b888925 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 25%, #f3f4f1cc 0%, #f3f4f145 46%, #00000000 100%),\nradial-gradient(57% 24% at 25% 13%, #1c1c1ccc 0%, #1c1c1c45 46%, #00000000 100%),\nlinear-gradient(180deg, #676666ff 0%, #787777f0 48%, #7f7c7dff 100%),\nlinear-gradient(90deg, #56555580 0%, #78777729 50%, #a8a7a680 100%),\nradial-gradient(70% 70% at 18% 18%, #2b2a2a94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #b5b4b494 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #7e7c7d94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #83818194 0%, #00000000 72%)",
  Future:
    "radial-gradient(30% 30% at 77% 65%, #0c181bf0 0%, #0c181b85 36%, #00000000 78%),\nradial-gradient(32% 32% at 45% 76%, #030f11f0 0%, #030f1185 36%, #00000000 78%),\nradial-gradient(32% 32% at 65% 35%, #051012f0 0%, #05101285 36%, #00000000 78%),\nradial-gradient(32% 32% at 48% 62%, #020d10f0 0%, #020d1085 36%, #00000000 78%),\nradial-gradient(36% 23% at 88% 88%, #a3bcd5c5 0%, #a3bcd543 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 88%, #97b4cbab 0%, #97b4cb3a 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 13%, #2a566cc0 0%, #2a566c41 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 88%, #9ba7b69d 0%, #9ba7b635 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 50%, #85a0b37f 0%, #85a0b32b 46%, #00000000 100%),\nradial-gradient(24% 57% at 63% 50%, #494e51cc 0%, #494e5145 46%, #00000000 100%),\nradial-gradient(24% 57% at 38% 50%, #63747f6e 0%, #63747f25 46%, #00000000 100%),\nradial-gradient(24% 57% at 13% 50%, #7397aa64 0%, #7397aa22 46%, #00000000 100%),\nradial-gradient(75% 24% at 63% 13%, #51778d72 0%, #51778d27 46%, #00000000 100%),\nlinear-gradient(180deg, #527386ff 0%, #6d8798f0 48%, #889dafff 100%),\nlinear-gradient(90deg, #7394a980 0%, #6d879829 50%, #738d9f80 100%),\nradial-gradient(70% 70% at 18% 18%, #54768994 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #5e788794 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #8099aa94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #8395a594 0%, #00000000 72%)",
  Beyonce:
    "radial-gradient(32% 32% at 67% 65%, #bdb7aff0 0%, #bdb7af85 36%, #00000000 78%),\nradial-gradient(32% 32% at 58% 37%, #bcb7b3f0 0%, #bcb7b385 36%, #00000000 78%),\nradial-gradient(32% 32% at 34% 62%, #cbc4bbf0 0%, #cbc4bb85 36%, #00000000 78%),\nradial-gradient(32% 32% at 59% 52%, #dddcd9f0 0%, #dddcd985 36%, #00000000 78%),\nradial-gradient(36% 23% at 88% 88%, #07070688 0%, #0707062e 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 63%, #21201e48 0%, #21201e18 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 38%, #170f0c6e 0%, #170f0c25 46%, #00000000 100%),\nradial-gradient(36% 23% at 63% 38%, #635957bb 0%, #63595740 46%, #00000000 100%),\nradial-gradient(36% 23% at 38% 38%, #453f3f75 0%, #453f3f28 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 88%, #1e1b195c 0%, #1e1b191f 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 63%, #897d79cc 0%, #897d7945 46%, #00000000 100%),\nradial-gradient(24% 75% at 13% 63%, #15131271 0%, #15131226 46%, #00000000 100%),\nradial-gradient(57% 24% at 75% 13%, #1f141565 0%, #1f141522 46%, #00000000 100%),\nradial-gradient(57% 24% at 25% 13%, #000000a3 0%, #00000038 46%, #00000000 100%),\nlinear-gradient(180deg, #191212ff 0%, #2b2625f0 48%, #292624ff 100%),\nlinear-gradient(90deg, #201e1c80 0%, #2b262529 50%, #2b242280 100%),\nradial-gradient(70% 70% at 18% 18%, #17151594 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #2e242394 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #35302e94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #322f2d94 0%, #00000000 72%)",
  "Taylor Swift":
    "radial-gradient(31% 31% at 22% 63%, #e6bea8f0 0%, #e6bea885 36%, #00000000 78%),\nradial-gradient(32% 32% at 58% 77%, #ecc6b3f0 0%, #ecc6b385 36%, #00000000 78%),\nradial-gradient(32% 32% at 99% 41%, #dcd5e0f0 0%, #dcd5e085 36%, #00000000 78%),\nradial-gradient(32% 32% at 88% 28%, #dfd7ddf0 0%, #dfd7dd85 36%, #00000000 78%),\nradial-gradient(23% 36% at 63% 88%, #8d6e5f8e 0%, #8d6e5f30 46%, #00000000 100%),\nradial-gradient(28% 28% at 38% 88%, #1b191cc4 0%, #1b191c42 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 88%, #57332e66 0%, #57332e23 46%, #00000000 100%),\nradial-gradient(36% 23% at 63% 63%, #b68975d1 0%, #b6897547 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 63%, #644c4338 0%, #644c4313 46%, #00000000 100%),\nradial-gradient(23% 36% at 13% 63%, #9e7360a6 0%, #9e736039 46%, #00000000 100%),\nradial-gradient(36% 23% at 88% 38%, #71586268 0%, #71586224 46%, #00000000 100%),\nradial-gradient(28% 28% at 63% 38%, #9c615290 0%, #9c615231 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 13%, #967088be 0%, #96708841 46%, #00000000 100%),\nradial-gradient(23% 36% at 63% 13%, #734f404c 0%, #734f401a 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 75%, #70534a56 0%, #70534a1d 46%, #00000000 100%),\nradial-gradient(24% 57% at 38% 25%, #331f1daf 0%, #331f1d3c 46%, #00000000 100%),\nradial-gradient(24% 57% at 13% 25%, #18181dcc 0%, #18181d45 46%, #00000000 100%),\nlinear-gradient(180deg, #594143ff 0%, #644944f0 48%, #75574dff 100%),\nlinear-gradient(90deg, #3e2e2c80 0%, #64494429 50%, #87646080 100%),\nradial-gradient(70% 70% at 18% 18%, #261b1d94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #855e5f94 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #5d433b94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #89675a94 0%, #00000000 72%)",
  Labrinth:
    "radial-gradient(22% 22% at 40% 56%, #890310c6 0%, #8903106f 36%, #00000000 78%),\nradial-gradient(23% 23% at 42% 40%, #8a0213c7 0%, #8a021370 36%, #00000000 78%),\nradial-gradient(25% 25% at 56% 35%, #a50913f0 0%, #a5091385 36%, #00000000 78%),\nradial-gradient(27% 27% at 53% 49%, #b9000ff0 0%, #b9000f85 36%, #00000000 78%),\nradial-gradient(36% 23% at 63% 88%, #170a113d 0%, #170a1115 46%, #00000000 100%),\nradial-gradient(24% 75% at 88% 63%, #120b124f 0%, #120b121b 46%, #00000000 100%),\nradial-gradient(24% 57% at 63% 50%, #440f1778 0%, #440f1729 46%, #00000000 100%),\nradial-gradient(24% 75% at 38% 63%, #2c091258 0%, #2c09121e 46%, #00000000 100%),\nradial-gradient(75% 24% at 63% 13%, #140d144d 0%, #140d141a 46%, #00000000 100%),\nradial-gradient(24% 75% at 13% 50%, #120b124f 0%, #120b121b 46%, #00000000 100%),\nlinear-gradient(180deg, #170e14ff 0%, #1e0b13f0 48%, #190a11ff 100%),\nlinear-gradient(90deg, #120b1280 0%, #1e0b1329 50%, #150d1480 100%),\nradial-gradient(70% 70% at 18% 18%, #1a0b1394 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #210f1594 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #1d091194 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #1e0a1294 0%, #00000000 72%)",
  "Kendrick Lamar":
    "radial-gradient(31% 31% at 34% 91%, #c6dec9f0 0%, #c6dec985 36%, #00000000 78%),\nradial-gradient(32% 32% at 19% 80%, #b9efe7f0 0%, #b9efe785 36%, #00000000 78%),\nradial-gradient(32% 32% at 80% 85%, #d8f7f0f0 0%, #d8f7f085 36%, #00000000 78%),\nradial-gradient(32% 32% at 99% 85%, #ecfbf8f0 0%, #ecfbf885 36%, #00000000 78%),\nradial-gradient(23% 36% at 88% 88%, #a39798d1 0%, #a3979847 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 88%, #6761635e 0%, #67616320 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 88%, #828884b2 0%, #8288843c 46%, #00000000 100%),\nradial-gradient(36% 23% at 88% 63%, #605b6a55 0%, #605b6a1d 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 63%, #4a475747 0%, #4a475718 46%, #00000000 100%),\nradial-gradient(36% 23% at 63% 13%, #66515751 0%, #6651571b 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 13%, #573b4067 0%, #573b4023 46%, #00000000 100%),\nradial-gradient(24% 75% at 63% 63%, #4c495956 0%, #4c49591d 46%, #00000000 100%),\nradial-gradient(24% 57% at 38% 50%, #35324881 0%, #3532482c 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 25%, #433f5b5f 0%, #433f5b20 46%, #00000000 100%),\nradial-gradient(24% 57% at 13% 25%, #3633537a 0%, #36335329 46%, #00000000 100%),\nlinear-gradient(180deg, #483d52ff 0%, #534d5df0 48%, #67626aff 100%),\nlinear-gradient(90deg, #4c4a5c80 0%, #534d5d29 50%, #5c566880 100%),\nradial-gradient(70% 70% at 18% 18%, #40364d94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #4d465a94 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #59576094 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #68616d94 0%, #00000000 72%)",
  Drake:
    "radial-gradient(31% 31% at 53% 38%, #d4ad89f0 0%, #d4ad8985 36%, #00000000 78%),\nradial-gradient(32% 32% at 1% 45%, #bed2b7f0 0%, #bed2b785 36%, #00000000 78%),\nradial-gradient(32% 32% at 17% 19%, #e8c5c2f0 0%, #e8c5c285 36%, #00000000 78%),\nradial-gradient(32% 32% at 52% 22%, #edc9b3f0 0%, #edc9b385 36%, #00000000 78%),\nradial-gradient(36% 23% at 63% 88%, #2c2c1f76 0%, #2c2c1f28 46%, #00000000 100%),\nradial-gradient(36% 23% at 38% 38%, #45493435 0%, #45493412 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 38%, #769a74d1 0%, #769a7447 46%, #00000000 100%),\nradial-gradient(23% 36% at 13% 13%, #979a8ed1 0%, #979a8e47 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 75%, #1a1c0cae 0%, #1a1c0c3b 46%, #00000000 100%),\nradial-gradient(24% 57% at 38% 75%, #1d241b99 0%, #1d241b34 46%, #00000000 100%),\nradial-gradient(24% 57% at 13% 75%, #2e413263 0%, #2e413222 46%, #00000000 100%),\nradial-gradient(24% 57% at 63% 50%, #6157406e 0%, #61574025 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 25%, #3a3a2267 0%, #3a3a2223 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 13%, #6e64458a 0%, #6e64452f 46%, #00000000 100%),\nlinear-gradient(180deg, #69684dff 0%, #464935f0 48%, #282d20ff 100%),\nlinear-gradient(90deg, #4d5d4980 0%, #46493529 50%, #35341f80 100%),\nradial-gradient(70% 70% at 18% 18%, #6f7a5f94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #544c3294 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #26322694 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #2e2d1d94 0%, #00000000 72%)",
  "Ariana Grande":
    "radial-gradient(24% 24% at 1% 27%, #848889da 0%, #8488897a 36%, #00000000 78%),\nradial-gradient(27% 27% at 35% 58%, #5da1adf0 0%, #5da1ad85 36%, #00000000 78%),\nradial-gradient(32% 32% at 52% 59%, #a1e3f0f0 0%, #a1e3f085 36%, #00000000 78%),\nradial-gradient(32% 32% at 45% 47%, #ecf7fcf0 0%, #ecf7fc85 36%, #00000000 78%),\nradial-gradient(23% 36% at 13% 88%, #393d3937 0%, #393d3913 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 63%, #4953546d 0%, #49535425 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 13%, #39414042 0%, #39414016 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 88%, #2c211385 0%, #2c21132d 46%, #00000000 100%),\nradial-gradient(24% 75% at 88% 63%, #251b0c96 0%, #251b0c33 46%, #00000000 100%),\nradial-gradient(24% 57% at 63% 50%, #39423d4e 0%, #39423d1b 46%, #00000000 100%),\nradial-gradient(24% 57% at 38% 50%, #53696ead 0%, #53696e3b 46%, #00000000 100%),\nradial-gradient(57% 24% at 75% 13%, #29211486 0%, #2921142d 46%, #00000000 100%),\nradial-gradient(24% 57% at 13% 25%, #616b6eb7 0%, #616b6e3e 46%, #00000000 100%),\nlinear-gradient(180deg, #3b3d37ff 0%, #3b3d37f0 48%, #2f2a20ff 100%),\nlinear-gradient(90deg, #49525380 0%, #3b3d3729 50%, #271e1180 100%),\nradial-gradient(70% 70% at 18% 18%, #55626494 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #2b261b94 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #3e454294 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #2c281c94 0%, #00000000 72%)",
  "Jon Bellion":
    "radial-gradient(29% 29% at 85% 92%, #0f0101f0 0%, #0f010185 36%, #00000000 78%),\nradial-gradient(29% 29% at 67% 99%, #130000f0 0%, #13000085 36%, #00000000 78%),\nradial-gradient(29% 29% at 51% 98%, #160100f0 0%, #16010085 36%, #00000000 78%),\nradial-gradient(29% 29% at 55% 76%, #1a0d01f0 0%, #1a0d0185 36%, #00000000 78%),\nradial-gradient(28% 28% at 13% 88%, #847c5c4a 0%, #847c5c19 46%, #00000000 100%),\nradial-gradient(36% 23% at 63% 38%, #73705f4b 0%, #73705f1a 46%, #00000000 100%),\nradial-gradient(75% 24% at 63% 88%, #2e2017cc 0%, #2e201745 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 63%, #4e4737bb 0%, #4e473740 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 50%, #97a18e98 0%, #97a18e34 46%, #00000000 100%),\nradial-gradient(57% 24% at 75% 13%, #73654a76 0%, #73654a28 46%, #00000000 100%),\nradial-gradient(24% 57% at 38% 25%, #9ea08a9b 0%, #9ea08a35 46%, #00000000 100%),\nradial-gradient(24% 75% at 13% 38%, #bfd5c8cc 0%, #bfd5c845 46%, #00000000 100%),\nlinear-gradient(180deg, #969781ff 0%, #7b7a69f0 48%, #544d3eff 100%),\nlinear-gradient(90deg, #a3ad9c80 0%, #7b7a6929 50%, #706e5c80 100%),\nradial-gradient(70% 70% at 18% 18%, #afbbaa94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #7d786194 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #716f5c94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #4d473b94 0%, #00000000 72%)",
  "Burna Boy":
    "radial-gradient(22% 22% at 72% 59%, #5a5c59c5 0%, #5a5c596e 36%, #00000000 78%),\nradial-gradient(26% 26% at 49% 27%, #71726ef0 0%, #71726e85 36%, #00000000 78%),\nradial-gradient(29% 29% at 26% 27%, #868583f0 0%, #86858385 36%, #00000000 78%),\nradial-gradient(32% 32% at 40% 9%, #a4a29ff0 0%, #a4a29f85 36%, #00000000 78%),\nradial-gradient(23% 36% at 13% 88%, #23282751 0%, #2328271b 46%, #00000000 100%),\nradial-gradient(36% 23% at 38% 38%, #2125264b 0%, #21252619 46%, #00000000 100%),\nradial-gradient(36% 23% at 38% 13%, #3538387d 0%, #3538382b 46%, #00000000 100%),\nradial-gradient(24% 57% at 38% 75%, #0f141750 0%, #0f14171b 46%, #00000000 100%),\nradial-gradient(24% 75% at 88% 50%, #1015184d 0%, #1015181a 46%, #00000000 100%),\nradial-gradient(24% 75% at 63% 50%, #15191b49 0%, #15191b19 46%, #00000000 100%),\nradial-gradient(24% 75% at 13% 38%, #161c1d4a 0%, #161c1d19 46%, #00000000 100%),\nlinear-gradient(180deg, #1b1f21ff 0%, #171c1df0 48%, #14191bff 100%),\nlinear-gradient(90deg, #1a1f2080 0%, #171c1d29 50%, #12171980 100%),\nradial-gradient(70% 70% at 18% 18%, #1f232494 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #12171a94 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #181d1e94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #13171a94 0%, #00000000 72%)",
  "Ayra Starr":
    "radial-gradient(29% 29% at 47% 80%, #e7af8bf0 0%, #e7af8b85 36%, #00000000 78%),\nradial-gradient(31% 31% at 53% 44%, #e7b59ff0 0%, #e7b59f85 36%, #00000000 78%),\nradial-gradient(32% 32% at 55% 99%, #ecd8c7f0 0%, #ecd8c785 36%, #00000000 78%),\nradial-gradient(32% 32% at 47% 24%, #f0d1c6f0 0%, #f0d1c685 36%, #00000000 78%),\nradial-gradient(36% 23% at 88% 88%, #43222c82 0%, #43222c2c 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 88%, #1e0b09d1 0%, #1e0b0947 46%, #00000000 100%),\nradial-gradient(36% 23% at 88% 63%, #67476766 0%, #67476723 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 63%, #4b231590 0%, #4b231531 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 63%, #763f4949 0%, #763f4919 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 38%, #79547a8c 0%, #79547a30 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 38%, #8b4d3473 0%, #8b4d3427 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 38%, #97586c97 0%, #97586c33 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 13%, #a1669cd1 0%, #a1669c47 46%, #00000000 100%),\nradial-gradient(23% 36% at 63% 13%, #5c323d4f 0%, #5c323d1b 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 13%, #71414343 0%, #71414317 46%, #00000000 100%),\nradial-gradient(23% 36% at 13% 13%, #9978a8d1 0%, #9978a847 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 88%, #5a3c2b6b 0%, #5a3c2b25 46%, #00000000 100%),\nradial-gradient(24% 57% at 63% 50%, #4d22159a 0%, #4d221534 46%, #00000000 100%),\nlinear-gradient(180deg, #805066ff 0%, #683e46f0 48%, #4d2a27ff 100%),\nlinear-gradient(90deg, #5f394580 0%, #683e4629 50%, #5a374d80 100%),\nradial-gradient(70% 70% at 18% 18%, #8b586394 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #72445c94 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #4d2a2594 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #55313394 0%, #00000000 72%)",
  Davido:
    "radial-gradient(31% 31% at 59% 6%, #f0faf9f0 0%, #f0faf985 36%, #00000000 78%),\nradial-gradient(31% 31% at 62% 98%, #f2fdfbf0 0%, #f2fdfb85 36%, #00000000 78%),\nradial-gradient(31% 31% at 31% 69%, #010c11f0 0%, #010c1185 36%, #00000000 78%),\nradial-gradient(31% 31% at 51% 27%, #040e0ff0 0%, #040e0f85 36%, #00000000 78%),\nradial-gradient(23% 36% at 88% 88%, #4a859959 0%, #4a85991e 46%, #00000000 100%),\nradial-gradient(36% 23% at 63% 88%, #93a1a78c 0%, #93a1a730 46%, #00000000 100%),\nradial-gradient(23% 36% at 13% 88%, #4b93a665 0%, #4b93a622 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 63%, #659baa62 0%, #659baa21 46%, #00000000 100%),\nradial-gradient(23% 36% at 63% 63%, #c2c3c5d1 0%, #c2c3c547 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 63%, #45819460 0%, #45819421 46%, #00000000 100%),\nradial-gradient(36% 23% at 88% 38%, #6caebb8a 0%, #6caebb2f 46%, #00000000 100%),\nradial-gradient(23% 36% at 63% 38%, #a8a8a6aa 0%, #a8a8a63a 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 38%, #59636a85 0%, #59636a2d 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 38%, #2c60789f 0%, #2c607836 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 13%, #7bc7cab8 0%, #7bc7ca3e 46%, #00000000 100%),\nradial-gradient(23% 36% at 63% 13%, #80949464 0%, #80949422 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 13%, #21404ed1 0%, #21404e47 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 13%, #093d5bd1 0%, #093d5b47 46%, #00000000 100%),\nradial-gradient(24% 57% at 38% 75%, #6b727773 0%, #6b727727 46%, #00000000 100%),\nlinear-gradient(180deg, #4a7582ff 0%, #638792f0 48%, #688c98ff 100%),\nlinear-gradient(90deg, #2f607480 0%, #63879229 50%, #76a7b280 100%),\nradial-gradient(70% 70% at 18% 18%, #2c506394 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #84acb094 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #597e8a94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #81a1ac94 0%, #00000000 72%)",
  "Fireboy DML":
    "radial-gradient(31% 31% at 76% 72%, #0e0e0ef0 0%, #0e0e0e85 36%, #00000000 78%),\nradial-gradient(32% 32% at 35% 17%, #090909f0 0%, #09090985 36%, #00000000 78%),\nradial-gradient(32% 32% at 30% 90%, #060606f0 0%, #06060685 36%, #00000000 78%),\nradial-gradient(32% 32% at 56% 40%, #0e0e0ef0 0%, #0e0e0e85 36%, #00000000 78%),\nradial-gradient(36% 23% at 88% 88%, #444444d1 0%, #44444447 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 88%, #404040d1 0%, #40404047 46%, #00000000 100%),\nradial-gradient(23% 36% at 13% 88%, #9f9f9f72 0%, #9f9f9f27 46%, #00000000 100%),\nradial-gradient(36% 23% at 88% 63%, #63636390 0%, #63636331 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 63%, #74747465 0%, #74747422 46%, #00000000 100%),\nradial-gradient(28% 28% at 13% 63%, #b6b6b6ae 0%, #b6b6b63b 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 38%, #85858538 0%, #85858513 46%, #00000000 100%),\nradial-gradient(24% 75% at 63% 63%, #545454c2 0%, #54545442 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 25%, #d5d5d5cc 0%, #d5d5d545 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 13%, #66666693 0%, #66666632 46%, #00000000 100%),\nradial-gradient(24% 57% at 13% 25%, #e4e4e4cc 0%, #e4e4e445 46%, #00000000 100%),\nlinear-gradient(180deg, #a6a6a6ff 0%, #878787f0 48%, #666666ff 100%),\nlinear-gradient(90deg, #a9a9a980 0%, #87878729 50%, #84848480 100%),\nradial-gradient(70% 70% at 18% 18%, #aeaeae94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #97979794 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #82828294 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #54545494 0%, #00000000 72%)",
  Olamide:
    "radial-gradient(32% 32% at 17% 31%, #fcf9cbf0 0%, #fcf9cb85 36%, #00000000 78%),\nradial-gradient(32% 32% at 66% 23%, #fcede2f0 0%, #fcede285 36%, #00000000 78%),\nradial-gradient(32% 32% at 6% 55%, #fefefbf0 0%, #fefefb85 36%, #00000000 78%),\nradial-gradient(32% 32% at 24% 48%, #fdfcf4f0 0%, #fdfcf485 36%, #00000000 78%),\nradial-gradient(36% 23% at 13% 88%, #191f2bc0 0%, #191f2b41 46%, #00000000 100%),\nradial-gradient(28% 28% at 63% 63%, #22242faf 0%, #22242f3c 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 63%, #6456594a 0%, #64565919 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 63%, #a59795d1 0%, #a5979547 46%, #00000000 100%),\nradial-gradient(23% 36% at 38% 38%, #4b43435d 0%, #4b434320 46%, #00000000 100%),\nradial-gradient(23% 36% at 13% 38%, #f4d39cd1 0%, #f4d39c47 46%, #00000000 100%),\nradial-gradient(23% 36% at 88% 13%, #633c3461 0%, #633c3421 46%, #00000000 100%),\nradial-gradient(28% 28% at 63% 13%, #bb8f81d1 0%, #bb8f8147 46%, #00000000 100%),\nradial-gradient(36% 23% at 38% 13%, #b77c68c8 0%, #b77c6844 46%, #00000000 100%),\nradial-gradient(36% 23% at 13% 13%, #d69b64d1 0%, #d69b6447 46%, #00000000 100%),\nradial-gradient(57% 24% at 50% 88%, #0b0d14cc 0%, #0b0d1445 46%, #00000000 100%),\nradial-gradient(24% 57% at 88% 75%, #0e121ccc 0%, #0e121c45 46%, #00000000 100%),\nradial-gradient(57% 24% at 75% 38%, #63525149 0%, #63525119 46%, #00000000 100%),\nlinear-gradient(180deg, #a97e66ff 0%, #62514bf0 48%, #202129ff 100%),\nlinear-gradient(90deg, #8f776580 0%, #62514b29 50%, #43363980 100%),\nradial-gradient(70% 70% at 18% 18%, #b38b6b94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 18%, #795c5694 0%, #00000000 72%),\nradial-gradient(70% 70% at 18% 82%, #4b464b94 0%, #00000000 72%),\nradial-gradient(70% 70% at 82% 82%, #12161f94 0%, #00000000 72%)",
};

const themeColors: Record<string, string> = {
  "Bruno Mars": "#484848",
  Rihanna: "#181818",
  Future: "#98b8c8",
  Beyonce: "#080808",
  "Taylor Swift": "#181818",
  Labrinth: "#180818",
  "Kendrick Lamar": "#383858",
  Drake: "#080808",
  "Ariana Grande": "#281808",
  "Jon Bellion": "#c8d8c8",
  "Burna Boy": "#081818",
  "Ayra Starr": "#080808",
  Davido: "#5898a8",
  "Fireboy DML": "#e8e8e8",
  Olamide: "#080818",
};

const artistEntries = [
  {
    name: "Bruno Mars",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/01.webp"
      ].default,
    albums: [],
  },
  {
    name: "Rihanna",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/02.webp"
      ].default,
    albums: [],
  },
  {
    name: "Future",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/03.webp"
      ].default,
    albums: [],
  },
  {
    name: "Beyonce",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/04.webp"
      ].default,
    albums: [],
  },
  {
    name: "Taylor Swift",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/05.webp"
      ].default,
    albums: [],
  },
  {
    name: "Labrinth",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/06.webp"
      ].default,
    albums: [],
  },
  {
    name: "Kendrick Lamar",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/07.webp"
      ].default,
    albums: [],
  },
  {
    name: "Drake",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/08.webp"
      ].default,
    albums: [],
  },
  {
    name: "Ariana Grande",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/09.webp"
      ].default,
    albums: [],
  },
  {
    name: "Jon Bellion",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/10.webp"
      ].default,
    albums: [],
  },
  {
    name: "Burna Boy",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/11.webp"
      ].default,
    albums: [],
  },
  {
    name: "Ayra Starr",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/12.webp"
      ].default,
    albums: [],
  },
  {
    name: "Davido",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/13.webp"
      ].default,
    albums: [],
  },
  {
    name: "Fireboy DML",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/14.webp"
      ].default,
    albums: [],
  },
  {
    name: "Olamide",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/music-project/15.webp"
      ].default,
    albums: [],
  },
];

export const artists: Artist[] = artistEntries.map((artist) => ({
  ...artist,
  backgroundGradient: gradients[artist.name],
  themeColor: themeColors[artist.name],
}));
