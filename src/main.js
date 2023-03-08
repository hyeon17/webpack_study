import './main.scss';
import logoImage from './assets/logo.png';
console.log('Hello World');

const imgEl = document.createElement('img');
imgEl.src = logoImage;
document.body.append(imgEl);