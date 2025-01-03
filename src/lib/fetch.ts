("only server");
import { client } from "@/sanity/lib/client";
import { QueryParams } from "@sanity/client";

interface Props {
  query: string;
  params?: QueryParams;
}

const DEFAULT_PARAMS = {} as QueryParams;

export const fetchDataFromSanity = async ({
  query,
  params = DEFAULT_PARAMS,
}: Props): Promise<any[]> => {
  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
