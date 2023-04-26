import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './MenuSidebar.module.scss';
import classNames from 'classnames/bind';
import { useState,useRef } from 'react';
const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive }) {
	const trueActive = useRef();
	return (
		<NavLink
			className={(nav) =>
				// nav: đặt tên biến cho navlink có thể custom, isActive : của NavLink
				cx('menu_item', { active: nav.isActive })
			}
			to={to}
			ref={trueActive}
		>
			<span className={cx('icon')}> {icon} </span>	
			<span className={cx('active_icon')}>{iconActive}</span>	
			<span className={cx('item_title')}>{title}</span>
		</NavLink>
	);
}
MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired,
};
export default MenuItem;
