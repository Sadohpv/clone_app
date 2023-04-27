import styles from './SuggestAccount.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function SuggestAcount({label}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>
            {label}
            </p>

            <AccountItem 
                src = 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/342234467_1473808309690753_219900570257451283_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=chutMb_SdU0AX-Qc41V&_nc_ht=scontent.fhan5-11.fna&oh=03_AdTl-miYoUGWpTI8u8Rm3_45osoH0wtnqPB0xE-YbcgShg&oe=6470B400'
                alt = 'Pham Huyen Tran'
                className={cx('account_img')}
                nickname = "phamhuyentran"
                name = ' Phạm Huyền Trân'
                tick
            />
            <AccountItem 
                src = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/341924191_3469494926630501_5094846826562128461_n.png?stp=dst-png_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=J_UvL4Gal3cAX8hNvBz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWEjZXkuilOzyV17NRGoH2b3YIfE1rKc02m7YOeGRl8Q&oe=6470B8B7'
                alt = 'Pham Huyen Tran'
                className={cx('account_img')}
                nickname = "phamhuyentran"
                name = ' Phạm Huyền Trân'
            />
             <AccountItem 
                src = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/342085792_1653401595131345_3737757899133174418_n.png?stp=dst-png_s280x280&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ZH1BJrkUs0wAX9FN-6g&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSRcHYd0foBHwxUGvdkU_41-VtPKcCDTma8uZZ6jJydGw&oe=6470BA5C'
                alt = 'Pham Huyen Tran'
                className={cx('account_img')}
                nickname = "phamhuyentran"
                name = ' Phạm Huyền Trân'
            />
             <AccountItem 
                src = 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/341695507_184176610756246_4653515922191138376_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Ym4aotzx3oIAX9L23w3&_nc_ht=scontent.fhan5-11.fna&oh=03_AdQUTLuMyDul5Sbs73nIbcha7sW3Uu5z_C3vaZ3Id6ANXA&oe=6470C0EE'
                alt = 'Pham Huyen Tran'
                className={cx('account_img')}
                nickname = "phamhuyentran"
                name = ' Phạm Huyền Trân'
            />
            <p className={cx('more_btn')}>
                See more 
            </p>
        </div>
     );
}

SuggestAcount.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestAcount;