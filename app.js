const state={lang:'en',products:[
{title:{en:'Minimalist White Sneakers',es:'Zapatillas blancas minimalistas'},desc:{en:'Everyday leather-look sneakers.',es:'Zapatillas estilo cuero para el día a día.'},img:'https://m.media-amazon.com/images/I/61bL1k5tMZL._AC_UL480_.jpg',url:'https://www.amazon.es/s?k=minimalist+white+sneakers&tag=trendifywor0f-21'},
{title:{en:'Carry-on Suitcase',es:'Maleta de cabina'},desc:{en:'Lightweight ABS with TSA lock.',es:'ABS ligero con cierre TSA.'},img:'https://m.media-amazon.com/images/I/71m5RHBjObL._AC_UL480_.jpg',url:'https://www.amazon.es/s?k=carry+on+suitcase&tag=trendifywor0f-21'},
{title:{en:'Wireless Earbuds',es:'Auriculares inalámbricos'},desc:{en:'Bluetooth 5.3, noise reduction.',es:'Bluetooth 5.3 con reducción de ruido.'},img:'https://m.media-amazon.com/images/I/61cgCkZsD-L._AC_UL480_.jpg',url:'https://www.amazon.es/s?k=wireless+earbuds&tag=trendifywor0f-21'}
]};
function render(){const c=document.getElementById('products');c.innerHTML=state.products.map(p=>`
<div class='card'>
<img src='${p.img}' alt='${p.title[state.lang]}'>
<h3>${p.title[state.lang]}</h3>
<p>${p.desc[state.lang]}</p>
<a href='${p.url}' target='_blank'>Amazon</a>
</div>`).join('');}
function toggleLang(){state.lang=state.lang==='en'?'es':'en';render();}
render();
