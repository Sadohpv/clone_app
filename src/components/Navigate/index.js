import classNames from 'classnames/bind';
import styles from './Navigate.module.scss';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

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
	}

    if(content
        ){

    }
	// Remove events listeners

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
		<Tippy content={content} placement="bottom">
			<Comp className={classes} {...props}>
				<span>{children}</span>
			</Comp>
		</Tippy>
	);
}

export default Navigate;
