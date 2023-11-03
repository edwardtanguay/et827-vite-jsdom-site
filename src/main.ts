import './style.scss'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TailwindButtonExample } from './components/TailwindButtonExample';
import { ColorBallExample } from './components/ColorBallExample';
import { Wrapper } from './components/Wrapper';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

${Header()} 
${Wrapper('Tailwind button', TailwindButtonExample())}
${Wrapper('Color balls', ColorBallExample())}
${Footer()}

`