import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Editor } from '@craftjs/core'
import { Text } from './components/user/Text/Text'
import { Container } from './components/user/Container/Container.jsx'
import { LayoutTwoOne } from './components/user/LayoutTwoOne/LayoutTwoOne.jsx'
import { LayoutOne } from './components/user/LayoutOne/LayoutOne.jsx'
import { Root } from  './components/user/Root/Root.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Editor resolver={{Root, Text, Container, LayoutTwoOne, LayoutOne}} indicator={{success: '#8A2EE8'}}>
      <App />
    </Editor>  
  </React.StrictMode>,
)
