import { useNavigate, useParams } from 'react-router-dom';
import { useFetchCharacterByIdQuery } from '../../store/api/characterApi';
import cls from './Character.module.css';

function Character() {
  const { characterId } = useParams();
  const { data: character } = useFetchCharacterByIdQuery(characterId ?? '');
  const navigate = useNavigate();

  if (!character) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  const { name, image, status, species, gender, location } = character;

  return (
    <div className={cls.container}>
      <img className={cls.image} src={image} alt={name} />
      <div className={cls.textInfoContainer}>
        <h2 className={cls.title}>{name}</h2>
        <p className={cls.textInfo}>
          Status: <span className={cls.textData}>{status}</span>
        </p>
        <p className={cls.textInfo}>
          Specie: <span className={cls.textData}>{species}</span>
        </p>
        <p className={cls.textInfo}>
          Gender: <span className={cls.textData}>{gender}</span>
        </p>
        <p className={cls.textInfo}>
          Location: <span className={cls.textData}>{location.name}</span>
        </p>
        <button className={cls.backBtn} type="button" onClick={goBack}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default Character;
