import { useNavigate } from 'react-router-dom';
import cls from './FavoriteButton.module.css';
import Like from '../../assets/like.svg?react';
import Liked from '../../assets/like-active.svg?react';
import { useAuthActions } from '../../hooks/useAuthActions';

interface Props {
  isLoading: boolean;
  toggleFavorite: () => void;
  isFavorite: boolean;
}

function FavoriteButton({ isLoading, toggleFavorite, isFavorite }: Props) {
  const { user } = useAuthActions();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      toggleFavorite();
    } else {
      navigate('/login');
    }
  };

  return (
    <button
      className={cls.button}
      type="button"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isFavorite ? <Liked /> : <Like />}
    </button>
  );
}

export default FavoriteButton;
