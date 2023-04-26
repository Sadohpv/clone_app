import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu,{MenuItem} from './MenuSidebar'
import config from '~/config';
import { HomeIcon,FollowIcon,GroupIcon, HomeActiveIcon,FollowActiveIcon,GroupActiveIcon } from '~/asset/icons/Icons.js';

const cx = classNames.bind(styles);

function Sidebar() {

	return (
		<aside className={cx('wrapper')}>
			
			<Menu>
				<MenuItem 
				title="Home" 
				to={config.routes.home} 
				icon = {<HomeIcon/>}
				iconActive = {<HomeActiveIcon /> }
				/>
				<MenuItem 
				title="Following" 
				to={config.routes.follow}
				icon = {<FollowIcon />}
				iconActive = {<FollowActiveIcon />}

				/>
				<MenuItem 
				title="Group" 
				to={config.routes.group}
				icon = {<GroupIcon />}
				iconActive = {<GroupActiveIcon />}

				/>
			</Menu>
			
		</aside>
	);
}

export default Sidebar;
