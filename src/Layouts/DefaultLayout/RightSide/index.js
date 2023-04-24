import styles from './RightSide.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function RightSide() {
    return ( 
        <aside className={cx('wrapper')}>
            <h2>RightSide</h2>
        </aside>
     );
}

export default RightSide;