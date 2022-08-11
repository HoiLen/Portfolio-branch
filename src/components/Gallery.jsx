import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getImageById, IMAGES } from '../images'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';

const Gallery = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	let { id } = useParams();
	let image = getImageById(Number(id));

	if (!image) return null;

	else return (
		<div>
			<h2>Gallery</h2>
			<div
				style={{
					margin: "auto 0",
					display: "flex",
					justifyContent: "center",
					gap: "24px",
				}}
			>
				{IMAGES.map((image) => (
					<Link
						key={image.id}
						to={`/img/${image.id}`}
					>
						<Button onClick={handleOpen}>
							<img
								style={{
									borderRadius: "8px",
								}}
								width={200}
								height={200}
								src={image.src}
								alt={image.title}
							/>
						</Button>

					</Link>
				))}
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<Box style={{
						padding: '40px',
						display: "flex",
						flexDirection: 'column',
						backgroundColor: '#fff',
						color: '#000',
						// border: '2px solid #000',
						boxShadow: 24,
						p: 4,
					}}>
						<p>{image.title}</p>
						<img
							width={400}
							height={400}
							src={image.src}
							alt={image.title}
							style={{
								borderRadius: "8px",
							}}
						/>
						<Button
							onClick={handleClose}
							variant='outlined'
							color='primary'
							style = {{
								margin: '8px 50px',
							}}
							>
								Close
							</Button>
					</Box>

				</Dialog>


			</div>
		</div>
	)
}

export default Gallery