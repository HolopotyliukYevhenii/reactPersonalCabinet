import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app'
import { LoginPage  } from 'src/pages/LoginPage'
const reactRoot = createRoot(
  document.getElementById('root')!,
)

reactRoot.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
)
