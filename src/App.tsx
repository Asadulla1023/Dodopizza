import { NavigationBar, ProductCard, ComboCard, SnackCards } from 'components/'
import { LayoutContainer } from 'components/Layout/LayoutContainer'

import { PIZZA_DATA } from 'constants/pizzas'

import { COMBO_DATA } from './constants/Combo'

import { SNACKS_DATA } from './constants/snacks'

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
						<SnackCards {...snacks} key={snacks.price + Math.random() + Math.floor(Math.random() * 100000000000)}/>
					))}
				</div>
			</section>
		</>
	)
}

export default App
