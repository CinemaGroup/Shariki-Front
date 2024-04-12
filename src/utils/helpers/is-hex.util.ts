export const isHex = (text: string) => {
	const hexRegex = /^[0-9A-Fa-f]+$/
	console.log(hexRegex.test(text))
	return hexRegex.test(text)
}
