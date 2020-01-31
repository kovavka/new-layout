import React from 'react'
import {Main} from './screens/Main'
import {loadSpriteAsync} from './services/SpriteLoader'
import {preventIosAutoZoom} from "./services/Utils";

const App: React.FC = () => {
    loadSpriteAsync()
    preventIosAutoZoom()

   return (
        <Main/>
  );
}

export default App;
