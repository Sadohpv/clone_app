import classNames from 'classnames/bind';
import styles from './Navigate.module.scss';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Navigate({ navigate, disable = false, children, to, href, onClick, content, ...passProps }) {
	let Comp = 'button';
	const props = {
		onClick: onClick,
		...passProps,
	};

	// Local link or external link
	if (to) {
		props.to = to;
		Comp = Link;
	} else if (href) {
		props.href = href;
		Comp = 'a';
	}	// Remove events listeners

	if (disable) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on') && typeof props[key] === 'function') {
				delete props[key];
			}
		});
	}

	const classes = cx('wrapper', {
		navigate,
		disable,
	});

	return (
		<Tippy zIndex={99} content={content} placement="bottom">
			<Comp className={classes} {...props}>
				<span>{children}</span>
			</Comp>
		</Tippy>
	);
}

Navigate.propTypes = {
	navigate: PropTypes.bool,
	content: PropTypes.string,
	to:PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
	disable: PropTypes.bool,
	children: PropTypes.node.isRequired,
}
export default Navigate;
