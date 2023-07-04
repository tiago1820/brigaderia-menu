let menu = {
    tradicional: [
        { nombre: 'Brigadeiro Tradicional', precio: '2.00' },
        { nombre: 'Brigadeiro Beijinho', precio: '2.00' },
        { nombre: 'Brigadeiro Dark', precio: '2.50' }
    ],
    especial: [
        { nombre: 'Brigadeiro de Maracujá', precio: '3.00' },
        { nombre: 'Brigadeiro de Coffee', precio: '3.00' },
        { nombre: 'Brigadeiro Romeu & Julieta', precio: '3.00' },
        { nombre: 'Brigadeiro de Crème Brûlée', precio: '4.00' },
        { nombre: 'Brigadeiro Ninho & Nutella', precio: '4.00' }
    ]
};

function nuevoElemento(tagName, className) {
    const elemento = document.createElement(tagName);
    if (className) elemento.className = className;
    return elemento;
}

function Section(menu, categoria, icon) {
    this.elemento = nuevoElemento('section', '');
    const h2 = nuevoElemento('h2', '');
    h2.innerHTML = categoria;
    const img = nuevoElemento('img', '');
    img.setAttribute('src', `images/${icon}.png`);
    img.setAttribute('alt', 'brigadeiro icon');

    this.elemento.appendChild(h2);
    this.elemento.appendChild(img);

    for (let i = 0; i < menu.length; i++) {
        const article = nuevoElemento('article', 'item');
        const pFlavor = nuevoElemento('p', 'flavor');
        const pPrice = nuevoElemento('p', 'price');
        pFlavor.innerHTML = menu[i].nombre;
        pPrice.innerHTML = menu[i].precio;
        article.appendChild(pFlavor);
        article.appendChild(pPrice);
        this.elemento.appendChild(article);
    }

}

function Footer() {
    this.elemento = nuevoElemento('footer', '');

    const p = nuevoElemento('p', '');
    const a = nuevoElemento('a', '');
    a.innerHTML = 'Visita nuestra tienda';
    a.setAttribute('href', '#');
    a.setAttribute('target', '_blank');
    p.appendChild(a);

    const pAddress = nuevoElemento('p', 'address');
    pAddress.innerHTML = '818 Waldemar Silveira';

    this.elemento.appendChild(p);
    this.elemento.appendChild(pAddress);

}

function Main() {
    this.elemento = nuevoElemento('div', 'main');

    const h1 = nuevoElemento('h1', '');
    h1.innerHTML = 'Luana Brigadeiros';
    this.elemento.appendChild(h1);

    const p = nuevoElemento('p', 'established');
    p.innerHTML = 'Desde 2018';
    this.elemento.appendChild(p);

    const hr = nuevoElemento('hr', '');
    this.elemento.appendChild(hr);

    const section1 = new Section(menu.tradicional, 'Tradicionales', 'brigadeiro');
    this.elemento.appendChild(section1.elemento);

    const section2 = new Section(menu.especial, 'Especiales', 'brigadeiro2');
    this.elemento.appendChild(section2.elemento);

}

function Elementos() {
    this.array = [new Main(), new Footer()];
}

function Menu() {
    const areaPrincipal = document.querySelector('.menu');
    const elementos = new Elementos();
    elementos.array.forEach(el => areaPrincipal.appendChild(el.elemento));

    const hr = nuevoElemento('hr', 'bottom-line');
    areaPrincipal.insertBefore(hr, document.querySelector('footer'));
}

new Menu();