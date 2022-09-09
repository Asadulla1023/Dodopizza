// @ts-ignore
import close from './close.png'

// @ts-gnore
import './SignIn.scss'

export function SignIn({ setSignIn }: any) {
	return (
		<div className='signmodalBackground'>
			<div className='signmodalContainer'>
				<div className='headCloseBtn'>
					<button
						className='btn'
						type='button'
						onClick={() => {
							setSignIn(false)
						}}
					>
						<img src={close} alt={close} />
					</button>
				</div>
				<div className='head'>
					<h1>Вход на сайт</h1>
				</div>
				<div className='about'>
					<p>
						Подарим подарок на день рождения, сохраним адрес доставки и расскажем об
						акциях
					</p>
				</div>
				<div className='selection'>
					<div className='p'>
						<p>Страна</p>
						<p>Номер телефона</p>
					</div>
					<form action='#' className='btns'>
						<button className='btnarrow' type='button'>
							<img
								src='https://media.istockphoto.com/vectors/uzbekistan-flag-vector-id967650550?k=20&m=967650550&s=612x612&w=0&h=IbbpGY2s4Ms6B8hoKsqbIB3OeI_9Zy45m22jz2rfqRQ='
								alt='Uzb'
							/>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1024px-Arrow-down.svg.png'
								alt='arrowDown'
							/>
						</button>
						<input type="tel" id="input" placeholder="+998 99-999-99-99"  required />
					</form>
				</div>
				<div className='aboutBtn'>
					<button
						type='button'
						onClick={() => {
							setSignIn(false)
						}}
						id='cancelBtn'
					>
						Выслать код
					</button>
				</div>
			</div>
		</div>
	)
}
