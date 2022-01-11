import React, { useEffect } from 'react';
import { SinglePic } from '.';

const { REACT_APP_NASA_API_KEY } = process.env;

const Gallery = ({ gallery, setGallery }) => {

    const fetchImages = async () => {
        //fetch images from NASA Mars Photos and set state
        try {
            const resp = await fetch (`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${ REACT_APP_NASA_API_KEY }`)
            const result = await resp.json();
            setGallery(result.latest_photos);
            return result;
        } catch (error) {
            console.error(error);
        };
    };

    useEffect( () => {
        try {
            fetchImages();
        } catch (error) {
            console.error (error);
        };
    }, [] );

    return <>
        {
         gallery
            ? gallery.map(pic => <SinglePic key={pic.id} pic={pic} />)
            : null
        }
    </>;
};

export default Gallery;