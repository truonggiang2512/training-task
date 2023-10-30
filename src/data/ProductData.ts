import { Category, Product } from "../Utils/model";

const allProduct: Product[] = [
  {
    id: 101,
    name: "Adidas Prophere",
    des: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement",
    image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    price: 350,
    brand: "Adidas",
    categoryId: 6,
  },
  {
    id: 102,
    name: "Adidas Prophere Black White",
    des: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
    image: "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
    price: 450,
    brand: "Adidas",
    categoryId: 7,
  },
  {
    id: 103,
    name: "Adidas Prophere Customize",
    des: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement",
    image: "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
    price: 375,
    brand: "Adidas",
    categoryId: 6,
  },
  {
    id: 104,
    name: "Adidas Super Star Red",
    des: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement",
    image: "https://shop.cyberlearn.vn/images/adidas-super-star-red.png",
    price: 550,
    brand: "Adidas",
    categoryId: 7,
  },
  {
    id: 105,
    name: "Adidas Swift Run",
    des: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement",
    image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
    price: 350,
    brand: "Adidas",
    categoryId: 6,
  },
  {
    id: 106,
    name: "Adidas Tenisky Super Star",
    des: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement",
    image: "https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png",
    price: 250,
    brand: "Adidas",
    categoryId: 7,
  },
  {
    id: 107,
    name: "Adidas Ultraboost 4",
    des: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement",
    image: "https://shop.cyberlearn.vn/images/adidas-ultraboost-4.png",
    price: 350,
    brand: "Adidas",
    categoryId: 7,
  },
  {
    id: 108,
    name: "Adidas Yeezy 35",
    des: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement",
    image: "https://shop.cyberlearn.vn/images/adidas-yeezy-350.png",
    price: 470,
    brand: "Adidas",
    categoryId: 6,
  },
  {
    id: 109,
    name: "Nike Adapt BB",
    des: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight,",
    image: "https://shop.cyberlearn.vn/images/nike-adapt-bb.png",
    price: 480,
    brand: "Nike",
    categoryId: 8,
  },
  {
    id: 110,
    name: "Nike Air Max 97",
    des: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight,",
    image: "https://shop.cyberlearn.vn/images/nike-air-max-97.png",
    price: 440,
    brand: "Nike",
    categoryId: 9,
  },
  {
    id: 111,
    name: "Nike Air Max 97 Blue",
    des: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight,",
    image: "https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png",
    price: 350,
    brand: "Nike",
    categoryId: 8,
  },
  {
    id: 112,
    name: "Nike Air Max 270 React",
    des: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight,",
    image: "https://shop.cyberlearn.vn/images/nike-air-max-270-react.png",
    price: 455,
    brand: "Nike",
    categoryId: 9,
  },
  {
    id: 113,
    name: "Nike Flyknit",
    des: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight,",
    image: "https://shop.cyberlearn.vn/images/nike-flyknit.png",
    price: 260,
    brand: "Nike",
    categoryId: 9,
  },
  {
    id: 114,
    name: "Nike React Element",
    des: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight,",
    image: "https://shop.cyberlearn.vn/images/nike-react-element.png",
    price: 550,
    brand: "Nike",
    categoryId: 8,
  },
  {
    id: 115,
    name: "Nike Shox TL",
    des: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight,",
    image: "https://shop.cyberlearn.vn/images/nike-shox-tl.png",
    price: 520,
    brand: "Nike",
    categoryId: 8,
  },
  {
    id: 116,
    name: "Nike SP Dunk",
    des: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight,",
    image: "https://shop.cyberlearn.vn/images/nike-sp-dunk.png",
    price: 350,
    brand: "Nike",
    categoryId: 9,
  },
  {
    id: 117,
    name: "Van Old School",
    des: "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles",
    image: "https://shop.cyberlearn.vn/images/van-old-school.png",
    price: 400,
    brand: "Van",
    categoryId: 10,
  },
  {
    id: 118,
    name: "Van Black",
    des: "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles",
    image: "https://shop.cyberlearn.vn/images/vans-black-black.png",
    price: 450,
    brand: "Van",
    categoryId: 11,
  },
  {
    id: 119,
    name: "Converse Chuck Taylor",
    des: "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles",
    image: "https://shop.cyberlearn.vn/images/converse-chuck-taylor.png",
    price: 450,
    brand: "Converse",
    categoryId: 12,
  },
  {
    id: 119,
    name: "Nike Zoom Mercurial Vapor 15 Academy XXV MG",
    des: "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/af670b24-8fc2-4c2d-8299-51a9ef339b43/zoom-mercurial-vapor-15-academy-xxv-mg-multi-ground-football-boot-6QF20M.png",
    price: 490,
    brand: "Nike",
    categoryId: 8,
  },
  {
    id: 120,
    name: "Nike Renew Ride 3",
    des: "The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/c547d70f-4867-4260-9d44-4efce7c65952/renew-ride-3-road-running-shoes-fzS091.png",
    price: 560,
    brand: "Nike",
    categoryId: 9,
  },
];

const categories: Category[] = [
  {
    id: 1,
    name: "Adidas",
    parentId: null,
  },
  {
    id: 2,
    name: "Nike",
    parentId: null,
  },
  {
    id: 3,
    name: "Van",
    parentId: null,
  },
  {
    id: 4,
    name: "Converse",
    parentId: null,
  },

  { id: 6, name: "Adidas Men's Shoes", parentId: 1 },
  { id: 7, name: "Adidas Women's Shoes", parentId: 1 },
  { id: 8, name: "Nike Men's Shoes", parentId: 2 },
  { id: 9, name: "Nike Women's Shoes", parentId: 2 },
  { id: 10, name: "Van Men's Shoes", parentId: 3 },
  { id: 11, name: "Van Women's Shoes", parentId: 3 },
  { id: 12, name: "Converse Men's Shoes", parentId: 4 },
  { id: 13, name: "Converse Women's Shoes", parentId: 4 },
];
export { allProduct, categories };
