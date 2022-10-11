import classNames from 'classnames'
import { ADDONS, INGREDIENTS } from 'constants/dataBase/'
import { Product } from 'constants/dataBase/interfces'
import { MouseEvent, RefObject, useEffect, useRef } from 'react'
import { capitalize } from 'utils'

import styles from './Modal.module.scss'
import { AddonCard } from './components/AddonCard'

export interface IModalProps {
	isModalOpen: boolean
	setIsModalOpen: Function
	product: Product | undefined
}

export const Modal: React.FC<IModalProps> = ({
	isModalOpen,
	setIsModalOpen,
	product,
}: IModalProps) => {
	const smallSliderRef = useRef<HTMLDivElement>(null)
	const largeSliderRef = useRef<HTMLDivElement>(null)

	const modalCloseHandler = (): void => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	})

	const sliderClickHandler = (
		e: MouseEvent<HTMLDivElement>,
		ref: RefObject<HTMLDivElement>
	) => {
		const reference = ref
		if (e.currentTarget.dataset.offset && reference.current) {
			reference.current.style.transform = `translate(calc(100% * ${+e.currentTarget
				.dataset.offset}))`
		}
	}

	return product ? (
		<>
			<div
				className={classNames(styles.modal, styles.modalMedium, {
					[styles.modalActive]: isModalOpen,
				})}
			>
				<button
					className={styles.modalClose}
					type='button'
					onClick={modalCloseHandler}
					tabIndex={-1}
				>
					<img src='modal_close.svg' alt='Close button' />
				</button>
				<div className={styles.modalLeft} />
				<div className={styles.modalRight}>
					<div className={styles.modalScroll}>
						<h4 className={styles.modalTitle}>{product.title}</h4>
						<p className={classNames(styles.modalInfo, styles.info)}>
							<span className={styles.infoSize} id='info_size'>
								25 см
							</span>
							,
							<span className={styles.infoDoughType} id='info_dough_type'>
								традиционное тесто
							</span>
						</p>
						<ul
							className={classNames(styles.modalIngredientList, styles.ingredientList)}
						>
							{product.ingredients.map((indredientId, index, arr) => {
								const ingredient = INGREDIENTS[indredientId - 1]
								return (
									<>
										<li
											className={styles.ingredientListItem}
											data-optional={ingredient['data-optional']}
											data-removed='false'
											onClick={e => {
												if (
													e.currentTarget &&
													e.currentTarget.dataset.removed &&
													e.currentTarget.dataset.optional === 'true'
												) {
													e.currentTarget.dataset.removed = String(
														!JSON.parse(e.currentTarget.dataset.removed)
													)
												}
											}}
										>
											<span>
												{!index ? capitalize(ingredient.title) : ingredient.title}
											</span>
										</li>
										{arr.length - 1 !== index && ','}
									</>
								)
							})}
						</ul>
						<div className={classNames(styles.modalSliderBtn, styles.sliderBtn)}>
							<div
								className={classNames(
									styles.sliderBtnSlider,
									styles.sliderBtnSliderSmall
								)}
								style={{ transform: 'translateX(100%)' }}
								ref={largeSliderRef}
							/>
							{['Маленькая', 'Средняя', 'Большая'].map((text, index) => {
								return (
									<div
										className={styles.sliderBtnItem}
										data-offset={index}
										key={text}
										onClick={e => {
											sliderClickHandler(e, largeSliderRef)
										}}
									>
										<label>
											<span>{text}</span>
											<input type='radio' name='pizza-size' value='small' />
										</label>
									</div>
								)
							})}
						</div>

						<div className={classNames(styles.modalSliderBtn, styles.sliderBtn)}>
							<div
								className={classNames(
									styles.sliderBtnSlider,
									styles.sliderBtnSliderLarge
								)}
								ref={smallSliderRef}
							/>
							{['Традиционное', 'Тонкое'].map((text, index) => {
								return (
									<div
										className={styles.sliderBtnItem}
										data-offset={index}
										key={text}
										onClick={e => {
											sliderClickHandler(e, smallSliderRef)
										}}
									>
										<label>
											<span>{text}</span>
											<input type='radio' name='pizza-size' value='small' />
										</label>
									</div>
								)
							})}
						</div>

						<div className={styles.addons}>
							{product.addons && (
								<h5 className={styles.addonsTitle}>Добавить в пиццу</h5>
							)}
							<div className={styles.addonsList}>
								{product.addons &&
									product.addons.map(addonTitle => {
										const addon = ADDONS.find(add => {
											return add.title === addonTitle
										})
										if (addon) {
											return <AddonCard {...addon} />
										}
										return null
									})}
							</div>
						</div>
					</div>

					<div className={styles.modalCardBtnContainer}>
						<button className={styles.modalCardBtn} type='button' tabIndex={-1}>
							Добавить в корзину за {product.price} сум
						</button>
					</div>
				</div>
			</div>
			<div className={styles.modalBg} onClick={modalCloseHandler} />
		</>
	) : null
}
