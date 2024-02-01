import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '../../models/character';

interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_RICK_AND_MORTY_API_URL,
  }),
  endpoints: (builder) => ({
    fetchAllCharacters: builder.query<Character[], void>({
      query: () => '/character',
      transformResponse: (response: CharactersResponse) => response.results,
    }),
    fetchCharacterById: builder.query<Character, string>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useFetchAllCharactersQuery, useFetchCharacterByIdQuery } =
  charactersApi;
