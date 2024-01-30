import './App.css';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import { useAuth } from './hooks/useAuth';

function App() {
  const { subscribeToAuthChanges } = useAuth();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges();
    return unsubscribe;
  }, [subscribeToAuthChanges]);

  return (
    <div className="app">
      <AppRouter />
      <Toaster />
    </div>
  );
}

export default App;
