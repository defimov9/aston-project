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

const transformResponse = (response: CharactersResponse) => response.results;

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_RICK_AND_MORTY_API_URL,
  }),
  endpoints: (builder) => ({
    fetchAllCharacters: builder.query<Character[], void>({
      query: () => '/character',
      transformResponse,
    }),
    fetchCharacterById: builder.query<Character, string>({
      query: (id) => `/character/${id}`,
    }),
    fetchCharacterByName: builder.query<Character[], string>({
      query: (name) => `/character/?name=${name}`,
      transformResponse,
    }),
  }),
});

export const {
  useFetchAllCharactersQuery,
  useFetchCharacterByIdQuery,
  useFetchCharacterByNameQuery,
} = charactersApi;
