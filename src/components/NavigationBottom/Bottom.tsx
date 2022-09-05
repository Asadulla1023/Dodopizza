import { useState } from 'react'

// @ts-ignore

import styles from './Bottom.module.scss'

export const Bottom: React.FC<any> = () => {
	const [money, setMoney] = useState(357_498_600)

	const changeStatus = () => {
		setMoney(money + 357_498_600)
	}

	return (
		<div className={styles.bottom}>
			<div className={styles.cont5}>
				<div className={styles.bottomHead}>
					<div className={styles.leftside}>
						<div className={styles.left}>
							<h3>Додо Пицца</h3>
							<div className={styles.navigators}>
								<a href='/about'>О нас</a>
								<a href='https://dodobrands.io/ru/post/dodobook1-0/'>Додо-книга</a>
								<a href='https://sila-uma.ru/aboutdodo/'>Блог «Сила ума»</a>
								<a href='https://dodo.dev/'>Додо ИС</a>
							</div>
						</div>
						<div className={styles.left}>
							<h3>Работа</h3>
							<div className={styles.navigators}>
								<a href='https://job.dodopizza.uz/'>В пиццерии</a>
							</div>
						</div>
						<div className={styles.left}>
							<h3>Партнерам</h3>
							<div className={styles.navigators}>
								<a href='/franchise'>Франшиза</a>
								<a href='https://dodoinvest.com/'>Инвестиции</a>
								<a href='https://www.b2b-center.ru/firms/ooo-dodo-franchaizing/350318/'>
									Поставщикам
								</a>
							</div>
						</div>
						<div className={styles.left}>
							<h3>Это интересно</h3>
							<div className={styles.navigators}>
								<a href='https://bezperchatok.ru/'>Почему мы готовим без перчаток?</a>
								<a href='https://www.dodokids.ru/'>Экскурсии и мастер-классы</a>
							</div>
						</div>
					</div>
					<div className={styles.rightside}>
						<div className={styles.contact}>
							<h3>звонок бесплатный</h3>
							<a href='tel:+998712077729' className={styles.call}>
								+998712077729
							</a>
							<a href='mailto:feedback@dodopizza.uz'>feedback@dodopizza.uz</a>
						</div>
					</div>
				</div>
				<div className={styles.deliverymoney}>
					<div className={styles.status}>
						<h3> {money} сум</h3>
						<p>Выручка узбекской сети в этом месяце. В прошлом — 2 651 845 200 сум</p>
					</div>
					<div className={styles.pizzeria}>
						<h3>831 пиццерия</h3>
						<p>в 16 странах, от Великобритании до Нигерии</p>
						<button onClick={changeStatus} type='button'>
							eeded
						</button>
					</div>
				</div>
                <div className={styles.line}>.</div>
				<div className={styles.endofSite}>
					<div className={styles.lefttt}>
						<h3>Додо Пицца</h3>
						<p>© 2022</p>
						<a href='/legal'>Правовая информация</a>
					</div>
					<div className={styles.righthee}>
						<a href='https://www.facebook.com/DodoPizzaUz'>Facebook</a>
						<a href='https://www.instagram.com/dodo_pizza_uz/'>Instagram</a>
						<a href='https://www.youtube.com/dodomovie'>Youtube</a>
					</div>
				</div>
			</div>
		</div>
	)
}
