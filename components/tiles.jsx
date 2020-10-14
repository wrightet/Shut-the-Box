import React from 'react';

export class Tiles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tiles: this.props.tiles
        }
        
    }

    // componentDidUpdate(){
    //     debugger
    //     console.log('update')
    //     console.log(this.props.tiles)
    //     console.log(this.state.tiles)
    // }
    update(field) {
        
        return e => this.setState({ [field]: e.target.value })
    }

    render(){
        console.log(this.props)
        // debugger
        let count = 0;
        return(
            <div className='tiles'>
                {this.props.tiles.map(item => (
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
        )
    }
    
}

