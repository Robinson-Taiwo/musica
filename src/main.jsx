// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './assets/Components/Anonymous/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './assets/Components/Anonymous/contexts/authContext'; // Adjust the path as necessary

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* Wrap App with AuthProvider */}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
