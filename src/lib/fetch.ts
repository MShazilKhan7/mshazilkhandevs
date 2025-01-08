("only server");
import { client } from "@/sanity/lib/client";
import { QueryParams } from "@sanity/client";
import { cache } from "react";

interface Props {
  query: string;
  params?: QueryParams;
  fetchOptions?: {
    cache?: RequestCache;
    next?: {
      revalidate?: number;
    };
  };
}

const DEFAULT_FETCH_OPTIONS = {
  cache: "no-store",
} as const;

export const fetchDataFromSanity = async ({
  query,
  params,
  fetchOptions = DEFAULT_FETCH_OPTIONS,
}: Props): Promise<any[]> => {
  try {
    const data = await client.fetch(query, params, fetchOptions);
    console.log("fetched data successfully", data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch");
  }
};
