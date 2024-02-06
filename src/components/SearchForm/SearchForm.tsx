import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFetchCharacterByNameQuery } from '../../store/api/characterApi';
import SuggestItem from '../SuggestItem/SuggestItem';
import cls from './SearchForm.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import classNames from '../../utils/classNames';
import { useHistory } from '../../hooks/useHistory';
import { Character } from '../../models/character';

function SearchForm() {
  const [search, setSearch] = useState('');
  const [isSuggestHidden, setIsSuggestHidden] = useState(true);
  const debouncedSearch = useDebounce(search);
  const {
    data: searchedCharacters,
    error,
    isLoading,
    isFetching,
  } = useFetchCharacterByNameQuery(debouncedSearch, {
    skip: debouncedSearch.length === 0,
  });

  const suggestionsRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const navigate = useNavigate();
  const { addHistory } = useHistory();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Element) &&
        e.target !== inputRef.current
      ) {
        setIsSuggestHidden(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearch(name);
  }, [name, searchParams]);

  const handleInputFocus = () => setIsSuggestHidden(false);

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    if (search.trim() && name !== search.trim()) {
      const date = new Date().toJSON();
      addHistory({ date, name: search });
      navigate(`/search?name=${search}`);
      setIsSuggestHidden(true);
      inputRef.current?.blur();
    }
  };

  const handleSuggestClick = (character: Character) => {
    navigate(`/character/${character.id}`);
    setIsSuggestHidden(true);
  };

  const renderContent = () => {
    if (isLoading || isFetching) {
      return <div>Загрузка...</div>;
    }

    if (error) {
      return <div>Ничего не нашлось</div>;
    }

    if (searchedCharacters && searchedCharacters.length > 0) {
      return searchedCharacters.map((character) => (
        <SuggestItem
          key={character.id}
          character={character}
          handleSuggestClick={() => handleSuggestClick(character)}
        />
      ));
    }

    return null;
  };

  return (
    <div className={cls.container}>
      <form className={cls.form} onSubmit={handleSubmitSearch}>
        <input
          type="text"
          placeholder="Введите имя персонажа"
          className={cls.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleInputFocus}
          ref={inputRef}
        />
        <button type="submit" className={cls.submitBtn}>
          Найти
        </button>
      </form>
      <div
        className={classNames(cls.suggestions, {
          [cls.hidden]: isSuggestHidden || search.length === 0,
        })}
        ref={suggestionsRef}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default SearchForm;
