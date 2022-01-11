import React from 'react';

const SinglePic = ({pic}) => {
    return <>
        <div className='single-pic'>
            <img src={pic.img_src} alt={pic.id} />
        </div>
    </>;
};

export default SinglePic;