import CharacterCard from '../../components/CharacterCard/CharacterCard';
import useFavorite from '../../hooks/useFavorite';
import { Character } from '../../models/character';
import cls from './Favorites.module.css';

function Favorites() {
  const { favorites, toggleFavorite, isFavorite, isLoading } = useFavorite();
  return (
    <div>
      <h2 className={cls.title}>Избранное</h2>
      <div className={cls.cardContainer}>
        {favorites.map((character: Character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isFavorite={isFavorite(character)}
            toggleFavorite={() => toggleFavorite(character)}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
