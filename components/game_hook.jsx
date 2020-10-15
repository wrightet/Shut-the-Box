import React, {useState, useEffect} from 'react';
import Game from './game';

function GameToo(){
    const tiles = useState([1,2,3,4,5,6,7,8,9]);
    const gameOver = useState(false);
    const [num1] = useState(0);
    const [num2] = useState(0);
    const [dice1] = useState(0);
    const [dice2] = useState(0);
    let count = 0;
    useEffect(() => {
        document.title = `Dice Roll: {dice1}, {dice2}`
    })
    function diceRoll(){
        let one = Math.floor(Math.random() * (7 - 1) + 1);
        let two = Math.floor(Math.random() * (7 - 1) + 1);
        this.setState({ dice1: one, dice2: two });
    }
    return(
        <div>
            {tiles.map(item => (
                <div
                    className='indiv-tile'
                    key={count++}
                    value={item.toString()}
                >
                    {item}
                </div>
            ))}
            <div>Dice Roll: {dice1}, {dice2}</div>
        
        </div>
    );
}

export default GameToo;