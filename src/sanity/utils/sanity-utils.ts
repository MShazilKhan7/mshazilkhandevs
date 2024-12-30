import { client } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

export const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
