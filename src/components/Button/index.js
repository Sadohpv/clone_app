import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';


const cx = classNames.bind(styles);

function Button({primary=false,
    disable =false,
    avatar=false, 
    children,
    name,
    to, href, 
    onClick,
    ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick: onClick,
        ...passProps,
    }
    
    // Local link or external link
    if(to){
        props.to = to;
        Comp = Link;
    } else if (href)
    {
        props.href = href;
        Comp = 'a';
    }

    // Remove events listeners
    
    if(disable){
        Object.keys(props).forEach((key)=>{
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
            });
    }
    const classes = cx('wrapper',{
        primary,
        disable,
        avatar,
    },name);
    return ( 
  
            <Comp className={classes} {...props}>
                {children}
            </Comp>
      
        
     );
}

export default Button;