import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom'
import { IMAGES } from '../images'

const Modalc = () => {

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	let { id } = useParams();

	return (
		<div>
			<Button onClick={handleOpen}>
				Open Modal
			</Button>

			<Modal
				open={open}
				onClose={handleClose}
				
			>
				<Box style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 400,
					backgroundColor: 'black',
					color: '#fff',
					border: '2px solid #000',
					boxShadow: 24,
					p: 4,
				}}>
					<h1>
						モーダルだよ
					</h1>
					<p>
						{id}
					</p>

					
				</Box>

			</Modal>
		</div>
	)
}

export default Modalc;