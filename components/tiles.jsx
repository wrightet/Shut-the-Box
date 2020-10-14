import React from 'react';

export class Tiles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value:null
        }
        
    }

 
    update(field) {
        
        return e => this.setState({ [field]: e.target.value })
    }

    render(){
        console.log(this.props)
        // debugger
        return(
            <div className='tiles'>
                {this.props.tiles.map(item => (
                <div
                    className='indiv-tile'
                    key={item}
                    // checked={value === item}
                    value={item}
                    // onChange={this.update()}
                >
                    {item}
                </div>
            ))}
            </div>
        )
    }
    
}

