import { For } from "retend";
import { Basket } from "./Basket";
import { artists } from "../../data/music-project";
import { ArtistFolder } from "./ArtistFolder";
import { BasketItem } from "./BasketItem";

export function ArtistBasket() {
  return (
    <Basket>
      {For(artists, (artist, index) => {
        return (
          <BasketItem index={index}>
            <ArtistFolder artist={artist} />
          </BasketItem>
        );
      })}
    </Basket>
  );
}
