import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import BodyMenu from './BodyMenu';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction, ...passProps }) {
	const [levelMenu, setLevelMenu] = useState([
		{
			data: items,
		},
	]);

	const current = levelMenu[levelMenu.length - 1];

	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children;

			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setLevelMenu((prev) => [...prev, item.children]);
						} else {
							onChange(item);
						}
					}}
					toLink={item.to}
					hrefLink={item.href}
				/>
			);
		});
	};

	return (
		// div for tippy element not warnings
		<div>
			<HeadlessTippy
				zIndex={999}
				offset={[-40, 10]} // Lệch phải và chiều cao
				trigger="click"
				hideOnClick
				interactive
				placement="bottom"
				render={(attrs) => (
					<div className={cx('action_menu')} tabIndex="-1" {...attrs}>
						<PopperWrapper className="menu_popper">
							{levelMenu.length > 1 && (
								<HeaderMenu
									title={current.title}
									onBack={() => {
										setLevelMenu((prev) => prev.slice(0, prev.length - 1));
									}}
								/>
							)}
							<BodyMenu>{renderItems()}</BodyMenu>
						</PopperWrapper>
					</div>
				)}
				onHide={() => {
					setLevelMenu((prev) => prev.slice(0, 1));
				}}
			>
				<div className={cx('parent_div')}>{children}</div>
			</HeadlessTippy>
		</div>
	);
}

Menu.propTypes = {
	children: PropTypes.node.isRequired,
	items : PropTypes.array,
	onChange: PropTypes.func,
}
export default Menu;
