import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import counterstore from './Store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={counterstore}>
      <App />
    </Provider>
  </React.StrictMode>
)
