import React from 'react';
const Range = (min, max) => Array(max - min + 1).fill().map((_, i) => min + i)

// const Tile =({checked, onChange, value}) => {
//     console.log(checked)
//     return(
//     <label htmlFor="">
//         {value}
//         <input type="radio"
//         checked={checked}
//         className='tile'
//         onChange={(e) => {onChange(e)}}
//         value={value}
//         />
//     </label>
//     )
// }
// export const Tiles = ({value, onChange}) => {
//     return (
//         <div>
//             {Range(1,9).map(item => (
//                 <Tile
//                 key={item}
//                 checked={value===item}
//                 value={item}
//                 onChange={onChange}
//                 />
//             ))}
//         </div>
//     )
// }

export class TilesToo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value:null
        }
        
    }
    componentDidMount(){
        console.log('update')
    }
    update(field) {
       
        return e => this.setState({ [field]: e.target.value })
    }
    render(){
        return(
            <div className='tiles'>
                {Range(1,9).map(item => (
                <div
                    className='indiv-tile'
                    key={item}
                    // checked={value === item}
                    value={item}
                    onChange={this.update()}
                >
                    {item}
                </div>
            ))}
            </div>
        )
    }
    
}

