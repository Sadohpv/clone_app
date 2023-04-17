import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
             src="https://www.billboard.com/wp-content/uploads/2020/04/eminem-press-photo-2019-aqu-billboard-1548-1587659998.jpg?w=942&h=623&crop=1" 
             alt="Eminem" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        Eminem
                    </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>
                    eminem.dr_dre
                </span>

            </div>
        </div>
     );
}

export default AccountItem;