import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import MainProvider from './provider/main.provider.jsx';

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);

root.render(
  <MainProvider>
    <App />
  </MainProvider>
)
