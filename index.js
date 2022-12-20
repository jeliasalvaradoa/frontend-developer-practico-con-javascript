const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoCompra = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCart');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoCompra.addEventListener('click', toggleCarritoCompra);
productDetailCloseIcon.addEventListener('click', closeProductoDetalles);
function toggleDesktopMenu() { 
    // quita o pone la clase inactive para que aparezca el desktop-menu
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }
   
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    closeProductoDetalles();
}

function toggleCarritoCompra(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

   // const isProductDetailClosed = productDetail.classList.contains('inactive');
    //if (!isProductDetailClosed){
    //    productDetail.classList.add('inactive');
   // }

    shoppingCart.classList.toggle('inactive');
    closeProductoDetalles();
    
}

function openProductoDetalles(){
    shoppingCart.classList.add('inactive');
    productDetail.classList.remove('inactive');
}
function closeProductoDetalles(){
   productDetail.classList.add('inactive');
}

const listaProducto = [];
listaProducto.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

listaProducto.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
listaProducto.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function obtenerProducto(lista){

    for (producto of lista){
    const datoProducto = document.createElement('div');
    datoProducto.classList.add('product-card');
    
    const imgProducto = document.createElement('img');
    imgProducto.setAttribute('src', producto.image);
    imgProducto.addEventListener('click', openProductoDetalles);
    
    const infoProducto = document.createElement('div');
    infoProducto.classList.add('product-info');

    const infoProductoDiv = document.createElement('div');
    
    const  precioProducto = document.createElement('p');
    precioProducto.innerText = '$' + producto.price;
    const nombreProducto = document.createElement('p');
    nombreProducto.innerText = producto.name;

    infoProductoDiv.appendChild(precioProducto);
    infoProductoDiv.appendChild(nombreProducto);    

    const productoFigure = document.createElement('figure');
    const imagenCarrito = document.createElement('img');
    imagenCarrito.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productoFigure.appendChild(imagenCarrito);

    infoProducto.appendChild(infoProductoDiv);
    infoProducto.appendChild(productoFigure);

    datoProducto.appendChild(imgProducto);
    datoProducto.appendChild(infoProducto);
    cardsContainer.appendChild(datoProducto);

    }

}

obtenerProducto(listaProducto);