import { NAVBAR_CONFIG } from '../../constants'
// @ts-ignore
import styles from './NavigationBar.module.scss'

export const NavigationBar: React.FC = () => {
	return (
		<div className={styles.headerNavMenu}>
			<ul className={styles.navMenuList}>
				{NAVBAR_CONFIG.map(item => (
					<li className={styles.menuListItem} key={item.label}>
						<a href={`/${item.path}`} className={styles.menuListItemLink}>
							{item.label}
						</a>
					</li>
				))}
			</ul>
			<div className='menu_right'>
				<div className='navBtn'>
					<button className='menuBtn' type='button'>
						Корзина
					</button>
				</div>
			</div>
		</div>
	)
}
