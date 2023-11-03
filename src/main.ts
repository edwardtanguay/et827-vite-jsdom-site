import './style.scss'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TailwindButtonExample } from './components/TailwindButtonExample';
import { ColorBallExample } from './components/ColorBallExample';
import { Wrapper } from './components/Wrapper';
import { Employees } from './components/Employees';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

${Header()} 
${Wrapper('Employees', Employees())}
${Wrapper('Tailwind button', TailwindButtonExample())}
${Wrapper('Color balls', ColorBallExample())}
${Footer()}

`