// Datos de productos para hombres
const maleProducts = [
  { name: "Camisas de algodón y lino para hombre", image: "https://via.placeholder.com/300", price: "$18.69", description: "Estilo casual, manga larga, estilo Henley, hippie, playa, camisetas de vacaciones con bolsillo", shipment: "Envío gratis", ratings: "★★★★☆", amount: "7.670" },
  { name: "Camisas casuales de manga corta para hombre, con botones y bolsillo", image: "https://via.placeholder.com/300", price: "$27.22", description: "Fabricada con una suave mezcla de algodón, esta camisa ligera y transpirable es perfecta para cualquier ocasión.", shipment: "Envío gratis", ratings: "★★★★★", amount: "8.822" },
  { name: "Chaquetas ligeras para hombre", image: "https://via.placeholder.com/300", price: "$30.39", description: "Chaquetas ligeras, cortavientos de verano, abrigo de moda para golf al aire libre para hombres", shipment: "Envío gratis", ratings: "★★★☆☆", amount: "2.643" },
  { name: "Camisas de vestir para hombre, atléticas, ajustadas, de manga larga", image: "https://via.placeholder.com/300", price: "$15.55", description: "Su diseño ajustado y su cuello abatible añaden un toque de sofisticación a cualquier ocasión, ya sea formal o informal.", shipment: "", ratings: "★★★★☆", amount: "5.432" }
];

// Datos de productos para mujeres
const femaleProducts = [
  { name: "Camiseta Gráfica de Verano para Mujer con Estampado de Libélula", image: "https://via.placeholder.com/300", price: "$49.99", description: "Fabricada con una suave mezcla de algodón, esta camiseta de manga corta ofrece comodidad y transpirabilidad durante todo el día.", shipment: "Envío gratis", ratings: "★★★★★", amount: "14.038" },
  { name: "Camiseta de Manga Corta con Cuello en V para Mujer", image: "https://via.placeholder.com/300", price: "$30.39", description: "Fabricada con una mezcla de poliéster, rayón y licra, esta camiseta ofrece suavidad, ligereza y elasticidad para un ajuste cómodo y sin arrugas. ", shipment: "Envío gratis", ratings: "★★★★☆", amount: "6.802" },
  { name: "Camiseta de Lunares para Mujer - Estilo Casual y Encantador", image: "https://via.placeholder.com/300", price: "$27.22", description: "El bonito estampado de lunares y el clásico cuello redondo añaden un toque encantador y moderno a tu estilo.", shipment: "Envío gratis", ratings: "★★★★☆", amount: "7.376" },
  { name: "Sudaderas con capucha de gran tamaño para mujer", image: "https://via.placeholder.com/300", price: "$19.50", description: "Sudaderas de forro polar, suéteres de manga larga, ropa de otoño con bolsillo", shipment: "Envío gratis", ratings: "★★★☆☆", amount: "4.332" }
];

// Datos de carrusel de productos
const carouselProducts = [
  { image: "https://via.placeholder.com/1344x380", name: "Producto 1" },
  { image: "https://via.placeholder.com/1344x380", name: "Producto 2" },
  { image: "https://via.placeholder.com/1344x380", name: "Producto 3" },
];

// Datos de carrusel de productos para "Más productos"
const moreProducts = [
  { image: "https://via.placeholder.com/300", name: "Más Producto 4" },
  { image: "https://via.placeholder.com/300", name: "Más Producto 5" },
  { image: "https://via.placeholder.com/300", name: "Más Producto 6" },
  { image: "https://via.placeholder.com/300", name: "Más Producto 7" },
  { image: "https://via.placeholder.com/300", name: "Más Producto 8" },
];

// Datos de carrusel de productos para "Ofertas del día"
const dailyDealsProducts = [
  { image: "https://via.placeholder.com/300", name: "Oferta del día 9" },
  { image: "https://via.placeholder.com/300", name: "Oferta del día 10" },
  { image: "https://via.placeholder.com/300", name: "Oferta del día 11" },
  { image: "https://via.placeholder.com/300", name: "Oferta del día 12" },
  { image: "https://via.placeholder.com/300", name: "Oferta del día 13" },
];

// Función para cargar los productos en la galería
function loadProducts(products, galleryId) {
  const gallery = document.getElementById(galleryId);
  gallery.innerHTML = "";
  products.forEach(product => {
    gallery.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <a href="#" class="text-decoration-none"><img src="${product.image}" class="card-img-top" alt="${product.name}"></a>
            <div class="card-body">
              <h5 class="card-title text-limit"><a href="#" class="text-decoration-none text-dark link-primary">${product.name}</a></h5>
              <p class="card-text text-limit">${product.description}</p>
              <div class="d-flex align-items-center mb-2">
                <div class="text-warning me-2">${product.ratings}</div>
                <div><span class="text-secondary">(${product.amount})</span></div>
              </div>
              <p class="card-text fw-semibold">${product.price}</p>
              <p class="card-text fw-bold text-success">${product.shipment}</p>
            </div>
          </div>
        </div>
      `;
  });
}

// Función para cargar los productos en el carrusel
function loadCarouselProducts() {
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.innerHTML = "";
  carouselProducts.forEach((product, index) => {
    const activeClass = index === 0 ? 'active' : '';
    carouselInner.innerHTML += `
      <div class="carousel-item ${activeClass}">
        <img src="${product.image}" class="d-block w-100" alt="${product.name}">
      </div>
    `;
  });
}

// Función para cargar los productos en el carrusel
function loadProductsCarousel(products, carouselId) {
  const productCarousel = $(`#${carouselId}`);
  productCarousel.empty(); // Vacía el carrusel antes de cargar nuevos productos
  products.forEach(product => {
    productCarousel.append(`
      <div class="item">
        <img src="${product.image}" class="rounded" alt="${product.name}">
      </div>
    `);
  });

  // Inicializar el carrusel de Owl Carousel
  productCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });
}

// Cargar productos para hombres y mujeres al cargar la página
window.addEventListener("load", function () {
  loadProducts(maleProducts, "gallery-male");
  loadProducts(femaleProducts, "gallery-female");
  loadCarouselProducts();
  loadProductsCarousel(moreProducts, 'more-products-carousel');
  loadProductsCarousel(dailyDealsProducts, 'daily-deals-carousel');
});