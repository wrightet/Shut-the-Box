import React from 'react';
import {Tiles, TilesToo} from './tiles';

const twoSelected = (tiles) => {

    tiles.forEach(el => {
        console.log(el)
    })
}
class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            gameOver: false,
            num1: 0,
            num2:0,
            dice1: 0,
            dice2: 0,
        }
        this.restartGame = this.restartGame.bind(this);
        this.chooseTiles = this.chooseTiles.bind(this);
        // this.update = this.update.bind(this);
    }

    componentDidMount(){
       console.log('dice',this.rollDice())
    }
    restartGame(){
        this.setState({tiles:[1,2,3,4,5,6,7,8,9]})
        this.setState({ gameOver: false})
    }

    chooseTiles(roll_val, num1, num2=0){
       
       num1 = parseInt(num1)
       num2 = parseInt(num2)
       let idx1 = this.state.tiles.indexOf(num1);
       let idx2 = null
       let new_arr = this.state.tiles
       console.log(roll_val, num1, num2)
       if (num2 !== 0){
           
           idx2 = this.state.tiles.indexOf(num2);
       }
       if ((num1 + num2) === roll_val){
           new_arr[idx1] = 0
           if (num2) new_arr[idx2] = 0
           console.log('new_arr',new_arr)
          
           this.setState({tiles: new_arr})
       }

    }

    rollDice(){
        let one = Math.floor(Math.random() * (7 - 1) + 1);
        let two = Math.floor(Math.random() * (7 - 1) + 1);
        this.setState({dice1:one, dice2:two});
    }
    // update(field){
    //     console.log('state',this.state[field])
    //    return e => this.setState({[field]: e.target.value})
    // }

    update(field) {
        console.log('field',field)
        return e => this.setState({ [field]: e.target.value })
    }

    render(){
      
        let roll_total = this.state.dice1 + this.state.dice2;
        let tiles = this.state.tiles;
        let count = 0;
        console.log('num1, num2', this.state.num1, this.state.num2)
       
        return(
            <div id='master'>
             
              
               
                {this.state.gameOver === false ? 
                // <div>
                //     <form onSubmit={this.chooseTiles((roll_total,this.state.num1, this.state.num2))}>
                //         <input type="integer"  onChange={() => this.update('num1')}/>
                //         <input type="integer"  onChange={() => this.update('num2')}/>
                //         <input type="submit"/>
                //     </form>
                // </div>
                    <div className='tiles-master'>
                        {/* <Tiles
                            onChange={this.update('checked')}
                        /> */}
                        <TilesToo/>
                        <div className='file-form-master'>
                            <form className='tile-form' onSubmit={this.chooseTiles(roll_total, this.state.num1, this.state.num2)}>
                                <input type="text" value={this.state.num1} onChange={this.update('num1')} />
                                <input type="text" value={this.state.num2} onChange={this.update('num2')} />
                                <input type='submit' />
                            </form>
                        </div>
                  
                        <div className='dice'>Dice Roll:{this.state.dice1}, {this.state.dice2}</div>
                        {/* <button onClick={this.rollDice()}>Roll Dice</button> */}
                        {/* {this.chooseTiles(<Tiles/>)} */}
                    </div>
                :
                <h1>GAME OVER</h1>}
                {/* <button onClick={() => this.chooseTiles(5, 2, 3)}>choose</button> */}
                {/* <button onClick={() => this.restartGame()}>restart game</button> */}
            </div>
       
        )
    }
    
}

export default Game;