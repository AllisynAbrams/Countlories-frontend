import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// using deconstructed props from parent component Team
// children is a prop from Framer Motion to know what is wrapped inside the AnimatePresence component
const Jake = ({ setToggle, jake, setJake, children }) => {
	return (
		<AnimatePresence>
			{jake && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						style={{
							position: 'fixed',
							top: '100px',
							width: '95%',
							left: '50%',
							transform: 'translate3d(-50%, 0,0)',
						}}>
						<div
							className='jake'
							onClick={() => {
								setToggle(true)
								setJake(false)
							}}>
							{children}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default Jake
