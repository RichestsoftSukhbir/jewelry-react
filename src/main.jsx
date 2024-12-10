import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import Header from './layout/Header.jsx'
import MainLayout from './layout/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <MainLayout>
      <App />
    </MainLayout>
  </Router>,
)
