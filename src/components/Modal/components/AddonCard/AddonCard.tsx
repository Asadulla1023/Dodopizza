import classNames from 'classnames'
import { useState } from 'react'

import styles from './AddonCard.module.scss'

export interface IAddonCardProps {
	img: string
	title: string
	price: any
}

export const AddonCard: React.FC<IAddonCardProps> = ({
	img,
	price,
	title,
}: IAddonCardProps) => {
	const [isSelected, setIsSelected] = useState(false)
	return (
		<div
			className={classNames(styles.addonsCard, {
				[styles.addonsCardSelected]: isSelected,
			})}
			onClick={() => {
				setIsSelected(!isSelected)
			}}
		>
			<img src={img} alt={title} className={styles.addonCardImage} />
			<h6 className={styles.addonCardTitle}>{title}</h6>
			<p className={styles.addonCardPrice}>{price.medium / 1000} 000 сум</p>
		</div>
	)
}
