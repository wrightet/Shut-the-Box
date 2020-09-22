import React from 'react';

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.tiles = [1,2,3,4,5,6,7,8,9];
        this.dice1 = [1,2,3,4,5,6];
        this.dice2 = [1,2,3,4,5,6];
    }

    render(){
        return(
            <div> test</div>
        )
    }
    
}

export default Game;