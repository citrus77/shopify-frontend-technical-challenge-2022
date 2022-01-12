import React from 'react';
import './SinglePic.css';

const SinglePic = ({pic}) => {
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
        </div>
    </>;
};

export default SinglePic;