("only server");
import { client } from "@/sanity/lib/client";
import { QueryParams, RawQueryResponse } from "@sanity/client";
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
  cache: "force-cache", // Cache data during build,
  next: { revalidate: 60 }, // Match ISR setting
} as const;

// the QueryResponse here suggests that the function will return the response of this generic type

export const fetchDataFromSanity = async <QueryResponse>({
  query,
  params,
  fetchOptions = DEFAULT_FETCH_OPTIONS,
}: Props): Promise<QueryResponse> => {
  try {
    const data = await client.fetch(query, params, fetchOptions);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch the data ${error}`);
  }
};
