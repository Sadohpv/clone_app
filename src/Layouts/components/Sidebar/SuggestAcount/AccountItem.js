import styles from './SuggestAccount.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { faCheckCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from '~/components/Image';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function AccountItem({src,alt,className,nickname,name,tick}) {

    const renderPreview = (props) =>{
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
				<PopperWrapper className="menu_popper">
						<AccountPreview 
                         src={src}
                         alt={alt}
                         className ={className}
                         name = {name}
                         nickname = {nickname}
                         
                        />
				</PopperWrapper>
			</div>
        )
    }
    return ( 
       <div >
           <HeadlessTippy
                interactive // tương tác với content bên trong
                delay={[800,0]}
               offset={[0,-5]}
                placement='bottom-start'
                render={renderPreview}
           >
                <div className={cx('account_item')}>
                    <div className={cx('account_item-img')}>
                        <Image 
                        src={src}
                        alt={alt}
                        className ={className}
                        />
                    </div>
                    <div className={cx('account_item-info')}>
                        <p className={cx('nickname')}>
                           <strong> {nickname}</strong>
                           {
                           tick && 
                          <FontAwesomeIcon className={cx('check')} icon={faHeart} 
                          />
                           } 
                           {
                           !tick && 
                          <FontAwesomeIcon className={cx('check-circle')} icon={faCheckCircle} 
                          />
                           } 
                        </p>
                        <p className={cx('name')}>
                            {name}
                        </p>
                    </div>
                </div>
           </HeadlessTippy>
       </div>
     );
}

AccountItem.propTypes = {
    src: PropTypes.string
}

export default AccountItem;