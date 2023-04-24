import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function BodyMenu({ children }) {
	return <div className={cx('menu_body')}>{children}</div>;
}

BodyMenu.propTypes = {
	children: PropTypes.node.isRequired,
}

export default BodyMenu;
