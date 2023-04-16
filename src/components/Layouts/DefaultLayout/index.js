
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
import Header from '../components/Header';
import Sidebar from './Sidebar';
import RightSide from './RightSide';

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

export default DefaultLayout;
