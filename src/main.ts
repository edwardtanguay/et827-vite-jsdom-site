import './style.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div>
 ${Header()} 
<div>content of site</div> 
${Footer()}
  </div>
`