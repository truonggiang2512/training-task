export interface UserLoginFrm {
  email: string;
  password: string;
}

export interface Category {
  id: number;
  name: string;
  parentId: number;
  subcategories?: Category[];
}
export interface Product {
  id: number;
  name: string;
  des: string;
  image: string;
  price: number;
  brand: string;
  categoryId: number;
  subcategoryId?: number;
}
