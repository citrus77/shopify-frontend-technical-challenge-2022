import React from 'react';

const SinglePicView = ({ picURL }) => {
    return <div>
        {
        picURL
            ? <img src={ picURL } alt='picture' />
            : null
        }
        
    </div>
};

export default SinglePicView;