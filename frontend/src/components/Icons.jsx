import React from "react";

import { faFacebook,  faInstagram,  faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons= () => {
    return(
        
        <div>
            <div><FontAwesomeIcon icon={faFacebook} /></div>
            <div><FontAwesomeIcon icon={faTwitter} /></div>
            <div><FontAwesomeIcon icon={faInstagram} /></div>
            <div><FontAwesomeIcon icon={faLinkedin} /></div>
        </div>

    )

}
export default Icons;

