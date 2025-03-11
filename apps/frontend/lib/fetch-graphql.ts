import { GRAPHQL_URL } from "./constants";

export const fetchGraphQL = async (query: string, variables = {}) => {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    console.error("GraphQL errors", errors);
    throw new Error(errors[0].message);
  }

  return data;
};
