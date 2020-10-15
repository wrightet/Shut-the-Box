import React, {useState, useEffect, setState} from 'react';
import Game from './game';

function GameToo(){
    let tiles = useState([1,2,3,4,5,6,7,8,9]);
    let gameOver = useState(false);
    let [num1] = useState(0);
    let [num2] = useState(0);
    let [dice1] = useState(0);
    let [dice2] = useState(0);
    let count = 0;
 
    function diceRoll(){
        let one = Math.floor(Math.random() * (7 - 1) + 1);
        let two = Math.floor(Math.random() * (7 - 1) + 1);
        dice1 = one;
        dice2 = two;
    }
    function update(field) {
        return e => setState({ [field]: e.target.value })
    }
    function restartGame(){
        setState({ gameOver: false })
    }
    function chooseTiles(roll_val, num1, num2 = 0) {
        // debugger
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        let idx1 = tiles.indexOf(num1);
        let idx2 = null
        let new_arr = tiles

        if (num1 !== roll_val) {
            //    return <div>please choose one or two numbers that add to the combined dice roll</div>
            console.log('please choose one or two numbers that add to the combined dice roll')
        }
        if (num2 !== 0) {

            idx2 = tiles.indexOf(num2);
        }
        if ((num1 + num2) === roll_val) {
            new_arr[idx1] = 0
            if (num2) new_arr[idx2] = 0
            setState({ tiles: new_arr })
        }
    }
    function endGame() {
        let count = 0
        let len = tiles.length;
        tiles.forEach(el => {
            if (el === 0) { count++ }
        })
        if (count === len) {
            setState({ gameOver: true })
        }
    }
    useEffect(() => {
        diceRoll();
        endGame();
    })
    return (
        <div id='master'>
           
            {/* {gameOver === false ? */}

                <div className='tiles-master'>

                    <div className='tiles'>
                        {tiles.map(item => (
                            <div
                                className='indiv-tile'
                                key={count++}
                                // checked={value === item}
                                value={item}
                            // onChange={this.update()}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className='file-form-master'>
                        <form className='tile-form' onSubmit={() => chooseTiles(roll_total, num1,num2)}>
                            <input type="text" value={num1} onChange={() => update('num1')} />
                            <input type="text" value={num2} onChange={() => update('num2')} />
                            <input type='submit' />
                        </form>
                    </div>

                    <div id='dice'>Dice Roll:{dice1}, {dice2}</div>

                </div>
                {/* // : */}
                <div>
                    <h1>GAME OVER</h1>
                    <button onClick={() => restartGame()}>restart game</button>
                </div>

            {/* // } */}
        </div>

    )
}

export default GameToo;