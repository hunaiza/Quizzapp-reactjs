import React from 'react';
import TotalCorrect from './TotalCorrect';
import Totalincorrect from './Totalincorrect';

function Scorearea() {
    return(
        <div>
            <h2>Score Area</h2>
            <TotalCorrect />
            <Totalincorrect />
        </div>
    )
}

export default Scorearea;