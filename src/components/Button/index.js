import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import Tippy from '@tippyjs/react/';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);

function Button({
	primary = false,
	disable = false,
	avatar = false,
	children,
	name,
	to,
	href,
	content,
	icon = false,
	className,
	onClick,
	...passProps
}) {
	let Comp = 'button';

	const props = {
		onClick: onClick,
		...passProps,
	};
	// console.log(onClick);
	const [isFocused, setIsFocused] = useState(false);
	const btnClick = useRef();

	const hanldeByClick = (e) => {

		if(typeof props.onClick !== 'function'){
			e.preventDefault();
		}else {
			props.onClick();

		}
	};

	// Local link or external link
	if (to) {
		props.to = to;
		Comp = Link;
	} else if (href) {
		props.href = href;
		Comp = 'a';
	}

	// Remove events listeners

	if (disable) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on') && typeof props[key] === 'function') {
				delete props[key];
			}
		});
	}
	const classes = cx(
		'wrapper',
		{
			primary,
			disable,
			avatar,
		},
		name,
		className,
	);

	if (content !== undefined) {
		return (
			<Tippy content={content}>
				<Comp className={classes} {...props} onClick={hanldeByClick} ref={btnClick}>
					{children}
				</Comp>
			</Tippy>
		);
	} else {
		return (
			<Tippy visible={false}>
				<Comp className={classes} {...props} onClick={hanldeByClick} ref={btnClick}>
					{children}
				</Comp>
			</Tippy>
		);
	}
}

export default Button;
