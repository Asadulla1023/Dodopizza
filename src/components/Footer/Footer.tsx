// @ts-ignore

import styles from './Footer.module.scss'

// @ts-ignore

import tayniy from './images/tayniy.jpg'

export const Footer = () => {
	return (
		<div className={styles.footerBottom}>
			<div className={styles.cont5}>
				<div className={styles.secretBuyer}>
					<img src={tayniy} width='47px' alt={tayniy} />
					<div className={styles.secretBuyerSection}>
						<p>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</p>
						<a href='https://dodocontrol.ru/' rel='noreferrer' target='_blank'>
							Заполнить анкету
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
