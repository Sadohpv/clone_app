import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import Image from "../Image";
import { Link } from "react-router-dom";
import PropTypes  from "prop-types";

const cx = classNames.bind(styles);

function AccountItem({data}) {
    return ( 
        <Link to={`/profile/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')}
             src={data.avatar}
             alt={data.full_name}
             fallback={"https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/341443277_952758612516950_2790860668531515000_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=u1qbrMQlfv0AX8lel-6&_nc_ht=scontent.fhan5-11.fna&oh=03_AdQKRmHyop8Lca-rZpDuMiaBSpJDrhhUQbgBOUk5STXVOw&oe=646B2CE6"}
             />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        {data.full_name}
                        
                    </span>
                   {
                   data.tick && 
                   <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> 
                   } 
                </h4>
                <span className={cx('username')}>
                    {data.nickname}
                </span>

            </div>
        </Link>
     );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;