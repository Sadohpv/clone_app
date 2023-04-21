import images from "~/asset/images";
import { useState } from "react";
import styles from './Image.module.scss'
import classNames from "classnames/bind";

function Image({src,alt,fallback : customFallback = images.defaultAvt,className,...props}) {
    
    const [fallback,setFallback] = useState(customFallback);//fallback : lỗi

    const handleError = () =>{
        setFallback(customFallback);
    }

    return ( 
        <img 
        className={classNames(styles.wrapper)}
        src = {src || fallback}
        alt = {alt}
            {...props}
        onError={handleError}
        />
     );
}

export default Image;