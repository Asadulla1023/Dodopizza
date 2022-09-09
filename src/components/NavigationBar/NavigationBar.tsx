import { useState } from 'react'


import { NAVBAR_CONFIG } from '../../constants'
import { Modal } from './ModalBin'
import {SignIn} from './Signin'
// @ts-ignore
import styles from './NavigationBar.module.scss'

export const NavigationBar: React.FC = () => {
	const [modalOpen, setOpenModal] = useState(false)
	const [signIn, setSignIn] = useState(false)
	return (
		<>
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
						<button
							onClick={() => {
								setOpenModal(true)
							}}
							className='menuBtn'
							type='button'
						>
							Корзина
						</button>
						<button
							type='button'
							onClick={() => {
								setSignIn(true)
							}}
						>
							Войти
						</button>
					</div>
				</div>
			</div>
			{signIn && <SignIn setSignIn={setSignIn}/>}
			{modalOpen && <Modal setOpenModal={setOpenModal} />}
		</>
	)
}
