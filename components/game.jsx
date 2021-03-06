import React from 'react';
import GameToo from './game_hook'
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
    }

    componentDidMount(){
       this.rollDice()
       this.endGame()
    }
  
    restartGame(){
        this.setState({ gameOver: false})
    }

    endGame(){
        let count = 0
        let len = this.state.tiles.length;
        this.state.tiles.forEach(el => {
            if (el === 0){count++}
        })
        if(count === len){
            this.setState({gameOver:true})
        }
    }

    chooseTiles(roll_val, num1, num2=0){
        // debugger
       num1 = parseInt(num1)
       num2 = parseInt(num2)
       let idx1 = this.state.tiles.indexOf(num1);
       let idx2 = null
       let new_arr = this.state.tiles

       if (num1 !== roll_val){
        //    return <div>please choose one or two numbers that add to the combined dice roll</div>
        console.log('please choose one or two numbers that add to the combined dice roll')
       }
       if (num2 !== 0){
           
           idx2 = this.state.tiles.indexOf(num2);
       }
       if ((num1 + num2) === roll_val){      
            new_arr[idx1] = 0
            if (num2) new_arr[idx2] = 0
            this.setState({tiles: new_arr})
       }
    }

    rollDice(){
        let one = Math.floor(Math.random() * (7 - 1) + 1);
        let two = Math.floor(Math.random() * (7 - 1) + 1);
        this.setState({dice1:one, dice2:two});
    }


    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render(){
        let roll_total = this.state.dice1 + this.state.dice2;
        let count = 0
        return(
            <div id='master'>
                <GameToo/>
                {this.state.gameOver === false ? 
          
                    <div className='tiles-master'>
                
                        <div className='tiles'>
                            {this.state.tiles.map(item => (
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
                            <form className='tile-form' onSubmit={() => this.chooseTiles(roll_total, this.state.num1, this.state.num2)}>
                                <input type="text" value={this.state.num1} onChange={this.update('num1')} />
                                <input type="text" value={this.state.num2} onChange={this.update('num2')} />
                                <input type='submit' />
                            </form>
                        </div>
                  
                        <div id='dice'>Dice Roll:{this.state.dice1}, {this.state.dice2}</div>
               
                    </div>
                :
                <div>
                        <h1>GAME OVER</h1>
                        <button onClick={() => this.restartGame()}>restart game</button>
                </div>
              
                    }
            </div>
       
        )
    }
    
}

export default Game;