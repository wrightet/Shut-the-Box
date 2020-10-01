import React from 'react';
const Range = (min, max) => Array(max - min + 1).fill().map((_, i) => min + i)

const Tile =({checked, onChange, value}) => (
    <label htmlFor="">
        {value}
        <input type="radio"
        checked={checked}
        className='tile'
        onChange={(e) => {onChange(value)}}
        value={value}
        />
    </label>
)
export const Tiles = ({onChange,value}) => {
    return (
        <div>
            {Range(1,9).map(item => (
                <Tile
                key={item}
                checked={value===item}
                value={item}
                onChange={onChange}
                />
            ))}
        </div>
    )
}
