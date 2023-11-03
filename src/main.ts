import './style.scss'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TailwindButtonExample } from './components/TailwindButtonExample';
import { ColorBallExample } from './components/ColorBallExample';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

${Header()} 
${TailwindButtonExample()}
${ColorBallExample()}
${Footer()}

`