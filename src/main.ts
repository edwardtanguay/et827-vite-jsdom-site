import './style.scss'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div>
 ${Header()} 
 <button class="btn-primary">Submit</button>
${Footer()}
  </div>
`