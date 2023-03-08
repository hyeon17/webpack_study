import '~/main.scss';
import logoImage from '~/assets/logo.png';
import { a } from '~/sub';

const imgEl = document.createElement('img');
imgEl.src = logoImage;
document.body.append(imgEl);

console.log(a);