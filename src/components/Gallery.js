import React, { useEffect } from 'react';
import { SinglePic } from '.';
import './Gallery.css'

const Gallery = ({ fetchImages, gallery }) => {
    useEffect( () => {
        try {
            fetchImages();
        } catch (error) {
            console.error (error);
        };
    }, [] );

    return <div id='gallery'>
        {
         gallery
            ? gallery.map(pic => <SinglePic key={pic.id} pic={pic} className='single-pic' />)
            : null
        }
    </div>;
};

export default Gallery;