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
  console.log("Fetching data from Sanity...");
  console.log("Query:", query);
  try {
    const data = await client.fetch(query, params);
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch categories");
  }
};
