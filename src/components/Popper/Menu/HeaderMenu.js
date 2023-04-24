import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderMenu({title, onBack}) {
    return ( 
        <header className={cx('header_menu')} >
            <button className={cx('back_btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header_menu_title')}>
                {title}
            </h4>
        </header>
     );
}

export default HeaderMenu;