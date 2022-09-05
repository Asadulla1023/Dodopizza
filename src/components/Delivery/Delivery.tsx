// @ts-ignore

import styles from './Delivery.module.scss'

export const Delivery = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2 className={styles.footerTitle}>Доставка и оплата</h2>
					<div className={styles.footerTop}>
						<div className={styles.sect}>
							<h3>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h3>
							<p className={styles.aboutSect}>
								Если мы не успеем доставить любые продукты, кроме сувенирной продукции и
								соусов, в течение 60 минут, курьер подарит вам сертификат на большую
								пиццу.
							</p>
						</div>
						<div className={styles.sect}>
							<h3 className={styles.hotMoney}>39 000 СУМ - 1 000 000 СУМ</h3>
							<p className={styles.about}>
								Минимальная - Максимальная сумма при оплате наличными <br />
								Изображения продуктов могут отличаться от продуктов в заказе.
							</p>
						</div>
						<div className={styles.sect}>
							<h3>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h3>
							<img
								src='https://cdn.dodostatic.net/site-static/dist/afdce5bbb5d38204b6c6.jpg'
								alt='deliveryArea'
							/>
							<p className={styles.position}>Зона доставки</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
