import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'
// @ts-ignore
import styles from './AuthModal.module.scss'

import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export interface IAuthModalProps {
	isAuthModalOpen: boolean
	setIsAuthModalOpen: Function
}

export const AuthModal: React.FC<IAuthModalProps> = ({
	isAuthModalOpen,
	setIsAuthModalOpen,
}: IAuthModalProps) => {
	const modalBgRef = useRef<HTMLDivElement>(null)
	const submitBtnRef = useRef<HTMLInputElement>(null)

	const [value, setValue] = useState('+998')
	const [isValid, setIsValid] = useState(false)

	const modalCloseHandler = (): void => {
		setIsAuthModalOpen(false)
	}

	const blockZoomInHandler = (e: any): void => {
		if (e.ctrlKey) e.preventDefault()
	}

	useEffect(() => {
		const rootElem = document.querySelector('#root')
		if (isAuthModalOpen) {
			if (rootElem) rootElem.addEventListener('wheel', blockZoomInHandler)
			document.body.style.overflow = 'hidden'
		} else {
			if (rootElem) rootElem.removeEventListener('wheel', blockZoomInHandler)
			document.body.style.overflow = ''
		}

		// setIsValid(isValidPhoneNumber(value))
	})

	// const phoneNumberInputHandler = (event: KeyboardEvent) => {
	// 	if (telInputRef.current) {
	// 		const updatedTelArray = [...telArray]

	// 		if (/\d/.test(event.key)) {
	// 			if (
	// 				updatedTelArray.length === 2 ||
	// 				updatedTelArray.length === 5 ||
	// 				updatedTelArray.length === 7
	// 			) {
	// 				updatedTelArray.push(event.key.concat('-'))
	// 				setTelArray(updatedTelArray)
	// 			} else {
	// 				updatedTelArray.push(event.key)
	// 				setTelArray(updatedTelArray)
	// 			}
	// 		}

	// 		if (updatedTelArray.length === 10) {
	// 			event.preventDefault()
	// 			return
	// 		}

	// 		if (event.key === 'Backspace' && telArray.length > 1) {
	// 			updatedTelArray.pop()
	// 			setTelArray(updatedTelArray)
	// 		}

	// 		if (event.key === 'Backspace' && telArray.length === 1) {
	// 			setTelArray(['+998-'])
	// 			telInputRef.current.value = telArray.join('')
	// 		}

	// 		if (/\D/.test(event.key)) {
	// 			if (event.key !== 'Backspace') {
	// 				event.preventDefault()
	// 			}
	// 		}

	// 		if (telInputRef.current?.value.length === 17) {
	// 			if (submitBtnRef.current) {
	// 				submitBtnRef.current.disabled = false
	// 			}
	// 		} else {
	// 			// @ts-ignore
	// 			submitBtnRef.current.disabled = true
	// 		}

	// 		console.log(updatedTelArray)

	// 		telInputRef.current.value = telArray.join('')
	// 	}
	// }

	return (
		<>
			<div
				className={classNames(styles.modal, styles.modalSmall, {
					[styles.modalActive]: isAuthModalOpen,
				})}
			>
				<button
					className={styles.modalClose}
					type='button'
					onClick={modalCloseHandler}
				>
					<img src='modal_close.svg' alt='Close button' />
				</button>
				<h2 className={styles.modalTitle}>Вход на сайт</h2>
				<p className={styles.modalDescription}>
					Подарим подарок на день рождения, сохраним адрес доставки и расскажем об
					акциях
				</p>
				<form action='#' className={styles.modalForm}>
					<div className={styles.modalFormContainer}>
						<div className={styles.inputLabels}>
							<label htmlFor=''>
								<span className={styles.labelText}>Страна</span>

								{/* <button type='button' className={styles.countrySelectButton}>
									Uzb
								</button> */}
							</label>
							<label htmlFor=''>
								<span className={styles.labelText}>Номер телефона</span>
							</label>
						</div>
						<div className={styles.telInputContainer}>
							<label>
								{/* <span className={styles.labelText}>Номер телефона</span> */}
								<PhoneInput
									placeholder='Enter phone number'
									value={value}
									// @ts-ignore
									onChange={setValue}
									defaultCountry='UZ'
									limitMaxLength
								/>
							</label>
						</div>
					</div>
					<input
						type='button'
						value='Выслать код'
						className={styles.submitButton}
						ref={submitBtnRef}
						disabled={!isValid}
					/>
				</form>
			</div>
			<div
				className={styles.modalBg}
				ref={modalBgRef}
				onClick={modalCloseHandler}
			/>
		</>
	)
}
