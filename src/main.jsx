import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import MainProvider from './provider/main.provider.jsx';

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);

root.render(
  <StrictMode>
    <BrowserRouter>
      <MainProvider>
        <App />
      </MainProvider>
    </BrowserRouter>
  </StrictMode>,
)
