// @ts-ignore
import styles from './ProductCard.module.scss'

export const ProductCard: React.FC<any> = (props: any) => {
	return (
		<div className={styles.ProductCard}>
			<div className={styles.Card}>
				<div className={styles.img}>
					<img
						src={props.sizes.medium && props.sizes.medium.imgs.normal}
						alt={props.title}
					/>
				</div>
				<h2>{props.title}</h2>
				<p>Соус сырный, сыр моцарелла, цыпленок, томаты</p>
				<div className={styles.costToTake}>
					<p>от {props.sizes.medium.price}</p>
					<button type='button'>Выбрать</button>
				</div>
			</div>
		</div>
	)
}
