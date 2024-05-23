import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ErrorBoundary } from './ErrorBoundary.tsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*@ts-expect-error 123*/}
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
