import './App.css';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes/AppRouter';
import { useAuthListener } from './hooks/useAuthListener';

function App() {
  useAuthListener();

  return (
    <div className="app">
      <AppRouter />
      <Toaster />
    </div>
  );
}

export default App;
