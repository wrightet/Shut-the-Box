import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import GameToo from './components/game_hook'
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<GameToo />, root);
});