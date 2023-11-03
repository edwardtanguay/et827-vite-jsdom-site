export const Wrapper = (html:string) => {
	return `
	<fieldset class="border-slate-100 border-2 rounded-lg p-3 mb-3">
${html}
	</fieldset>
	`
}