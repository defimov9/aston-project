import cls from './SuggestItem.module.css';
import { Character } from '../../models/character';

interface Props {
  character: Character;
  handleSuggestClick: () => void;
}

function SuggestItem({ character, handleSuggestClick }: Props) {
  return (
    <button
      type="button"
      className={cls.container}
      onClick={handleSuggestClick}
    >
      <div className={cls.name}>
        <img src={character.image} alt={character.name} className={cls.image} />
        {character.name}
      </div>
    </button>
  );
}

export default SuggestItem;
