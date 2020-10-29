import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Lien = ({ setToggle, lien, setLien, children }) => {
	return (
		<AnimatePresence>
			{lien && (
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
							className='lien'
							onClick={() => {
								setToggle(true)
								setLien(false)
							}}>
							{children}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default Lien
