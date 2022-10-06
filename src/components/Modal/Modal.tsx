import classNames from 'classnames'
import { useRef, MouseEvent, Ref, RefObject } from 'react'
import { capitalize } from 'utils'
// @ts-ignore
import styles from './Modal.module.scss'

export interface IModalProps {
	isModalOpen: boolean
	setIsModalOpen: Function
}

export const Modal: React.FC<IModalProps> = ({
	isModalOpen,
	setIsModalOpen,
}: IModalProps) => {
	const smallSliderRef = useRef<HTMLDivElement>(null)
	const largeSliderRef = useRef<HTMLDivElement>(null)

	const modalCloseHandler = (): void => {
		setIsModalOpen(false)
	}

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

	return (
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
						<h4 className={styles.modalTitle}>Овощи и грибы</h4>
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
							{[
								{
									title: 'базилик1',
									'data-optional': true,
								},
								{
									title: 'базилик2',
									'data-optional': true,
								},
								{
									title: 'базилик3',
									'data-optional': false,
								},
								{
									title: 'базилик4',
									'data-optional': false,
								},
								{
									title: 'базилик5',
									'data-optional': true,
								},
								{
									title: 'базилик6',
									'data-optional': false,
								},
							].map((indredient, index, arr) => {
								return (
									<>
										<li
											className={styles.ingredientListItem}
											data-optional={indredient['data-optional']}
											data-removed='false'
											onClick={e => {
												if (e.currentTarget) {
													e.currentTarget.dataset.removed = 'true'
												}
											}}
										>
											<span>
												{!index ? capitalize(indredient.title) : indredient.title}
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
							<h5 className={styles.addonsTitle}>Добавить в пиццу</h5>
							<div className={styles.addonsList}>
								{[
									{
										img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA',
										title: 'Острый халапеньо',
										price: 5000,
									},
									{
										img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611EA0840DB86284E',
										title: 'Сыр моцарелла',
										price: 18000,
									},
									{
										img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF25CA64B9',
										title: 'Ветчина',
										price: 10000,
									},
									{
										img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA',
										title: 'Острый халапеньо',
										price: 5000,
									},
								].map(addon => (
									<div className={classNames(styles.addonsCard, styles.addonCard)}>
										<img
											src={addon.img}
											alt={addon.title}
											className={styles.addonCardImage}
										/>
										<h6 className={styles.addonCardTitle}>{addon.title}</h6>
										<p className={styles.addonCardPrice}>{addon.price} сум</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<button className={styles.modalCardBtn} type='button' tabIndex={-1}>
						Добавить в корзину за 85 000 сум
					</button>
				</div>
			</div>
			<div className={styles.modalBg} />
		</>
	)
}
