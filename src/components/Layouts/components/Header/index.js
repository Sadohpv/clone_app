import classNames from 'classnames/bind';
import images from '~/asset/images';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faMagnifyingGlass,faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
// cho phép viết kiểu cx("post-item") vì sai cú pháp styles.post-item

function Header() {
	return(
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <div className={cx('logo_header')} >
                        <img className={cx('image')} src={images.logo} alt="Logo" />
                    </div>
                    <div className={cx('search')}>
                        <input className={cx('search_input')} placeholder='Search something....' spellCheck ={false} />
                        <button className={cx('search_close-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search_find-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('logo1')}>
                    
                </div>
                <div className={cx('action')}>
                   
                </div>
            </div>
        </header>
    ) 
    
}

export default Header;
