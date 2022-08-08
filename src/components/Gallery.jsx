import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../images'

const Gallery = () => {
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
						<img
							width={200}
							height={200}
							src={image.src}
							alt={image.title}
							style={{
								borderRadius: "8px",
							}}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Gallery