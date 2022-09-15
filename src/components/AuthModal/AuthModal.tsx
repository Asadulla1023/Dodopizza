import classNames from 'classnames'
import { FormEvent, useRef } from 'react'
// @ts-ignore
import styles from './AuthModal.module.scss'

export interface IAuthModalProps {
	isAuthModalOpen: boolean
	setIsAuthModalOpen: Function
}

export const AuthModal: React.FC<IAuthModalProps> = ({
	isAuthModalOpen,
	setIsAuthModalOpen,
}: IAuthModalProps) => {
	const telInputRef = useRef<HTMLInputElement>(null)

	const modalCloseHandler = (): void => {
		setIsAuthModalOpen(false)
	}

	const phoneNumberInputHandler = (event: KeyboardEvent) => {
		if (telInputRef.current) {
			// @ts-ignore
			if (telInputRef.current.value.length <= 4) {
				telInputRef.current.value = '+998'
			}

			if (telInputRef.current.value.length === 13) {
				if (event.key !== 'Backspace') {
					event.preventDefault()
				}
			}
		}

		// @ts-ignore
		if (/\D/.test(event.key)) {
			if (event.key !== 'Backspace') {
				event.preventDefault()
			}
		}
	}

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
						<div className={styles.countrySelectButtonContainer}>
							<label>
								<span className={styles.labelText}>Страна</span>
								<button type='button' className={styles.countrySelectButton}>
									Uzb
								</button>
							</label>
						</div>
						<div className={styles.telInputContainer}>
							<label>
								<span className={styles.labelText}>Номер телефона</span>
								<input
									type='tel'
									onKeyDown={e => {
										// @ts-ignore
										phoneNumberInputHandler(e)
									}}
									placeholder='+998 99-999-99-99'
									className={styles.telInput}
									ref={telInputRef}
								/>
							</label>
						</div>
					</div>
					<input
						type='submit'
						value='Выслать код'
						className={styles.submitButton}
						disabled
					/>
				</form>
			</div>
			<div className={styles.modalBg} />
		</>
	)
}
