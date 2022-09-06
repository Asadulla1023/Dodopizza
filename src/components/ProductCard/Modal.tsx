// @ts-ignore
import './modal.scss'

// @ts-ignore
import close from './images/close.svg'

export const Modal = () => {
	return (
		<>
			<div className='modal modal_medium modal_active'>
				<button type='button' className='modal__close'>
					<img src={close} alt='x' />
				</button>
				<div className='modal__left'>.</div>
				<div className='modal__right'>
					<div className='modal__scroll'>
						<h4 className='modal__title'>Овощи и грибы</h4>
						<p className='modal__info info'>
							<span className='info__size' id='info_size'>
								25 см
							</span>
							,
							<span className='info__dough-type' id='info_dough_type'>
								традиционное тесто
							</span>
						</p>
						<ul className='modal__ingredient-list ingredient-list'>
							<li
								className='ingredient-list__item'
								data-optional='true'
								data-removed='false'
							>
								<span>Базилик</span>
							</li>
							,
							<li className='ingredient-list__item' data-optional='false'>
								<span>томатный соус</span>
							</li>
							,
							<li
								className='ingredient-list__item'
								data-optional='true'
								data-removed='false'
							>
								<span>кубики брынзы</span>
							</li>
							,
							<li
								className='ingredient-list__item'
								data-optional='true'
								data-removed='false'
							>
								<span>шампиньоны</span>
							</li>
							,
							<li
								className='ingredient-list__item'
								data-optional='true'
								data-removed='false'
							>
								<span>сладкий перец</span>
							</li>
							,
							<li
								className='ingredient-list__item'
								data-optional='true'
								data-removed='false'
							>
								<span>красный лук</span>
							</li>
							,
							<li className='ingredient-list__item' data-optional='false'>
								<span>моцарелла</span>
							</li>
							,
							<li
								className='ingredient-list__item'
								data-optional='true'
								data-removed='false'
							>
								<span>маслины</span>
							</li>
							,
							<li
								className='ingredient-list__item'
								data-optional='true'
								data-removed='false'
							>
								<span>томаты</span>
							</li>
						</ul>

						<div className='modal__slider-btn slider-btn'>
							<div
								className='slider-btn__slider slider-btn__slider_small'
								// style='transform: translateX(100%);'
							>
								.
							</div>
							<div className='slider-btn__item' data-offset='0'>
								<label>
									Маленькая
									<input type='radio' name='pizza-size' value='small' />
								</label>
							</div>
							<div className='slider-btn__item' data-offset='1'>
								<label>
									Средняя
									<input type='radio' name='pizza-size' value='medium' checked />
								</label>
							</div>
							<div className='slider-btn__item' data-offset='2'>
								<label>
									Большая
									<input type='radio' name='pizza-size' value='large' />
								</label>
							</div>
						</div>

						<div className='modal__slider-btn slider-btn'>
							<div className='slider-btn__slider slider-btn__slider_large'>.</div>
							<div className='slider-btn__item' data-offset='0'>
								<label>
									традиционное
									<input type='radio' name='dough-type' value='regular' />
								</label>
							</div>
							<div className='slider-btn__item' data-offset='1'>
								<label>
									тонкое
									<input type='radio' name='dough-type' value='thin' />
								</label>
							</div>
						</div>

						<div className='addons'>
							<h5 className='addons__title'>Добавить в пиццу</h5>
							<div className='addons__list'>
								<div className='addons__card addon-card'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA'
										alt='Острый халапеньо'
										className='addon-card__image'
									/>
									<h6 className='addon-card__title'>Острый халапеньо</h6>
									<p className='addon-card__price'>5 000 сум</p>
								</div>

								<div className='addons__card addon-card'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611EA0840DB86284E'
										alt='Острый халапеньо'
										className='addon-card__image'
									/>
									<h6 className='addon-card__title'>Сыр моцарелла</h6>
									<p className='addon-card__price'>18 000 сум</p>
								</div>

								<div className='addons__card addon-card'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF25CA64B9'
										alt='Острый халапеньо'
										className='addon-card__image'
									/>
									<h6 className='addon-card__title'>Ветчина</h6>
									<p className='addon-card__price'>10 000 сум</p>
								</div>
								<div className='addons__card addon-card'>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF25CA64B9'
										alt='Острый халапеньо'
										className='addon-card__image'
									/>
									<h6 className='addon-card__title'>Ветчина</h6>
									<p className='addon-card__price'>10 000 сум</p>
								</div>
							</div>
						</div>
					</div>

					<button type='button' className='modal__cart-btn'>
						Добавить в корзину за 85 000 сум
					</button>
				</div>
			</div>
			<div className='modal-bg'>.</div>
		</>
	)
}
