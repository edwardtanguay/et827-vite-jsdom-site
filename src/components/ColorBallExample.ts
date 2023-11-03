import colors from '../data/colors.json';

export const ColorBallExample = () => {
	return `
	${colors.map(color => {
	return `<div style="background-color: ${color}" class="ball">${color}</div>`
}).join('')}

	`
}