let IMAGES = [
	{
		id:0,
		title: "random0",
		src: "https://picsum.photos/id/0/200/200/"
	},
	{
		id:1,
		title: "random1",
		src: "https://picsum.photos/id/1002/200/200/"
	},
	{
		id:2,
		title: "random2",
		src: "https://picsum.photos/id/1000/200/200/"
	},
	{
		id:3,
		title: "random3",
		src: "https://source.unsplash.com/random/"
	},

];

function getImageById(id: number){
	return IMAGES.find((image) => image.id === id);
}

export { IMAGES, getImageById };