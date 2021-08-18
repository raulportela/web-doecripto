import React from 'react';
import '../src/global.scss';
import '../src/styles/nav.scss';
import '../src/styles/header.scss';
import Dash from './pages/Dash';
import Main from './pages/Main';
import AlterarInflacao from './pages/AlterarInflacao';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Dash></Dash>
      <Main></Main>
    </div>
  );
}

export default App;
