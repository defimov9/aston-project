import HistoryItem from '../../components/HistoryItem/HistoryItem';
import { useHistory } from '../../hooks/useHistory';
import cls from './History.module.css';

function History() {
  const { history, removeHistory, isHistoryFetching } = useHistory();

  if (isHistoryFetching) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={cls.container}>
      <h2>История поиска</h2>
      {history.length > 0 ? (
        history.map((historyItem) => (
          <HistoryItem
            key={historyItem.date}
            historyItem={historyItem}
            handleRemoveHistory={() => removeHistory(historyItem)}
          />
        ))
      ) : (
        <h3>Вы еще ничего не искали</h3>
      )}
    </div>
  );
}

export default History;
