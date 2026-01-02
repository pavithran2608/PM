import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { ClerkProvider } from '@clerk/clerk-react'
import React from 'react' // Make sure React is imported

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// This check is important
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key. Did you forget to create a .env.local file?");
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                    <App />
                </ClerkProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)