import React from 'react';
import { Link } from "react-router-dom";

import { PDFObject } from 'react-pdfobject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function Resume() {
    const returnArrow = <FontAwesomeIcon icon={faArrowLeftLong} color="#fff0e3"/>
    
    return (
        <div className='page-container'>
            <div className='cv-header'>
                <div className='cv-header-content'>
                    <Link to={`/`}>
                        {returnArrow}  
                        <span>Return to website</span>
                    </Link>
                   
                </div>
            </div>
            <div className="cv-container">
                <PDFObject url="/chantalbrousseau-cv.pdf" />
            </div>
        </div>
        
    );
}

export default Resume;
