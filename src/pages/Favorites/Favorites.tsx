import CharacterCard from '../../components/CharacterCard/CharacterCard';
import useFavorite from '../../hooks/useFavorite';
import { Character } from '../../models/character';
import cls from './Favorites.module.css';

function Favorites() {
  const {
    favorites,
    toggleFavorite,
    isFavorite,
    isLoading,
    isFavoriteFetching,
  } = useFavorite();

  if (isFavoriteFetching) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2 className={cls.title}>Избранное</h2>
      <div className={cls.cardContainer}>
        {favorites.length > 0 ? (
          favorites.map((character: Character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={isFavorite(character)}
              toggleFavorite={() => toggleFavorite(character)}
              isLoading={isLoading}
            />
          ))
        ) : (
          <h3>Вы еще ничего не добавляли в избранное</h3>
        )}
      </div>
    </div>
  );
}

export default Favorites;
