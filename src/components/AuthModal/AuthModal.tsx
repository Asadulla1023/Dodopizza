import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'
// @ts-ignore
import styles from './AuthModal.module.scss'

import PhoneInput from 'react-phone-input-2'
import axios from 'axios'

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

	const modalCloseHandler = (): void => {
		setIsAuthModalOpen(false)
	}

	const blockZoomInHandler = (e: any): void => {
		if (e.ctrlKey) e.preventDefault()
	}

	const isTelValid = (tel: string): boolean => {
		if (tel.length === 12 && tel.startsWith('998')) {
			return true
		}
		return false
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

		if (submitBtnRef.current) {
			if (isTelValid(value)) {
				submitBtnRef.current.disabled = false
			} else {
				submitBtnRef.current.disabled = true
			}
		}
	})

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
								<span className={styles.labelText}>Номер телефона</span>
							</label>
						</div>
						<div className={styles.telInputContainer}>
							<label>
								<PhoneInput
									placeholder='+998-99-999-99-99'
									value={value}
									onChange={setValue}
									country='uz'
									masks={{ uz: '..-...-..-..' }}
									isValid={isTelValid}
								/>
							</label>
						</div>
					</div>
					<input
						type='button'
						value='Выслать код'
						className={styles.submitButton}
						ref={submitBtnRef}
						onClick={(e): void => {
							e.preventDefault()
							axios
								.post('http://localhost:8002', { tel: value })
								.then(() => {})
								.catch(err => {
									console.log(err)
								})
						}}
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
