import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleXmark, faMagnifyingGlass, faMessage, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/index';
import images from '~/asset/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
// cho phép viết kiểu cx("post-item") vì sai cú pháp styles.post-item

function Header() {
	const [searchResult, setSearchResult] = useState([1, 2, 3]);

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2, 3]);
		}, 0);
	});

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<div className={cx('logo_header')}>
						<img className={cx('image')} src={images.logo} alt="Logo" />
					</div>
					<Tippy
						interactive
						visible={searchResult.length > 0}
						render={(attrs) => (
							<div className={cx('search-result')} tabIndex="-a" {...attrs}>
								<PopperWrapper>
									<h4 className={cx('search-title')}>Account</h4>
									<AccountItem />
									<AccountItem />
									<AccountItem />
									<AccountItem />
								</PopperWrapper>
							</div>
						)}
					>
						<div className={cx('search')}>
							<input className={cx('search_input')} placeholder="Search something...." spellCheck={false} />
							<button className={cx('search_close-btn')}>
								<FontAwesomeIcon icon={faCircleXmark} />
							</button>
							<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

							<button className={cx('search_find-btn')}>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</div>
					</Tippy>
				</div>
				<div className={cx('navigate')}></div>
				<div className={cx('action')}>
					<Button primary>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
					<Button primary>
						<FontAwesomeIcon icon={faMessage} />
					</Button>
					<Button primary>
						<FontAwesomeIcon icon={faBell} />
					</Button>
					<Button primary disable onClick={()=>{
						alert("Here");
					}} 
					
					>+
					
					</Button>
				</div>
			</div>
		</header>
	);
}

export default Header;
