import React from 'react';
import Tiles from './tiles';
class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            gameOver: false,
            num1: 0,
            num2:0
        }
        // this.tiles = [1,2,3,4,5,6,7,8,9];
        // this.dice1 = [1,2,3,4,5,6];
        // this.dice2 = [1,2,3,4,5,6];
        this.num1 = 0;
        this.num2 = 0;
        this.restartGame = this.restartGame.bind(this);
        this.chooseTiles = this.chooseTiles.bind(this);
    }

    restartGame(){
        this.setState({tiles:[1,2,3,4,5,6,7,8,9]})
        this.setState({ gameOver: false})
    }

    chooseTiles(roll_val, num1, num2=0){
       console.log(num1,num2)
       let idx1 = this.state.tiles.indexOf(num1);
       let idx2 = null
       let new_arr = this.state.tiles
       if (num2 !== 0){
           idx2 = this.state.tiles.indexOf(num2);
       }
       if (num1 + num2 === roll_val){
           new_arr[idx1] = 0
           if (num2) new_arr[idx2] = 0
           this.setState({tiles: new_arr})
       }

    }
    update(field){
       return e => this.setState({[field]: e.target.value})
    }

    render(){
        let dice1 = Math.floor(Math.random() * (7 - 1) + 1);
        let dice2 = Math.floor(Math.random() * (7 - 1) + 1);
        let num1 = 0;
        let num2 = 0;
        let roll_total = dice1 + dice2;
        let tiles = this.state.tiles;
        let count = 0;
        console.log(this.state.tiles)
        return(
            <div>
             
              
                <div>Dice Roll:{dice1}, {dice2}</div>
                {this.state.gameOver === false ? 
                // <div>
                //     <form onSubmit={this.chooseTiles((roll_total,this.state.num1, this.state.num2))}>
                //         <input type="integer"  onChange={() => this.update('num1')}/>
                //         <input type="integer"  onChange={() => this.update('num2')}/>
                //         <input type="submit"/>
                //     </form>
                // </div>
                    <div className='tiles'>
                        <form onSubmit={this.chooseTiles(roll_total, num1, num2)}>
                            {tiles.map(el => (
                                <label key={count++} htmlFor="">{el}
                                    <input type='radio' value={el} />
                                </label>
                            ))}
                            <input type='submit' />
                        </form>
                    </div>
                :
                <h1>GAME OVER</h1>}
                {/* <button onClick={() => this.chooseTiles(5, 2, 3)}>choose</button> */}
                <button onClick={() => this.restartGame()}>restart game</button>
            </div>
       
        )
    }
    
}

export default Game;