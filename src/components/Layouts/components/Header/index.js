import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBell,
	faCartShopping,
	faCat,

	faCoins,

	faExclamationCircle,
	faGear,
	faHippo,
	faHouse,
	faLanguage,
	faMagnifyingGlass,
	faMessage,
	faMoon,

	faPlus,
	faShop,
	faSignOut,

	faTruckFast,
} from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';

import { useEffect, useReducer, useState, useRef } from 'react';
import images from '~/asset/images';
import Search from '~/components/Popper/Search';
import Button from '~/components/Button';
import Navigate from '~/components/Navigate';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import styles from './Header.module.scss';


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

const USER_MENU = [
	{
		icon: <FontAwesomeIcon icon={faGear} spin />,
		title: 'Settings',
		to: '/settings',
		desc: 'Edit your information',
	},
	{
		icon: <FontAwesomeIcon icon={faCoins} />,
		title: 'Coins',
		to: '/coin',
		desc: 'Buy some coins',
	},
	{
		icon: <FontAwesomeIcon icon={faMoon} />,
		title: 'Dark Mode',
		desc: 'Turn your page into darkside',
	},
	{
		icon: <FontAwesomeIcon icon={faExclamationCircle} />,
		title: 'Support',
		desc: 'Tell us if you have what to improve our website',
	},
	{
		icon: <FontAwesomeIcon icon={faSignOut} />,
		title: 'Logout',
		desc: 'Tell us if you have what to improve our website',
		separate: true,
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

	const avt_ref = useRef();

	// useEffect(() => {
	// 	console.log(avt_ref.current);
	// })

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<div className={cx('logo_header')}>
						<img className={cx('image')} src={images.logo} alt="Logo" />
					</div>
					{/* Search */}
					<Search>
						
					</Search>
				</div>
				<div className={cx('navigate')}>
					<Navigate navigate content="Home">
						<FontAwesomeIcon icon={faHouse} />
					</Navigate>
					<Navigate navigate content="Shop">
						<FontAwesomeIcon icon={faShop} />
					</Navigate>
					<Navigate navigate content="Cart">
						<FontAwesomeIcon icon={faCartShopping} />
					</Navigate>
					<Navigate navigate content="On Shipping">
						<FontAwesomeIcon icon={faTruckFast} />
					</Navigate>
				</div>
				<div className={cx('action')}>
					{currentUser ? (
						<>
							<Menu items={MENU_ITEMS} onChange={handleMenuChange}>
								<Button primary content="Plus">
									<FontAwesomeIcon icon={faPlus} />
								</Button>
							</Menu>

							<Button primary content="Message">
								<FontAwesomeIcon icon={faMessage} />
							</Button>
							<Button primary content="Notify">
								<FontAwesomeIcon icon={faBell} />
							</Button>
							<Menu items={USER_MENU} onChange={handleMenuChange}>
								<Button avatar content="Account">
									<Image
										className={cx('user_avatar')}
										alt="Tran Huyen Pham"
										src="https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/341117275_250454250831098_4350385665672820303_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pb80y__E2IYAX_yeZkf&_nc_ht=scontent.fhan5-11.fna&oh=03_AdRkuLRUorPw0TkWWUBUELyRZhw0yXM6Nv87zpnC1afy5A&oe=6467B09A"
										fallback="https://scontent.xx.fbcdn.net/v/t1.15752-9/341435170_267239282438274_156870771826213755_n.jpg?stp=dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=J5MKTQzYCY8AX_LUS1h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSYJ5snIiPM4edE3k1olCHsoU-6CFnLVs6DpOhVKsGVqQ&oe=6469D20D"
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
