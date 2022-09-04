// @ts-ignore
import styles from './ComboCard.module.scss'

export const ComboCard: React.FC<any> = (combos: any) => {
	return (
		<div className={styles.ComboCard}>
			<div className={styles.ComCard}>
				<div className={styles.Comimg}>
					<img src={combos.imgs && combos.imgs} alt={combos.title} />
				</div>
				<h2>{combos.title}</h2>
				<p>Соус сырный, сыр моцарелла, цыпленок, томаты</p>
				<div className={styles.costToTake}>
					<p>от {combos.price}</p>
					<button type='button'>Выбрать</button>
				</div>
			</div>
		</div>
	)
}
