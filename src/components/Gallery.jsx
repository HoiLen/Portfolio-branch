import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IMAGES } from '../images'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Gallery = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	let { id } = useParams();

	return (
		<div>
			<h2>Gallery</h2>
			<div style={{
				margin: "auto 0",
				display: "flex",
				justifyContent: "center",
				gap: "24px",
			}}>
				{IMAGES.map((image) => (
					<Link
						key={image.id}
						to={`/img/${image.id}`}
					>
						<Button onClick={handleOpen}>
							<img
								width={200}
								height={200}
								src={image.src}
								alt={image.title}
								style={{
									borderRadius: "8px",
								}}
							/>
						</Button>

					</Link>
				))}
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
						backgroundColor: '#000',
						color: '#fff',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
					}}>
						<img
							// width={400}
							// height={400}
							src={IMAGES[id].src}
							alt={IMAGES[id].title}
							style={{
								margin: "16px 0",
								borderRadius: "8px",
								width: "100%",
								height: "auto",
							}}
						/>
						<p>
							{id}
						</p>
					</Box>

				</Modal>


			</div>
		</div>
	)
}

export default Gallery