import React from 'react';

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
        // this.tiles = [1,2,3,4,5,6,7,8,9];
        // this.dice1 = [1,2,3,4,5,6];
        // this.dice2 = [1,2,3,4,5,6];
    }

    render(){
        let dice1 = Math.floor(Math.random() * (7 - 1) + 1);
        let dice2 = Math.floor(Math.random() * (7 - 1) + 1);
        let roll_total = dice1 + dice2;
        return(
            <div>Dice Roll:{dice1}, {dice2}</div>
        )
    }
    
}

export default Game;