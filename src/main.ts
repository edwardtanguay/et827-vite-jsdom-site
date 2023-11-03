import './style.scss'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<div>
 ${Header()} 
 <div class="p-4">
	<button class="btn-primary">Submit</button>
 </div>
${Footer()}
	</div>
`