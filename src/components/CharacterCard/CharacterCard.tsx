import { Link } from 'react-router-dom';
import cls from './CharacterCard.module.css';
import { Character } from '../../models/character';
import { useAuthActions } from '../../hooks/useAuthActions';
import Like from '../../assets/like.svg?react';
import Liked from '../../assets/like-active.svg?react';

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
  const { user } = useAuthActions();

  return (
    <div className={cls.container}>
      <div className={cls.mainInfo}>
        <Link to={`/${id}`} className={cls.link}>
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
      {user && (
        <button
          className={cls.button}
          type="button"
          onClick={toggleFavorite}
          disabled={isLoading}
        >
          {isFavorite ? <Liked /> : <Like />}
        </button>
      )}
    </div>
  );
}

export default CharacterCard;
