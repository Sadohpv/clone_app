import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountPreview({ src, alt, className,nickname,name,tick }) {
	
	return (
		<div className={cx('wrapper')}>
			<div className={cx('preview_header')}>
				<Image src={src} alt={alt} className={className} />
				<button className={cx('follow-btn')}>Follow</button>
			</div>
			<div className={cx('preview_body')}>
				<p className={cx('nickname')}>
					<strong> {nickname} </strong>
					{tick && <FontAwesomeIcon className={cx('check')} icon={faHeart} />}
					{!tick && <FontAwesomeIcon className={cx('check-circle')} icon={faCheckCircle} />}
				</p>
				<p className={cx('name')}>{name}</p>
			</div>
			<div className={cx('preview_footer')}>
			<span className={cx('follow_point')}>
					<strong> 3M </strong>
					<p> Cute</p>
			</span>
			<span className={cx('like_point')}>
					<strong> 3M</strong>
					<p> Beaty</p>
			</span>
			</div>
		</div>
	);
}

export default AccountPreview;
