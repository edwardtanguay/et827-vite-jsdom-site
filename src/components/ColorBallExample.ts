const colors = ['red', 'pink', 'blue', 'orange', 'green', 'purple', 'orchid'];

export const ColorBallExample = () => {
	return `
	${colors.map(color => {
	return `<div style="background-color: ${color}" class="ball">${color}</div>`
}).join('')}

	`
}