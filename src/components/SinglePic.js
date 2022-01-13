import React, { useState } from 'react';
import './css/SinglePic.css';

const SinglePic = ({pic}) => {
    const [ fav, setfav ] = useState('fav unliked');
    const {
        camera,
        earth_date,
        id,
        img_src,
        rover
    } = pic;
    const { name } = rover;
    const { full_name } = camera;

    return <>
        <div className='single-pic'>
            <img src={ img_src } alt={ pic.id } className='rover-img' />
            <div className='img-content'>
                <h3 className='rover-info'>{ name } rover - { full_name }</h3>
                <div className='date'>{ earth_date }</div>
            </div>
            <button 
                className= { fav }
                onClick = { () => {
                    fav === 'fav unliked'
                        ? setfav('fav liked')
                        : setfav('fav unliked')
                }}
            >Like</button>
        </div>
    </>;
};

export default SinglePic;