import './App.css';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes/AppRouter';
import { useAuthListener } from './hooks/useAuthListener';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from './contexts/themeContext';

function App() {
  useAuthListener();

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="app">
          <AppRouter />
          <Toaster />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
