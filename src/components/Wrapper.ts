export const Wrapper = (title: string, html:string) => {
	return `
	<fieldset class="border-slate-100 border-2 rounded-lg p-3 mb-3">
	<legend class="text-yellow-200">${title}</legend>
${html}
	</fieldset>
	`
}