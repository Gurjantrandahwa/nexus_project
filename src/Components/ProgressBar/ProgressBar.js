import React from 'react';
import "./progressBar.scss"

const ProgressBar = ({currentPage, totalPages}) => {

    const progress = ((currentPage + 1) / totalPages) * 100;

    return <div className="progress-bar">
        <div className="progress" style={{width: `${progress}%`}}>

        </div>
    </div>
};

export default ProgressBar;
