import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewDiaryProvider from './context/NewDiaryContext.jsx';
import NewHealthTracingProvider from './context/HealthTrackingContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewHealthTracingProvider>
    <NewDiaryProvider>
    <App />
    </NewDiaryProvider>
    </NewHealthTracingProvider>
  </React.StrictMode>
  
)
