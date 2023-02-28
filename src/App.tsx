import { Toaster } from 'react-hot-toast';
import MainPage from './views/MainPage';

const App = () => (
  <>
    <MainPage/>
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          backgroundColor: '#061323',
          color: '#c0ffa5',
        }
      }}
    />
  </>
);

export default App
