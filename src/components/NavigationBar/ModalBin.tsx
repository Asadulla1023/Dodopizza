import './Modal.scss'

// @ts-ignore

import close from './close.png'

export function Modal({ setOpenModal }: any) {
	return (
		<div className='modalBackground'>
			<div className='modalContainer'>
				<div className='center'>
					<img
						src='https://cdn.dodostatic.net/site-static/dist/121df529925b0f43cc73.svg'
						width='314px'
						alt='24uht2iu'
					/>
                    <button type='button' onClick={()=>{
                        setOpenModal(false)
                    }}>
                        <img src={close} className="close" alt={close} />
                    </button>
				</div>
			</div>
		</div>
	)
}
