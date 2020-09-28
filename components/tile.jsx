import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        <li>{this.props.value}</li>
    }
}