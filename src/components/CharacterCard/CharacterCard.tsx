import { Link } from 'react-router-dom';
import cls from './CharacterCard.module.css';
import { Character } from '../../models/character';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

interface Props {
  character: Character;
  isFavorite: boolean;
  toggleFavorite: () => void;
  isLoading: boolean;
}

function CharacterCard({
  character,
  isFavorite,
  toggleFavorite,
  isLoading,
}: Props) {
  const { id, name, status, species, location, image } = character;

  return (
    <div className={cls.container}>
      <FavoriteButton
        isLoading={isLoading}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      <div className={cls.mainInfo}>
        <Link to={`/character/${id}`} className={cls.link}>
          <img className={cls.image} src={image} alt={name} />
          <p className={cls.name}>{name}</p>
        </Link>
      </div>
      <div className={cls.info}>
        <p className={cls.textInfo}>
          Status: <span className={cls.textData}>{status}</span>
        </p>
        <p className={cls.textInfo}>
          Specie: <span className={cls.textData}>{species}</span>
        </p>
        <p className={cls.textInfo}>
          Last location: <span className={cls.textData}>{location.name}</span>
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
