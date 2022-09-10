import { Modal, ProductCard, ProductsWrapper } from 'components'
import { PIZZAS } from 'constants/dataBase'
import { useState } from 'react'

export const HomePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	return (
		<>
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<ProductsWrapper>
				{PIZZAS.map(product => (
					<ProductCard
						product={product}
						key={product.id}
						setIsModalOpen={setIsModalOpen}
					/>
				))}
			</ProductsWrapper>
		</>
	)
}
