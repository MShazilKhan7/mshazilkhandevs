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
  cache: "no-store",
} as const;

// the QueryResponse here suggests that the function will return the response of this generic type 

export const fetchDataFromSanity = async <QueryResponse>({
  query,
  params,
  fetchOptions = DEFAULT_FETCH_OPTIONS,
}: Props): Promise<QueryResponse> => {
  try {
    console.log("params in a sanity fetch function", params);
    const data = await client.fetch(query, params, fetchOptions);
    console.log("fetched data successfully", data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch");
  }
};
