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
            <div>
                <ul>
                    {tiles.map(el => (
                        <li key={count++}>{el}</li>
                    ))}
                </ul>
            </div>
        )
    }
    
}

export default Tiles;
