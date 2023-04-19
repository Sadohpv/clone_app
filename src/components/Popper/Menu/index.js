import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFunction = ()=> {};

function Menu({ children, items = [] ,onChange = defaultFunction }) {

	const [levelMenu, setLevelMenu] = useState([{
		data : items
	}]);

	const current = levelMenu[levelMenu.length - 1] 

	const renderItems = () => {
		
		return current.data.map((item, index) => {
			const isParent = !!item.children;
			
			return <MenuItem key={index} data={item} onClick={()=>{
				if(isParent){
					setLevelMenu(prev => [...prev, item.children])
				}else{
					onChange(item);
				}
			}} toLink = {item.to} hrefLink={item.href} />;
		});
	};

	return (
		<Tippy
			delay={[0, 700]}    	
			interactive
			render={(attrs) => (
				<div className={cx('action_menu')} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx('menu_popper')}>
						{	
							levelMenu.length > 1 && 
							<HeaderMenu title = "Language" 
								onBack={()=>{
									setLevelMenu(prev => prev.slice(0,prev.length -1));
								}}
							/>
						}
						{renderItems()}
					</PopperWrapper>
				</div>
			)}
		>
			<div>{children}</div>
		</Tippy>
	);
}

export default Menu;
