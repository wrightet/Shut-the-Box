import React from 'react';

class Tiles extends React.Component{
    constructor(props) {
        super(props);
        console.log('tiles',props)
    }
    render(){
        return(
            <div>
                these are the tiles
            </div>
        )
    }
    
}

export default Tiles;
