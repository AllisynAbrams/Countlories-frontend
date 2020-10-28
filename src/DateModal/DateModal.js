import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DateModal = ({ isDateToggled, setDateToggle, setDayToggle, children }) => {
	return (
		<AnimatePresence>
			{isDateToggled && (
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
						<div className='date-form'>
							<p
								className='form-d'
								onClick={() => {
									setDayToggle(true);
									setDateToggle(false);
								}}>X</p>
							{children}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default DateModal;
