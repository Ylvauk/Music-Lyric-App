import React from 'react';
import './LyricsPage.css'
const LyricsPage = ({searchResults, searchString}) => {

    return (
        <div className='lyrics-page'>
            <h1>{searchString}</h1>
            <p>{searchResults}</p>
        </div>
    )
};

export default LyricsPage;