import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
// cho phép viết kiểu cx("post-item") vì sai cú pháp styles.post-item

function Header() {
	return(
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>

            </div>
        </header>
    ) 
    
}

export default Header;
