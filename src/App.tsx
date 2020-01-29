import React from 'react'
import './App.less'
import {Main} from './screens/Main'
import {loadSpriteAsync} from './services/SpriteLoader'

const App: React.FC = () => {
    loadSpriteAsync()

   return (
        <Main/>
  );
}

export default App;
