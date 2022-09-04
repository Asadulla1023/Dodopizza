// @ts-ignore
import styles from './SnackCards.module.scss'

export const SnackCards: React.FC<any> = (snacks: any) => {
	return (
		<div className={styles.SnackCards}>
			<div className={styles.SnackCard}>
				<div className={styles.Snackimg}>
					<img src={snacks.imgs && snacks.imgs} alt={snacks.title} />
				</div>
				<h2>{snacks.title}</h2>
				<p>{snacks.about}</p>
				<div className={styles.costToTake}>
					<p>от {snacks.price}</p>
					<button type='button'>Выбрать</button>
				</div>
			</div>
		</div>
	)
}
