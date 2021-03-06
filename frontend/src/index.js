import HomeScreen from './srceens/HomeScreen';
import ProductScreen from './srceens/ProductScreen';
import { parseRequestUrl } from './utils';
import Error404Screen from './srceens/Error404Screen';

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
};
const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
