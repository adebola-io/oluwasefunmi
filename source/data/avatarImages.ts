const imageModules = import.meta.glob<{ default: string }>(
  "/source/data/images/avatars/*.{webp,jpg,jpeg,png}",
  { eager: true },
);

export interface AvatarImage {
  name: string;
  url: string;
}

const avatarMap: Record<string, AvatarImage> = {};

for (const path of Object.keys(imageModules)) {
  const match = path.match(/\/([^/]+)\.(webp|jpg|jpeg|png)$/);
  if (match) {
    const name = match[1];
    avatarMap[name] = {
      name,
      url: imageModules[path].default,
    };
  }
}

export function getAvatarImage(name: string): AvatarImage | undefined {
  return avatarMap[name];
}

export function getAllAvatarImages(): AvatarImage[] {
  return Object.values(avatarMap).sort((a, b) => a.name.localeCompare(b.name));
}

export function getAvatarNames(): string[] {
  return Object.keys(avatarMap).sort();
}

export function hasAvatarImage(name: string): boolean {
  return name in avatarMap;
}
