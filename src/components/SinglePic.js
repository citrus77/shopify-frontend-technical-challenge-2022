import React, { useEffect, useState } from 'react';
import './css/SinglePic.css';

const SinglePic = ({pic}) => {
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

    const localLike = {
        picId: pic.id,
        classname: fav
    }
    const JSON_localLike = JSON.stringify(localLike);
    const rtvdLocalLike = (localStorage.getItem(`likeStatus${pic.id}`))
    
    useEffect( () => {
        try {
            if (rtvdLocalLike) {
                setfav(rtvdLocalLike.classname)
            }
        } catch (error) {
            console.error (error);
        };
    }, [] );

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
                    fav === 'fav'
                        ? setfav('fav liked')
                        : setfav('fav')
                    localStorage.setItem(`likeStatus${pic.id}`, JSON_localLike)
                }}
            >
            {
            fav === 'fav'
                ? <img src='./img/heart.png' alt='unliked' height='32' width='32'/>
                : <img src='./img/heartfilled.png' alt='liked' height='32' width='32'/>
            }
            </button>
        </div>
    </>;
};

export default SinglePic;