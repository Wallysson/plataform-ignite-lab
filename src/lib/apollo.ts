import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ol40i50kz601w7bxyy2qth/master',
  cache: new InMemoryCache()
})