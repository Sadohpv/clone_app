
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RightSide from '../components/RightSide';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Header />

			<div className={cx('container')}>
				<Sidebar />

				<div className={cx('content')}>{children}</div>

				<RightSide />
				
            </div>
		</div>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default DefaultLayout;
