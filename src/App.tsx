import {
	NavigationBar,
	ProductCard,
	ComboCard,
	SnackCards,
	DrinksCard,
	Delivery,
	Footer,
	Bottom,
} from 'components/'
import { Modal } from 'components/ProductCard/Modal'

import { LayoutContainer } from 'components/Layout/LayoutContainer'

import { PIZZA_DATA } from 'constants/pizzas'

import { COMBO_DATA } from './constants/Combo'

import { SNACKS_DATA } from './constants/snacks'

import { DRINKS_DATA } from './constants/drinks'




function App() {
	return (
		<>
			<LayoutContainer>
				<NavigationBar />
			</LayoutContainer>
			<section>
				<div className='ProductWrapper'>
					{PIZZA_DATA.map(props => (
						<ProductCard {...props} key={Math.random()} />
					))}
				</div>
			</section>
			<section>
				<div className='ProductWrapper'>
					{COMBO_DATA.map(combos => (
						<ComboCard {...combos} key={combos.price + Math.random()} />
					))}
				</div>
			</section>
			<section>
				<div className='ProductWrapper'>
					{SNACKS_DATA.map(snacks => (
						<SnackCards
							{...snacks}
							key={
								snacks.price + Math.random() + Math.floor(Math.random() * 100000000000)
							}
						/>
					))}
				</div>
			</section>
			<section>
				<div className='ProductWrapper'>
					{DRINKS_DATA.map(drinks => (
						<DrinksCard {...drinks} key={Math.random() + 100002901299.812} />
					))}
				</div>
			</section>
			<Delivery />
			<Footer />
			<Bottom />
			<Modal />
		</>
	)
}

export default App
