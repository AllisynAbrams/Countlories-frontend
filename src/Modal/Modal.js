import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Modal = ({ isToggled, setToggle, setDayToggle, children }) => {
	return (
		<AnimatePresence>
			{isToggled && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						style={{
							position: 'fixed',
							top: '200px',
							width: '75%',
							left: '50%',
							transform: 'translate3d(-50%, 0,0)',
						}}>
						<div className='form'>
							<p
								className='form-x'
								onClick={() => {
									setDayToggle(true)
									setToggle(false)
								}}>
								X
							</p>
							{children}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default Modal
