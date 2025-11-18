import Boxicon from './Boxicon/Boxicon';
import { dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/download.jpg';
import carticon from '@icons/svgs/carticon.svg';
import searchicon from '@icons/svgs/searchicon.svg';
function MyHeader() {
    const { containerMenu, containerHeader, containerBoxicon } = styles;
    return (
        <div className={containerHeader}>
             
            <div className={containerMenu}>
               <div>
                    <img src={Logo} alt="Logo" width={50} height={50} />
                </div>
                <div className={containerMenu}>
                    {dataMenu.map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
            </div>

            <div className={containerBoxicon}>
                <img src={searchicon} alt="searchicon" width={30} height={30} />
                <img src={carticon} alt="carticon" width={30} height={30} />
            </div>

        </div>
    );
}

export default MyHeader;