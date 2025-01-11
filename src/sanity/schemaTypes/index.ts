import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { tagsType } from "./tagsType";
import { galleryType } from "./galleryType";
import { seriesType } from "./seriesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    tagsType,
    galleryType,
    seriesType,
  ],
};
