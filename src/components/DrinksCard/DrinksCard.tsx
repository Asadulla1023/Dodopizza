// @ts-ignore

import styles from './DrinksCard.module.scss'

export const DrinksCard: React.FC<any> = (drink: any) => {
	return (
		<div className={styles.drinkCard}>
			<div className={styles.drinksCard}>
				<div className={styles.drinkimg}>
					<img src={drink.imgs && drink.imgs} alt={drink.title} />
				</div>
				<h2>{drink.title}</h2>
				<p>Соус сырный, сыр моцарелла, цыпленок, томаты</p>
				<div className={styles.costToTake}>
					<p>от {drink.price}</p>
					<button type='button'>Выбрать</button>
				</div>
			</div>
		</div>
	)
}
