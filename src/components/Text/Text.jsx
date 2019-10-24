import React from 'react';
import {ReactComponent as Icon} from '../../assets/icons/refreshicon.svg';

import './Text.css';

function Text(props){
    return(
        <div className="text-container">
            <p><q>{props.state}</q></p>
            <a href="./"><Icon/></a>
        </div>
    )
}

export default Text;