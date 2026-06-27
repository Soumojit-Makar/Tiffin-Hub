export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "thali" | "combo" | "beverage" | "snack";
  emoji: string;
  popular?: boolean;
  veg: boolean;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}
export interface OrderItem {
  mealType: string;
  quantity: number;
}
export interface OrderFormData {
  customerName: string;
  mobile: string;
  address: string;
  items: OrderItem[];
  deliveryTime: string;
  notes: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
}