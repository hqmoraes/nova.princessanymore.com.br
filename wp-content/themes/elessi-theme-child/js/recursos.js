document.getElementById('nasa-input-mobile-search').placeholder = 'Digite aqui o produto ou categoria';
var rp = document.querySelector('.nasa-bot-icons.nasa-bot-icon-shop').innerHTML;
document.querySelector('.nasa-bot-icons.nasa-bot-icon-shop').innerHTML = rp.replace('Shop','Loja');

var rp = document.querySelector('.nasa-bot-icons.nasa-bot-icon-categories').innerHTML;
document.querySelector('.nasa-bot-icons.nasa-bot-icon-categories').innerHTML = rp.replace('Categories','Categorias');

var rp = document.querySelector('.nasa-bot-icons.nasa-bot-icon-search').innerHTML;
document.querySelector('.nasa-bot-icons.nasa-bot-icon-search').innerHTML = rp.replace('Search','Pesquisar');

var rp = document.querySelector('.nasa-bot-icons.nasa-bot-icon-wishlist').innerHTML;
document.querySelector('.nasa-bot-icons.nasa-bot-icon-wishlist').innerHTML = rp.replace('Wishlist','Favoritos');
jQuery('.nasa-tit-wishlist.nasa-sidebar-tit.text-center')[0].innerText = 'Favoritos';

document.querySelector('.nasa-tit-filter-cat').innerText = 'Categorias';
document.querySelector('.nasa-tit-viewed.nasa-sidebar-tit.text-center').innerText = 'Visualizações Recentes';