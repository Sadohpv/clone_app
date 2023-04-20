import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBell,
	faCartShopping,
	faCat,
	faCircleXmark,
	faHippo,
	faHouse,
	faLanguage,
	faMagnifyingGlass,
	faMessage,
	faPlus,
	faShop,
	faSpinner,
	faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/index';
import images from '~/asset/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Navigate from '~/components/Navigate';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);
// cho phép viết kiểu cx("post-item") vì sai cú pháp styles.post-item

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faLanguage} />,
		title: 'English',
		desc: 'Change your language',
		children: {
			title: 'Language',
			data: [
				{
					code: 'en',
					title: 'English',
				},
				{
					code: 'vi',
					title: 'Tiếng Việt',
				},
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faHippo} />,
		title: 'Hippo',
		to: '/hippo',
		desc: 'This is link to one of localpage',
	},
	{
		icon: <FontAwesomeIcon icon={faCat} />,
		title: 'Neko',
		desc: "It's just a cat i don't know what to write. Love me in the air",
		href: 'https://www.instagram.com/',
	},
];

function Header() {
	const [searchResult, setSearchResult] = useState([1, 2, 3]);

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2, 3]);
		}, 0);
	});

	//handle logic
	const handleMenuChange = (menuItem) => {
		switch (menuItem.type) {
			case 'language':
				break;
			default:
		}
	};

	const currentUser = true;

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<div className={cx('logo_header')}>
						<img className={cx('image')} src={images.logo} alt="Logo" />
					</div>
					<Tippy
						interactive
						render={(attrs) => (
							<div className={cx('search-result')} tabIndex="-1" {...attrs}>
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
				<div className={cx('navigate')}>
					<Navigate navigate>
						<FontAwesomeIcon icon={faHouse} />
					</Navigate>
					<Navigate navigate>
						<FontAwesomeIcon icon={faShop} />
					</Navigate>
					<Navigate navigate>
						<FontAwesomeIcon icon={faCartShopping} />
					</Navigate>
					<Navigate navigate>
						<FontAwesomeIcon icon={faTruckFast} />
					</Navigate>
				</div>
				<div className={cx('action')}>
				{currentUser ? (
					
						<>
							<Menu items={MENU_ITEMS} onChange={handleMenuChange}>
								<Button primary>
									<FontAwesomeIcon icon={faPlus} />
								</Button>
							</Menu>
							<Button primary>
								<FontAwesomeIcon icon={faMessage} />
							</Button>
							<Button primary>
								<FontAwesomeIcon icon={faBell} />
							</Button>
							<Menu items={MENU_ITEMS} onChange={handleMenuChange}>
							
								<Button avatar>
									<img 
										className={cx('user_avatar')}
										alt = "Tran Huyen Pham"
										src = "https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/341117275_250454250831098_4350385665672820303_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pb80y__E2IYAX_yeZkf&_nc_ht=scontent.fhan5-11.fna&oh=03_AdRkuLRUorPw0TkWWUBUELyRZhw0yXM6Nv87zpnC1afy5A&oe=6467B09A"
									/>
								</Button>
							</Menu>
						</>
					
				) : (
					
						<>
							<Button primary>
								<FontAwesomeIcon icon={faMessage} />
							</Button>
							<Button
								primary
								onClick={() => {
									alert('Here');
								}}
							>
								+
							</Button>
						</>
					
				)}
				</div>
			</div>
		</header>
	);
}

export default Header;
