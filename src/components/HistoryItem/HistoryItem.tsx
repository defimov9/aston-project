import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from './HistoryItem.module.css';
import { History } from '../../models/history';

interface Props {
  historyItem: History;
  handleRemoveHistory: () => void;
}

function HistoryItem({ historyItem, handleRemoveHistory }: Props) {
  return (
    <div className={cls.container}>
      <button
        type="button"
        onClick={handleRemoveHistory}
        className={cls.removeBtn}
      >
        Удалить
      </button>
      <Link to={`/search?name=${historyItem.name}`} className={cls.link}>
        <p>{historyItem.name}</p>
        <p>{new Date(historyItem.date).toLocaleString()}</p>
      </Link>
    </div>
  );
}

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveHistory: PropTypes.func.isRequired,
};

export default HistoryItem;
