import PropTypes from 'prop-types';
import images from "~/asset/images";
import { useState } from "react";
import styles from './Image.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Image({src,alt,fallback : customFallback = images.defaultAvt,className,...props}) {
    
    const [fallback,setFallback] = useState(customFallback);//fallback : lỗi

    const handleError = () =>{
        setFallback(customFallback);
    }

    return ( 
        <img 
        className={cx('wrapper')}
        src = {src || fallback}
        alt = {alt}
            {...props}
        onError={handleError}
        />
     );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
}
export default Image;