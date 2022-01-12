const { REACT_APP_NASA_API_KEY } = process.env;

const fetchImages = async () => {
    //fetch images from NASA Mars Photos and set state
    try {
        const resp = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${REACT_APP_NASA_API_KEY}`)
        const result = await resp.json();
        return result;
    } catch (error) {
        console.error(error);
    };
};

const utils = { fetchImages };

export default utils;