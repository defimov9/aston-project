import { useSearchParams } from 'react-router-dom';
import { useFetchCharacterByNameQuery } from '../../store/api/characterApi';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import useFavorite from '../../hooks/useFavorite';
import cls from './Search.module.css';

function Search() {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');
  const { toggleFavorite, isFavorite } = useFavorite();

  const {
    data: searchedCharacters = [],
    isLoading,
    isFetching,
    error,
  } = useFetchCharacterByNameQuery(searchName || '');

  if (isLoading || isFetching) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2 className={cls.title}>Результаты поиска для: {searchName}</h2>
      <div className={cls.container}>
        {error ? (
          <h3>Ничего не нашлось</h3>
        ) : (
          searchedCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isLoading={isLoading}
              isFavorite={isFavorite(character)}
              toggleFavorite={() => toggleFavorite(character)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
