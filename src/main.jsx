import React from 'react'
// import 'tailwindcss/tailwind.css';

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App'
import './index.css'
import { Provider } from 'react-redux'
import  {store, persistor } from './assets/Components/Anonymous/Store/Store'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

<Provider store={store} >

<PersistGate loading={null} persistor={persistor} >
      <App />
</PersistGate>

</Provider>

    </BrowserRouter>
  </React.StrictMode>,
)
