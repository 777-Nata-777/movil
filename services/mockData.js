const products = [
    {
      id: '1',
      name: 'Naruto Vol. 1',
      price: 9.99,
      image: 'https://via.placeholder.com/150',
      description: 'El primer volumen del popular manga Naruto.',
      featured: true,
    },
    {
      id: '2',
      name: 'Attack on Titan Vol. 1',
      price: 12.99,
      image: 'https://via.placeholder.com/150',
      description: 'El inicio de la épica saga de Attack on Titan.',
      featured: true,
    },
    {
      id: '3',
      name: 'Figura de Goku',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
      description: 'Figura de acción de Son Goku de Dragon Ball Z.',
      featured: false,
    },
    // Agrega más productos aquí
  ];
  
  export const getAllProducts = () => products;
  export const getFeaturedProducts = () => products.filter(p => p.featured);
  export const getProductById = (id) => products.find(p => p.id === id);