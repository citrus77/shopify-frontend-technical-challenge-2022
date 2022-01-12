import React, { useEffect } from 'react';
import { SinglePic } from '.';
import './css/Gallery.css'

const Gallery = ({ fetchImages, gallery, handleFetchGallery, setGallery }) => {    
    useEffect( () => {
        try {
            handleFetchGallery();
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