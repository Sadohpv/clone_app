import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function BodyMenu({ children }) {
	return <div className={cx('menu_body')}>{children}</div>;
}

export default BodyMenu;
