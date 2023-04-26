import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './MenuItem.module.scss'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

function MenuItem({data,onClick,toLink,hrefLink}) {
    let Comp = 'div';
    
    const props = {
        onClick: onClick,
    }
    if(toLink){
        props.to = toLink;
        Comp = Link;
    } else if (hrefLink)
    {
        props.href = hrefLink;
        Comp = 'a';
    }

    const classes = cx('menu_item',{
        separate: data.separate
    })
    return ( 
        <Comp className={classes } {...props} >
            <Button
                primary 
                name = {cx('menu_icon')}
            >
                {data.icon}
            </Button>
            <span className={cx('desc')}>
                <h5 className={cx('h5_title')}>{data.title}</h5>
                <p>{data.desc}</p>
            </span>
        </Comp>
    );
}
MenuItem.propTypes={
    data : PropTypes.object,
    toLink: PropTypes.string,
    toHref: PropTypes.string,
    onClick: PropTypes.func,
}
export default MenuItem;