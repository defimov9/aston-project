import CharacterCard from '../../components/CharacterCard/CharacterCard';
import useFavorite from '../../hooks/useFavorite';
import { Character } from '../../models/character';
import { useFetchAllCharactersQuery } from '../../store/api/characterApi';
import cls from './Main.module.css';

function Main() {
  const { data: characters } = useFetchAllCharactersQuery();
  const { toggleFavorite, isFavorite, isLoading } = useFavorite();

  return (
    <div>
      <h2 className={cls.title}>Персонажи</h2>
      <div className={cls.cardContainer}>
        {characters?.map((character: Character) => (
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

export default Main;
