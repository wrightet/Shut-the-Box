import React from 'react';

class Tiles extends React.Component{
    constructor(props) {
        super(props);
        // console.log('tiles',props)
    }

    render(){
        let tiles = this.props.tiles;
        console.log('tiles', tiles)
        let count = 0
        return(
            <div className='tiles'>
                <form>
                    {tiles.map(el => (
                        <label  key={count++} htmlFor="">{el}
                        <input type='radio' value={el}/>
                        </label>
                    ))}
                    <input type='submit'/>
                </form>
            </div>
        )
    }
    
}

export default Tiles;
