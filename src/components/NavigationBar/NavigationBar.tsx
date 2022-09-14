import { Link } from 'react-router-dom'
import { NAVBAR_CONFIG } from '../../constants'
// @ts-ignore
import styles from './NavigationBar.module.css'

export const NavigationBar: React.FC = () => (
	<div className={styles.header_nav_menu}>
		<div className={styles.navbar__top}>
		<ul className={styles.nav_menu_list}>
			{NAVBAR_CONFIG.map(item => (
				<li className={styles.menu_list_item} key={item.label}>
					<Link to={`/${item.link}`} className={styles.menu_list_item_link}>
						{item.label}
					</Link>
				</li>  
			))}
		</ul>
		<div className='menu_right'>
			<div className={styles.navBtn}>
				<button className={styles.menuBtn} type='button'>
					Корзина
				</button>
			</div>
		</div>
		</div>
	</div>
)
