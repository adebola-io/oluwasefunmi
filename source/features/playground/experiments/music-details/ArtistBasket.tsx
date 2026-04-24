import { For } from "retend";
import { Basket } from "./Basket";
import { artists } from "../../data/music-project";
import { ArtistFolder } from "./ArtistFolder";
import { BasketItem } from "./BasketItem";

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export function ArtistBasket() {
  return (
    <Basket>
      {For(shuffleArray(artists), (artist, index) => {
        return (
          <BasketItem index={index} depth="12px">
            <ArtistFolder artist={artist} />
          </BasketItem>
        );
      })}
    </Basket>
  );
}
