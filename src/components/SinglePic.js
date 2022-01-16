import React, { useEffect, useState } from 'react';
import './css/SinglePic.css';

const SinglePic = ({ pic }) => {
    const [ fav, setfav ] = useState('fav');    
    const {
        camera,
        earth_date,
        id,
        img_src,
        rover
    } = pic;
    const { name } = rover;
    const { full_name } = camera;

    const localLike = (localStorage.getItem('pic' + id));

    const handleSetLike = () => {
        if (fav === 'fav') {
            setfav('fav liked');
            localStorage.setItem('pic' + id, id)
        } else {
            setfav('fav');
            localStorage.removeItem('pic' + id)
        };
    };

    useEffect( () => {
        try {
            if (localLike) {
                setfav('fav liked')
            }
        } catch (error) {
            console.error (error);
        };
    }, [] );

    return (
        pic
        ? <div className='single-pic'>
                <img src={ img_src } alt={ pic.id } className='rover-img' />
            <div className='img-content'>
                <h3 className='rover-info'>{ name } rover - { full_name }</h3>
                <div className='date'>{ earth_date }</div>
            </div>
            <button 
                className= { fav }
                onClick = { handleSetLike }
            >
            {
                fav === 'fav'
                    ? <img src='./img/heart.png' alt='unliked' height='32' width='32'/>
                    : <img src='./img/heartfilled.png' alt='liked' height='32' width='32'/>
            }
            </button>
        </div>
        : '...Loading...'
    );
};

export default SinglePic;